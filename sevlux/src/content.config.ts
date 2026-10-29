import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    image: z.string(),
    category: z.string(),
    keywords: z.array(z.string()).default([]),
    pubDate: z.date().optional(),
    jsonLdType: z.string().default('Service'),
    longForm: z.boolean().default(false),
  }),
});

const vipServices = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vip-services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    image: z.string(),
    category: z.string().default('VIP Services'),
    keywords: z.array(z.string()).default([]),
    pubDate: z.date().optional(),
    icon: z.string().default('★'),
    longForm: z.boolean().default(true),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    image: z.string(),
    category: z.string(),
    keywords: z.array(z.string()).default([]),
    pubDate: z.date(),
    author: z.string().default('Istanbul Service Team'),
  }),
});

export const collections = { pages, vipServices, blog };
