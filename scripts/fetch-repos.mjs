import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../src/data/starred.ts");

const USER = process.env.GITHUB_USER || "ykrishhh";
const API = `https://api.github.com/users/${USER}/repos?sort=stargazers&per_page=100&type=owner`;

async function main() {
  const res = await fetch(API, {
    headers: { Accept: "application/vnd.github+json", "User-Agent": "writeups-build" },
  });
  if (!res.ok) {
    console.warn(`[fetch-repos] GitHub API returned ${res.status}; keeping committed fallback.`);
    process.exit(0);
  }
  const repos = await res.json();
  const picked = repos
    .filter((r) => !r.fork && !r.archived && r.stargazers_count > 0)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)
    .map((r) => ({
      name: r.name,
      url: r.html_url,
      desc: r.description || "",
      stars: r.stargazers_count,
      lang: r.language || "",
    }));

  const body = `// AUTO-GENERATED at build time by scripts/fetch-repos.mjs (GitHub API, owner repos by stars).
// Committed as a fallback so the site builds without network access.
export interface StarredRepo {
  name: string;
  url: string;
  desc: string;
  stars: number;
  lang: string;
}

export const starred: StarredRepo[] = ${JSON.stringify(picked, null, 2)};
`;

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, body);
  console.log(`[fetch-repos] wrote ${picked.length} repos to ${OUT}`);
}

main().catch((e) => {
  console.warn("[fetch-repos] failed:", e?.message || e);
  process.exit(0);
});
