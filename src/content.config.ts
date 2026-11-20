import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const roleSchema = z.object({
  title: z.string(),
  period: z.string(),
  focus: z.string(),
  promoted: z.boolean().optional(),
});

const metricSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    logo: z.string().optional(),
    location: z.string(),
    period: z.string(),
    current: z.boolean().default(false),
    order: z.number().int().positive(),
    summary: z.string(),
    roles: z.array(roleSchema).min(1),
    metrics: z.array(metricSchema).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    context: z.string(),
    period: z.string(),
    status: z.enum(['Active', 'Completed', 'Ongoing']),
    order: z.number().int().positive(),
    summary: z.string(),
    outcome: z.string(),
    metrics: z.array(metricSchema).default([]),
    stack: z.array(z.string()).default([]),
    repoUrl: z.url().optional(),
    liveUrl: z.url().optional(),
  }),
});

export const collections = { experience, projects };
