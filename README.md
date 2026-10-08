# Wael Alanezi portfolio

A one-page portfolio with project case studies, built with Astro as a static site and plain CSS.

## Edit content

All text lives in `src/content/`, so you don't need to touch code:

- `src/content/site/en.yaml` and `src/content/site/ar.yaml`: every piece of text on the home page, in English and Arabic (hero, map layers, project detail labels, certificates, About, contact, 404). Keep the two files in step when you change one.
- `src/content/projects/*.md`: one file per project. The top block holds the card and detail text in English, with an `ar:` block for the Arabic version. The text below the top block is the English case-study page.
- `visual` picks the project's graphic: `pipeline` (with `steps`), `bars` (sample price bars), `ndvi` (sample heatmap) or `image`.
- To hide a project, add `published: false` at the top of its file.

The map grids, heatmaps and pins are drawn in code from a seeded pattern (`src/lib/map.ts`), so they look the same on every load. The Mubsir bars and NDVI heatmap are labelled as samples on the page.

## Add files

- **CV:** `public/cv.pdf`. Replace the file to update it.
- **Project images:** `public/projects/`. A project with `visual: image` uses its `image` file.
- **Certificates:** images live in `public/certificates/`. Small preview thumbnails are made automatically in `public/certificates/thumbs/` when you run `npm run dev` or `npm run build`. Check certificates for personal details (such as an ID number) and cover them before adding.

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
