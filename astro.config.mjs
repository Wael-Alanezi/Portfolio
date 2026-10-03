import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://waelalanezi.com',
  output: 'static',
  integrations: [sitemap()],
});
