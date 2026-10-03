---
title: Rent & Build
order: 1
size: featured
oneLine: "A construction equipment rental marketplace for Saudi Arabia, built so two renters can never book the same machine for the same dates."
context: "Designed as a team in SE201 at Prince Sultan University (6 students). I built the full-stack implementation, with Claude Code as an AI pair programmer."
result: "Search p95 went from 2,743 ms to 259 ms on 100,000 listings."
stack: [Java 21, Spring Boot, React, MySQL, Docker, GitHub Actions, Testcontainers, Playwright, k6, Moyasar (sandbox)]
links:
  - label: Live demo [URL]
  - label: Code
    href: https://github.com/Wael-Alanezi/Rent-Build
  - label: Engineering decisions
    href: https://github.com/Wael-Alanezi/Rent-Build/blob/main/DECISIONS.md
---

## Problem

Equipment owners have no shared place to list machines, and renters call around. The costly failure is a double booking.

## What I built

Owners list machines and approve requests. Renters search, compare, book, pay and message owners. Admins manage users and see an audit log.

## Key decisions

- Bookings lock the vehicle row inside a transaction. A test fires 10 simultaneous approvals for overlapping dates on real MySQL, and exactly one wins, on every CI run.
- I measured search before changing it. EXPLAIN-driven indexes and a capped result count took search p95 from 2.7 s to 259 ms on 100,000 listings (k6, 20 virtual users, one 4-core VM).
- Payments are verified on the server, and a database constraint allows only one successful payment per booking. Payment flow verified against a mocked Moyasar API.
- On a simulated free hosting tier the app took about 4.5 minutes to start, so I chose an always-on host for the demo.

## Results

- Search p95: 2,743 ms to 259 ms
- Throughput: 16.6 to 164.5 requests per second at 2x load
- 91 unit and 96 integration tests on real MySQL, plus an end-to-end test
- 94% line coverage on services
