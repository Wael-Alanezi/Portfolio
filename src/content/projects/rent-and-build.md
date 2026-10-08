---
title: "Rent & Build"
order: 4
visual: "image"
label: "SE201 team project"
summary: "A rental platform for construction vehicles."
subtitle: "Built so no machine is ever double booked"
description: "A construction equipment rental marketplace for Saudi Arabia, built so two renters can never book the same machine for the same dates."
meta: ["Team of 6", "Prince Sultan University"]
tags: ["React.js", "Spring Boot", "MySQL"]
result: "Made search about 10× faster: 2.7 s to 0.26 s on 100,000 listings."
oneLine: "A construction equipment rental marketplace for Saudi Arabia, built so two renters can never book the same machine for the same dates."
context: "Designed as a team in SE201 at Prince Sultan University (6 students). I built the full-stack implementation, with Claude Code as an AI pair programmer."
image: "rent-and-build.webp"
imageAlt: "Rent & Build equipment page: an excavator illustration next to the booking card with rental dates, the total price and a Request booking button"
caseImage: "rent-and-build-home.webp"
caseImageAlt: "Rent & Build home page with equipment search by type and city, and recently listed machines"
video: "rent-and-build-demo"
videoCaption: "Screen recording of Rent & Build: browsing equipment, requesting a booking, the owner approving it, and the renter paying."
stack: ["Java 21", "Spring Boot", "React", "MySQL", "Docker", "GitHub Actions", "Testcontainers", "Playwright", "k6", "Moyasar (sandbox)"]
links:
  - label: "Live demo [URL]"
  - label: "Code"
    href: "https://github.com/Wael-Alanezi/Rent-Build"
  - label: "Engineering decisions"
    href: "https://github.com/Wael-Alanezi/Rent-Build/blob/main/docs/DECISIONS.md"
ar:
  title: "Rent & Build"
  label: "مشروع جماعي لمقرر SE201"
  summary: "منصة لتأجير معدات البناء."
  subtitle: "مصمَّمة بحيث لا تُحجز أي آلة مرتين"
  description: "سوق لتأجير معدات البناء في المملكة العربية السعودية، مبني بحيث لا يتمكن مستأجران من حجز الآلة نفسها في التواريخ نفسها."
  meta: ["فريق من 6 طلاب", "جامعة الأمير سلطان"]
  tags: ["React.js", "Spring Boot", "MySQL"]
  result: "جعلتُ البحث أسرع بنحو 10 مرات: من 2.7 ثانية إلى 0.26 ثانية على 100,000 إعلان."
  imageAlt: "صفحة معدّة في Rent & Build: رسم لحفّارة بجانب بطاقة الحجز مع تواريخ الاستئجار والسعر الإجمالي وزر طلب الحجز"
---

## Problem

Equipment owners have no shared place to list machines, and renters call around. The costly failure is a double booking.

## What I built

Owners list machines and approve requests. Renters search, compare, book, pay and message owners. Admins manage users and see an audit log.

## Key decisions

- Bookings lock the vehicle row inside a transaction. A test fires 10 simultaneous approvals for overlapping dates on real MySQL, and exactly one wins, on every CI run.
- I measured search before changing it. EXPLAIN-driven indexes and a capped result count took search p95 from 2.7 s to 259 ms on 100,000 listings (k6, 20 virtual users, one 4-core VM).
- Payments are verified on the server, and a database constraint allows only one successful payment per booking. Payment flow verified against a mocked Moyasar API.
- On a simulated free hosting tier the app took about 4.5 minutes to start, so I chose an always-on host for the demo.

## Results

- Search p95: 2,743 ms to 259 ms
- Throughput: 16.6 to 164.5 requests per second at 2x load
- 91 unit and 96 integration tests on real MySQL, plus an end-to-end test
- 94% line coverage on services
