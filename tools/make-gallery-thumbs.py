"""Make light gallery tiles: public/images/.../name-thumb.jpg (640px wide, original colours).
Run after adding photos to the `gallery` list in src/data/content.js:
    python tools/make-gallery-thumbs.py
"""
import os, re
os.chdir(os.path.join(os.path.dirname(__file__), ".."))
src_js = open("src/data/content.js", encoding="utf-8").read()
block = re.search(r"export const gallery = \[(.*?)\n\];", src_js, re.S).group(1)
paths = re.findall(r'src: "(/images/[^"]+)"', block)
import sys
from PIL import Image
total_in=total_out=0
for p in paths:
    src="public"+p
    if p.endswith("-800.jpg"): dst=src.replace("-800.jpg","-thumb.jpg")
    else: dst=src[:-4]+"-thumb.jpg"
    im=Image.open(src); icc=im.info.get("icc_profile")
    im=im.convert("RGB"); im.thumbnail((640,640*2), Image.LANCZOS)
    kw=dict(quality=80, optimize=True, progressive=True)
    if icc: kw["icc_profile"]=icc
    im.save(dst,"JPEG",**kw)
    total_in+=os.path.getsize(src); total_out+=os.path.getsize(dst)
print(total_in//1024,"KB ->",total_out//1024,"KB")
