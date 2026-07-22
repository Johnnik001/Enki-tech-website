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
    pdf.setFont("Helvetica-Bold", 7.4)
    pdf.drawString(x, y, text.upper())


def draw_section_title(pdf, text, x, y, max_width):
    return draw_wrapped(pdf, text, x, y, max_width, font="Helvetica-Bold", size=17.2, color=TEXT, leading=19)


def draw_footer(pdf, page_number):
    pdf.setStrokeColor(SILVER)
    pdf.setLineWidth(0.6)
    pdf.line(MARGIN, 44, PAGE_W - MARGIN, 44)
    pdf.setFillColor(TEXT_SOFT)
    pdf.setFont("Helvetica", 7)
    pdf.drawString(MARGIN, 29, "ENKI TECH EOOD - INDEPENDENT EUROPEAN IT CONSULTING")
    pdf.drawRightString(PAGE_W - MARGIN, 29, f"CAPABILITY STATEMENT - {page_number}/2")


def draw_metric(pdf, x, y, width, value, label):
    pdf.setFillColor(LIGHT)
    pdf.roundRect(x, y, width, 60, 10, fill=1, stroke=0)
    pdf.setFillColor(NAVY)
    pdf.setFont("Helvetica-Bold", 14)
    pdf.drawString(x + 11, y + 37, value)
    draw_wrapped(pdf, label, x + 11, y + 22, width - 22, size=7.6, color=TEXT_SOFT, leading=9)


def draw_capability_card(pdf, x, y, width, title, text):
    pdf.setFillColor(LIGHT)
    pdf.roundRect(x, y, width, 56, 10, fill=1, stroke=0)
    pdf.setFillColor(BLUE)
    pdf.circle(x + 13, y + 40, 3.2, fill=1, stroke=0)
    pdf.setFillColor(TEXT)
    pdf.setFont("Helvetica-Bold", 9.3)
    pdf.drawString(x + 23, y + 36, title)
    draw_wrapped(pdf, text, x + 13, y + 21, width - 26, size=7.7, color=TEXT_SOFT, leading=9.2)


def draw_value_item(pdf, x, y, width, text):
    pdf.setFillColor(BLUE)
    pdf.roundRect(x, y - 1, 4, 20, 2, fill=1, stroke=0)
    draw_wrapped(pdf, text, x + 12, y + 9, width - 12, font="Helvetica-Bold", size=8.3, color=TEXT, leading=10)


def draw_case_card(pdf, x, y, width, proof, title, detail, outcomes):
    height = 94
    pdf.setFillColor(LIGHT)
    pdf.roundRect(x, y, width, height, 11, fill=1, stroke=0)

    pdf.setFillColor(BLUE)
    pdf.roundRect(x + 14, y + height - 28, 92, 16, 8, fill=1, stroke=0)
    pdf.setFillColor(WHITE)
    pdf.setFont("Helvetica-Bold", 7.3)
    pdf.drawCentredString(x + 60, y + height - 22.5, proof)

    left_x = x + 14
    divider_x = x + width - 154
    left_w = divider_x - left_x - 16
    title_y = y + height - 43
    title_end = draw_wrapped(pdf, title, left_x, title_y, left_w, font="Helvetica-Bold", size=10.7, color=TEXT, leading=12)
    draw_wrapped(pdf, detail, left_x, title_end - 3, left_w, size=8, color=TEXT_SOFT, leading=9.5)

    pdf.setStrokeColor(SILVER)
    pdf.setLineWidth(0.7)
    pdf.line(divider_x, y + 12, divider_x, y + height - 12)
    draw_label(pdf, "Selected outcomes", divider_x + 12, y + height - 24, color=NAVY_SOFT)
    bullet_y = y + height - 43
    for outcome in outcomes:
        pdf.setFillColor(BLUE)
        pdf.circle(divider_x + 15, bullet_y + 2, 2.2, fill=1, stroke=0)
        pdf.setFillColor(TEXT)
        pdf.setFont("Helvetica", 7.7)
        pdf.drawString(divider_x + 23, bullet_y, outcome)
        bullet_y -= 13


def draw_panel(pdf, x, y, width, height):
    pdf.setFillColor(LIGHT)
    pdf.roundRect(x, y, width, height, 11, fill=1, stroke=0)


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
    pdf.drawImage(ImageReader(LOGO), MARGIN, 790, width=138, height=26, mask="auto", preserveAspectRatio=True)
    draw_label(pdf, "Capability statement - 2026", MARGIN, 756, color=CYAN)
    title_y = draw_wrapped(
        pdf,
        "Senior Microsoft Cloud delivery for complex European environments.",
        MARGIN,
        726,
        PAGE_W - (2 * MARGIN),
        font="Helvetica-Bold",
        size=25.5,
        color=WHITE,
        leading=28,
    )
    draw_wrapped(
        pdf,
        "Enki Tech helps organizations and delivery partners improve Microsoft 365, Azure, identity, endpoint, collaboration and IT operations environments through senior consulting, operational support and automation.",
        MARGIN,
        title_y - 5,
        PAGE_W - (2 * MARGIN),
        size=9,
        color=SILVER,
        leading=11.5,
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
    card_y = 380
    for index, (title, text) in enumerate(capabilities):
        col = index % 2
        row = index // 2
        draw_capability_card(pdf, MARGIN + col * (card_w + col_gap), card_y - row * 64, card_w, title, text)

    draw_label(pdf, "Where Enki Tech adds value", MARGIN, 218, color=NAVY_SOFT)
    draw_section_title(pdf, "Senior contribution where delivery risk is highest", MARGIN, 194, PAGE_W - 2 * MARGIN)
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
        draw_value_item(pdf, MARGIN + col * (value_w + col_gap), 148 - row * 31, value_w, value)

    pdf.setFillColor(NAVY)
    pdf.roundRect(MARGIN, 58, PAGE_W - 2 * MARGIN, 43, 10, fill=1, stroke=0)
    pdf.setFillColor(WHITE)
    pdf.setFont("Helvetica-Bold", 8.5)
    pdf.drawString(MARGIN + 14, 82, "PROJECT DELIVERY - OPERATIONAL IMPROVEMENT - PARTNER SUPPORT")
    pdf.setFillColor(CYAN)
    pdf.setFont("Helvetica", 7.7)
    pdf.drawString(MARGIN + 14, 67, "Independent consulting for direct clients, integrators and technology partners across Europe")

    draw_footer(pdf, 1)
    pdf.showPage()


def page_two(pdf):
    pdf.setFillColor(WHITE)
    pdf.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    pdf.setFillColor(NAVY)
    pdf.rect(0, 716, PAGE_W, PAGE_H - 716, fill=1, stroke=0)
    pdf.drawImage(ImageReader(LOGO), MARGIN, 790, width=138, height=26, mask="auto", preserveAspectRatio=True)
    draw_label(pdf, "Selected experience & delivery model", MARGIN, 766, color=CYAN)
    pdf.setFillColor(WHITE)
    pdf.setFont("Helvetica-Bold", 20)
    pdf.drawString(MARGIN, 738, "Evidence, engagement and trusted delivery")

    draw_label(pdf, "Selected experience", MARGIN, 687, color=NAVY_SOFT)
    draw_section_title(pdf, "Sanitized enterprise delivery examples", MARGIN, 663, PAGE_W - 2 * MARGIN)

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
    case_y = 526
    for proof, title, detail, outcomes in cases:
        draw_case_card(pdf, MARGIN, case_y, PAGE_W - 2 * MARGIN, proof, title, detail, outcomes)
        case_y -= 104

    panel_y = 126
    panel_h = 162
    panel_gap = 12
    left_w = (PAGE_W - 2 * MARGIN - panel_gap) / 2
    right_x = MARGIN + left_w + panel_gap
    right_w = PAGE_W - MARGIN - right_x

    draw_panel(pdf, MARGIN, panel_y, left_w, panel_h)
    draw_label(pdf, "Engagement models", MARGIN + 14, panel_y + panel_h - 22, color=NAVY_SOFT)
    draw_wrapped(
        pdf,
        "Flexible B2B cooperation",
        MARGIN + 14,
        panel_y + panel_h - 46,
        left_w - 28,
        font="Helvetica-Bold",
        size=15.5,
        color=TEXT,
        leading=17,
    )
    models = [
        "Defined project or technical workstream",
        "Flexible senior consulting capacity",
        "L2/L3 operational and escalation support",
        "Partner-led subcontracting engagement",
    ]
    model_y = panel_y + 80
    for model in models:
        pdf.setFillColor(BLUE)
        pdf.circle(MARGIN + 17, model_y + 2, 2.4, fill=1, stroke=0)
        pdf.setFillColor(TEXT)
        pdf.setFont("Helvetica-Bold", 8.1)
        pdf.drawString(MARGIN + 27, model_y, model)
        model_y -= 17

    draw_panel(pdf, right_x, panel_y, right_w, panel_h)
    draw_label(pdf, "Founder & credentials", right_x + 14, panel_y + panel_h - 22, color=NAVY_SOFT)
    pdf.drawImage(ImageReader(PORTRAIT), right_x + 14, panel_y + 52, width=72, height=72, mask="auto", preserveAspectRatio=True)
    pdf.setFillColor(TEXT)
    pdf.setFont("Helvetica-Bold", 11.2)
    pdf.drawString(right_x + 96, panel_y + 103, "Evgeniy Tsvetov")
    draw_wrapped(pdf, "Founder & Lead Microsoft Cloud Consultant", right_x + 96, panel_y + 85, right_w - 110, size=7.8, color=TEXT_SOFT, leading=9.5)
    draw_wrapped(pdf, "15+ years across cloud, workplace and secure operations.", right_x + 96, panel_y + 55, right_w - 110, size=7.6, color=TEXT_SOFT, leading=9)
    pdf.setStrokeColor(SILVER)
    pdf.line(right_x + 14, panel_y + 42, right_x + right_w - 14, panel_y + 42)
    draw_wrapped(pdf, "Microsoft Certified: Azure AI Fundamentals", right_x + 14, panel_y + 28, right_w - 28, font="Helvetica-Bold", size=7.5, color=TEXT, leading=9)
    draw_wrapped(pdf, "Azure Infrastructure as Code - Terraform on Azure", right_x + 14, panel_y + 14, right_w - 28, size=7.3, color=TEXT_SOFT, leading=9)

    pdf.setFillColor(BLUE)
    pdf.roundRect(MARGIN, 60, PAGE_W - 2 * MARGIN, 50, 11, fill=1, stroke=0)
    pdf.setFillColor(WHITE)
    pdf.setFont("Helvetica-Bold", 10.5)
    pdf.drawString(MARGIN + 14, 89, "Discuss a Microsoft Cloud project or partner opportunity")
    link_x = MARGIN + 14
    link_y = 70
    link_x += add_link(pdf, "enki-tech.eu", link_x, link_y, 8.1, "https://enki-tech.eu", color=WHITE) + 20
    link_x += add_link(pdf, "ytsvetov@hotmail.com", link_x, link_y, 8.1, "mailto:ytsvetov@hotmail.com", color=WHITE) + 20
    add_link(pdf, "LinkedIn", link_x, link_y, 8.1, "https://www.linkedin.com/company/enki-tech-eood/", color=WHITE)

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
