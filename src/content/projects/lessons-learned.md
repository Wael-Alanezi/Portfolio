---
title: "Lessons learned for PMOs"
order: 4
group: "more"
visual: "flow"
figure: "FIG. 04 · Lessons learned · Workflow"
meta: ["Alenmaa Hackathon", "SDAIA Academy", "2026"]
summary: "An AI assistant that helps project teams find and reuse lessons from past projects, and asks a person before saving new ones."
description: "An AI assistant that helps project teams find and reuse lessons from past projects, and asks a person before saving new ones."
context: "Built for the Alenmaa Hackathon and the SDAIA Academy program, 2026. I designed the agentic RAG system and built its knowledge base."
tags: ["LangGraph", "Agentic RAG", "Streamlit"]
steps: ["Retrieve", "Route", "Reflect", "Approve"]
stack: ["Python", "LangGraph", "Chroma", "Hugging Face embeddings", "Streamlit"]
links:
  - label: "Code"
    href: "https://github.com/Wael-Alanezi/PM_LessonLearned_AgenticRag"
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
