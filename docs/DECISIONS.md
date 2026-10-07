# Decisions

## Design skill: Anthropic frontend-design instead of Impeccable
- **What:** Installed Anthropic's `frontend-design` skill (with its LICENSE.txt) into `.claude/skills/frontend-design/`.
- **Why:** `npx impeccable install` failed in this environment. The signed skill bundle download was refused with HTTP 403 by the network policy, and nothing was installed.
- **Alternative rejected:** Retrying or routing around the blocked download. The brief names frontend-design as the fallback.

## Design directions restarted
- **What:** Dropped the first three directions (Dispatch Board, Measured, Wayfinding) and built four complete home pages instead: Margin, Spruce, Spread and Offset, at `/directions/<name>`.
- **Why:** Wael found the first three too literal, too alike and rendered in a fallback font. Each new direction differs in layout, type, mood and density, and every font is self-hosted from Fontsource.
- **Alternative rejected:** Static HTML mock-ups. Real Astro pages share the same content and certificate component, so the chosen one becomes the home page with little rework.

## Certificate images and thumbnails
- **What:** Full images go in `public/certificates/<name>.webp`. `scripts/certificates.mjs` runs before `dev` and `build` and makes a 480 px wide thumbnail in `public/certificates/thumbs/` with sharp. Until an image exists, the preview and lightbox show a neutral card with the certificate's title and a visible `[Certificate image]` placeholder.
- **Why:** Wael only has to drop in one file per certificate. Thumbnails stay small for the hover preview, and no text is baked into images.
- **Alternative rejected:** Committing generated placeholder images under the real file names. They would be easy to forget, and they would put text inside images.

## Certificate preview placement
- **What:** The preview sits beside the widest certificate title in the list, on the inline-end side (start side first in RTL), flips to the other side if there is no room, and drops below or above the item on narrow screens. It is clamped to 8 px from the viewport edges. Clicking or tapping any certificate opens a native `<dialog>` lightbox.
- **Why:** Measuring the whole list, not just the hovered row, keeps the preview off every certificate title, not only the one being read.
- **Alternative rejected:** A CSS-only preview anchored to each row. It cannot reliably avoid the screen edges or the neighbouring rows.

## Placeholder links
- **What:** `/cv.pdf` is linked now and will work once the file is added to `public/`. Project links without a URL (for example `Live demo [URL]`) render as plain text, not as broken links. The Rent & Build decisions link points to `docs/DECISIONS.md` on `main`, checked against a clone of the repo.
- **Why:** Keeps placeholders visible without shipping dead links.
- **Alternative rejected:** Hiding links that have no URL, which would hide the placeholder from Wael.

## Direction: Spruce, refined
- **What:** Spruce (sticky sidebar, dark-first with a light theme) became the site. Wael picked Bricolage Grotesque (Arabic companion Alexandria) and the Sand accent from an options sheet. The other three directions and the options sheet were removed.
- **Why:** Spruce was the strongest of the four. Bricolage for the name, headline and contact email, plus a warm accent instead of mint, move it away from the common dark-sidebar portfolio look.
- **Alternative rejected:** Instrument Serif or Fraunces for display, and Brass or Amber for the accent (all shown on the options sheet).

## Final tokens
**Colors**

| Token | Dark (default) | Light | Used for |
|---|---|---|---|
| `--bg` | `#0F1716` | `#F4F6F5` | Page background |
| `--raised` | `#16221F` | `#E8EDEB` | Project and certificate hover rows, image backgrounds |
| `--ink` | `#E6ECE9` | `#101917` | Name, headline, headings, titles |
| `--text` | `#C3CCC8` | `#2C3835` | Body text (11.1:1 dark, 11.2:1 light) |
| `--muted` | `#97A4A0` | `#4F5C58` | Dates, tags, meta (7.1:1 dark, 6.4:1 light) |
| `--line` | `#2A3734` | `#D3DBD8` | Borders, image outlines |
| `--accent` | `#D9B77E` Sand | `#7A5A24` | Proof line, results, primary button, email, focus ring (9.6:1 dark, 5.8:1 light) |
| `--on-accent` | `#0F1716` | `#FFFFFF` | Primary button label (9.6:1 dark, 6.3:1 light) |

**Type**

| Step | Size | Font | Used for |
|---|---|---|---|
| xs | 13 px | Geist | Dates, tags, link rows, captions, footer |
| label | 15 px, weight 500 | Geist | Section headings, in `--ink` |
| base | 16 px / 1.6 | Geist | All body text, including About and project descriptions |
| md | 20 px, weight 600 | Geist | Project titles, job and degree titles, case-study section headings |
| lg | 28 px | Bricolage Grotesque, weight 600 | Name; contact email on phones; case-study titles use Geist at this size |
| xl | 48 px desktop, 36 px under 640 px | Bricolage Grotesque, weight 600 | Headline; contact email from 640 px |

Bricolage uses its variable `opsz`, `wdth` and `wght` axes, with `font-optical-sizing: auto`. Text blocks are capped at `--measure: 32rem`, which gives 45 to 75 characters per line at every tested width. Arabic companions are already in the font stacks (Alexandria for display, IBM Plex Sans Arabic for Geist). Their files download only when Arabic text appears.

**Spacing** (`--space-1` to `--space-9`): 4, 8, 12, 16, 24, 32, 48, 64, 96 px. Radius is 8 px for images and buttons, 12 px for hover rows. Every tap target on phones is at least 44 px tall. Project title links sit inside rows that are fully clickable.

## Sidebar height
- **What:** The sticky sidebar is exactly one viewport tall, with the theme row pushed to the bottom. Below 860 px of height, the gaps tighten. As a last resort, the sidebar can scroll on its own (`overflow-y: auto`).
- **Why:** It must fit completely at 1366×768 and 1440×900. Measured in Playwright, it fits both without scrolling.
- **Alternative rejected:** A non-sticky sidebar, which loses the section menu once you scroll.

## Images and video
- **What:** Rent & Build's home image is a 16:10 crop of `docs/screenshots/details.png` from the Rent-Build repo. It shows the excavator and the booking card, padded with the app's own background colour (`#F3F6FA`). The case-study page uses `home.png`, plus `docs/demo.gif` converted to a muted, looping WebM (about 390 KB) and MP4 (about 630 KB), with the blank first half second trimmed. The video does not autoplay. It has controls and a poster from the owner's booking-requests screen. Other projects use neutral mid-tone placeholders until real screenshots are added.
- **Why:** Wael asked that nothing animate except the certificate preview, so the video plays only when someone presses play.
- **Alternative rejected:** Autoplaying the video, and showing the whole page screenshot (too busy at thumbnail size).

## Motion
- **What:** The certificate preview (150 ms fade and scale) and the lightbox fade are the only motion. Hover states on project and certificate rows change colour instantly, without transitions. The sidebar's current-section marker moves without animation.
- **Why:** One signature interaction, everything else still.

## Open Graph image and site URL
- **What:** `public/og.png` is the Rent & Build crop on the Spruce background, with no text. `site` in `astro.config.mjs` and the sitemap line in `robots.txt` use Wael's domain, `https://waelalanezi.com`.
- **Why:** No text inside images, so nothing needs translating later. Canonical URLs, Open Graph URLs and the sitemap must use the real domain.
- **Alternative rejected:** An Open Graph image with the name and headline set in it.

## Vercel Web Interface Guidelines review
- **What:** Reviewed the site against github.com/vercel-labs/web-interface-guidelines and fixed what applied:
  - `touch-action: manipulation` and a themed tap highlight on links and buttons.
  - `overscroll-behavior: contain` on the lightbox.
  - Curly quotes and apostrophes in the content.
  - Non-breaking spaces between numbers and units.
  - Tabular figures for result numbers.
  - `translate="no"` on the name, project names, stacks and email.
  - The first project image loads eagerly, because it is above the fold on desktop.
  - Bricolage subset to its weight and optical-size axes (77 KB instead of 132 KB).
  - `theme-color` set before the first paint for the light theme.
- **Already met:** keyboard use and focus management, visible focus rings, hit targets (24 px on desktop, 44 px on phones), reduced motion, image dimensions, font preloading, `color-scheme`, skip link and heading order.
- **Not applied:** the Forms section (the site has no forms) and the Vercel-specific copywriting preferences (Title Case, "&" for "and"), which the guidelines mark as Vercel's own brand choices rather than universal rules. The site keeps sentence case, as the guidelines recommend for marketing pages.

## Projects, footer, CV and certificates (Wael's request)
- **What:** Only Rent & Build is published. Mubsir, Lessons Learned and the agentic assistant are kept in `src/content/projects/` with `published: false`, so they have no page, no sitemap entry and no card. "More on GitHub" was replaced by one line saying more projects are on the way, with a link to GitHub. The "Built with Claude Code" footer was removed from every page. Wael's CV is at `public/cv.pdf`. Four certificate images were added as WebP; ECCMA still shows its placeholder card.
- **Why:** Wael asked for these changes. A `published` flag keeps the written content, so a project comes back by changing one line.
- **Alternative rejected:** Deleting the hidden project files.

## Personal data on certificates
- **What:** The Tuwaiq Academy certificate showed Wael's national ID number. That line was covered with white before publishing, and the image's grey outer frame was cropped. Name, course, dates and the verification code are unchanged.
- **Why:** The site is public, and a national ID number does not belong on it.
- **Alternative rejected:** Publishing the certificate as received.

## Profile without the operations job (Wael's request)
- **What:**
  - Removed the land operations supervisor role from the intro, the About paragraph and the Experience section. With no jobs listed, that section is titled "Education", and so is its sidebar link. Adding a job back in `home.yaml` restores "Experience and education".
  - Rewrote About from facts in the brief and the CV: the degree, building and measuring software, Rent & Build's faster search, testing Mubsir with statistics, agentic AI with a person in the loop, and explaining results in Arabic and English.
  - Changed the meta description from "real operational problems" to "builds data and AI software and measures whether it works".
  - Activities now gives Wael's Alenmaa Hackathon role: backend developer and tester on Mubsir.
- **Why:** Wael wants the site to focus on his software work rather than his current job.

## Certificate shapes
- **What:** The certificate component reads each image's real width and height at build time. The hover preview keeps landscape certificates 240 px wide and portrait ones 300 px tall, and the lightbox shows the whole image without cropping.
- **Why:** The ECCMA certificate is portrait, and a fixed landscape box would have cropped most of it.
