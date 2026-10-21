import path from 'node:path';
import fs from 'node:fs';
import { chromium } from 'playwright';

const root = path.resolve(import.meta.dirname, '..');
const font = (file) => `data:font/woff2;base64,${fs.readFileSync(path.join(root, 'node_modules', file)).toString('base64')}`;

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  @font-face { font-family: Plex; src: url(${font('@fontsource-variable/ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2')}); font-weight: 100 700; }
  @font-face { font-family: PlexArabic; src: url(${font('@fontsource/ibm-plex-sans-arabic/files/ibm-plex-sans-arabic-arabic-600-normal.woff2')}); font-weight: 600; }
  @font-face { font-family: PlexMono; src: url(${font('@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2')}); }
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #0B1622; color: #E8EEF3; font-family: Plex; }
  .grid { position: absolute; inset: 0; background-image:
      linear-gradient(rgb(124 180 255 / .10) 1px, transparent 1px),
      linear-gradient(90deg, rgb(124 180 255 / .10) 1px, transparent 1px),
      linear-gradient(rgb(124 180 255 / .045) 1px, transparent 1px),
      linear-gradient(90deg, rgb(124 180 255 / .045) 1px, transparent 1px);
    background-size: 96px 96px, 96px 96px, 24px 24px, 24px 24px;
    mask-image: radial-gradient(ellipse 80% 70% at 70% 40%, #000 35%, transparent 80%); }
  .ticks { position: absolute; inset: 32px; background:
      linear-gradient(#7CB4FFB3, #7CB4FFB3) top left / 16px 1.5px no-repeat,
      linear-gradient(#7CB4FFB3, #7CB4FFB3) top left / 1.5px 16px no-repeat,
      linear-gradient(#7CB4FFB3, #7CB4FFB3) top right / 16px 1.5px no-repeat,
      linear-gradient(#7CB4FFB3, #7CB4FFB3) top right / 1.5px 16px no-repeat,
      linear-gradient(#7CB4FFB3, #7CB4FFB3) bottom left / 16px 1.5px no-repeat,
      linear-gradient(#7CB4FFB3, #7CB4FFB3) bottom left / 1.5px 16px no-repeat,
      linear-gradient(#7CB4FFB3, #7CB4FFB3) bottom right / 16px 1.5px no-repeat,
      linear-gradient(#7CB4FFB3, #7CB4FFB3) bottom right / 1.5px 16px no-repeat; }
  main { position: absolute; inset: 96px 96px 88px; display: flex; flex-direction: column; justify-content: center; gap: 22px; }
  .label { font-family: PlexMono; font-size: 20px; letter-spacing: .08em; text-transform: uppercase; color: #9AABBD; }
  h1 { font-size: 104px; font-weight: 600; line-height: 1; letter-spacing: -.02em; }
  .ar { font-family: PlexArabic; font-size: 44px; font-weight: 600; color: #9AABBD; line-height: 1.3; }
  .rule { width: 120px; height: 4px; background: #F5A524; border-radius: 2px; margin-block: 8px; }
  .lead { font-size: 34px; color: #C9D3DD; }
  .block { position: absolute; right: 48px; bottom: 44px; padding: 8px 14px; border: 1px solid #24394F; border-radius: 4px; background: #0B1622; font-family: PlexMono; font-size: 15px; letter-spacing: .08em; color: #9AABBD; }
</style>
</head>
<body>
  <div class="grid"></div>
  <div class="ticks"></div>
  <main>
    <p class="label">Software engineering · AI and data science</p>
    <h1>Wael Alanezi</h1>
    <p class="ar" dir="rtl" lang="ar" style="align-self: flex-start">وائل العنزي</p>
    <div class="rule"></div>
    <p class="lead">Software, data and AI systems · Riyadh</p>
  </main>
  <p class="block">WAELALANEZI.COM</p>
</body>
</html>`;

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(root, 'public', 'og.png') });

await page.setViewportSize({ width: 180, height: 180 });
await page.setContent(
  `<body style="margin:0;background:#0B1622">${fs.readFileSync(path.join(root, 'public', 'favicon.svg'), 'utf8').replace('<svg ', '<svg width="180" height="180" ')}</body>`,
);
await page.screenshot({ path: path.join(root, 'public', 'apple-touch-icon.png') });
await browser.close();
