---
title: "Mubsir"
order: 2
visual: "bars"
label: "Alenmaa Hackathon 2026"
summary: "AI price comparison for Saudi e-commerce."
subtitle: "Finding the cheapest store, and measuring where it failed"
description: "An AI tool that finds the cheapest Saudi online store for a product, and an honest look at where it failed."
meta: ["Team project", "Backend developer and tester"]
tags: ["AI", "E-commerce", "Spring Boot"]
cardTags: ["AI", "E-commerce"]
result: "Found the product for 28 of 33 test items, with 78.1% matching precision."
oneLine: "An AI tool that finds the cheapest Saudi online store for a product, and an honest look at where it failed."
context: "Team project, Alenmaa Hackathon 2026. My part: backend, testing and statistical evaluation."
stack: ["Java", "Spring Boot", "SerpAPI", "LLM"]
links: []
ar:
  title: "مبصر"
  label: "هاكاثون النماء 2026"
  summary: "مقارنة أسعار بالذكاء الاصطناعي للتجارة الإلكترونية السعودية."
  subtitle: "العثور على أرخص متجر، وقياس مواضع الإخفاق"
  description: "أداة ذكاء اصطناعي تبحث عن أرخص متجر إلكتروني سعودي لمنتج ما، مع نظرة صريحة على مواضع إخفاقها."
  meta: ["مشروع جماعي", "مطوّر الواجهة الخلفية ومختبِر"]
  tags: ["ذكاء اصطناعي", "تجارة إلكترونية", "Spring Boot"]
  cardTags: ["ذكاء اصطناعي", "تجارة إلكترونية"]
  result: "عثرت الأداة على المنتج في 28 من أصل 33 عنصر اختبار، بدقة مطابقة بلغت 78.1%."
---

## What we built

A Spring Boot backend that searches stores through SerpAPI and uses an LLM to match listings to the product.

## Results

- It found the product for 28 of 33 test items (84.8% coverage).
- 78.1% matching precision (plus or minus 14.3 points, 95% confidence interval).
- 2.5% average price difference on correct matches.

## What I found

Half of the “cheapest store” picks were accessories, like cases and cables, not the product itself. I proposed a relative statistical filter to remove them.
