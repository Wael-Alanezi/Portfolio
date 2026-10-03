---
title: Lessons Learned assistant
order: 3
size: featured
oneLine: "An AI assistant that helps project teams find and reuse lessons from past projects, and asks a person before saving new ones."
context: "[Alenmaa Hackathon / SDAIA Academy capstone: write the accurate one], 2026. [Solo or team, and your role.]"
decision: "New lessons are saved only after a person approves them."
image: lessons-learned.webp
imageAlt: "[Lessons Learned assistant screenshot]"
stack: [Python, LangGraph, Chroma, Hugging Face embeddings, Streamlit]
links:
  - label: Code
    href: https://github.com/Wael-Alanezi/PM_LessonLearned_AgenticRag
---

## What I built

- A LangGraph workflow (retrieve, route, then search or consult, then reflect).
- A Chroma vector store with local embeddings (bge-small-en-v1.5), using a Claude model through OpenRouter.
- A Streamlit app with Search and Consult modes.

## Key decision

New lessons go through a human approval gate, and the reflection step defaults to not saving. This keeps weak lessons out of the knowledge base.

## Data

NASA's public lessons-learned records plus synthetic documents in a Saudi project context.

## What I learned

[Pick one: fixing an overly permissive reflection prompt, Chroma file locks on Windows, or stale state when switching modes.]
