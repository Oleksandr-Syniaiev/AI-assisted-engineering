(() => {
  'use strict';
  const search=document.getElementById('lesson-search');
  const sections=[...document.querySelectorAll('.section-card')];
  const rows=[...document.querySelectorAll('.lesson-row')];
  const buttons=[...document.querySelectorAll('[data-filter]')];
  const defaultOpen=new Map(sections.map(s=>[s.id,s.open]));
  let filter='all';
  const normalize=s=>s.toLocaleLowerCase('ru').replaceAll('ё','е').trim();
  function applyFilters(){
    const query=normalize(search.value);let count=0;
    for(const section of sections){
      let visible=0;
      for(const row of section.querySelectorAll('.lesson-row')){
        const matches=(!query||normalize(row.dataset.title+' '+row.dataset.id).includes(query))&&(filter==='all'||row.dataset.status==='ready');
        row.hidden=!matches;if(matches){visible++;count++;}
      }
      section.hidden=visible===0;
      if(query||filter!=='all')section.open=visible>0;
      else section.open=defaultOpen.get(section.id);
    }
    document.getElementById('empty-state').hidden=count!==0;
    document.getElementById('filter-result').textContent=(query||filter!=='all')?'Найдено тем: '+count:rows.length+' тем в программе';
    for(const button of buttons)button.setAttribute('aria-pressed',String(button.dataset.filter===filter));
  }
  search.addEventListener('input',applyFilters);
  for(const button of buttons)button.addEventListener('click',()=>{filter=button.dataset.filter;applyFilters();});
  document.getElementById('reset-filters').addEventListener('click',()=>{search.value='';filter='all';applyFilters();search.focus();});
  for(const link of document.querySelectorAll('.sidebar nav a, .mobile-section-links a'))link.addEventListener('click',()=>{
    if(search.value||filter!=='all'){search.value='';filter='all';applyFilters();}
    const target=document.querySelector(link.getAttribute('href'));if(target){target.hidden=false;target.open=true;}
  });
  function openHash(){const target=sections.find(s=>'#'+s.id===location.hash);if(target){target.hidden=false;target.open=true;}}
  window.addEventListener('hashchange',openHash);openHash();
  const themeButton=document.getElementById('theme-toggle');let theme='light';
  try{theme=localStorage.getItem('aae-reader-theme')||'light';}catch{}
  function setTheme(value){theme=value;document.documentElement.dataset.theme=value;themeButton.textContent=value==='dark'?'Светлая тема':'Тёмная тема';try{localStorage.setItem('aae-reader-theme',value);}catch{}}
  setTheme(theme==='dark'?'dark':'light');themeButton.addEventListener('click',()=>setTheme(theme==='dark'?'light':'dark'));
})();
