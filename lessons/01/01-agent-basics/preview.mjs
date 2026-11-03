import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { isLocalRequest } from '../../../scripts/local-request.mjs';

const lessonRoot = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(lessonRoot, '../../..');
const home = '/lessons/01/01-agent-basics/index.html';
const types = { '.html': 'text/html; charset=utf-8', '.md': 'text/plain; charset=utf-8', '.mjs': 'text/plain; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.pdf': 'application/pdf', '.txt': 'text/plain; charset=utf-8' };
const privateDirectories = new Set(['data', 'node_modules', '__pycache__']);
const publicPath = relative => relative.split(path.sep).every(part => part && !part.startsWith('.') && !privateDirectories.has(part.toLowerCase())) && Object.hasOwn(types, path.extname(relative).toLowerCase());
const inside = relative => relative !== '..' && !relative.startsWith('..' + path.sep) && !path.isAbsolute(relative);

export function createPreviewServer(rootDirectory = defaultRoot) {
  const root = fs.realpathSync(rootDirectory);
  return http.createServer((req, res) => {
    const reject = status => { res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('Недоступно'); };
    if (!isLocalRequest(req)) return reject(403);
    if (!['GET', 'HEAD'].includes(req.method)) return reject(405);
    try {
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      const target = path.resolve(root, '.' + (pathname === '/' ? home : pathname));
      const relative = path.relative(root, target);
      if (!inside(relative) || !publicPath(relative)) return reject(403);
      // Check the resolved file too: a public-looking symlink must not escape.
      const real = fs.realpathSync(target), realRelative = path.relative(root, real);
      if (!inside(realRelative) || !publicPath(realRelative)) return reject(403);
      if (!fs.statSync(real).isFile()) return reject(404);
      res.writeHead(200, { 'Content-Type': types[path.extname(real).toLowerCase()], 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
      if (req.method === 'HEAD') return res.end();
      const stream = fs.createReadStream(real);
      stream.on('error', () => res.destroy());
      stream.pipe(res);
    } catch (error) { reject(error instanceof URIError ? 400 : 404); }
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const server = createPreviewServer();
  server.listen(0, '127.0.0.1', () => console.log('Local: http://127.0.0.1:' + server.address().port + home));
  for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close(() => process.exit(0)));
}
