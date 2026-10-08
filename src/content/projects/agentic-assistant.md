---
title: "Agentic RAG personal assistant"
order: 1
featured: true
visual: "pipeline"
steps: ["Documents", "Chunks", "Vectors", "Answer"]
label: "SDAIA course capstone"
summary: "An assistant that retrieves from documents and uses tools to answer questions."
subtitle: "Calendar, notes and email, with a person in the loop"
description: "A LangGraph supervisor routes requests to three agents for calendar, knowledge base and email. A five-stage RAG pipeline answers from documents, and human-in-the-loop interrupts keep a person in control."
meta: ["SDAIA Academy", "July 2026"]
tags: ["Agentic RAG", "Tool use", "LangGraph"]
cardTags: ["Agentic RAG", "Tool use"]
oneLine: "A multi-agent assistant for calendar, notes and email, with a human in the loop."
context: "Capstone for SDAIA Academy’s “Building Agentic AI Systems” program, July 2026."
stack: ["Python", "LangGraph", "Chroma", "OpenRouter", "Google Colab"]
links:
  - label: "Code"
    href: "https://github.com/Wael-Alanezi/agentic-personal-assistant"
ar:
  title: "مساعد شخصي بوكلاء RAG"
  label: "مشروع ختامي لدورة سدايا"
  summary: "مساعد يسترجع المعلومات من المستندات ويستخدم الأدوات للإجابة عن الأسئلة."
  subtitle: "التقويم والملاحظات والبريد، مع إشراف بشري"
  description: "يوجّه مشرف مبني على LangGraph الطلبات إلى ثلاثة وكلاء للتقويم وقاعدة المعرفة والبريد الإلكتروني. يجيب مسار RAG من خمس مراحل اعتماداً على المستندات، وتُبقي نقاط التوقف للمراجعة البشرية القرار بيد الإنسان."
  meta: ["أكاديمية سدايا", "يوليو 2026"]
  tags: ["Agentic RAG", "استخدام الأدوات", "LangGraph"]
  cardTags: ["Agentic RAG", "استخدام الأدوات"]
  steps: ["المستندات", "المقاطع", "المتجهات", "الإجابة"]
---

## What I built

A LangGraph supervisor with three sub-agents (calendar, knowledge base, email), a five-stage RAG pipeline with Chroma and local embeddings, and human-in-the-loop interrupts (LangGraph interrupt and resume).
