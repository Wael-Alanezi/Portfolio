---
title: "Lessons learned for PMOs"
order: 5
visual: "pipeline"
steps: ["Retrieve", "Route", "Reflect", "Approve"]
label: "Hackathon project"
summary: "An agentic system that captures and reuses project lessons."
subtitle: "Reusing what past projects learned"
description: "An AI assistant that helps project teams find and reuse lessons from past projects, and asks a person before saving new ones."
meta: ["Alenmaa Hackathon", "SDAIA Academy program"]
tags: ["Agentic AI", "PMO", "LangGraph"]
cardTags: ["Agentic AI", "PMO"]
decision: "New lessons are saved only after a person approves them."
oneLine: "An AI assistant that helps project teams find and reuse lessons from past projects, and asks a person before saving new ones."
context: "Built for the Alenmaa Hackathon and the SDAIA Academy program, 2026. I designed the agentic RAG system and built its knowledge base."
stack: ["Python", "LangGraph", "Chroma", "Hugging Face embeddings", "Streamlit"]
links:
  - label: "Code"
    href: "https://github.com/Wael-Alanezi/PM_LessonLearned_AgenticRag"
ar:
  title: "الدروس المستفادة لمكاتب إدارة المشاريع"
  label: "مشروع هاكاثون"
  summary: "نظام وكلاء ذكاء اصطناعي يلتقط دروس المشاريع ويعيد استخدامها."
  subtitle: "الاستفادة مما تعلّمته المشاريع السابقة"
  description: "مساعد ذكاء اصطناعي يساعد فرق المشاريع على إيجاد دروس المشاريع السابقة وإعادة استخدامها، ويطلب موافقة شخص قبل حفظ أي درس جديد."
  meta: ["هاكاثون النماء", "برنامج أكاديمية سدايا"]
  tags: ["الذكاء الاصطناعي الوكيل", "إدارة المشاريع", "LangGraph"]
  cardTags: ["الذكاء الاصطناعي الوكيل", "إدارة المشاريع"]
  decision: "لا تُحفظ الدروس الجديدة إلا بعد موافقة شخص عليها."
  steps: ["الاسترجاع", "التوجيه", "المراجعة", "الموافقة"]
---

## What I built

- A LangGraph workflow (retrieve, route, then search or consult, then reflect).
- A Chroma vector store with local embeddings (bge-small-en-v1.5), using a Claude model through OpenRouter.
- A Streamlit app with Search and Consult modes.

## Key decision

New lessons go through a human approval gate, and the reflection step defaults to not saving. This keeps weak lessons out of the knowledge base.

## Data

NASA’s public lessons-learned records plus synthetic documents in a Saudi project context.

## What I learned

The first reflection prompt was too permissive and let weak lessons through. Tightening it, and making the step default to not saving, fixed that.
