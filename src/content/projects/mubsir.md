---
title: "Mubsir"
order: 3
group: "work"
visual: "mubsir"
figure: "FIG. 03 · Mubsir · Evaluation"
meta: ["Alenmaa Hackathon", "2026", "Backend developer and tester"]
summary: "An AI tool that finds the cheapest Saudi online store for a product, and an honest look at where it failed."
description: "An AI tool that finds the cheapest Saudi online store for a product, and an honest look at where it failed."
context: "Team project, Alenmaa Hackathon 2026. My part: backend, testing and statistical evaluation."
points:
  - "Found the product for 28 of 33 test items (84.8% coverage)."
  - "78.1% matching precision (±14.3 points, 95% CI) and a 2.5% average price difference on correct matches."
  - "Half of the cheapest-store picks were accessories, so I proposed a relative statistical filter."
tags: ["Spring Boot", "SerpAPI", "LLM", "Statistical evaluation"]
stack: ["Java", "Spring Boot", "SerpAPI", "LLM"]
---

## What we built

A Spring Boot backend that searches stores through SerpAPI and uses an LLM to match listings to the product.

## Results

- It found the product for 28 of 33 test items (84.8% coverage).
- 78.1% matching precision (plus or minus 14.3 points, 95% confidence interval).
- 2.5% average price difference on correct matches.

## What I found

Half of the “cheapest store” picks were accessories, like cases and cables, not the product itself. I proposed a relative statistical filter to remove them.
