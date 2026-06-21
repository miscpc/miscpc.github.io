from pathlib import Path
from bs4 import BeautifulSoup
from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"

FILES = [
    (PUBLIC / "resume-en.html", PUBLIC / "resume-en.pdf"),
    (PUBLIC / "resume-fr.html", PUBLIC / "resume-fr.pdf"),
]


def clean_text(value: str) -> str:
    return " ".join(value.replace("\xa0", " ").split())


def parse_resume(path: Path):
    soup = BeautifulSoup(path.read_text(encoding="utf-8"), "html.parser")
    page = soup.select_one(".page")
    header = page.find("header")
    title = clean_text(header.find("h1").get_text(" ", strip=True))
    subtitle = clean_text(header.select_one(".subtitle").get_text(" ", strip=True))

    contact_items = []
    for item in header.select_one(".contact").find_all(["a", "span"], recursive=False):
        if item.name == "a":
            contact_items.append((clean_text(item.get_text(" ", strip=True)), item.get("href", "")))
        else:
            contact_items.append((clean_text(item.get_text(" ", strip=True)), None))

    main_sections = []
    for section in page.select("main > section"):
        heading = clean_text(section.find("h2").get_text(" ", strip=True))
        if heading.lower().startswith(("professional experience", "expérience professionnelle")):
            roles = []
            for role in section.select(".role"):
                role_title = clean_text(role.select_one(".role-title").get_text(" ", strip=True))
                company = clean_text(role.select_one(".company").get_text(" ", strip=True))
                period = clean_text(role.select_one(".period").get_text(" ", strip=True))
                bullets = [clean_text(li.get_text(" ", strip=True)) for li in role.select("li")]
                roles.append(
                    {
                        "role_title": role_title,
                        "company": company,
                        "period": period,
                        "bullets": bullets,
                    }
                )
            main_sections.append({"type": "roles", "heading": heading, "roles": roles})
        else:
            paragraph = clean_text(section.find("p").get_text(" ", strip=True))
            main_sections.append({"type": "paragraph", "heading": heading, "paragraph": paragraph})

    aside_sections = []
    for section in page.select("aside > section"):
        heading = clean_text(section.find("h2").get_text(" ", strip=True))
        if section.select_one(".cert-list"):
            items = []
            for li in section.select(".cert-list li"):
                link = li.find("a")
                filename = li.select_one(".filename")
                items.append(
                    {
                        "label": clean_text(link.get_text(" ", strip=True)),
                        "href": link.get("href", ""),
                        "filename": clean_text(filename.get_text(" ", strip=True)) if filename else "",
                    }
                )
            aside_sections.append({"type": "certs", "heading": heading, "items": items})
        elif section.select_one(".skill-list"):
            items = [clean_text(li.get_text(" ", strip=True)) for li in section.select(".skill-list li")]
            aside_sections.append({"type": "bullets", "heading": heading, "items": items})
        elif section.select_one(".two-col-list"):
            items = [clean_text(li.get_text(" ", strip=True)) for li in section.select(".two-col-list li")]
            aside_sections.append({"type": "skills", "heading": heading, "items": items})
        elif section.select_one(".meta-list"):
            items = [clean_text(li.get_text(" ", strip=True)) for li in section.select(".meta-list li")]
            aside_sections.append({"type": "meta", "heading": heading, "items": items})
        else:
            lines = [clean_text(p.get_text(" ", strip=True)) for p in section.find_all("p")]
            aside_sections.append({"type": "text", "heading": heading, "lines": lines})

    return {
        "title": title,
        "subtitle": subtitle,
        "contacts": contact_items,
        "main_sections": main_sections,
        "aside_sections": aside_sections,
    }


def build_pdf(data, out_path: Path):
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name="Name", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=22, leading=24, textColor=colors.black, spaceAfter=4))
    styles.add(ParagraphStyle(name="Subtitle", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10, leading=12, textColor=colors.HexColor("#444444"), spaceAfter=8))
    styles.add(ParagraphStyle(name="Contact", parent=styles["Normal"], fontName="Helvetica", fontSize=9.2, leading=11.5, textColor=colors.HexColor("#444444")))
    styles.add(ParagraphStyle(name="SectionHeading", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=10.5, leading=12, textColor=colors.black, spaceBefore=8, spaceAfter=4))
    styles.add(ParagraphStyle(name="Body", parent=styles["Normal"], fontName="Helvetica", fontSize=9.5, leading=13, textColor=colors.black))
    styles.add(ParagraphStyle(name="RoleTitle", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10.5, leading=12.5, textColor=colors.black))
    styles.add(ParagraphStyle(name="Company", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9.6, leading=11.5, textColor=colors.HexColor("#444444")))
    styles.add(ParagraphStyle(name="Period", parent=styles["Normal"], fontName="Helvetica", fontSize=8.8, leading=10, alignment=TA_RIGHT, textColor=colors.HexColor("#555555")))
    styles.add(ParagraphStyle(name="ResumeBullet", parent=styles["Normal"], fontName="Helvetica", fontSize=9.2, leading=12.2, leftIndent=12, firstLineIndent=-8, textColor=colors.black, spaceAfter=2))
    styles.add(ParagraphStyle(name="Small", parent=styles["Normal"], fontName="Helvetica", fontSize=8.8, leading=11, textColor=colors.HexColor("#444444")))

    doc = SimpleDocTemplate(
        str(out_path),
        pagesize=A4,
        rightMargin=0.55 * inch,
        leftMargin=0.55 * inch,
        topMargin=0.6 * inch,
        bottomMargin=0.6 * inch,
        title=data["title"],
        author="Arena.ai",
    )

    story = []
    story.append(Paragraph(data["title"], styles["Name"]))
    story.append(Paragraph(data["subtitle"], styles["Subtitle"]))

    contact_parts = []
    for label, href in data["contacts"]:
        if href:
            contact_parts.append(f'<link href="{href}" color="black"><u>{label}</u></link>')
        else:
            contact_parts.append(label)
    story.append(Paragraph(" &nbsp;&nbsp;|&nbsp;&nbsp; ".join(contact_parts), styles["Contact"]))
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=1.2, color=colors.HexColor("#7a7a7a"), spaceBefore=0, spaceAfter=10))

    for section in data["main_sections"]:
        story.append(Paragraph(section["heading"], styles["SectionHeading"]))
        story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor("#cfcfcf"), spaceBefore=0, spaceAfter=6))
        if section["type"] == "paragraph":
            story.append(Paragraph(section["paragraph"], styles["Body"]))
            story.append(Spacer(1, 8))
        else:
            for role in section["roles"]:
                block = [
                    Paragraph(role["role_title"], styles["RoleTitle"]),
                    Paragraph(role["company"], styles["Company"]),
                    Paragraph(role["period"], styles["Small"]),
                    Spacer(1, 2),
                ]
                for bullet in role["bullets"]:
                    block.append(Paragraph(f"• {bullet}", styles["ResumeBullet"]))
                block.append(Spacer(1, 8))
                story.append(KeepTogether(block))

    story.append(PageBreak())

    for idx, section in enumerate(data["aside_sections"]):
        story.append(Paragraph(section["heading"], styles["SectionHeading"]))
        story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor("#cfcfcf"), spaceBefore=0, spaceAfter=6))

        if section["type"] == "certs":
            for item in section["items"]:
                line = f'<link href="{item["href"]}" color="black"><u>{item["label"]}</u></link>'
                if item["filename"]:
                    line += f'<br/><font size="8.5" color="#555555">{item["filename"]}</font>'
                story.append(Paragraph(line, styles["Body"]))
                story.append(Spacer(1, 4))
        elif section["type"] in {"bullets", "skills", "meta"}:
            for item in section["items"]:
                story.append(Paragraph(f"• {item}", styles["ResumeBullet"]))
            story.append(Spacer(1, 6))
        else:
            for line in section["lines"]:
                story.append(Paragraph(line, styles["Body"]))
                story.append(Spacer(1, 2))
            story.append(Spacer(1, 6))

        if idx != len(data["aside_sections"]) - 1:
            story.append(Spacer(1, 6))

    def add_page_chrome(canvas, doc):
        canvas.saveState()
        canvas.setFont("Helvetica", 8)
        canvas.setFillColor(colors.HexColor("#666666"))
        canvas.drawRightString(doc.pagesize[0] - doc.rightMargin, 0.35 * inch, f"Page {canvas.getPageNumber()}")
        canvas.restoreState()

    doc.build(story, onFirstPage=add_page_chrome, onLaterPages=add_page_chrome)


if __name__ == "__main__":
    for html_path, pdf_path in FILES:
        data = parse_resume(html_path)
        build_pdf(data, pdf_path)
        print(f"Built {pdf_path.relative_to(ROOT)}")
