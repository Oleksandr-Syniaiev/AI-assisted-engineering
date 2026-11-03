import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const esc = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
function inline(s) {
  const codes=[];
  s=s.replace(/`([^`]+)`/g,(_,c)=>`\u0000${codes.push('<code>'+esc(c)+'</code>')-1}\u0000`);
  s=esc(s).replace(/\[([^\]]+)\]\(([^\s)]+)\)/g,(_,label,url)=>{
    const href=url.replace(/^references\.md$/,'references.html').replace(/^exercises\.md$/,'exercises.html');
    if(!/^(https:\/\/|[a-zA-Z0-9._/#-])/.test(href))throw Error('Unsupported URL');
    return `<a href="${href}"${href.startsWith('https:')?' target="_blank" rel="noopener noreferrer"':''}>${label}</a>`;
  }).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
  return s.replace(/\u0000(\d+)\u0000/g,(_,n)=>codes[+n]);
}

const loopWidget=`<div class="loop-widget" aria-label="Пошаговый разбор агентного цикла">
  <div class="widget-top"><span class="eyebrow">РАЗБЕРИТЕ ЦИКЛ</span><span id="step-count">01 / 05</span></div>
  <ol class="loop-track"><li class="active">Контекст</li><li>Решение</li><li>Действие</li><li>Наблюдение</li><li>Приёмка</li></ol>
  <h4 id="step-title">Что известно перед действием?</h4><p id="step-text">Есть задача и код baseline. Агент ещё не знает результата проверки пробельного ввода.</p>
  <p class="loop-question" id="step-question">Вход: цель, правило, доступные файлы.</p>
  <div class="widget-controls"><button type="button" id="step-prev" disabled>← Назад</button><button type="button" id="step-next">Следующий шаг →</button></div>
  <p class="micro">Учебная схема. Модель не вызывается, команды не запускаются.</p>
</div>`;

const traceWidget=`<div class="trace-lab" aria-labelledby="trace-label"><span class="eyebrow">МИНИ-ПРАКТИКА</span><h3 id="trace-label">Какой тип записи перед вами?</h3>
<p>Выберите основную категорию каждой записи. Результат чтения относится к наблюдению; запрос на чтение — к действию.</p>
${[
  '«Проверю валидацию пустого заголовка»',
  'Инструмент вернул содержимое baseline-функции',
  '«Функция отклоняет все пустые заголовки»',
  'Test runner: 3 passed, 1 failed, exit code 1',
  'Подготовлен patch с trim() перед проверкой',
  '«Готово: API и сохранение в БД проверены»'
].map((s,i)=>`<div class="trace-row"><label for="trace-${i}"><span class="trace-number">0${i+1}</span>${esc(s)}</label><select id="trace-${i}"><option value="">Выбрать категорию</option><option value="intent">Намерение</option><option value="action">Действие</option><option value="observation">Наблюдение</option><option value="conclusion">Вывод</option></select><p class="trace-feedback" id="feedback-${i}"></p></div>`).join('')}
<button type="button" class="primary" id="check-trace">Проверить разбор</button><p id="trace-result" role="status" aria-live="polite"></p></div>`;

const contractWidget=`<div class="contract-lab"><span class="eyebrow">ВАШ РЕЗУЛЬТАТ</span><h3>Контракт первого поручения</h3><p>Заполните поля и скачайте Markdown-файл. Данные остаются в этой странице; несохранённый ввод исчезнет после перезагрузки.</p><label for="contract-text">Текст вашего задания</label><textarea id="contract-text" rows="13" spellcheck="false"># Контракт задачи

Цель: объяснить, почему baseline принимает строку из пробелов.

Входы: practice/title-policy.mjs и practice/checks.mjs.

Границы: только чтение; без записи, установки и внешних действий.

Критерии приёмки:
- Разобраны пустая, пробельная и корректная строки.
- Выводы связаны с конкретными условиями кода.

Доказательства: что прочитано, что запускалось, что не проверено.

Условие остановки: перечислить недостающие данные или права.</textarea><button type="button" class="primary" id="download-contract">Скачать task-contract.md ↓</button><p id="download-status" role="status" class="micro"></p></div>`;

function markdown(source, interactive=false){
  const lines=source.replace(/\r/g,'').split('\n');let i=0,html='',section=0,inside=false,answer=false;const toc=[];
  const closeAnswer=()=>{if(answer){html+='</details>';answer=false;}};
  while(i<lines.length){
    let s=lines[i];if(!s.trim()){i++;continue;}
    if(s.startsWith('```')){
      const lang=s.slice(3).trim();const code=[];i++;while(i<lines.length&&!lines[i].startsWith('```'))code.push(lines[i++]);if(i>=lines.length)throw Error('Unclosed fence');i++;
      if(lang==='mermaid'){
        html+=`<figure class="cycle-figure"><div class="flow-list" role="img" aria-label="Задача и границы, сбор контекста, действие инструмента, наблюдение, проверка и решение инженера"><span>Задача</span><b aria-hidden="true">→</b><span>Контекст</span><b aria-hidden="true">→</b><span>Действие</span><b aria-hidden="true">→</b><span>Наблюдение</span><b aria-hidden="true">→</b><span>Проверка</span></div><figcaption>Нужны новые сведения или исправление? Вернитесь к сбору контекста.</figcaption></figure>`;
        if(interactive)html+=loopWidget;
      }else html+=`<div class="code-block"><div class="code-label">${esc(lang||'text')}</div><pre><code>${esc(code.join('\n'))}</code></pre></div>`;
      continue;
    }
    const h=s.match(/^(#{1,4}) (.+)$/);
    if(h){
      const level=h[1].length,text=h[2];
      if(level===1){i++;continue;}
      if(level===2){
        closeAnswer();if(inside)html+='</section>';section++;inside=true;
        toc.push({id:`section-${section}`,title:text});
        html+=`<section id="section-${section}" class="lesson-section"><div class="section-kicker">${String(section).padStart(2,'0')}</div><h2>${inline(text.replace(/^\d+\. /,''))}</h2>`;
      }else if(interactive&&section===9&&level===3){closeAnswer();html+=`<details class="answer"><summary>${inline(text)}</summary>`;answer=true;}
      else {html+=`<h${level}>${inline(text)}</h${level}>`;}
      if(interactive&&section===8&&level===3&&text.startsWith('Базовый'))html+=traceWidget;
      i++;continue;
    }
    if(s.startsWith('|')){
      const rows=[];while(i<lines.length&&lines[i].startsWith('|'))rows.push(lines[i++]);
      const cells=row=>row.trim().replace(/^\||\|$/g,'').split('|').map(x=>x.trim());
      const header=cells(rows[0]);const body=rows.slice(1).filter(r=>!/^\|[\s:|-]+\|$/.test(r));
      html+='<div class="table-scroll" tabindex="0" role="region" aria-label="Сравнительная таблица"><table><thead><tr>'+header.map(x=>`<th scope="col">${inline(x)}</th>`).join('')+'</tr></thead><tbody>'+body.map(r=>'<tr>'+cells(r).map(x=>`<td>${inline(x)}</td>`).join('')+'</tr>').join('')+'</tbody></table></div>';continue;
    }
    if(/^[-*] /.test(s)||/^\d+\. /.test(s)){
      const ordered=/^\d+\. /.test(s), re=ordered?/^\d+\. /:/^[-*] /,items=[];
      while(i<lines.length&&re.test(lines[i]))items.push(lines[i++].replace(re,''));
      html+=`<${ordered?'ol':'ul'}>`+items.map(t=>`<li>${inline(t)}</li>`).join('')+`</${ordered?'ol':'ul'}>`;continue;
    }
    if(s.startsWith('> ')){const b=[];while(i<lines.length&&lines[i].startsWith('> '))b.push(lines[i++].slice(2));html+='<blockquote>'+inline(b.join(' '))+'</blockquote>';continue;}
    const para=[];
    while(i<lines.length&&lines[i].trim()&&!/^(#{1,4} |```|\||> |[-*] |\d+\. )/.test(lines[i]))para.push(lines[i++]);
    if(!para.length)throw Error('Unsupported markdown near '+s);
    if (!(interactive && para.join(' ')==='От поручения — к результату, который можно проверить.')) html+='<p>'+inline(para.join(' '))+'</p>';
  }
  closeAnswer();if(inside)html+='</section>';
  if(interactive)html=html.replace('<section id="section-9"',contractWidget+'<section id="section-9"');
  return {html,toc};
}

const css=fs.readFileSync(path.join(root,'reader.css'),'utf8');
const js=fs.readFileSync(path.join(root,'reader.js'),'utf8');
for(const [input,output,title,desc,main] of [
 ['lesson.md','index.html','Основы работы с AI-агентами','От поручения — к результату, который можно проверить.',true],
 ['exercises.md','exercises.html','Практика и критерии приёмки','Аудит trace, контракт задачи и границы ответственности.',false],
 ['references.md','references.html','Источники и проверка','Первичные документы, локальные доказательства и границы выводов.',false]
]){
 const content=fs.readFileSync(path.join(root,input),'utf8');const {html,toc}=markdown(content,main);
 const tocHtml=toc.map((t,i)=>`<a href="#${t.id}"><span>${String(i+1).padStart(2,'0')}</span>${esc(t.title.replace(/^\d+\. /,''))}</a>`).join('');
 const page=`<!doctype html>
<html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light dark"><meta name="description" content="${esc(desc)}"><title>${esc(title)} · AI-Assisted Engineering</title><style>${css}</style></head>
<body><a class="skip-link" href="#content">Перейти к тексту</a><div class="reading-progress" aria-hidden="true"><span id="read-progress"></span></div>
<aside class="sidebar"><a class="brand" href="index.html"><span class="brand-mark">ae</span><span>AI-Assisted<br>Engineering</span></a><div class="rail-label">УЧЕБНЫЙ МАРШРУТ</div><a class="course-module" href="index.html"><span class="module-index">01</span><span>Работа с первым<br>AI-агентом</span></a><div class="rail-divider"></div><div class="rail-label">В ЭТОМ МАТЕРИАЛЕ</div><nav class="toc" aria-label="Содержание">${tocHtml}</nav><div class="rail-bottom"><span class="edition-dot"></span>Русское издание <span>2026</span></div></aside>
<div class="page"><header class="topbar"><a href="../../../index.html">← Все разделы <span>/</span> Р1.01</a><div class="reader-tools" role="group" aria-label="Настройки чтения"><button id="font-down" type="button" aria-label="Уменьшить размер текста">A−</button><button id="font-up" type="button" aria-label="Увеличить размер текста">A+</button><span class="tool-divider"></span><button id="theme-toggle" type="button" aria-label="Переключить цветовую тему">Тёмная тема</button><button id="print-lesson" type="button" aria-label="Распечатать материал">Печать</button></div></header>
<main id="content"><div class="hero"><div class="eyebrow">AI-ASSISTED ENGINEERING <span>—</span> Р1.01</div><h1>${esc(title)}</h1><p class="hero-desc">${esc(desc)}</p><div class="hero-meta"><span>Основы</span><span>${main?'45–60 минут':'Материалы урока'}</span><span>02 ноября 2026</span></div><div class="hero-line"></div></div>
<details class="mobile-toc"><summary>Содержание материала</summary><nav aria-label="Содержание на узком экране">${tocHtml}</nav></details>
<div class="document-tabs" aria-label="Материалы урока"><a href="index.html"${main?' aria-current="page"':''}>Урок</a><a href="exercises.html"${input==='exercises.md'?' aria-current="page"':''}>Задания</a><a href="references.html"${input==='references.md'?' aria-current="page"':''}>Источники</a><a href="${input}" download>Markdown ↓</a></div>
<article class="prose">${html}</article><footer class="lesson-footer"><div><span class="eyebrow">ДАЛЬШЕ ПО МАРШРУТУ</span><h3>Папка, файл, редактор и терминал</h3><p>Р1.04 · Для следующего урока пока подготовлен план.</p></div><a href="../04-files-editor-terminal/research/outline.md">Открыть план →</a></footer><p class="page-note">AI-Assisted Engineering · Локальное издание · <a href="review.md">Техническая проверка</a></p></main></div>
<script>${js}</script></body></html>`;
 fs.writeFileSync(path.join(root,output),page);
 console.log(`${output}: ${toc.length} sections, ${Buffer.byteLength(page)} bytes`);
}
