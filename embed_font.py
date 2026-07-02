import base64
with open('public/fonts/Brolink-Demo.otf', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')
with open('public/watch-ad.html', 'r', encoding='utf-8') as f:
    html = f.read()
html = html.replace("url('/fonts/Brolink-Demo.otf')", f"url('data:font/opentype;base64,{b64}')")
with open('public/watch-ad.html', 'w', encoding='utf-8') as f:
    f.write(html)
