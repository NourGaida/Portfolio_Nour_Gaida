import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    domain: z.string(), // e.g. "Medical imaging · Deep Learning"
    stack: z.array(z.string()).default([]),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    order: z.number().default(99), // controls display order (1 = first)
    featured: z.boolean().default(false), // shown on the home page
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    kind: z.string(), // "Internship report", "Paper", "Poster"...
    venue: z.string(),
    authors: z.array(z.string()).default([]),
    date: z.coerce.date(),
    language: z.string().default('English'),
    link: z.string().url().optional(),
  }),
});

export const collections = { projects, writing, publications };
