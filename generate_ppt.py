import os
import sys
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE

def create_perfect_presentation(output_path):
    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    # Premium Color Palette
    COLOR_BG = RGBColor(248, 250, 252)          # #F8FAFC
    COLOR_DARK_TEXT = RGBColor(15, 23, 42)      # #0F172A
    COLOR_MUTED_TEXT = RGBColor(51, 65, 85)     # #334155
    COLOR_PRIMARY_BLUE = RGBColor(29, 78, 216)  # #1D4ED8
    COLOR_GREEN_TEXT = RGBColor(22, 101, 52)    # #166534
    COLOR_RED_TEXT = RGBColor(159, 18, 57)      # #9F1239
    COLOR_PURPLE_TEXT = RGBColor(91, 33, 182)   # #5B21B6

    # Card Background Colors
    BG_BLUE = RGBColor(239, 246, 255)           # #EFF6FF
    BORDER_BLUE = RGBColor(191, 219, 254)       # #BFDBFE

    BG_GREEN = RGBColor(240, 253, 244)          # #F0FDF4
    BORDER_GREEN = RGBColor(187, 247, 208)      # #BBF7D0

    BG_RED = RGBColor(255, 241, 242)            # #FFF1F2
    BORDER_RED = RGBColor(254, 205, 211)        # #FECDD3

    BG_PURPLE = RGBColor(245, 243, 255)         # #F5F3FF
    BORDER_PURPLE = RGBColor(221, 214, 254)     # #DDD6FE

    BG_WHITE = RGBColor(255, 255, 255)
    BORDER_LIGHT = RGBColor(226, 232, 240)

    def set_slide_background(slide):
        bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
        bg.fill.solid()
        bg.fill.fore_color.rgb = COLOR_BG
        bg.line.fill.background()
        return bg

    def add_header(slide, title_text, subtitle_text, slide_num):
        # Header text frame
        header_box = slide.shapes.add_textbox(Inches(0.6), Inches(0.35), Inches(10.5), Inches(0.9))
        tf = header_box.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

        p = tf.paragraphs[0]
        p.text = title_text
        p.font.name = 'Arial'
        p.font.size = Pt(24)
        p.font.bold = True
        p.font.color.rgb = COLOR_DARK_TEXT

        if subtitle_text:
            p2 = tf.add_paragraph()
            p2.text = subtitle_text
            p2.font.name = 'Arial'
            p2.font.size = Pt(12)
            p2.font.bold = True
            p2.font.color.rgb = COLOR_PRIMARY_BLUE
            p2.space_before = Pt(2)

        # Slide Number Badge (Top Right)
        badge = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(11.533), Inches(0.35), Inches(1.2), Inches(0.42))
        badge.fill.solid()
        badge.fill.fore_color.rgb = RGBColor(224, 231, 255)
        badge.line.fill.background()
        btf = badge.text_frame
        btf.margin_left = btf.margin_top = btf.margin_right = btf.margin_bottom = 0
        bp = btf.paragraphs[0]
        bp.text = f"Slide {slide_num:02d} / 09"
        bp.alignment = PP_ALIGN.CENTER
        bp.font.name = 'Arial'
        bp.font.size = Pt(11)
        bp.font.bold = True
        bp.font.color.rgb = COLOR_PRIMARY_BLUE

    # =========================================================================
    # SLIDE 1: Title Slide
    # =========================================================================
    slide1 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide1)

    card1 = slide1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(1.2), Inches(1.0), Inches(10.933), Inches(5.5))
    card1.fill.solid()
    card1.fill.fore_color.rgb = BG_BLUE
    card1.line.color.rgb = BORDER_BLUE
    card1.line.width = Pt(2)

    tf1 = card1.text_frame
    tf1.word_wrap = True
    tf1.margin_left = tf1.margin_right = Inches(0.6)
    tf1.margin_top = Inches(1.1)

    p1 = tf1.paragraphs[0]
    p1.text = "ENTERPRISE AND VENTURE CREATION (EVC) SEMINAR"
    p1.alignment = PP_ALIGN.CENTER
    p1.font.name = 'Arial'
    p1.font.size = Pt(14)
    p1.font.bold = True
    p1.font.color.rgb = COLOR_PRIMARY_BLUE

    p2 = tf1.add_paragraph()
    p2.text = "Venture Capitalists (VC)"
    p2.alignment = PP_ALIGN.CENTER
    p2.font.name = 'Arial'
    p2.font.size = Pt(38)
    p2.font.bold = True
    p2.font.color.rgb = COLOR_DARK_TEXT
    p2.space_before = Pt(14)

    p3 = tf1.add_paragraph()
    p3.text = "Fueling Innovation & Scaling High-Growth Startups"
    p3.alignment = PP_ALIGN.CENTER
    p3.font.name = 'Arial'
    p3.font.size = Pt(18)
    p3.font.bold = True
    p3.font.color.rgb = COLOR_GREEN_TEXT
    p3.space_before = Pt(16)

    # =========================================================================
    # SLIDE 2: Foundations
    # =========================================================================
    slide2 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide2)
    add_header(slide2, "Introduction, Venture Capital & History", "Enterprise and Venture Creation (EVC)", 2)

    # Left Box
    card2_l = slide2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.6), Inches(1.4), Inches(5.8), Inches(5.6))
    card2_l.fill.solid()
    card2_l.fill.fore_color.rgb = BG_BLUE
    card2_l.line.color.rgb = BORDER_BLUE
    tf2_l = card2_l.text_frame
    tf2_l.word_wrap = True
    tf2_l.margin_left = tf2_l.margin_right = tf2_l.margin_top = tf2_l.margin_bottom = Inches(0.3)

    p = tf2_l.paragraphs[0]
    p.text = "Introduction"
    p.font.name = 'Arial'
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = COLOR_PRIMARY_BLUE

    p = tf2_l.add_paragraph()
    p.text = "A startup begins with an idea, but every idea needs money to become a successful business. Venture capital plays an essential role."
    p.font.name = 'Arial'
    p.font.size = Pt(12)
    p.font.color.rgb = COLOR_DARK_TEXT
    p.space_before = Pt(4)

    p = tf2_l.add_paragraph()
    p.text = "What is Venture Capital?"
    p.font.name = 'Arial'
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = COLOR_PRIMARY_BLUE
    p.space_before = Pt(14)

    for b in [
        "Private investment given to startups and small businesses with high growth potential.",
        "Instead of a bank loan, VCs invest money in exchange for company equity (ownership).",
        "Known as high-risk, high-return investment powering scalable market innovation."
    ]:
        p = tf2_l.add_paragraph()
        p.text = f"• {b}"
        p.font.name = 'Arial'
        p.font.size = Pt(11.5)
        p.font.color.rgb = COLOR_DARK_TEXT
        p.space_before = Pt(4)

    # Right Box
    card2_r = slide2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.8), Inches(1.4), Inches(5.9), Inches(5.6))
    card2_r.fill.solid()
    card2_r.fill.fore_color.rgb = BG_RED
    card2_r.line.color.rgb = BORDER_RED
    tf2_r = card2_r.text_frame
    tf2_r.word_wrap = True
    tf2_r.margin_left = tf2_r.margin_right = tf2_r.margin_top = tf2_r.margin_bottom = Inches(0.3)

    p = tf2_r.paragraphs[0]
    p.text = "Who is a Venture Capitalist?"
    p.font.name = 'Arial'
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = COLOR_RED_TEXT

    p = tf2_r.add_paragraph()
    p.text = "An investor or investment firm providing funding, guidance, connections & mentorship."
    p.font.name = 'Arial'
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = COLOR_DARK_TEXT
    p.space_before = Pt(4)

    p = tf2_r.add_paragraph()
    p.text = "History of Venture Capital"
    p.font.name = 'Arial'
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = COLOR_RED_TEXT
    p.space_before = Pt(14)

    for b in [
        "Before 1946, entrepreneurs depended on personal savings, family, or restrictive bank loans.",
        "In 1946, ARDC was founded by Georges Doriot (the Father of Venture Capital).",
        "Its investment in Digital Equipment Corporation proved startup funding generates massive returns.",
        "Today, giants like Google, Apple, Amazon, and Meta scaled through early VC backing."
    ]:
        p = tf2_r.add_paragraph()
        p.text = f"• {b}"
        p.font.name = 'Arial'
        p.font.size = Pt(11.5)
        p.font.color.rgb = COLOR_DARK_TEXT
        p.space_before = Pt(4)

    # =========================================================================
    # SLIDE 3: Need, Features & Objectives
    # =========================================================================
    slide3 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide3)
    add_header(slide3, "Need, Features & Objectives", "Enterprise and Venture Creation (EVC)", 3)

    cols_s3 = [
        ("Why is Venture Capital Needed?", BG_RED, BORDER_RED, COLOR_RED_TEXT, [
            "Startups face 3 major hurdles:",
            "• Lack of initial money",
            "• Lack of business experience",
            "• Lack of industry contacts",
            "",
            "Solution: VC solves these by offering capital, active mentorship & network access."
        ]),
        ("Features of Venture Capital", BG_BLUE, BORDER_BLUE, COLOR_PRIMARY_BLUE, [
            "• Equity-based investment",
            "• High risk & high return potential",
            "• Long-term growth horizon (5-10 yrs)",
            "• Active board & strategic involvement",
            "• Focus on innovation & tech models",
            "• Supports scalable high-growth startups"
        ]),
        ("Objectives of Venture Capital", BG_GREEN, BORDER_GREEN, COLOR_GREEN_TEXT, [
            "• Promote innovation & entrepreneurship",
            "• Drive job growth & economic development",
            "• Support early-stage high-risk startups",
            "• Commercialize research & modern tech",
            "• Earn high returns through successful exits",
            "• Build sustainable industry market leaders"
        ])
    ]

    for i, (col_title, bg_c, border_c, head_c, lines) in enumerate(cols_s3):
        left_pos = Inches(0.6 + i * 4.1)
        card = slide3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left_pos, Inches(1.4), Inches(3.9), Inches(5.6))
        card.fill.solid()
        card.fill.fore_color.rgb = bg_c
        card.line.color.rgb = border_c
        tf = card.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = Inches(0.25)

        p = tf.paragraphs[0]
        p.text = col_title
        p.font.name = 'Arial'
        p.font.size = Pt(15)
        p.font.bold = True
        p.font.color.rgb = head_c

        for line in lines:
            p = tf.add_paragraph()
            p.text = line
            p.font.name = 'Arial'
            p.font.size = Pt(11.5)
            p.font.color.rgb = COLOR_DARK_TEXT
            p.space_before = Pt(3)

    # =========================================================================
    # SLIDE 4: Venture Capital Investment Process
    # =========================================================================
    slide4 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide4)
    add_header(slide4, "Venture Capital Investment Process", "The 7 Steps in Venture Capital Investment", 4)

    steps_data = [
        ("Step 1: Business Idea", "Entrepreneur develops an innovative business concept."),
        ("Step 2: Business Plan", "Prepares market analysis, financial projections & growth goals."),
        ("Step 3: Pitching", "Presents business plan to venture capitalists."),
        ("Step 4: Due Diligence", "VC examines business model, team, financials & legal docs."),
        ("Step 5: Investment", "VC signs deal & invests funds for equity ownership."),
        ("Step 6: Growth", "Startup uses funds for R&D, hiring & market expansion."),
        ("Step 7: Exit", "VC earns returns via IPO, Acquisition, or Share Sale.")
    ]

    for i, (st_title, st_desc) in enumerate(steps_data):
        row = i // 4
        col = i % 4
        left_p = Inches(0.6 + col * 3.05)
        top_p = Inches(1.4 + row * 2.7)

        card = slide4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left_p, top_p, Inches(2.9), Inches(2.5))
        card.fill.solid()
        card.fill.fore_color.rgb = BG_BLUE if (i % 2 == 0) else BG_GREEN
        card.line.color.rgb = BORDER_BLUE if (i % 2 == 0) else BORDER_GREEN
        tf = card.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = Inches(0.2)

        p = tf.paragraphs[0]
        p.text = st_title
        p.font.name = 'Arial'
        p.font.size = Pt(13.5)
        p.font.bold = True
        p.font.color.rgb = COLOR_PRIMARY_BLUE if (i % 2 == 0) else COLOR_GREEN_TEXT

        p = tf.add_paragraph()
        p.text = st_desc
        p.font.name = 'Arial'
        p.font.size = Pt(11)
        p.font.color.rgb = COLOR_DARK_TEXT
        p.space_before = Pt(4)

    # =========================================================================
    # SLIDE 5: Funding Stages & Comparisons
    # =========================================================================
    slide5 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide5)
    add_header(slide5, "Funding Stages & Comparisons", "Funding Stages & Venture Capital vs Angel Investor", 5)

    # Left: Stages
    card5_l = slide5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.6), Inches(1.4), Inches(5.8), Inches(5.6))
    card5_l.fill.solid()
    card5_l.fill.fore_color.rgb = BG_BLUE
    card5_l.line.color.rgb = BORDER_BLUE
    tf5_l = card5_l.text_frame
    tf5_l.word_wrap = True
    tf5_l.margin_left = tf5_l.margin_right = tf5_l.margin_top = tf5_l.margin_bottom = Inches(0.3)

    p = tf5_l.paragraphs[0]
    p.text = "Funding Stages"
    p.font.name = 'Arial'
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = COLOR_PRIMARY_BLUE

    stages = [
        ("Pre-Seed", "Idea, research, and proof of concept stage."),
        ("Seed Funding", "Product development and prototype creation."),
        ("Series A", "Business expansion and customer acquisition."),
        ("Series B", "Scaling operations and entering new markets."),
        ("Series C", "International expansion and major acquisitions."),
        ("IPO", "Initial Public Offering - company becomes publicly listed.")
    ]
    for s_name, s_desc in stages:
        p = tf5_l.add_paragraph()
        p.text = f"• {s_name}: {s_desc}"
        p.font.name = 'Arial'
        p.font.size = Pt(11.5)
        p.font.color.rgb = COLOR_DARK_TEXT
        p.space_before = Pt(5)

    # Right: Angel vs VC
    card5_r = slide5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.8), Inches(1.4), Inches(5.9), Inches(5.6))
    card5_r.fill.solid()
    card5_r.fill.fore_color.rgb = BG_WHITE
    card5_r.line.color.rgb = BORDER_LIGHT
    tf5_r = card5_r.text_frame
    tf5_r.word_wrap = True
    tf5_r.margin_left = tf5_r.margin_right = tf5_r.margin_top = tf5_r.margin_bottom = Inches(0.3)

    p = tf5_r.paragraphs[0]
    p.text = "Venture Capital vs Angel Investor"
    p.font.name = 'Arial'
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = COLOR_DARK_TEXT

    p = tf5_r.add_paragraph()
    p.text = "Angel Investor:"
    p.font.name = 'Arial'
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = COLOR_RED_TEXT
    p.space_before = Pt(6)

    for a in ["Individual wealthy investor", "Invests personal money", "Smaller investment ticket size", "Invests at early/idea stage"]:
        p = tf5_r.add_paragraph()
        p.text = f"  • {a}"
        p.font.name = 'Arial'
        p.font.size = Pt(11.5)
        p.font.color.rgb = COLOR_DARK_TEXT
        p.space_before = Pt(2)

    p = tf5_r.add_paragraph()
    p.text = "Venture Capitalist:"
    p.font.name = 'Arial'
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = COLOR_GREEN_TEXT
    p.space_before = Pt(10)

    for v in ["Professional investment firm", "Invests pooled funds from institutional LPs", "Larger investment ticket size", "Invests at high-growth & scaling stage"]:
        p = tf5_r.add_paragraph()
        p.text = f"  • {v}"
        p.font.name = 'Arial'
        p.font.size = Pt(11.5)
        p.font.color.rgb = COLOR_DARK_TEXT
        p.space_before = Pt(2)

    # =========================================================================
    # SLIDE 6: VC vs Bank Loan, Risks & Startup Failure
    # =========================================================================
    slide6 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide6)
    add_header(slide6, "VC vs Bank Loan, Risks & Startup Failure", "Enterprise and Venture Creation (EVC)", 6)

    # Top Box: VC vs Bank Loan
    card6_top = slide6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.6), Inches(1.4), Inches(12.133), Inches(2.6))
    card6_top.fill.solid()
    card6_top.fill.fore_color.rgb = BG_WHITE
    card6_top.line.color.rgb = BORDER_LIGHT
    tf6_t = card6_top.text_frame
    tf6_t.word_wrap = True
    tf6_t.margin_left = tf6_t.margin_right = tf6_t.margin_top = tf6_t.margin_bottom = Inches(0.2)

    p = tf6_t.paragraphs[0]
    p.text = "1. Venture Capital vs. Bank Loan Comparison"
    p.font.name = 'Arial'
    p.font.size = Pt(15)
    p.font.bold = True
    p.font.color.rgb = COLOR_PRIMARY_BLUE

    p = tf6_t.add_paragraph()
    p.text = "Venture Capital: Capital for equity shares | Zero monthly EMI | Shared board control | Strategic mentorship & growth networks."
    p.font.name = 'Arial'
    p.font.size = Pt(11.5)
    p.font.color.rgb = COLOR_PRIMARY_BLUE
    p.space_before = Pt(4)

    p = tf6_t.add_paragraph()
    p.text = "Bank Loan: Debt financing with 100% repayment | Mandatory monthly EMI & interest | 100% founder ownership kept | Zero business guidance."
    p.font.name = 'Arial'
    p.font.size = Pt(11.5)
    p.font.color.rgb = COLOR_RED_TEXT
    p.space_before = Pt(6)

    # Bottom Left: Risks
    card6_bl = slide6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.6), Inches(4.15), Inches(5.9), Inches(2.95))
    card6_bl.fill.solid()
    card6_bl.fill.fore_color.rgb = BG_RED
    card6_bl.line.color.rgb = BORDER_RED
    tf6_bl = card6_bl.text_frame
    tf6_bl.word_wrap = True
    tf6_bl.margin_left = tf6_bl.margin_right = tf6_bl.margin_top = tf6_bl.margin_bottom = Inches(0.2)

    p = tf6_bl.paragraphs[0]
    p.text = "2. Investment & Entrepreneur Risks"
    p.font.name = 'Arial'
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = COLOR_RED_TEXT

    p = tf6_bl.add_paragraph()
    p.text = "• For Investors: 90% startup failure risk | Fast market competition | 7-10 yr share illiquidity."
    p.font.name = 'Arial'
    p.font.size = Pt(11)
    p.font.color.rgb = COLOR_DARK_TEXT
    p.space_before = Pt(4)

    p = tf6_bl.add_paragraph()
    p.text = "• For Founders: Equity dilution & loss of ownership | High 10x-100x growth return pressure | Investor board veto control."
    p.font.name = 'Arial'
    p.font.size = Pt(11)
    p.font.color.rgb = COLOR_DARK_TEXT
    p.space_before = Pt(4)

    # Bottom Right: Failure
    card6_br = slide6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.8), Inches(4.15), Inches(5.9), Inches(2.95))
    card6_br.fill.solid()
    card6_br.fill.fore_color.rgb = BG_RED
    card6_br.line.color.rgb = BORDER_RED
    tf6_br = card6_br.text_frame
    tf6_br.word_wrap = True
    tf6_br.margin_left = tf6_br.margin_right = tf6_br.margin_top = tf6_br.margin_bottom = Inches(0.2)

    p = tf6_br.paragraphs[0]
    p.text = "3. What Happens If a Startup Fails?"
    p.font.name = 'Arial'
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = COLOR_RED_TEXT

    for b in [
        "VC Absorbs Loss: VC firm loses equity investment without personal collateral recourse.",
        "No Founder Debt: Founders do not repay equity money from personal savings.",
        "Closure & Layoffs: Operations cease and remaining assets are liquidated to debt holders."
    ]:
        p = tf6_br.add_paragraph()
        p.text = f"• {b}"
        p.font.name = 'Arial'
        p.font.size = Pt(11)
        p.font.color.rgb = COLOR_DARK_TEXT
        p.space_before = Pt(4)

    # =========================================================================
    # SLIDE 7: Venture Capital in India
    # =========================================================================
    slide7 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide7)
    add_header(slide7, "Venture Capital in India", "India is the 3rd Largest Startup Ecosystem Worldwide", 7)

    # 4 Quadrants
    quads = [
        ("🏛️ Government Initiatives", BG_GREEN, BORDER_GREEN, COLOR_GREEN_TEXT, Inches(0.6), Inches(1.4), Inches(5.8), Inches(2.6), [
            "• Startup India: Tax exemptions & simplified compliance",
            "• Digital India: Nationwide high-speed UPI & digital connectivity",
            "• Atal Innovation Mission: Incubators & tinkering labs nationwide",
            "• FFS Scheme: ₹10,000 Crore SIDBI fund injection into VCs"
        ]),
        ("⚡ Major Investment Sectors", BG_PURPLE, BORDER_PURPLE, COLOR_PURPLE_TEXT, Inches(6.8), Inches(1.4), Inches(5.9), Inches(2.6), [
            "• Artificial Intelligence (AI) & Enterprise Automation",
            "• FinTech & UPI Digital Payments",
            "• HealthTech & Telemedicine Platforms",
            "• EdTech & Professional Upskilling",
            "• Electric Vehicles (EV) & Clean Green Mobility",
            "• SaaS & Cloud Enterprise Software"
        ]),
        ("🏢 Top VC Firms in India", BG_BLUE, BORDER_BLUE, COLOR_PRIMARY_BLUE, Inches(0.6), Inches(4.15), Inches(5.8), Inches(2.95), [
            "• Peak XV Partners: Multi-stage tech investor (formerly Sequoia India)",
            "• Accel India: Early-stage backer of Flipkart & Swiggy",
            "• Kalaari Capital: Early fund for consumer internet & deep tech",
            "• Blume Ventures: Prominent seed fund for Indian tech founders",
            "• Nexus Venture Partners: Indo-US fund for global enterprise software"
        ]),
        ("🦄 Famous VC-Funded Indian Startups", BG_RED, BORDER_RED, COLOR_RED_TEXT, Inches(6.8), Inches(4.15), Inches(5.9), Inches(2.95), [
            "• Flipkart: E-commerce giant acquired by Walmart for $16 Billion",
            "• Swiggy: On-demand food & quick commerce delivery leader",
            "• Zomato: Food tech unicorn listed on public stock exchanges",
            "• Ola: Mobility & EV electric transit pioneer",
            "• Meesho: Social commerce platform empowering local sellers"
        ])
    ]

    for title, bg_c, border_c, text_c, x, y, w, h, items in quads:
        card = slide7.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y, w, h)
        card.fill.solid()
        card.fill.fore_color.rgb = bg_c
        card.line.color.rgb = border_c
        tf = card.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = Inches(0.18)

        p = tf.paragraphs[0]
        p.text = title
        p.font.name = 'Arial'
        p.font.size = Pt(14)
        p.font.bold = True
        p.font.color.rgb = text_c

        for it in items:
            p = tf.add_paragraph()
            p.text = it
            p.font.name = 'Arial'
            p.font.size = Pt(11)
            p.font.color.rgb = COLOR_DARK_TEXT
            p.space_before = Pt(2)

    # =========================================================================
    # SLIDE 8: Real-Life Examples
    # =========================================================================
    slide8 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide8)
    add_header(slide8, "Real-Life Examples: From Startup to Major Brand", "How VC Funding Transformed Small Ideas into Household Brands", 8)

    # Left: Farming App
    card8_l = slide8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.6), Inches(1.4), Inches(5.8), Inches(5.6))
    card8_l.fill.solid()
    card8_l.fill.fore_color.rgb = BG_BLUE
    card8_l.line.color.rgb = BORDER_BLUE
    tf8_l = card8_l.text_frame
    tf8_l.word_wrap = True
    tf8_l.margin_left = tf8_l.margin_right = tf8_l.margin_top = tf8_l.margin_bottom = Inches(0.3)

    p = tf8_l.paragraphs[0]
    p.text = "1. Conceptual Model: AI Farming App"
    p.font.name = 'Arial'
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = COLOR_PRIMARY_BLUE

    farm_points = [
        "Four engineering students build an AI farming app needing ₹50 Lakhs capital.",
        "A venture capital firm invests ₹50 Lakhs in exchange for 20% equity.",
        "The startup scales aggressively over 5 years and reaches ₹100 Crores valuation.",
        "Result: The VC's 20% stake is now worth ₹20 Crores (40x return), while founders own 80% of a massive enterprise!"
    ]
    for pt in farm_points:
        p = tf8_l.add_paragraph()
        p.text = f"• {pt}"
        p.font.name = 'Arial'
        p.font.size = Pt(12)
        p.font.color.rgb = COLOR_DARK_TEXT
        p.space_before = Pt(8)

    # Right: Flipkart Case
    card8_r = slide8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.8), Inches(1.4), Inches(5.9), Inches(5.6))
    card8_r.fill.solid()
    card8_r.fill.fore_color.rgb = BG_GREEN
    card8_r.line.color.rgb = BORDER_GREEN
    tf8_r = card8_r.text_frame
    tf8_r.word_wrap = True
    tf8_r.margin_left = tf8_r.margin_right = tf8_r.margin_top = tf8_r.margin_bottom = Inches(0.3)

    p = tf8_r.paragraphs[0]
    p.text = "2. Flipkart (Real-World Case Study)"
    p.font.name = 'Arial'
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = COLOR_GREEN_TEXT

    fk_points = [
        "Started (2007): Online bookstore in a Bengaluru apartment with ₹4 Lakhs personal savings.",
        "VC Funding Boost (2009): Accel India invested $1M (₹4.5 Crores) when banks refused loans.",
        "Market Dominance: Built Cash-on-Delivery, nationwide logistics & full e-commerce marketplace.",
        "Landmark Exit (2018): Walmart acquired Flipkart for $16 Billion — yielding a 300x return for early VC Accel!"
    ]
    for pt in fk_points:
        p = tf8_r.add_paragraph()
        p.text = f"★ {pt}"
        p.font.name = 'Arial'
        p.font.size = Pt(12)
        p.font.color.rgb = COLOR_DARK_TEXT
        p.space_before = Pt(8)

    # =========================================================================
    # SLIDE 9: Advantages, Disadvantages & Conclusion
    # =========================================================================
    slide9 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide9)
    add_header(slide9, "Advantages, Disadvantages & Conclusion", "Enterprise and Venture Creation (EVC)", 9)

    # Top Left: Advantages
    card9_tl = slide9.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.6), Inches(1.4), Inches(5.8), Inches(3.6))
    card9_tl.fill.solid()
    card9_tl.fill.fore_color.rgb = BG_GREEN
    card9_tl.line.color.rgb = BORDER_GREEN
    tf9_tl = card9_tl.text_frame
    tf9_tl.word_wrap = True
    tf9_tl.margin_left = tf9_tl.margin_right = tf9_tl.margin_top = tf9_tl.margin_bottom = Inches(0.2)

    p = tf9_tl.paragraphs[0]
    p.text = "✅ Key Advantages of Venture Capital"
    p.font.name = 'Arial'
    p.font.size = Pt(15)
    p.font.bold = True
    p.font.color.rgb = COLOR_GREEN_TEXT

    adv_items = [
        "• Substantial Capital: Growth funding without monthly interest repayments or debt liability.",
        "• Strategic Mentorship: Expert business guidance, board leadership & operational advice.",
        "• Accelerated Growth: Enables rapid market expansion, top-tier hiring & brand building.",
        "• Credibility & Trust: VC backing validates the startup, attracting customers & partners."
    ]
    for it in adv_items:
        p = tf9_tl.add_paragraph()
        p.text = it
        p.font.name = 'Arial'
        p.font.size = Pt(11)
        p.font.color.rgb = COLOR_DARK_TEXT
        p.space_before = Pt(4)

    # Top Right: Disadvantages
    card9_tr = slide9.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.8), Inches(1.4), Inches(5.9), Inches(3.6))
    card9_tr.fill.solid()
    card9_tr.fill.fore_color.rgb = BG_RED
    card9_tr.line.color.rgb = BORDER_RED
    tf9_tr = card9_tr.text_frame
    tf9_tr.word_wrap = True
    tf9_tr.margin_left = tf9_tr.margin_right = tf9_tr.margin_top = tf9_tr.margin_bottom = Inches(0.2)

    p = tf9_tr.paragraphs[0]
    p.text = "⚠️ Disadvantages & Considerations"
    p.font.name = 'Arial'
    p.font.size = Pt(15)
    p.font.bold = True
    p.font.color.rgb = COLOR_RED_TEXT

    disadv_items = [
        "• Equity & Control Loss: Founders give up equity ownership stake & share decision control.",
        "• 10x-100x Return Pressure: VCs demand high-speed hyper-growth & aggressive milestones.",
        "• Complex 6-12 Mo Process: Pitching, due diligence & contract negotiations take effort.",
        "• Founder Replacement Risk: Underperforming founders may be replaced by external CEOs."
    ]
    for it in disadv_items:
        p = tf9_tr.add_paragraph()
        p.text = it
        p.font.name = 'Arial'
        p.font.size = Pt(11)
        p.font.color.rgb = COLOR_DARK_TEXT
        p.space_before = Pt(4)

    # Bottom Box: Conclusion
    card9_b = slide9.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.6), Inches(5.15), Inches(12.133), Inches(1.95))
    card9_b.fill.solid()
    card9_b.fill.fore_color.rgb = BG_BLUE
    card9_b.line.color.rgb = BORDER_BLUE
    tf9_b = card9_b.text_frame
    tf9_b.word_wrap = True
    tf9_b.margin_left = tf9_b.margin_right = Inches(0.3)
    tf9_b.margin_top = Inches(0.15)

    p = tf9_b.paragraphs[0]
    p.text = "Executive Conclusion"
    p.alignment = PP_ALIGN.CENTER
    p.font.name = 'Arial'
    p.font.size = Pt(15)
    p.font.bold = True
    p.font.color.rgb = COLOR_PRIMARY_BLUE

    p = tf9_b.add_paragraph()
    p.text = "Venture capital is a powerful catalyst for high-growth startups. Beyond money, VCs provide strategic mentorship, key networks, and market validation. Although it involves equity dilution and high performance expectations, venture capital builds world-class companies, drives technological innovation, and powers economic growth."
    p.alignment = PP_ALIGN.CENTER
    p.font.name = 'Arial'
    p.font.size = Pt(11)
    p.font.color.rgb = COLOR_DARK_TEXT
    p.space_before = Pt(4)

    p = tf9_b.add_paragraph()
    p.text = "Thank You!"
    p.alignment = PP_ALIGN.CENTER
    p.font.name = 'Arial'
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = COLOR_GREEN_TEXT
    p.space_before = Pt(6)

    # Save presentation
    prs.save(output_path)
    print(f"Successfully generated perfect PowerPoint presentation at: {output_path}")

if __name__ == "__main__":
    output_desktop = os.path.expanduser("~/Desktop/Venture_Capital_Presentation.pptx")
    create_perfect_presentation(output_desktop)
