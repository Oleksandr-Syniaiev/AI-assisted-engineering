import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.dirname(fileURLToPath(import.meta.url));
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const metadata=[
 ['Первые шаги с AI-агентами','От устройства приложения и первого запуска до Git, контекста и передачи задачи.'],
 ['Принципы работы с AI','Обратная связь, делегирование и осознанная постановка инженерных задач.'],
 ['Контекст и готовность проекта','Инварианты, инструкции репозитория и подготовка к работе со спецификациями.'],
 ['Спецификации и рабочие процессы','SDD, проверки, переиспользуемые workflow и сравнение методологий.'],
 ['Мультиагентная инженерия','Изоляция, оркестрация, quality gates и воспроизводимость результата.']
];
const sections=[];
for(const raw of fs.readFileSync(path.join(root,'CURRICULUM.md'),'utf8').split(/\r?\n/)){
 const line=raw.trim();if(!line)continue;
 const match=line.match(/^Раздел\s+(\d+)/);
 if(match){const n=+match[1];if(!metadata[n-1])throw Error('Unknown section '+n);sections.push({n,title:metadata[n-1][0],description:metadata[n-1][1],lessons:[]});continue;}
 if(!sections.length)throw Error('Topic outside section');
 const section=sections.at(-1),n=section.lessons.length+1;
 const sectionPath=path.join(root,'lessons',String(section.n).padStart(2,'0'));
 const candidates=fs.existsSync(sectionPath)?fs.readdirSync(sectionPath,{withFileTypes:true}).filter(e=>e.isDirectory()&&e.name.startsWith(String(n).padStart(2,'0')+'-')):[];
 if(candidates.length>1)throw Error('Ambiguous lesson directory');
 const candidate=candidates[0]&&path.join(sectionPath,candidates[0].name);
 const ready=candidate&&fs.existsSync(path.join(candidate,'lesson.md'))&&fs.existsSync(path.join(candidate,'index.html'));
 const href=ready?path.relative(root,path.join(candidate,'index.html')).replaceAll('\\','/'):null;
 section.lessons.push({id:`Р${section.n}.${String(n).padStart(2,'0')}`,title:line,display:line.replace(/^1\.Основы/,'Основы'),href});
}
const all=sections.flatMap(s=>s.lessons),ready=all.filter(l=>l.href),next=ready[0];
const sectionMarkup=sections.map(section=>{
 const available=section.lessons.filter(l=>l.href).length;
 return `<details class="section-card" id="section-${section.n}"${available?' open':''}>
<summary><span class="section-number">${String(section.n).padStart(2,'0')}</span><span class="section-heading"><span class="section-eyebrow">РАЗДЕЛ ${section.n}</span><span class="section-title">${escape(section.title)}</span><span class="section-desc">${escape(section.description)}</span></span><span class="section-state"><span class="badge ${available?'available':'soon'}">${available?'Доступен '+available+' из '+section.lessons.length:'Coming soon'}</span><span class="section-count">${section.lessons.length} ${section.lessons.length % 10 === 1 && section.lessons.length % 100 !== 11 ? "тема" : section.lessons.length % 10 >= 2 && section.lessons.length % 10 <= 4 && (section.lessons.length % 100 < 12 || section.lessons.length % 100 > 14) ? "темы" : "тем"}</span></span><span class="chevron" aria-hidden="true">+</span></summary>
<div class="lesson-list">${!available?'<p class="section-placeholder">Coming soon — материалы раздела готовятся. Ниже — темы будущих уроков.</p>':''}
${section.lessons.map(l=>`<div class="lesson-row${l.href?' ready':''}" data-title="${escape(l.display.toLocaleLowerCase('ru'))}" data-id="${l.id}" data-status="${l.href?'ready':'soon'}"><span class="lesson-id">${l.id}</span>${l.href?`<a class="lesson-title" href="${l.href}">${escape(l.display)}</a>`:`<span class="lesson-title">${escape(l.display)}</span>`}<span class="lesson-status">${l.href?'<span class="badge available">Доступен</span><span class="lesson-arrow" aria-hidden="true">↗</span>':'<span class="badge soon">Coming soon</span>'}</span></div>`).join('')}
</div></details>`;
}).join('\n');
const css=fs.readFileSync(path.join(root,'course.css'),'utf8');
const js=fs.readFileSync(path.join(root,'course.js'),'utf8');
const html=`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light dark"><meta name="description" content="Программа курса AI-Assisted Engineering: все разделы, доступные уроки и будущие материалы."><title>Программа курса · AI-Assisted Engineering</title><style>${css}</style></head>
<body><a href="#course" class="skip">Перейти к программе</a><aside class="sidebar"><a href="#top" class="brand"><span class="brand-mark">ae</span><span>AI-Assisted<br>Engineering</span></a><p class="rail-label">ПРОГРАММА</p><nav aria-label="Разделы курса">${sections.map(s=>`<a href="#section-${s.n}"><span>0${s.n}</span>${escape(s.title)}</a>`).join('')}</nav></aside>
<div class="page" id="top"><header class="topbar"><span>Программа обучения</span><button type="button" id="theme-toggle" aria-label="Переключить цветовую тему">Тёмная тема</button></header><main>
<div class="hero"><p class="eyebrow">ОТ ПЕРВОГО АГЕНТА К ИНЖЕНЕРНЫМ СИСТЕМАМ</p><h1>AI-Assisted<br><em>Engineering</em></h1><p class="hero-desc">Учитесь ставить задачи агентам, проверять изменения и выстраивать надёжный процесс разработки.</p><div class="course-stats"><span><strong>${sections.length}</strong> разделов</span><span><strong>${all.length}</strong> тем</span></div><nav class="mobile-section-links" aria-label="Быстрый переход к разделам">${sections.map(s=>`<a href="#section-${s.n}">Раздел ${s.n}</a>`).join('')}</nav></div>
${next?`<a class="start-card" href="${next.href}"><div><span class="eyebrow">НАЧНИТЕ ЗДЕСЬ · ${next.id}</span><h2>${escape(next.display)}</h2><p>Модель, инструменты, агентный цикл и первый проверяемый результат.</p></div><span class="start-action">Читать урок <span aria-hidden="true">→</span></span></a>`:''}
<section class="curriculum" id="course" aria-labelledby="curriculum-title"><div class="curriculum-header"><div><p class="eyebrow">ВАШ УЧЕБНЫЙ МАРШРУТ</p><h2 id="curriculum-title">Все разделы и уроки</h2></div><p>Новые материалы появляются постепенно.<br>Будущие уроки отмечены Coming soon.</p></div>
<div class="filters"><label class="search-label" for="lesson-search"><span aria-hidden="true">⌕</span><input id="lesson-search" aria-label="Найти тему или урок" type="search" placeholder="Найти тему или урок…" autocomplete="off"></label><div class="status-filter" role="group" aria-label="Доступность материалов"><button type="button" data-filter="all" aria-pressed="true">Все темы</button><button type="button" data-filter="ready" aria-pressed="false">Доступные</button></div></div><p class="filter-result" id="filter-result" role="status" aria-live="polite">${all.length} тем в программе</p>
<div id="sections">${sectionMarkup}</div><div class="empty-state" id="empty-state" hidden><h3>Темы не найдены</h3><p>Попробуйте другое название или сбросьте фильтры.</p><button type="button" id="reset-filters">Сбросить фильтры</button></div></section>
<footer><span>AI-Assisted Engineering</span><span>Понимать. Применять. Проверять.</span><a href="#top">Наверх ↑</a></footer></main></div><script>${js}</script></body></html>`;
fs.writeFileSync(path.join(root,'index.html'),html);
console.log(JSON.stringify({sections:sections.length,topics:all.length,available:ready.length,comingSoon:all.length-ready.length,output:'index.html'}));
