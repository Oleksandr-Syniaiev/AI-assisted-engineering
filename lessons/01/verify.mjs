// Проверки артефактов редакции; не тестируют педагогическое качество автоматически.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const project = path.resolve(root, '../..');
const dirs = fs.readdirSync(root).filter(n => /^\d\d-/.test(n)).sort();
const issues = []; let links = 0, questions = 0, scripts = 0;
function checkLink(file, href) {
  if (/^(https?:|mailto:)/.test(href)) return;
  const [part, fragment] = href.replaceAll('&amp;', '&').split('#');
  const target = part ? path.resolve(path.dirname(file), decodeURIComponent(part)) : file;
  if (!fs.existsSync(target)) { issues.push('Missing target: ' + path.relative(root,file) + ' → ' + href); return; }
  if (fragment && target.endsWith('.html')) {
    const html = fs.readFileSync(target, 'utf8');
    if (!html.includes(`id="${fragment}"`) && !html.includes(`id='${fragment}'`)) issues.push('Missing fragment: ' + href);
  }
  links++;
}
const baseline = JSON.parse(fs.readFileSync(path.join(root, 'benchmark-hashes.json'), 'utf8').replace(/^\uFEFF/,''));
for (const item of baseline) {
  const file = path.join(root, dirs[0], item.Path);
  const digest = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').toUpperCase();
  if (digest !== item.SHA256) issues.push('Benchmark changed: ' + item.Path);
}
const curriculum = fs.readFileSync(path.join(project,'CURRICULUM.md'),'utf8').split(/Раздел 2/)[0].split(/\r?\n/).map(l=>l.trim()).filter(l=>l && !l.startsWith('Раздел'));
for (const [i, dir] of dirs.entries()) {
  const folder = path.join(root, dir), lesson = fs.readFileSync(path.join(folder,'lesson.md'),'utf8');
  const title = lesson.match(/^# (.+)$/m)[1];
  if (i > 0 && title !== curriculum[i]) issues.push('Curriculum title mismatch: ' + dir);
  if (i > 0) {
    const count = [...lesson.matchAll(/^### [1-7]\. /gm)].length; questions += count;
    if (count !== 7) issues.push('Questions count ' + dir + ': ' + count);
    if (/при подготовке урока заполнить|Автор показывает|TODO|<client>/.test(lesson)) issues.push('Outline residue: ' + dir);
    const refs = fs.readFileSync(path.join(folder,'references.md'),'utf8');
    for (const match of lesson.matchAll(/\[(SRC-\d+)\]\(([^)]+)\)/g)) {
      const section = refs.split('## ' + match[1] + ' — ')[1]?.split('\n## ')[0];
      if (!section?.includes(match[2])) issues.push('Citation does not resolve: ' + dir + '/' + match[1]);
    }
  }
  const names = i === 0 ? ['lesson.md','index.html'] : ['lesson.md','references.md','exercises.md','review.md','index.html','references.html','exercises.html'];
  for (const name of names) {
    const file = path.join(folder,name); if (!fs.existsSync(file)) { issues.push('Missing ' + file); continue; }
    const content = fs.readFileSync(file,'utf8');
    if (name.endsWith('.md')) {
      const body = content.replace(/```[^\n]*\n[\s\S]*?```/g, '');
      for (const m of body.matchAll(/\[[^\]]+\]\(([^\s)]+)\)/g)) checkLink(file,m[1]);
    } else {
      for (const m of content.matchAll(/href="([^"]+)"/g)) checkLink(file,m[1]);
      if (i > 0) {
        for (const m of content.matchAll(/<script>([\s\S]*?)<\/script>/g)) { try { new vm.Script(m[1]); scripts++; } catch (e) { issues.push(name+': '+e.message); } }
        for (const id of ['font-up','font-down','theme-toggle','print-lesson','read-progress']) if (!content.includes(`id="${id}"`)) issues.push('Missing reader control: ' + dir + '/' + id);
        if (name === 'index.html' && [...content.matchAll(/<details class="answer">/g)].length !== 7) issues.push('Missing answer disclosures: ' + dir);
      }
    }
  }
}
for (const name of ['README.md','index.html','lesson-review.md','demo-workbench/README.md','demo-workbench/verification.md']) {
  const file=path.join(root,name), text=fs.readFileSync(file,'utf8');
  const re=name.endsWith('.html')?/href="([^"]+)"/g:/\[[^\]]+\]\(([^\s)]+)\)/g;
  for(const m of text.matchAll(re))checkLink(file,m[1]);
}
console.log(JSON.stringify({lessons:dirs.length,rewritten:dirs.length-1,questions,localLinks:links,scriptsParsed:scripts,benchmarkFilesUnchanged:baseline.length,issues},null,2));
if (issues.length) process.exitCode = 1;
