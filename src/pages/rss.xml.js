import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const tutorials = await getCollection('tutorials');
  const methods = await getCollection('methods');
  const posts = [...tutorials, ...methods]
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Writeups',
    description: 'Practical tutorials and reusable methods for builders.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/${p.collection === 'tutorials' ? 'tutorials' : 'methods'}/${p.id}/`,
    })),
  });
}
