import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import { validateTitle } from './policy.mjs';

// Keep the teaching stand self-contained when its folder is copied.
function isLocalRequest(req) {
  const host = req.headers.host, origin = req.headers.origin;
  if (typeof host !== 'string' || !/^(?:localhost|127\.0\.0\.1)(?::[0-9]{1,5})?$/i.test(host)) return false;
  if (origin === undefined) return true;
  try {
    const parsed = new URL(origin);
    return parsed.origin === origin && parsed.protocol === 'http:' && parsed.host.toLowerCase() === host.toLowerCase();
  } catch { return false; }
}

const here = path.dirname(fileURLToPath(import.meta.url));
export function createWorkbench(dataFile = path.join(here, 'data', 'requests.json')) {
  // Синхронное хранилище намеренно: один процесс, маленький учебный набор.
  // Это НЕ транзакционная БД и не гарантия сохранности при аварии питания.
  function load() {
    try {
      const rows = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
      if (!Array.isArray(rows) || rows.some(r => typeof r.id !== 'string' || typeof r.title !== 'string')) throw Error('Invalid store');
      return rows;
    } catch (error) { if (error.code === 'ENOENT') return []; throw error; }
  }
  function save(rows) {
    fs.mkdirSync(path.dirname(dataFile), { recursive: true });
    fs.writeFileSync(dataFile, JSON.stringify(rows, null, 2) + '\n');
  }
  return http.createServer(async (req, res) => {
    const send = (status, value) => {
      res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
      res.end(JSON.stringify(value));
    };
    if (!isLocalRequest(req)) return send(403, { error: 'Недопустимый Host или Origin' });
    try {
      if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
        res.end(fs.readFileSync(path.join(here, 'client.html'))); return;
      }
      if (req.method === 'GET' && req.url === '/health') return send(200, { status: 'ok' });
      if (req.method === 'GET' && req.url === '/api/requests') return send(200, load());
      if (req.method !== 'POST' || req.url !== '/api/requests') return send(404, { error: 'Маршрут не найден' });
      if (req.headers['content-type']?.split(';')[0].trim() !== 'application/json') return send(415, { error: 'Нужен application/json' });
      const chunks = []; let bytes = 0;
      for await (const chunk of req) {
        bytes += chunk.length;
        if (bytes > 16_384) { send(413, { error: 'Слишком большой запрос' }); return; }
        chunks.push(chunk);
      }
      let input;
      try { input = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { return send(400, { error: 'Некорректный JSON' }); }
      const result = validateTitle(input?.title);
      if (!result.ok) return send(422, { error: 'Нужен непустой заголовок' });
      const rows = load();
      const record = { id: randomUUID(), title: result.title };
      rows.push(record); save(rows);
      send(201, record);
    } catch (error) {
      console.error('store/request failure:', error.code || error.message);
      if (!res.headersSent) send(500, { error: 'Ошибка сервера или хранилища' });
      else res.end();
    }
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const server = createWorkbench();
  server.on('error', error => { console.error(error.code, error.message); process.exitCode = 1; });
  server.listen(4317, '127.0.0.1', () => console.log('Workbench: http://127.0.0.1:4317 (Ctrl+C — остановить)'));
}
