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
- **What:** `/cv.pdf` is linked now and will work once the file is added to `public/`. Project links without a URL (for example `Live demo [URL]`) render as plain text, not as broken links. The Rent & Build decisions link assumes the file is `DECISIONS.md` on the `main` branch.
- **Why:** Keeps placeholders visible without shipping dead links.
- **Alternative rejected:** Hiding links that have no URL, which would hide the placeholder from Wael.
