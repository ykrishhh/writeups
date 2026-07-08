import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Custom domain: no `base` needed. Pages serves at the domain root.
export default defineConfig({
  site: 'https://writeups.harrydev.one',
  integrations: [mdx(), sitemap()],
});
