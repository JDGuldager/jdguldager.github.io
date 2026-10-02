import re, html
from pathlib import Path
from pypdf import PdfReader
from PIL import Image, ImageOps, ImageDraw
for n in ['fyrmester','cartastrophe']:
 s=Path('research',n+'.html').read_text(encoding='utf-8')
 print(n, html.unescape(re.sub('<[^>]+>',' ',s))[ -24000:])
 print('IMAGES', re.findall(r'<img[^>]+src="([^"]+)"',s))
 print('VIDEO', re.findall(r'<iframe[^>]+src="([^"]+)"',s))
imgs=[]
names=['MED8_Project_Report-3.pdf','SUI_Mini_Project_Report-2.pdf','Mobile_and_Wearable_Computing.pdf','Konference_Submission___G504-1.pdf']
for k,n in enumerate(names):
 r=PdfReader(Path('C:/Users/gulda/Downloads',n))
 for p,page in enumerate(r.pages):
  for j,im in enumerate(page.images):
   if im.image.width>400 and im.image.height>200:
    key=f'{k}-{p+1}-{j}'
    im.image.convert('RGB').save(Path('research',key+'.jpg'))
    tile=Image.new('RGB',(240,160),'white')
    tile.paste(ImageOps.contain(im.image.convert('RGB'),(240,135)),(0,0))
    ImageDraw.Draw(tile).text((5,140),key,fill='black')
    imgs.append(tile)
  if p>18: break
sheet=Image.new('RGB',(960,160*((len(imgs)+3)//4)),'white')
for i,im in enumerate(imgs): sheet.paste(im,((i%4)*240,(i//4)*160))
sheet.save('research/contact.jpg')
