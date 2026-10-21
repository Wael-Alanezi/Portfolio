import sys
from pathlib import Path

from reportlab.lib.colors import Color, black
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, ListFlowable, ListItem, Paragraph, SimpleDocTemplate

OUT = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parent.parent / 'public' / 'Wael-Alanezi-CV.pdf'

NAVY = Color(31 / 255, 56 / 255, 100 / 255)
GREY = Color(0.2, 0.2, 0.2)

name = ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=22, leading=26, textColor=NAVY)
contact = ParagraphStyle('contact', fontName='Helvetica', fontSize=9, leading=12, textColor=GREY)
heading = ParagraphStyle('heading', fontName='Helvetica-Bold', fontSize=11.5, leading=14, textColor=NAVY, spaceBefore=7)
body = ParagraphStyle('body', fontName='Helvetica', fontSize=10, leading=13.5, textColor=black)
entry = ParagraphStyle('entry', parent=body, spaceBefore=5)
item = ParagraphStyle('item', fontName='Helvetica', fontSize=10, leading=13, textColor=black)


def link(url, text):
    return f'<a href="{url}" color="#1F3864">{text}</a>'


def section(title):
    return [
        Paragraph(title, heading),
        HRFlowable(width='100%', thickness=0.8, color=NAVY, spaceBefore=1, spaceAfter=3),
    ]


def bullets(*lines):
    return ListFlowable(
        [ListItem(Paragraph(line, item)) for line in lines],
        bulletType='bullet',
        bulletFontName='Helvetica',
        bulletFontSize=8,
        bulletColor=NAVY,
        leftIndent=12,
    )


def project(title, where, *lines):
    return [Paragraph(f'<b>{title}</b> | {where}', entry), bullets(*lines)]


story = [
    Paragraph('Wael Alanezi', name),
    Paragraph(
        'Riyadh, Saudi Arabia | wael.m.alanezi@gmail.com | '
        + link('https://linkedin.com/in/wael-alanezi', 'linkedin.com/in/wael-alanezi')
        + ' | '
        + link('https://github.com/Wael-Alanezi', 'github.com/Wael-Alanezi'),
        contact,
    ),
    *section('PROFILE'),
    Paragraph(
        'Software Engineering student (AI &amp; Data Science track) at Prince Sultan University, graduating in 2028, '
        'seeking a Summer 2027 internship in software, data or AI. I build data and AI tools, evaluate them with '
        'statistics, and present the findings clearly to technical and non-technical audiences. Fluent in Arabic and '
        'English; available to start in June 2027.',
        body,
    ),
    *section('EDUCATION'),
    Paragraph(
        '<b>Prince Sultan University (PSU), Riyadh</b> | B.Sc. Software Engineering, AI &amp; Data Science track | '
        'Expected graduation: 2028',
        body,
    ),
    bullets(
        'Coursework: data structures and complexity analysis, software engineering and UML, 3-tier architecture, '
        'electronics lab'
    ),
    *section('PROJECTS'),
    Paragraph('<b>Mubsir: AI Price Comparison for Saudi E-commerce</b> | Alenmaa Hackathon 2026', body),
    bullets(
        'Built the backend (Spring Boot, SerpAPI, LLM) in a team and led testing and statistical evaluation.',
        'Measured 84.8% product coverage (28 of 33), 78.1% matching precision (±14.3pp, 95% CI) and 2.5% mean '
        'price deviation. Found that 50% of cheapest-store picks were accessories and proposed a relative statistical '
        'filter.',
    ),
    *project(
        'AI Lessons Learned System for PMOs',
        'Alenmaa Hackathon and SDAIA Academy program',
        'Designed an agentic RAG system (LangGraph, Chroma, Streamlit) that retrieves past project lessons and '
        'captures new ones through a human approval gate.',
        'Built the knowledge base from NASA lessons-learned data and synthetic Saudi-context documents; delivered a '
        'public repo, README and final presentation deck.',
    ),
    *project(
        'Agentic Personal Assistant',
        'SDAIA capstone',
        'Built a LangGraph supervisor with three subagents (calendar, knowledge base, email) on a five-stage RAG '
        'pipeline with human-in-the-loop approvals.',
    ),
    *project(
        'Drone NDVI Plant Health Mapping',
        'Riyadh Space Lighthouse, PSU',
        'Member of a 5-student team mapping plant health in the university garden with a drone-mounted NIR camera, '
        'scoped as a one to two semester proof of concept on a minimal budget.',
    ),
    *section('LEADERSHIP AND ACTIVITIES'),
    Paragraph('<b>Project Management Club, PSU</b> | Member', body),
    bullets("Joined PSU's Project Management Club to learn structured project delivery."),
    *section('CERTIFICATIONS AND TRAINING'),
    bullets(
        'Introduction to Data Engineering on Google Cloud, Tuwaiq Academy (Sep 2026): data sources and sinks, '
        'BigQuery, EL/ELT/ETL pipelines',
        'MDQM, Master Data Quality Manager (ISO 8000, ECCMA), Jul 2026',
        'Developing Generative AI Solutions, SDAIA Academy (Jul 2026)',
        'Building Agentic AI Systems, SDAIA Academy (Jul 2026)',
        'Introduction to Space Mission Design, Saudi Space Agency Space Academy (Sep 2026)',
    ),
    *section('TECHNICAL SKILLS AND LANGUAGES'),
    bullets(
        '<b>Data and analytics:</b> Python, SQL (MySQL), statistical evaluation (confidence intervals, precision@k), '
        'data pipelines on Google Cloud (BigQuery, Dataflow, Dataproc)',
        '<b>AI:</b> RAG, LangGraph, ChromaDB, embeddings, LLM APIs, Streamlit',
        '<b>Software:</b> Java, JavaScript, PHP, Spring Boot, React, Git and GitHub, UML',
        '<b>Business skills:</b> structuring problems, presenting findings, team projects',
        '<b>Languages:</b> Arabic and English, both fluent',
    ),
]

doc = SimpleDocTemplate(
    str(OUT),
    pagesize=A4,
    leftMargin=15 * mm,
    rightMargin=15 * mm,
    topMargin=11 * mm,
    bottomMargin=11 * mm,
    title='Wael Alanezi CV',
    author='Wael Alanezi',
)
doc.build(story)
