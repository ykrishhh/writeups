# writeups

Curated tutorials and methods for developers. Built with [Astro](https://astro.build) 5 + MDX. Live at [writeups.harrydev.one](https://writeups.harrydev.one).

## What's inside

| Section | Description |
|---------|-------------|
| **Tutorials** | Step-by-step guides — `src/content/tutorials/*.mdx` |
| **Methods** | Reusable playbooks — `src/content/methods/*.mdx` |
| **Trending** | 10 hand-picked external repos with context |
| **Most-Starred** | Top GitHub repos by stars, auto-fetched at build |

## Frontmatter

```mdx
---
title: "Post title"
description: "One-line summary for SEO and listings"
pubDate: 2026-07-19
tags: ["astro", "performance"]
draft: false
---
```

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
```

## Deploy

GitHub Actions builds on push to `main` → GitHub Pages. CNAME points to `writeups.harrydev.one`.

---

*No badges. No fluff. Just content.*