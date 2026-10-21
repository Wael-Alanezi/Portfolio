import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const latin = 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
const arabic = 'U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0897-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC';

export default defineConfig({
  site: 'https://waelalanezi.com',
  output: 'static',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ar: 'ar' },
      },
    }),
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-sans',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2'],
            weight: '100 700',
            style: 'normal',
            unicodeRange: [latin],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'IBM Plex Sans Arabic',
      cssVariable: '--font-arabic',
      fallbacks: [],
      options: {
        variants: [
          {
            src: ['@fontsource/ibm-plex-sans-arabic/files/ibm-plex-sans-arabic-arabic-400-normal.woff2'],
            weight: 400,
            style: 'normal',
            unicodeRange: [arabic],
          },
          {
            src: ['@fontsource/ibm-plex-sans-arabic/files/ibm-plex-sans-arabic-arabic-600-normal.woff2'],
            weight: 600,
            style: 'normal',
            unicodeRange: [arabic],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      fallbacks: ['monospace'],
      options: {
        variants: [
          {
            src: ['@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2'],
            weight: 400,
            style: 'normal',
            unicodeRange: [latin],
          },
        ],
      },
    },
  ],
});
