import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    role: z.string().optional(),
    year: z.string().optional(),
    status: z.enum(['published', 'in-development']).default('published'),
  }),
});

export const collections = { projects };
