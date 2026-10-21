---
title: "Agentic RAG personal assistant"
order: 2
group: "work"
visual: "rag"
figure: "FIG. 02 · Agentic assistant · RAG pipeline"
meta: ["SDAIA Academy capstone", "2026", "Solo"]
summary: "A multi-agent assistant for calendar, notes and email, with a person in the loop."
description: "A LangGraph supervisor routes requests to three agents for calendar, knowledge base and email. A five-stage RAG pipeline answers from documents, and a person approves emails before they are sent."
context: "Capstone for SDAIA Academy’s “Building Agentic AI Systems” program, July 2026."
points:
  - "A LangGraph supervisor routes each request to a calendar, knowledge-base or email agent."
  - "The knowledge-base agent answers through a five-stage RAG pipeline: load, split, embed, store, retrieve."
  - "Emails pause for a person to approve them before they are sent."
tags: ["LangGraph", "Agentic RAG", "Human in the loop"]
steps: ["Load", "Split", "Embed", "Store", "Retrieve"]
stack: ["Python", "LangGraph", "Hugging Face embeddings", "OpenRouter", "Google Colab"]
links:
  - label: "Code"
    href: "https://github.com/Wael-Alanezi/agentic-personal-assistant"
---

## What I built

A LangGraph supervisor with three sub-agents (calendar, knowledge base, email), a five-stage RAG pipeline with an in-memory vector store and local embeddings, and human-in-the-loop interrupts (LangGraph interrupt and resume) so a person approves each email before it is sent.
