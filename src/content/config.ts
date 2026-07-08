import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const tutorials = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/tutorials' }),
  schema: postSchema,
});

const methods = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/methods' }),
  schema: postSchema,
});

export const collections = { tutorials, methods };
