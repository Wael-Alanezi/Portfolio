# Wael Alanezi portfolio

A one-page portfolio with project case studies, built with Astro as a static site and plain CSS.

## Edit content

All text lives in `src/content/`, so you don't need to touch code:

- `src/content/site/home.yaml`: headline, intro, proof line, about, experience, education, training, activities, contact and links.
- `src/content/projects/*.md`: one file per project. The top block (between `---` lines) holds the title, one-line summary, result, image and links. The text below it is the case-study page.
- Only Rent & Build is live right now. Mubsir, Lessons Learned and the agentic assistant are written but hidden with `published: false` at the top of their files. To show one, delete that line (or set it to `true`) and push.

Text in `[square brackets]` is a placeholder to replace.

## Add files

- **CV:** `public/cv.pdf`. Replace the file to update it.
- **Project screenshots:** when you publish a hidden project, replace its placeholder in `public/projects/` (`mubsir.webp`, `lessons-learned.webp`, `agentic-assistant.webp`) with a 16:10 WebP screenshot (1280×800 works well), and update `imageAlt` in its file.
- **Certificates:** images live in `public/certificates/`. Four are in; add `eccma-mdqm.webp` for the ECCMA certificate. Small preview thumbnails are made automatically in `public/certificates/thumbs/` when you run `npm run dev` or `npm run build`. Until an image exists, that certificate shows a neutral placeholder card. Check certificates for personal details (such as an ID number) and cover them before adding.

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
