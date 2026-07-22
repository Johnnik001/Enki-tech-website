#!/usr/bin/env python3

from pathlib import Path
import sys

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUTPUT = ROOT / "public" / "downloads" / "enki-tech-capability-statement.pdf"
LOGO = ROOT / "public" / "logo" / "enki-tech-logo-horizontal-white-exact.png"
PORTRAIT = ROOT / "public" / "images" / "eugene-tsvetov-enhanced.jpg"

PAGE_W, PAGE_H = A4
MARGIN = 42

NAVY = HexColor("#0B1D3A")
NAVY_SOFT = HexColor("#143A6B")
BLUE = HexColor("#2563EB")
CYAN = HexColor("#82CFFF")
TEXT = HexColor("#0B1D3A")
TEXT_SOFT = HexColor("#516070")
SILVER = HexColor("#D9DDE3")
LIGHT = HexColor("#F2F4F7")
WHITE = HexColor("#FFFFFF")


def wrap_lines(text, font_name, font_size, max_width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        candidate = word if not current else f"{current} {word}"
        if stringWidth(candidate, font_name, font_size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(pdf, text, x, y, max_width, font="Helvetica", size=9, color=TEXT_SOFT, leading=None):
    leading = leading or size * 1.32
    pdf.setFont(font, size)
    pdf.setFillColor(color)
    for line in wrap_lines(text, font, size, max_width):
        pdf.drawString(x, y, line)
        y -= leading
    return y


def draw_label(pdf, text, x, y, color=BLUE):
    pdf.setFillColor(color)
    pdf.setFont("Helvetica-Bold", 7.2)
    pdf.drawString(x, y, text.upper())


def draw_section_title(pdf, text, x, y, max_width):
    return draw_wrapped(pdf, text, x, y, max_width, font="Helvetica-Bold", size=18, color=TEXT, leading=20)


def draw_footer(pdf, page_number):
    pdf.setStrokeColor(SILVER)
    pdf.setLineWidth(0.6)
    pdf.line(MARGIN, 45, PAGE_W - MARGIN, 45)
    pdf.setFillColor(TEXT_SOFT)
    pdf.setFont("Helvetica", 7.2)
    pdf.drawString(MARGIN, 30, "ENKI TECH EOOD - INDEPENDENT EUROPEAN IT CONSULTING")
    pdf.drawRightString(PAGE_W - MARGIN, 30, f"CAPABILITY STATEMENT - {page_number}/2")


def draw_metric(pdf, x, y, width, value, label):
    pdf.setFillColor(WHITE)
    pdf.roundRect(x, y, width, 70, 11, fill=1, stroke=0)
    pdf.setFillColor(NAVY)
    pdf.setFont("Helvetica-Bold", 15)
    pdf.drawString(x + 12, y + 43, value)
    draw_wrapped(pdf, label, x + 12, y + 27, width - 24, size=7.4, color=TEXT_SOFT, leading=9)


def draw_capability_card(pdf, x, y, width, title, text):
    pdf.setFillColor(LIGHT)
    pdf.roundRect(x, y, width, 58, 10, fill=1, stroke=0)
    pdf.setFillColor(BLUE)
    pdf.circle(x + 13, y + 42, 3.3, fill=1, stroke=0)
    pdf.setFillColor(TEXT)
    pdf.setFont("Helvetica-Bold", 9.2)
    pdf.drawString(x + 23, y + 38, title)
    draw_wrapped(pdf, text, x + 13, y + 23, width - 26, size=7.4, color=TEXT_SOFT, leading=9)


def draw_value_item(pdf, x, y, width, text):
    pdf.setFillColor(BLUE)
    pdf.roundRect(x, y - 2, 4, 22, 2, fill=1, stroke=0)
    draw_wrapped(pdf, text, x + 12, y + 10, width - 12, font="Helvetica-Bold", size=8.2, color=TEXT, leading=10)


def draw_case_card(pdf, x, y, width, proof, title, detail, outcomes):
    height = 112
    pdf.setFillColor(LIGHT)
    pdf.roundRect(x, y, width, height, 12, fill=1, stroke=0)

    pdf.setFillColor(BLUE)
    pdf.roundRect(x + 14, y + height - 28, 88, 16, 8, fill=1, stroke=0)
    pdf.setFillColor(WHITE)
    pdf.setFont("Helvetica-Bold", 7.2)
    pdf.drawCentredString(x + 58, y + height - 22.5, proof)

    left_x = x + 14
    left_w = width - 176
    title_y = y + height - 43
    title_end = draw_wrapped(pdf, title, left_x, title_y, left_w, font="Helvetica-Bold", size=11.5, color=TEXT, leading=13)
    draw_wrapped(pdf, detail, left_x, title_end - 3, left_w, size=7.7, color=TEXT_SOFT, leading=9.4)

    divider_x = x + width - 150
    pdf.setStrokeColor(SILVER)
    pdf.setLineWidth(0.7)
    pdf.line(divider_x, y + 14, divider_x, y + height - 14)
    draw_label(pdf, "Selected outcomes", divider_x + 12, y + height - 23, color=NAVY_SOFT)
    bullet_y = y + height - 42
    for outcome in outcomes:
        pdf.setFillColor(BLUE)
        pdf.circle(divider_x + 15, bullet_y + 2, 2.2, fill=1, stroke=0)
        bullet_y = draw_wrapped(pdf, outcome, divider_x + 23, bullet_y + 5, 120, size=7.4, color=TEXT, leading=9) - 6


def add_link(pdf, text, x, y, font_size, url, color=BLUE):
    pdf.setFont("Helvetica-Bold", font_size)
    pdf.setFillColor(color)
    pdf.drawString(x, y, text)
    width = stringWidth(text, "Helvetica-Bold", font_size)
    pdf.linkURL(url, (x, y - 2, x + width, y + font_size + 2), relative=0)
    return width


def page_one(pdf):
    pdf.setFillColor(WHITE)
    pdf.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    pdf.setFillColor(NAVY)
    pdf.rect(0, 612, PAGE_W, PAGE_H - 612, fill=1, stroke=0)
    pdf.drawImage(ImageReader(LOGO), MARGIN, 790, width=152, height=29, mask="auto", preserveAspectRatio=True)
    draw_label(pdf, "Capability statement - 2026", MARGIN, 758, color=CYAN)
    title_y = draw_wrapped(
        pdf,
        "Senior Microsoft Cloud delivery for complex European environments.",
        MARGIN,
        728,
        PAGE_W - (2 * MARGIN),
        font="Helvetica-Bold",
        size=27,
        color=WHITE,
        leading=30,
    )
    draw_wrapped(
        pdf,
        "Enki Tech helps organizations and delivery partners improve Microsoft 365, Azure, identity, endpoint, collaboration and IT operations environments through senior consulting, operational support and automation.",
        MARGIN,
        title_y - 8,
        PAGE_W - (2 * MARGIN),
        size=9.2,
        color=SILVER,
        leading=12,
    )

    metrics = [
        ("15+ years", "Cloud, workplace and hybrid infrastructure experience"),
        ("12,000+ users", "Windows 365 Cloud PC migration experience"),
        ("L2/L3", "Collaboration operations and escalation ownership"),
        ("Europe", "Bulgaria - Belgium - cross-border B2B delivery"),
    ]
    gap = 8
    metric_w = (PAGE_W - 2 * MARGIN - 3 * gap) / 4
    for index, (value, label) in enumerate(metrics):
        draw_metric(pdf, MARGIN + index * (metric_w + gap), 526, metric_w, value, label)

    draw_label(pdf, "Core capabilities", MARGIN, 495, color=NAVY_SOFT)
    draw_section_title(pdf, "Focused expertise across the Microsoft Cloud lifecycle", MARGIN, 471, PAGE_W - 2 * MARGIN)

    capabilities = [
        ("Microsoft 365 & Collaboration", "Exchange Online, Teams, SharePoint, OneDrive and hybrid collaboration operations."),
        ("Azure & Hybrid Infrastructure", "Azure administration, Windows Server, Active Directory and Entra Connect."),
        ("Identity, Endpoint & Security", "Entra ID, Conditional Access, Intune, Windows 365 and security baselines."),
        ("Automation & IT Operations", "PowerShell automation, provisioning, reporting and service improvement."),
        ("AI-enhanced IT Operations", "Controlled AI workflows for documentation, incident summaries and knowledge reuse."),
        ("Partner Delivery", "Flexible senior capacity for projects, transitions, escalations and subcontracting."),
    ]
    col_gap = 10
    card_w = (PAGE_W - 2 * MARGIN - col_gap) / 2
    card_y = 376
    for index, (title, text) in enumerate(capabilities):
        col = index % 2
        row = index // 2
        draw_capability_card(pdf, MARGIN + col * (card_w + col_gap), card_y - row * 68, card_w, title, text)

    draw_label(pdf, "Where Enki Tech adds value", MARGIN, 192, color=NAVY_SOFT)
    draw_section_title(pdf, "Senior contribution where delivery risk is highest", MARGIN, 170, PAGE_W - 2 * MARGIN)
    values = [
        "Transformation and migration workstreams",
        "Complex Microsoft Cloud incidents and escalations",
        "Operational reliability, governance and documentation",
        "Automation of repeatable administration and reporting",
    ]
    value_w = (PAGE_W - 2 * MARGIN - col_gap) / 2
    for index, value in enumerate(values):
        col = index % 2
        row = index // 2
        draw_value_item(pdf, MARGIN + col * (value_w + col_gap), 133 - row * 34, value_w, value)

    pdf.setFillColor(NAVY)
    pdf.roundRect(MARGIN, 56, PAGE_W - 2 * MARGIN, 42, 10, fill=1, stroke=0)
    pdf.setFillColor(WHITE)
    pdf.setFont("Helvetica-Bold", 8.4)
    pdf.drawString(MARGIN + 14, 80, "PROJECT DELIVERY - OPERATIONAL IMPROVEMENT - PARTNER SUPPORT")
    pdf.setFillColor(CYAN)
    pdf.setFont("Helvetica", 7.6)
    pdf.drawString(MARGIN + 14, 65, "Independent consulting for direct clients, integrators and technology partners across Europe")

    draw_footer(pdf, 1)
    pdf.showPage()


def page_two(pdf):
    pdf.setFillColor(WHITE)
    pdf.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    pdf.setFillColor(NAVY)
    pdf.rect(0, 736, PAGE_W, PAGE_H - 736, fill=1, stroke=0)
    pdf.drawImage(ImageReader(LOGO), MARGIN, 786, width=130, height=25, mask="auto", preserveAspectRatio=True)
    draw_label(pdf, "Selected experience & delivery model", MARGIN, 767, color=CYAN)
    pdf.setFillColor(WHITE)
    pdf.setFont("Helvetica-Bold", 18)
    pdf.drawString(MARGIN, 748, "Evidence, engagement and trusted delivery")

    draw_label(pdf, "Selected experience", MARGIN, 714, color=NAVY_SOFT)
    draw_section_title(pdf, "Sanitized enterprise delivery examples", MARGIN, 692, PAGE_W - 2 * MARGIN)

    cases = [
        (
            "12,000+ USERS",
            "Large-scale Windows 365 Cloud PC migration",
            "Technical leadership in a transition from Citrix to Windows 365 across hybrid production and development environments.",
            ["Endpoint manageability", "Operational flexibility", "Migration support"],
        ),
        (
            "L2/L3 OPERATIONS",
            "Digital collaboration operations in secure environments",
            "Operational responsibility across Exchange, Exchange Online and Microsoft Teams with troubleshooting and risk input.",
            ["Service reliability", "Incident ownership", "Security-related SME support"],
        ),
        (
            "POWERSHELL",
            "Automation for recurring IT operations",
            "Automation of provisioning, mailbox administration, backup routines and compliance reporting with documentation and traceability.",
            ["Lower manual workload", "Better consistency", "Improved audit readiness"],
        ),
    ]
    case_y = 550
    for proof, title, detail, outcomes in cases:
        draw_case_card(pdf, MARGIN, case_y, PAGE_W - 2 * MARGIN, proof, title, detail, outcomes)
        case_y -= 124

    lower_y = 284
    left_w = 248
    right_x = MARGIN + left_w + 18
    right_w = PAGE_W - MARGIN - right_x

    draw_label(pdf, "Engagement models", MARGIN, lower_y, color=NAVY_SOFT)
    draw_section_title(pdf, "Flexible B2B cooperation", MARGIN, lower_y - 22, left_w)
    models = [
        "Defined project or technical workstream",
        "Flexible senior consulting capacity",
        "L2/L3 operational and escalation support",
        "Partner-led subcontracting engagement",
    ]
    model_y = lower_y - 58
    for model in models:
        pdf.setFillColor(BLUE)
        pdf.circle(MARGIN + 3, model_y + 2, 2.5, fill=1, stroke=0)
        model_y = draw_wrapped(pdf, model, MARGIN + 12, model_y + 5, left_w - 12, font="Helvetica-Bold", size=8, color=TEXT, leading=10) - 7

    draw_label(pdf, "Founder & credentials", right_x, lower_y, color=NAVY_SOFT)
    pdf.setFillColor(LIGHT)
    pdf.roundRect(right_x, 121, right_w, 139, 12, fill=1, stroke=0)
    pdf.drawImage(ImageReader(PORTRAIT), right_x + 12, 174, width=70, height=70, mask="auto", preserveAspectRatio=True)
    pdf.setFillColor(TEXT)
    pdf.setFont("Helvetica-Bold", 11)
    pdf.drawString(right_x + 92, 225, "Evgeniy Tsvetov")
    draw_wrapped(pdf, "Founder & Lead Microsoft Cloud Consultant", right_x + 92, 208, right_w - 104, size=7.8, color=TEXT_SOFT, leading=10)
    draw_wrapped(pdf, "15+ years across cloud, workplace, hybrid infrastructure and secure operations.", right_x + 92, 181, right_w - 104, size=7.5, color=TEXT_SOFT, leading=9)
    pdf.setStrokeColor(SILVER)
    pdf.line(right_x + 12, 163, right_x + right_w - 12, 163)
    draw_wrapped(pdf, "Microsoft Certified: Azure AI Fundamentals", right_x + 12, 149, right_w - 24, font="Helvetica-Bold", size=7.4, color=TEXT, leading=9)
    draw_wrapped(pdf, "Azure Infrastructure as Code - Terraform on Azure", right_x + 12, 132, right_w - 24, size=7.2, color=TEXT_SOFT, leading=9)

    pdf.setFillColor(BLUE)
    pdf.roundRect(MARGIN, 58, PAGE_W - 2 * MARGIN, 49, 11, fill=1, stroke=0)
    pdf.setFillColor(WHITE)
    pdf.setFont("Helvetica-Bold", 10.5)
    pdf.drawString(MARGIN + 14, 87, "Discuss a Microsoft Cloud project or partner opportunity")
    link_x = MARGIN + 14
    link_y = 70
    link_x += add_link(pdf, "enki-tech.eu", link_x, link_y, 8, "https://enki-tech.eu", color=WHITE) + 18
    link_x += add_link(pdf, "ytsvetov@hotmail.com", link_x, link_y, 8, "mailto:ytsvetov@hotmail.com", color=WHITE) + 18
    add_link(pdf, "LinkedIn", link_x, link_y, 8, "https://www.linkedin.com/company/enki-tech-eood/", color=WHITE)

    draw_footer(pdf, 2)
    pdf.showPage()


def build_pdf(output_path):
    output_path.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(output_path), pagesize=A4, pageCompression=1)
    pdf.setTitle("Enki Tech Capability Statement")
    pdf.setAuthor("Enki Tech EOOD")
    pdf.setSubject("Microsoft Cloud, Digital Collaboration and IT Operations Consulting")
    pdf.setKeywords("Microsoft 365, Azure, Entra ID, Intune, Windows 365, PowerShell, partner delivery")
    page_one(pdf)
    page_two(pdf)
    pdf.save()


if __name__ == "__main__":
    destination = Path(sys.argv[1]).expanduser().resolve() if len(sys.argv) > 1 else DEFAULT_OUTPUT
    build_pdf(destination)
    print(destination)
