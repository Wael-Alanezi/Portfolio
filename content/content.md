# Site content

Writing rules:
- Keep sentences short.
- No numbers that can't be shown.
- Never call anything "the first".

## Site settings
- Page title: `Wael Alanezi | Software Engineering student, Riyadh`
- Meta description: `Software Engineering student at Prince Sultan University (AI & Data Science) who builds software for real operational problems. Projects, results and contact.`
- Email to show: [pick one: wael.m.alanezi@gmail.com or wayelalanezi@gmail.com]
- LinkedIn: linkedin.com/in/wael-alanezi
- GitHub: github.com/Wael-Alanezi
- CV: /cv.pdf

## Hero
**Headline:** I build software that holds up in real operations.

**Line under it:** Software Engineering student at Prince Sultan University (AI & Data Science track) and land operations supervisor in Riyadh. Open to software engineering, data and AI internships for [season and year].

**Buttons:** View projects / Download CV / Email me

## About
I work in land operations, so I see where processes break: [two or three real examples from your job]. That's what I like to build for. I'm studying Software Engineering at Prince Sultan University on the AI & Data Science track, graduating in 2028. My recent work covers a full-stack rental marketplace with measured performance, an AI price-comparison tool I evaluated with real statistics, and agentic AI systems that keep a human in the loop. I care about software that is correct, measured and useful to the people running the work.

## Featured project 1: Rent & Build
- **One line:** A construction equipment rental marketplace for Saudi Arabia, built so two renters can never book the same machine for the same dates.
- **Context:** Designed as a team in SE201 at Prince Sultan University (6 students). I built the full-stack implementation, with Claude Code as an AI pair programmer.
- **Problem:** Equipment owners have no shared place to list machines, and renters call around. The costly failure is a double booking.
- **What I built:** Owners list machines and approve requests. Renters search, compare, book, pay and message owners. Admins manage users and see an audit log.
- **Key decisions:**
  - Bookings lock the vehicle row inside a transaction. A test fires 10 simultaneous approvals for overlapping dates on real MySQL, and exactly one wins, on every CI run.
  - I measured search before changing it. EXPLAIN-driven indexes and a capped result count took search p95 from 2.7 s to 259 ms on 100,000 listings (k6, 20 virtual users, one 4-core VM).
  - Payments are verified on the server, and a database constraint allows only one successful payment per booking. Payment flow verified against a mocked Moyasar API.
  - On a simulated free hosting tier the app took about 4.5 minutes to start, so I chose an always-on host for the demo.
- **Results:**
  - search p95 2,743 ms to 259 ms
  - throughput 16.6 to 164.5 requests per second at 2x load
  - 91 unit and 96 integration tests on real MySQL, plus an end-to-end test
  - 94% line coverage on services
- **Stack:** Java 21, Spring Boot, React, MySQL, Docker, GitHub Actions, Testcontainers, Playwright, k6, Moyasar (sandbox).
- **Links:** Live demo [URL] / Code github.com/Wael-Alanezi/Rent-Build / Engineering decisions (DECISIONS.md in the repo)

## Featured project 2: Mubsir
- **One line:** An AI tool that finds the cheapest Saudi online store for a product, and an honest look at where it failed.
- **Context:** Team project, Alenmaa Hackathon 2026. My part: backend, testing and statistical evaluation.
- **What we built:** A Spring Boot backend that searches stores through SerpAPI and uses an LLM to match listings to the product.
- **Results:**
  - It found the product for 28 of 33 test items (84.8% coverage).
  - 78.1% matching precision (plus or minus 14.3 points, 95% confidence interval).
  - 2.5% average price difference on correct matches.
- **What I found:** Half of the "cheapest store" picks were accessories, like cases and cables, not the product itself. I proposed a relative statistical filter to remove them: [one sentence on how it works].
- **Stack:** Java, Spring Boot, SerpAPI, LLM.
- **Links:** [Code or demo video, if public]

## Featured project 3: Lessons Learned assistant for project teams
- **One line:** An AI assistant that helps project teams find and reuse lessons from past projects, and asks a person before saving new ones.
- **Context:** [Alenmaa Hackathon / SDAIA Academy capstone: write the accurate one], 2026. [Solo or team, and your role.]
- **What I built:**
  - A LangGraph workflow (retrieve, route, then search or consult, then reflect).
  - A Chroma vector store with local embeddings (bge-small-en-v1.5), using a Claude model through OpenRouter.
  - A Streamlit app with Search and Consult modes.
- **Key decision:** New lessons go through a human approval gate, and the reflection step defaults to not saving. This keeps weak lessons out of the knowledge base.
- **Data:** NASA's public lessons-learned records plus synthetic documents in a Saudi project context.
- **What I learned:** [Pick one: fixing an overly permissive reflection prompt, Chroma file locks on Windows, or stale state when switching modes.]
- **Stack:** Python, LangGraph, Chroma, Hugging Face embeddings, Streamlit.
- **Links:** github.com/Wael-Alanezi/PM_LessonLearned_AgenticRag

## Featured project 4 (smaller card): Agentic personal assistant
- **One line:** A multi-agent assistant for calendar, notes and email, with a human in the loop.
- **Context:** Capstone for SDAIA Academy's "Building Agentic AI Systems" program, July 2026.
- **What I built:** A LangGraph supervisor with three sub-agents (calendar, knowledge base, email), a five-stage RAG pipeline with Chroma and local embeddings, and human-in-the-loop interrupts (LangGraph interrupt and resume). [Say what the human approves.]
- **Stack:** Python, LangGraph, Chroma, OpenRouter, Google Colab.
- **Links:** github.com/Wael-Alanezi/agentic-personal-assistant

## More on GitHub (a short list, no cards)
- **Word Frequency Analyzer:** Java, an AVL tree versus a doubly linked list, with benchmarks across 5 text files.
- **Hotel Management System:** Java, multiple user roles, file persistence.
- **Automation tool:** Python, Selenium and Tkinter.

## Experience
**Land Operations Supervisor**, [Company], Riyadh, [Start year] to present
- [What you supervise: team size, fleet or sites, daily volume]
- [One process you improved, and what changed]
- [One problem you solved with data or a tool]

## Education
**B.Sc. Software Engineering**, Prince Sultan University, Riyadh. AI & Data Science track, expected 2028.
Relevant courses: Software Engineering, Data Structures, Human-Computer Interaction [edit as needed].

## Training and certifications (2026)
- SDAIA Academy: Building Agentic AI Systems (July)
- SDAIA Academy: Developing Generative AI Solutions (July)
- Tuwaiq Academy: Introduction to Data Engineering on Google Cloud (September)
- ECCMA: MDQM, ISO 8000 data quality (July)
- Saudi Space Agency, Space Academy: Introduction to Space Mission Design (September)

## Activities
- Alenmaa Hackathon 2026: [your role and project]
- Project Management Club, Prince Sultan University: member

## Contact
Open to internships in software engineering, data and AI in Riyadh.
Email [address] / LinkedIn / GitHub / Download CV

## Footer
Built with Claude Code. Source on GitHub.
