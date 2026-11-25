"""Redesigned XI Standard Registration Form (same fields as the school's original PDF).
Regenerate:  python tools/make-registration-form.py public/images/logo/matric-logo.png public/forms/xi-registration-form.pdf
Needs: pip install reportlab  (uses the Calibri fonts that come with Windows)."""
import sys
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader

logo_path, out_path = sys.argv[1], sys.argv[2]

pdfmetrics.registerFont(TTFont("Cal", "C:/Windows/Fonts/calibri.ttf"))
pdfmetrics.registerFont(TTFont("CalB", "C:/Windows/Fonts/calibrib.ttf"))
pdfmetrics.registerFont(TTFont("CalI", "C:/Windows/Fonts/calibrii.ttf"))

GREEN = HexColor("#005829"); GREEN_D = HexColor("#003519"); GOLD = HexColor("#fdb813")
ACCENT = HexColor("#aa572e"); INK = HexColor("#21201f"); MUTED = HexColor("#6b695f")
LINE = HexColor("#b9b4a6"); TINT = HexColor("#eef6ea"); CREAM = HexColor("#fbf8ef")

W, H = A4
M = 46                      # side margin
c = canvas.Canvas(out_path, pagesize=A4)
c.setTitle("XI Standard Registration Form - Alagappa Matriculation Hr. Sec. School, Karaikudi")
c.setAuthor("Alagappa Matriculation Higher Secondary School")

# ---------- Header ----------
c.setFillColor(GREEN); c.rect(0, H - 8, W, 8, fill=1, stroke=0)
c.setFillColor(GOLD); c.rect(0, H - 11, W, 3, fill=1, stroke=0)

logo = ImageReader(logo_path)
ls = 78
c.drawImage(logo, M, H - 28 - ls, ls, ls, mask="auto", preserveAspectRatio=True)

tx = M + ls + 16
c.setFillColor(GREEN); c.setFont("CalB", 21)
c.drawString(tx, H - 52, "ALAGAPPA MATRICULATION")
c.setFont("CalB", 15.5)
c.drawString(tx, H - 71, "HIGHER SECONDARY SCHOOL")
c.setFillColor(ACCENT); c.setFont("CalB", 10.5)
c.drawString(tx, H - 87, "KARAIKUDI")
c.setFillColor(MUTED); c.setFont("Cal", 9.5)
c.drawString(tx, H - 101, "Alagappapuram, Karaikudi, Sivagangai District, Tamil Nadu  \u00b7  04565 - 225352, 04565 - 226532")

y = H - 122
c.setStrokeColor(GOLD); c.setLineWidth(1.6); c.line(M, y, W - M, y)

# ---------- Title banner ----------
y -= 36
c.setFillColor(GREEN); c.roundRect(M, y, W - 2 * M, 28, 7, fill=1, stroke=0)
c.setFillColor(white); c.setFont("CalB", 14.5)
c.drawCentredString(W / 2, y + 9.5, "XI STANDARD REGISTRATION FORM")

# ---------- Field helpers ----------
LX = M + 4                  # label x
FX = M + 170                # field start x
RX = W - M                  # right edge

def label(yy, text, sub=None):
    c.setFillColor(GREEN_D); c.setFont("CalB", 11.5); c.drawString(LX, yy, text)
    if sub:
        c.setFillColor(MUTED); c.setFont("CalI", 9); c.drawString(LX, yy - 12, sub)

def write_line(x1, x2, yy):
    c.setStrokeColor(LINE); c.setLineWidth(0.8); c.line(x1, yy - 3, x2, yy - 3)

def box(x, yy, s=11):
    c.setStrokeColor(GREEN); c.setLineWidth(1); c.setFillColor(white)
    c.roundRect(x, yy - 2, s, s, 2, fill=1, stroke=1)

def options(x, yy, items, gap=26):
    c.setFont("Cal", 11.5)
    for it in items:
        box(x, yy); c.setFillColor(INK); c.drawString(x + 17, yy, it)
        x += 17 + c.stringWidth(it, "Cal", 11.5) + gap

# ---------- Student details ----------
y -= 34
c.setFillColor(ACCENT); c.setFont("CalB", 10); c.drawString(LX, y, "STUDENT DETAILS")
c.setStrokeColor(HexColor("#e2dccb")); c.setLineWidth(0.8); c.line(LX + 100, y + 3.5, RX, y + 3.5)

y -= 30; label(y, "Name of the student", "(In block letters)"); write_line(FX, RX, y)
y -= 40; label(y, "Contact number"); write_line(FX, RX, y)
y -= 30; label(y, "School last studied"); write_line(FX, RX, y)
y -= 30; label(y, "Board"); options(FX, y, ["State Board", "CBSE", "ICSE"])
y -= 30; label(y, "Language required"); options(FX, y, ["Tamil", "Hindi", "Sanskrit"])

# ---------- Marks ----------
y -= 34
c.setFillColor(ACCENT); c.setFont("CalB", 10); c.drawString(LX, y, "X STANDARD MARKS")
c.setStrokeColor(HexColor("#e2dccb")); c.line(LX + 112, y + 3.5, RX, y + 3.5)

y -= 30; label(y, "Total marks obtained")
write_line(FX, FX + 90, y); c.setFillColor(INK); c.setFont("CalB", 12); c.drawString(FX + 96, y, "/ 500")
y -= 30; label(y, "Marks in Mathematics"); write_line(FX, FX + 90, y)
mx = FX + 150
c.setFillColor(GREEN_D); c.setFont("CalB", 11.5); c.drawString(mx, y, "Marks in Science")
c.setFillColor(MUTED); c.setFont("CalI", 9); c.drawString(mx, y - 12, "(Excluding practical)")
write_line(mx + 100, RX, y)

# ---------- Group preferred ----------
y -= 36
c.setFillColor(ACCENT); c.setFont("CalB", 10); c.drawString(LX, y, "GROUP PREFERRED")
c.setFillColor(MUTED); c.setFont("CalI", 9.5); c.drawString(LX + 104, y, "(tick one)")
c.setStrokeColor(HexColor("#e2dccb")); c.line(LX + 150, y + 3.5, RX, y + 3.5)

groups = [
    "Physics, Chemistry, Computer Science, Mathematics",
    "Physics, Chemistry, Biology, Mathematics",
    "Physics, Chemistry, Biology, Computer Science",
    "Physics, Chemistry, Botany, Zoology",
    "Commerce, Economics, Accountancy, Business Mathematics",
    "Commerce, Economics, Accountancy, Computer Science",
]
row_h = 23
panel_h = len(groups) * row_h + 14
y -= 12
c.setFillColor(TINT); c.setStrokeColor(HexColor("#cfe3c6")); c.setLineWidth(0.8)
c.roundRect(M, y - panel_h, W - 2 * M, panel_h, 8, fill=1, stroke=1)
gy = y - 22
for i, g in enumerate(groups):
    box(M + 18, gy)
    c.setFillColor(GREEN); c.setFont("CalB", 10); c.drawString(M + 38, gy, f"{i + 1}.")
    c.setFillColor(INK); c.setFont("Cal", 11.5); c.drawString(M + 54, gy, g)
    gy -= row_h
y -= panel_h

# ---------- Office use ----------
y -= 20
oh = 78
c.setFillColor(CREAM); c.setStrokeColor(GOLD); c.setLineWidth(1.1); c.setDash(4, 3)
c.roundRect(M, y - oh, W - 2 * M, oh, 8, fill=1, stroke=1); c.setDash()
c.setFillColor(ACCENT); c.setFont("CalB", 9.5); c.drawString(M + 14, y - 17, "FOR OFFICE USE")
c.setFillColor(GREEN_D); c.setFont("CalB", 11.5); c.drawString(M + 14, y - 40, "Group allotted")
write_line(M + 104, M + 300, y - 40)
c.setStrokeColor(LINE); c.line(RX - 160, y - 54, RX - 16, y - 54)
c.setFillColor(GREEN_D); c.setFont("CalB", 11); c.drawCentredString(RX - 88, y - 68, "PRINCIPAL")
y -= oh

# ---------- Note ----------
y -= 16
nh = 30
c.setFillColor(HexColor("#fff6d8")); c.roundRect(M, y - nh, W - 2 * M, nh, 6, fill=1, stroke=0)
c.setFillColor(GOLD); c.roundRect(M, y - nh, 5, nh, 2, fill=1, stroke=0)
c.setFillColor(INK); c.setFont("CalB", 11); c.drawString(M + 16, y - 19, "Note:")
c.setFont("Cal", 11); c.drawString(M + 48, y - 19, "Kindly attach the downloaded mark statement of X STD with this form.")

# ---------- Footer ----------
c.setFillColor(GREEN); c.rect(0, 0, W, 22, fill=1, stroke=0)
c.setFillColor(GOLD); c.setFont("CalB", 9)
c.drawCentredString(W / 2, 8, "PRUDENCE  \u00b7  PERSEVERANCE  \u00b7  PERFECTION")

c.showPage(); c.save()
print("saved", out_path)
