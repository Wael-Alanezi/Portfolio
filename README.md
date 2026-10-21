# Wael Alanezi portfolio

A one-page portfolio with project case studies, built with Astro as a static site and plain CSS.

## Edit content

All text lives in `src/content/`, so you don't need to touch code:

- `src/content/site/en.yaml` and `src/content/site/ar.yaml`: every piece of text on the home page and the shared labels, in English and Arabic (hero and proof strip, section titles, Hackathons & programs, certificates, About, contact, figure labels, case-study labels, 404). Keep the two files in step when you change one.
- `src/content/projects/*.md`: one file per project, with the shared data (order, `group`, `visual`, stack, video) and the English text. The text below the top block is the English case study.
- `src/content/projects-ar/*.md`: the Arabic text for the same projects, with the Arabic case study below the top block. Every project needs both files.
- `group` puts a project in Selected work (`work`) or More work (`more`). `visual` picks its figure: `rent`, `rag`, `mubsir` or `flow` (which draws `steps`).

Every figure is HTML and CSS drawn from real numbers in these files. There is no sample data.

## Add files

- **CV:** `public/Wael-Alanezi-CV.pdf`, built by `scripts/cv.py` (ReportLab: `python3 scripts/cv.py`). Edit the text in the script and run it again to update it. The old `/cv.pdf` address redirects to it (`vercel.json`).
- **Project images:** `src/assets/projects/`. Astro turns them into AVIF and WebP at build time. The Rent & Build demo video and its poster stay in `public/projects/`.
- **Certificates:** images live in `public/certificates/`. Small preview thumbnails are made automatically in `public/certificates/thumbs/` when you run `npm run dev` or `npm run build`. Check certificates for personal details (such as an ID number) and cover them before adding.
- **Social image and touch icon:** `npm run og` redraws `public/og.png` and `public/apple-touch-icon.png` with Playwright.

## Run locally

Requires Node 22 or newer.

```
npm install
npm run dev
```

Open http://localhost:4321. Use `npm run build` and then `npm run preview` to check the production build.

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel, choose **Add New → Project**, import the repo, and keep the detected **Astro** preset (build command `npm run build`, output folder `dist`).
3. Deploy, then in the project's **Settings → Domains** add `waelalanezi.com` (and `www.waelalanezi.com`, redirecting to it) and set the DNS records Vercel shows at your domain registrar.

The site address is set to `https://waelalanezi.com` in `astro.config.mjs` and in the sitemap line of `public/robots.txt`. Change both if the domain ever changes.

There are no cookies, trackers or analytics.
