"""Build offline HTML from section 2 Markdown using only Python's standard library."""
from pathlib import Path
import html
import re
import sys

BASE=Path(__file__).parent
sys.path.insert(0, str(BASE.parents[1] / 'scripts'))
from safe_url import assert_safe_url
DIRS=sorted(p for p in BASE.iterdir() if p.is_dir() and re.match(r'^\d\d-',p.name))
CSS='''*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;color:#24313e;background:#f5f4ef;font:18px/1.75 system-ui,sans-serif}a{color:#126359;text-underline-offset:3px}header{max-width:1240px;margin:auto;padding:28px 32px;border-bottom:1px solid #d5dcd5}header nav{display:flex;gap:24px;flex-wrap:wrap}.layout{max-width:1240px;margin:auto;display:grid;grid-template-columns:250px minmax(0,1fr);gap:50px;padding:36px 32px}aside{font-size:14px;position:sticky;top:20px;align-self:start;max-height:92vh;overflow:auto}aside a{display:block;padding:7px 0}main{min-width:0;max-width:850px}h1{font-size:clamp(30px,4vw,46px);line-height:1.2;letter-spacing:-.035em;margin:12px 0 28px}h2{line-height:1.3;font-size:28px;margin-top:60px;padding-top:20px;border-top:1px solid #ccd8d0;scroll-margin-top:15px}h3{font-size:21px;margin-top:30px}p{margin:20px 0}pre{background:#1f2e36;color:#eef4f2;padding:22px;border-radius:10px;overflow:auto;line-height:1.5;font-size:15px}code{font-family:ui-monospace,Consolas,monospace}p code,td code{background:#e4ebe6;padding:2px 4px;border-radius:3px}table{border-collapse:collapse;font-size:15px;line-height:1.5;width:100%}th,td{padding:12px 14px;text-align:left;vertical-align:top;border:1px solid #ccd8d0}th{background:#e6ece5}.table{overflow:auto;margin:24px 0}footer{margin-top:55px;padding:30px 0;border-top:1px solid #ccd8d0;font-size:15px}.skip{position:absolute;left:-9999px}.skip:focus{left:10px;background:white;padding:10px}a:focus-visible{outline:3px solid #cb6b32;outline-offset:4px}li{margin:8px 0}@media(max-width:850px){.layout{display:block;padding:24px 18px}aside{position:static;max-height:none;border-bottom:1px solid #ccd8d0;padding-bottom:20px;margin-bottom:30px}aside a{display:inline-block;margin-right:15px;font-size:13px}header{padding:20px 18px}body{font-size:17px}h2{font-size:25px}th,td{min-width:160px}}@media print{aside,header,footer{display:none}.layout{display:block;padding:0}body{background:white;font-size:12pt}pre{white-space:pre-wrap;color:black;background:#eee}h2{break-after:avoid}}'''

def inline(value):
    store=[]
    def code(m):
        store.append('<code>'+html.escape(m[1])+'</code>')
        return '\x00'+str(len(store)-1)+'\x00'
    value=re.sub(r'`([^`]+)`',code,value)
    value=html.escape(value)
    def anchor(m):
        label,url=m[1],html.unescape(m[2])
        assert_safe_url(url)
        url=re.sub(r'\.md(?=$|#)','.html',url)
        if url=='lesson.html' or url.startswith('lesson.html#'):url=url.replace('lesson.html','index.html',1)
        return '<a href="'+html.escape(url,quote=True)+'">'+label+'</a>'
    value=re.sub(r'\[([^\]]+)\]\(([^\s)]+)\)',anchor,value)
    value=re.sub(r'\*\*(.+?)\*\*',r'<strong>\1</strong>',value)
    return re.sub(r'\x00(\d+)\x00',lambda m:store[int(m[1])],value)

def render(source):
    lines=source.splitlines();out=[];toc=[];i=0
    while i<len(lines):
        line=lines[i]
        if not line.strip():i+=1;continue
        if line.startswith('```'):
            lang=line[3:];i+=1;code=[]
            while i<len(lines) and not lines[i].startswith('```'):code.append(lines[i]);i+=1
            if i==len(lines):raise ValueError('Unclosed fence')
            out.append('<pre aria-label="'+html.escape(lang or 'Пример')+'"><code>'+html.escape('\n'.join(code))+'</code></pre>');i+=1;continue
        heading=re.match(r'^(#{1,4}) (.+)$',line)
        if heading:
            level=len(heading[1]);title=heading[2];ident=re.sub(r'[^\w-]+','-',title.lower()).strip('-')
            out.append(f'<h{level} id="{ident}">{inline(title)}</h{level}>')
            if level==2:toc.append((ident,title))
            i+=1;continue
        if line.startswith('|'):
            rows=[]
            while i<len(lines) and lines[i].startswith('|'):rows.append(lines[i]);i+=1
            def cells(row):return [v.strip() for v in row.strip('|').split('|')]
            out.append('<div class="table" tabindex="0" role="region" aria-label="Таблица"><table><thead><tr>'+''.join('<th scope="col">'+inline(v)+'</th>' for v in cells(rows[0]))+'</tr></thead><tbody>')
            for row in rows[2:]:out.append('<tr>'+''.join('<td>'+inline(v)+'</td>' for v in cells(row))+'</tr>')
            out.append('</tbody></table></div>');continue
        if line.startswith('- '):
            out.append('<ul>')
            while i<len(lines) and lines[i].startswith('- '):out.append('<li>'+inline(lines[i][2:])+'</li>');i+=1
            out.append('</ul>');continue
        paras=[line];i+=1
        while i<len(lines) and lines[i].strip() and not re.match(r'^(#|```|\||- )',lines[i]):paras.append(lines[i]);i+=1
        out.append('<p>'+inline(' '.join(paras))+'</p>')
    return ''.join(out),toc

def main():
    count=0
    for n,d in enumerate(DIRS):
        for stem in ('lesson','references','exercises','review'):
            source=(d/(stem+'.md')).read_text(encoding='utf-8-sig');body,toc=render(source)
            title=source.splitlines()[0].lstrip('# ')
            nav='<a href="../../../index.html#section-2">Все разделы</a><a href="index.html">Урок</a><a href="references.html">Источники</a>'
            if n:nav+=f'<a href="../{DIRS[n-1].name}/index.html">← Предыдущий</a>'
            if n+1<len(DIRS):nav+=f'<a href="../{DIRS[n+1].name}/index.html">Следующий →</a>'
            page='<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+html.escape(title)+'</title><style>'+CSS+'</style></head><body><a class="skip" href="#content">К тексту урока</a><header><nav aria-label="Навигация курса">'+nav+'</nav></header><div class="layout"><aside><strong>На этой странице</strong>'+''.join('<a href="#'+a+'">'+html.escape(t)+'</a>' for a,t in toc)+'</aside><main id="content">'+body+'<footer>AI-Assisted Engineering · Раздел 2 · <a href="'+stem+'.md">Markdown</a></footer></main></div></body></html>'
            (d/('index.html' if stem=='lesson' else stem+'.html')).write_text(page,encoding='utf-8');count+=1
    print(f'Built {count} offline HTML pages')
if __name__=='__main__':main()
