# writeups

Tutorials and methods — built with [Astro](https://astro.build) + MDX and
designed with the MotionSites system. Deployed to **writeups.harrydev.one**
via GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
```

## Content

- `src/content/tutorials/*.mdx` — step-by-step tutorials
- `src/content/methods/*.mdx` — reusable methods / playbooks

Each post frontmatter:

```mdx
---
title: "My post"
description: "One-line summary"
pubDate: 2026-07-08
tags: ["astro"]
draft: false
---
```

## Deploy

GitHub Actions builds and publishes to GitHub Pages on every push to `main`.
The `CNAME` file points the site at `writeups.harrydev.one`.

**DNS (one-time):** add a CNAME record `writeups.harrydev.one → ykrishhh.github.io`.
