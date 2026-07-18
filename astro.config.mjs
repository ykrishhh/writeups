import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Subdomain: writeups.harrydev.one
export default defineConfig({
  site: 'https://writeups.harrydev.one',
  integrations: [mdx(), sitemap()],
});
