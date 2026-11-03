(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  let size = 18;
  let theme = 'light';
  try { theme = localStorage.getItem('aae-reader-theme') || 'light'; } catch {}
  function setTheme(value) {
    theme = value;
    document.documentElement.dataset.theme = value;
    $('theme-toggle').textContent = value === 'dark' ? 'Светлая тема' : 'Тёмная тема';
    try { localStorage.setItem('aae-reader-theme', value); } catch {}
  }
  setTheme(theme === 'dark' ? 'dark' : 'light');
  $('theme-toggle').addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : 'dark'));
  function changeSize(delta) {
    size = Math.max(16, Math.min(22, size + delta));
    document.documentElement.style.setProperty('--body-size', size + 'px');
    $('font-down').disabled = size === 16;
    $('font-up').disabled = size === 22;
  }
  $('font-down').addEventListener('click', () => changeSize(-1));
  $('font-up').addEventListener('click', () => changeSize(1));
  $('print-lesson').addEventListener('click', () => window.print());
  const sections = [...document.querySelectorAll('.lesson-section')];
  const tocLinks = [...document.querySelectorAll('.toc a')];
  function updateReading() {
    const max = document.documentElement.scrollHeight - innerHeight;
    $('read-progress').style.width = (max > 0 ? Math.min(100, scrollY / max * 100) : 100) + '%';
    let current = sections[0]?.id;
    for (const section of sections) if (section.getBoundingClientRect().top <= 160) current = section.id;
    for (const link of tocLinks) {
      const active = link.getAttribute('href') === '#' + current;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    }
  }
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(() => { updateReading(); scheduled = false; }); }
  }, { passive: true });
  window.addEventListener('resize', updateReading);
  updateReading();
  let printStates=[];
  window.addEventListener('beforeprint', () => {
    printStates=[...document.querySelectorAll('.answer')].map(el=>[el,el.open]);
    for(const [el] of printStates)el.open=true;
  });
  window.addEventListener('afterprint',()=>{for(const [el,open] of printStates)el.open=open;});

  if ($('step-next')) {
    const steps = [
      ['Что известно перед действием?', 'Есть задача и код baseline. Агент ещё не знает результата проверки пробельного ввода.', 'Вход: цель, правило, доступные файлы.'],
      ['Какой шаг проверит гипотезу?', 'Нужно проверить строку из пробелов. Одного чтения условия длины недостаточно для отчёта об исполненном тесте.', 'Выбор действия ещё не является его выполнением.'],
      ['Что исполняет инструмент?', 'Test runner получает конкретную функцию и фиксированный набор cases. Разрешённое действие происходит в оговорённом окружении.', 'Запрос инструмента: выполнить baseline-suite.'],
      ['Какое наблюдение получено?', 'В учебном примере: 3 passed, 1 failed, exit code 1. Пробельный title ошибочно принят.', 'Evidence относится к четырём cases baseline-функции.'],
      ['Достаточно ли оснований для приёмки?', 'После изменения нужны те же cases на corrected. Даже 4 passed не подтверждают работу API и БД: их здесь нет.', 'Решение: принять проверку функции в её границах; интеграцию не объявлять проверенной.']
    ];
    let step=0;
    const render = () => {
      $('step-title').textContent=steps[step][0];$('step-text').textContent=steps[step][1];$('step-question').textContent=steps[step][2];
      $('step-count').textContent=String(step+1).padStart(2,'0')+' / 05';
      [...document.querySelectorAll('.loop-track li')].forEach((el,i)=>el.classList.toggle('active',i===step));
      $('step-prev').disabled=step===0;$('step-next').disabled=step===steps.length-1;
    };
    $('step-next').addEventListener('click',()=>{step=Math.min(4,step+1);render();});
    $('step-prev').addEventListener('click',()=>{step=Math.max(0,step-1);render();});
    const correct=['intent','observation','conclusion','observation','action','conclusion'];
    const explanations=[
      'Намерение: проверка только обещана.',
      'Наблюдение: показан результат чтения. Сам вызов инструмента — предыдущее действие.',
      'Вывод: обобщение на все пустые заголовки не подтверждено.',
      'Наблюдение: доступен результат конкретного test runner.',
      'Действие: patch подготовлен, но проверка corrected в trace отсутствует.',
      'Вывод: evidence для API и БД не приведено.'
    ];
    $('check-trace').addEventListener('click',()=>{
      let score=0;
      correct.forEach((answer,i)=>{
        const select=$('trace-'+i),ok=select.value===answer;
        if(ok)score++;
        const row=select.closest('.trace-row');row.classList.toggle('correct',ok);row.classList.toggle('incorrect',!ok);
        $('feedback-'+i).textContent=(ok?'Верно. ':select.value?'Проверьте основание. ':'Выберите категорию. ')+explanations[i];
      });
      $('trace-result').textContent=`Верно: ${score} из 6. `+(score===6?'Теперь объясните, какие утверждения trace пока не подтверждает.':'Сопоставьте категорию записи с тем, какое evidence в ней появилось.');
    });
    $('download-contract').addEventListener('click',()=>{
      const blob=new Blob([$('contract-text').value+'\n'],{type:'text/markdown;charset=utf-8'});
      const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='task-contract.md';
      document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
      $('download-status').textContent='Файл подготовлен к скачиванию. Он содержит текст из поля выше.';
    });
  }
})();
