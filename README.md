# Wael Alanezi portfolio

A one-page portfolio with project case studies, built with Astro as a static site and plain CSS.

## Edit content

All text lives in `src/content/`, so you don't need to touch code:

- `src/content/site/home.yaml`: headline, intro, proof line, about, experience, education, training, activities, contact and links.
- `src/content/projects/*.md`: one file per project. The top block (between `---` lines) holds the title, one-line summary, result, image and links. The text below it is the case-study page.

Text in `[square brackets]` is a placeholder to replace.

## Add files

- **CV:** put your CV at `public/cv.pdf`.
- **Project screenshots:** replace `public/projects/mubsir.webp`, `lessons-learned.webp` and `agentic-assistant.webp` with 16:10 WebP screenshots (1280×800 works well), and update `imageAlt` in each project file.
- **Certificates:** add `sdaia-agentic.webp`, `sdaia-genai.webp`, `tuwaiq-gcp-data.webp`, `eccma-mdqm.webp` and `ssa-space-mission.webp` to `public/certificates/`. Small preview thumbnails are made automatically in `public/certificates/thumbs/` when you run `npm run dev` or `npm run build`. Until then, each certificate shows a neutral placeholder card.

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
