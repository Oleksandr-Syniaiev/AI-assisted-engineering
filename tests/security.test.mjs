import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { Writable } from 'node:stream';
import { assertSafeUrl } from '../scripts/safe-url.mjs';
import { createPreviewServer } from '../lessons/01/01-agent-basics/preview.mjs';
import { createWorkbench } from '../lessons/01/demo-workbench/server.mjs';
import { fileURLToPath } from 'node:url';

const project = fileURLToPath(new URL('../', import.meta.url));
async function request(server, url, { method = 'GET', host = '127.0.0.1:4317', origin } = {}) {
  const chunks = [];
  const res = new Writable({ write(chunk, encoding, next) { chunks.push(Buffer.from(chunk)); next(); } });
  res.writeHead = (status, headers) => { res.status = status; res.headers = headers; return res; };
  const finished = new Promise((resolve, reject) => { res.on('finish', resolve); res.on('error', reject); });
  const headers = { host }; if (origin !== undefined) headers.origin = origin;
  await server.listeners('request')[0]({ url, method, headers }, res);
  await finished;
  return { status: res.status, headers: res.headers, body: Buffer.concat(chunks).toString() };
}

test('URL policy blocks executable, obfuscated, and network-relative links', () => {
  for (const url of ['javascript:alert%281%29', 'JaVaScRiPt:alert', 'data:text/html,hello', 'vbscript:msgbox', 'file:///etc/passwd', '//example.com/x', '\\example.com', 'java\tscript:alert', '\njavascript:alert']) assert.throws(() => assertSafeUrl(url), undefined, url);
  for (const url of ['https://example.com/a?x=1&y=2', 'http://localhost:4317', '../lesson/index.html#section-1', 'references.md', '#section-1']) assert.equal(assertSafeUrl(url), url);
});

test('both JavaScript renderers enforce the URL policy and preserve escaped links', () => {
  for (const name of ['lessons/01/build.mjs', 'lessons/01/01-agent-basics/build.mjs']) {
    const source = fs.readFileSync(path.join(project, name), 'utf8');
    const start = source.indexOf('const esc =');
    const end = source.indexOf(name.includes('01-agent-basics') ? 'const loopWidget' : 'function markdown', start);
    const context = vm.createContext({ assertSafeUrl });
    vm.runInContext(source.slice(start, end), context);
    assert.throws(() => vm.runInContext('inline("[x](javascript:alert%281%29)")', context));
    assert.match(vm.runInContext('inline("[x](https://example.com/?a=1&b=2)")', context), /href="https:\/\/example.com\/\?a=1&amp;b=2"/);
  }
});

test('preview serves public documents but denies private paths and foreign origins', async t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'aae-security-'));
  t.after(() => fs.rmSync(root, { recursive: true }));
  fs.writeFileSync(path.join(root, 'index.html'), '<h1>Public</h1>');
  fs.writeFileSync(path.join(root, '.env'), 'SYNTHETIC_ONLY=not-a-secret');
  fs.mkdirSync(path.join(root, 'data')); fs.writeFileSync(path.join(root, 'data', 'private.md'), 'Private');
  const server = createPreviewServer(root);
  assert.equal((await request(server, '/index.html')).body, '<h1>Public</h1>');
  assert.equal((await request(server, '/index.html', { method: 'HEAD' })).body, '');
  for (const target of ['/.git/config', '/%2egit/config', '/.env', '/data/private.md', '/unknown.bin', '/..%2f.env']) assert.equal((await request(server, target)).status, 403, target);
  assert.equal((await request(server, '/index.html', { host: 'attacker.invalid' })).status, 403);
  assert.equal((await request(server, '/index.html', { origin: 'https://attacker.invalid' })).status, 403);
  assert.equal((await request(server, '/index.html', { origin: 'http://127.0.0.1:4317' })).status, 200);
  assert.equal((await request(server, '/index.html', { method: 'POST' })).status, 405);
  assert.equal((await request(server, '/%zz')).status, 400);
  assert.equal((await request(server, '/missing.html')).status, 404);
});

test('preview refuses symlinks to private files', { skip: process.platform === 'win32' ? 'Windows symlink privilege is not assumed; exercised on Linux CI' : false }, async t => {
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'aae-link-'));
  const root = path.join(workspace, 'public'); fs.mkdirSync(root);
  t.after(() => fs.rmSync(workspace, { recursive: true }));
  fs.writeFileSync(path.join(root, '.env'), 'SYNTHETIC');
  fs.symlinkSync(path.join(root, '.env'), path.join(root, 'alias.html'));
  assert.equal((await request(createPreviewServer(root), '/alias.html')).status, 403);
  fs.writeFileSync(path.join(workspace, 'outside.md'), 'SYNTHETIC');
  fs.symlinkSync(path.join(workspace, 'outside.md'), path.join(root, 'escape.html'));
  assert.equal((await request(createPreviewServer(root), '/escape.html')).status, 403);
});

test('Workbench rejects foreign Host/Origin before touching its data file', async t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'aae-origin-'));
  t.after(() => fs.rmSync(root, { recursive: true }));
  const data = path.join(root, 'requests.json'), server = createWorkbench(data);
  assert.equal((await request(server, '/api/requests', { host: 'attacker.invalid' })).status, 403);
  assert.equal((await request(server, '/api/requests', { method: 'POST', origin: 'https://attacker.invalid' })).status, 403);
  assert.equal(fs.existsSync(data), false);
  assert.equal((await request(server, '/api/requests')).body, '[]');
});
