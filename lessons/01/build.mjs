// Собирает только Р1.02–Р1.15. Эталонный Р1.01 не изменяется.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { assertSafeUrl } from '../../scripts/safe-url.mjs';
const root = path.dirname(fileURLToPath(import.meta.url));
const dirs = fs.readdirSync(root).filter(n => /^\d\d-/.test(n)).sort();
const css = fs.readFileSync(path.join(root, dirs[0], 'reader.css'), 'utf8');
// Общие настройки чтения и печати; без интерактивных заданий первого урока.
const originalJs = fs.readFileSync(path.join(root, dirs[0], 'reader.js'), 'utf8');
const js = originalJs.slice(0, originalJs.indexOf("  if ($('step-next'))")) + '\n})();';
const esc = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
function inline(text) {
  const tokens = [];
  let s = text.replace(/`([^`]+)`/g, (_, code) => `\u0000${tokens.push('<code>' + esc(code) + '</code>') - 1}\u0000`);
  s = s.replace(/\[([^\]]+)\]\(([^\s)]+)\)/g, (_, label, url) => {
    assertSafeUrl(url);
    const href = url.replace(/^references\.md$/, 'references.html').replace(/^exercises\.md$/, 'exercises.html');
    return `\u0000${tokens.push(`<a href="${esc(href)}"${/^https?:/.test(href) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(label)}</a>`) - 1}\u0000`;
  });
  return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\u0000(\d+)\u0000/g, (_, n) => tokens[+n]);
}
function markdown(source) {
  const lines = source.replace(/\r/g, '').split('\n'), toc = [];
  let i = 0, html = '', section = false, answer = false, questions = false;
  const closeAnswer = () => { if (answer) html += '</details>'; answer = false; };
  while (i < lines.length) {
    const s = lines[i];
    if (!s.trim()) { i++; continue; }
    if (s.startsWith('```')) {
      const lang = s.slice(3), code = []; i++;
      while (i < lines.length && !lines[i].startsWith('```')) code.push(lines[i++]);
      if (i === lines.length) throw Error('Unclosed fence'); i++;
      html += `<div class="code-block"><div class="code-label">${esc(lang || 'text')}</div><pre><code>${esc(code.join('\n'))}</code></pre></div>`; continue;
    }
    const h = s.match(/^(#{1,4}) (.+)$/);
    if (h) {
      const level = h[1].length, title = h[2]; i++;
      if (level === 1) continue;
      if (level === 2) {
        closeAnswer(); if (section) html += '</section>'; section = true;
        questions = title.startsWith('Вопросы');
        const id = 'section-' + (toc.length + 1); toc.push({ id, title });
        html += `<section class="lesson-section" id="${id}"><div class="section-kicker">${String(toc.length).padStart(2, '0')}</div><h2>${inline(title)}</h2>`;
      } else if (questions && level === 3) { closeAnswer(); answer = true; html += `<details class="answer"><summary>${inline(title)}</summary>`; }
      else html += `<h${level}>${inline(title)}</h${level}>`;
      continue;
    }
    if (s.startsWith('|')) {
      const rows = []; while (i < lines.length && lines[i].startsWith('|')) rows.push(lines[i++]);
      const cells = row => row.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
      html += '<div class="table-scroll" tabindex="0" role="region" aria-label="Сравнительная таблица"><table><thead><tr>' + cells(rows[0]).map(c => '<th scope="col">' + inline(c) + '</th>').join('') + '</tr></thead><tbody>';
      for (const row of rows.slice(1).filter(r => !/^\|[\s:|-]+\|$/.test(r))) html += '<tr>' + cells(row).map(c => '<td>' + inline(c) + '</td>').join('') + '</tr>';
      html += '</tbody></table></div>'; continue;
    }
    if (/^[-*] |^\d+\. /.test(s)) {
      const ordered = /^\d+\. /.test(s), re = ordered ? /^\d+\. / : /^[-*] /, items = [];
      while (i < lines.length && re.test(lines[i])) items.push(lines[i++].replace(re, ''));
      html += `<${ordered ? 'ol' : 'ul'}>` + items.map(t => '<li>' + inline(t) + '</li>').join('') + `</${ordered ? 'ol' : 'ul'}>`; continue;
    }
    if (s.startsWith('> ')) { const items = []; while (i < lines.length && lines[i].startsWith('> ')) items.push(lines[i++].slice(2)); html += '<blockquote>' + inline(items.join(' ')) + '</blockquote>'; continue; }
    const para = [];
    while (i < lines.length && lines[i].trim() && !/^(#{1,4} |```|\||> |[-*] |\d+\. )/.test(lines[i])) para.push(lines[i++]);
    if (!para.length) throw Error('Unsupported block: ' + s);
    html += '<p>' + inline(para.join(' ')) + '</p>';
  }
  closeAnswer(); if (section) html += '</section>'; return { html, toc };
}
const titles = dirs.map(d => fs.readFileSync(path.join(root, d, 'lesson.md'), 'utf8').match(/^# (.+)$/m)[1]);
for (const [n, dir] of dirs.entries()) {
  if (n === 0) continue;
  const id = 'Р1.' + String(n + 1).padStart(2, '0');
  const lesson = fs.readFileSync(path.join(root, dir, 'lesson.md'), 'utf8');
  const desc = lesson.split(/\r?\n/).filter(Boolean)[1];
  for (const [input, output, label] of [['lesson.md', 'index.html', titles[n]], ['references.md', 'references.html', 'Источники и проверка'], ['exercises.md', 'exercises.html', 'Авторская демонстрация']]) {
    const source = fs.readFileSync(path.join(root, dir, input), 'utf8');
    const { html, toc } = markdown(input === 'lesson.md' ? source.replace(/^# .+\r?\n\r?\n[^\r\n]+\r?\n/, '') : source);
    const tocHtml = toc.map((t, i) => `<a href="#${t.id}"><span>${String(i + 1).padStart(2, '0')}</span>${esc(t.title)}</a>`).join('');
    const next = dirs[n + 1];
    const page = `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light dark"><meta name="description" content="${esc(desc)}"><title>${esc(label)} · ${id}</title><style>${css}\n.document-tabs{flex-wrap:wrap}.hero h1{overflow-wrap:break-word}.prose .answer p{font-size:var(--body-size)}\n</style></head>
<body><a class="skip-link" href="#content">Перейти к тексту</a><div class="reading-progress" aria-hidden="true"><span id="read-progress"></span></div>
<aside class="sidebar"><a class="brand" href="../../../index.html"><span class="brand-mark">ae</span><span>AI-Assisted<br>Engineering</span></a><div class="rail-label">УЧЕБНЫЙ МАРШРУТ</div><a class="course-module" href="../index.html"><span class="module-index">01</span><span>Работа с первым<br>AI-агентом</span></a><div class="rail-divider"></div><div class="rail-label">В ЭТОМ МАТЕРИАЛЕ</div><nav class="toc" aria-label="Содержание">${tocHtml}</nav><div class="rail-bottom"><span class="edition-dot"></span>Русское издание <span>2026</span></div></aside>
<div class="page"><header class="topbar"><a href="../../../index.html">← Все разделы <span>/</span> ${id}</a><div class="reader-tools" role="group" aria-label="Настройки чтения"><button id="font-down" type="button" aria-label="Уменьшить размер текста">A−</button><button id="font-up" type="button" aria-label="Увеличить размер текста">A+</button><span class="tool-divider"></span><button id="theme-toggle" type="button">Тёмная тема</button><button id="print-lesson" type="button">Печать</button></div></header>
<main id="content"><div class="hero"><div class="eyebrow">AI-ASSISTED ENGINEERING <span>—</span> ${id}</div><h1>${esc(label)}</h1><p class="hero-desc">${esc(input === 'lesson.md' ? desc : titles[n])}</p><div class="hero-meta"><span>Основы</span><span>03 ноября 2026</span><span>Редакция 2</span></div><div class="hero-line"></div></div>
<details class="mobile-toc"><summary>Содержание материала</summary><nav aria-label="Содержание на узком экране">${tocHtml}</nav></details>
<div class="document-tabs"><a href="index.html"${input === 'lesson.md' ? ' aria-current="page"' : ''}>Урок</a><a href="exercises.html"${input === 'exercises.md' ? ' aria-current="page"' : ''}>Разбор автора</a><a href="references.html"${input === 'references.md' ? ' aria-current="page"' : ''}>Источники</a><a href="${input}" download>Markdown ↓</a></div>
<article class="prose">${html}</article><footer class="lesson-footer"><div><span class="eyebrow">ДАЛЬШЕ ПО МАРШРУТУ</span><h3>${esc(next ? titles[n + 1] : 'Раздел 2: системная работа с AI')}</h3></div><a href="${next ? '../' + next + '/index.html' : '../../../index.html#section-2'}">Перейти →</a></footer><p class="page-note">Локальное издание · <a href="review.md">Авторская проверка</a> · <a href="../index.html">Все уроки раздела 1</a></p></main></div><script>${js}</script></body></html>`;
    fs.writeFileSync(path.join(root, dir, output), page);
  }
}
const cards = dirs.map((d, i) => `<li><a href="${d}/index.html"><small>Р1.${String(i + 1).padStart(2, '0')}</small><h2>${esc(titles[i])}</h2><span>Читать урок →</span></a></li>`).join('');
fs.writeFileSync(path.join(root, 'index.html'), `<!doctype html><html lang="ru"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Раздел 1 · AI-Assisted Engineering</title><style>body{margin:0;background:#f6f5ef;color:#203b3d;font:18px/1.6 system-ui}main{max-width:1000px;margin:auto;padding:45px 24px}h1{font:normal clamp(36px,6vw,62px)/1.1 Georgia}ul{padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;list-style:none}li a{display:block;background:white;border:1px solid #dce0d5;padding:25px;height:100%;box-sizing:border-box;text-decoration:none;color:inherit;border-radius:8px}h2{font:normal 25px/1.3 Georgia}small,li span{font-size:13px;color:#48716a}a{color:#315f53}a:focus-visible{outline:3px solid #b5724a}li a:hover{border-color:#48716a}</style><main><a href="../../index.html">← Все разделы</a><p>AI-Assisted Engineering · Раздел 1</p><h1>Работа с первым AI-агентом</h1><p>15 уроков: от первого поручения до проверенного изменения. Р1.01 сохранён; Р1.02–Р1.15 переработаны 03.11.2026.</p><p>Если пути и терминал незнакомы, начните после Р1.01 с Р1.04–Р1.05, затем вернитесь к выбору и установке. Практика — авторские разборы, без домашних заданий.</p><ul>${cards}</ul></main></html>`);
console.log('Built 14 lessons × 3 HTML pages and section index. R1.01 unchanged.');
