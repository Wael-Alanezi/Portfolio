import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wael-alanezi.vercel.app',
  output: 'static',
  integrations: [sitemap()],
});
