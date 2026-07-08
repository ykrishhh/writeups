import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Default GitHub Pages project domain: ykrishhh.github.io/writeups
// `base` is required so assets resolve under the /writeups subpath.
export default defineConfig({
  site: 'https://harrydev.one/writeups',
  base: '/writeups',
  integrations: [mdx(), sitemap()],
});
