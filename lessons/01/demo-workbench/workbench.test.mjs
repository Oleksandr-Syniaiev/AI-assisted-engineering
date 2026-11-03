import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { once } from 'node:events';
import { createWorkbench } from './server.mjs';
import { validateTitle } from './policy.mjs';

test('контракт заголовка: тип, пустая строка, пробелы, нормализация', () => {
  for (const value of ['', '   ', 7, null]) assert.deepEqual(validateTitle(value), { ok: false });
  assert.deepEqual(validateTitle(' Fix CI '), { ok: true, title: 'Fix CI' });
});

test('HTTP: сохранение, ошибки, перезапуск и отказ хранилища', async t => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'aae-workbench-'));
  const store = path.join(dir, 'requests.json');
  const servers = [];
  t.after(async () => {
    for (const s of servers) { s.closeAllConnections(); if (s.listening) await new Promise(resolve => s.close(resolve)); }
    await fs.rm(dir, { recursive: true }); // Только созданный этим тестом временный каталог.
  });
  async function start() {
    const s = createWorkbench(store); servers.push(s); s.listen(0, '127.0.0.1'); await once(s, 'listening');
    return [s, 'http://127.0.0.1:' + s.address().port];
  }
  let [server, url] = await start();
  const post = (url, body, type = 'application/json') => fetch(url + '/api/requests', { method: 'POST', headers: { 'Content-Type': type }, body });
  assert.equal((await fetch(url + '/')).status, 200);
  assert.deepEqual(await (await fetch(url + '/health')).json(), { status: 'ok' });
  assert.deepEqual(await (await fetch(url + '/api/requests')).json(), []);
  assert.equal((await post(url, '{')).status, 400);
  assert.equal((await post(url, '{}', 'text/plain')).status, 415);
  assert.equal((await post(url, JSON.stringify({ title: '   ' }))).status, 422);
  assert.equal((await post(url, JSON.stringify({ title: 7 }))).status, 422);
  assert.equal((await post(url, JSON.stringify({ title: 'x'.repeat(17000) }))).status, 413);
  const response = await post(url, JSON.stringify({ title: ' Fix CI ' }));
  assert.equal(response.status, 201); const saved = await response.json(); assert.equal(saved.title, 'Fix CI');
  assert.deepEqual(JSON.parse(await fs.readFile(store, 'utf8')), [saved]);
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  [server, url] = await start();
  assert.deepEqual(await (await fetch(url + '/api/requests')).json(), [saved]);
  await fs.writeFile(store, 'broken');
  assert.equal((await fetch(url + '/api/requests')).status, 500);
  assert.deepEqual(await (await fetch(url + '/health')).json(), { status: 'ok' });
});
