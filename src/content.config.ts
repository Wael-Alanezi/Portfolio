import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({
  label: z.string(),
  href: z.string().optional(),
});

const item = z.object({
  name: z.string(),
  text: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    published: z.boolean().default(true),
    size: z.enum(['featured', 'small']),
    oneLine: z.string(),
    context: z.string(),
    result: z.string().optional(),
    decision: z.string().optional(),
    image: z.string(),
    imageAlt: z.string(),
    caseImage: z.string().optional(),
    caseImageAlt: z.string().optional(),
    video: z.string().optional(),
    videoCaption: z.string().optional(),
    stack: z.array(z.string()),
    links: z.array(link),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/site' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    name: z.string(),
    email: z.string(),
    linkedin: z.string(),
    github: z.string(),
    cv: z.string(),
    headline: z.string(),
    intro: z.string(),
    proof: z.string(),
    about: z.string(),
    experience: z.array(
      z.object({
        role: z.string(),
        company: z.string(),
        place: z.string(),
        period: z.string(),
        points: z.array(z.string()),
      }),
    ),
    education: z.object({
      degree: z.string(),
      school: z.string(),
      place: z.string(),
      detail: z.string(),
      courses: z.string(),
    }),
    training: z.array(
      z.object({
        title: z.string(),
        issuer: z.string(),
        date: z.string(),
        image: z.string(),
        alt: z.string(),
      }),
    ),
    activities: z.array(item),
    more: z.array(item),
    contact: z.string(),
    footer: z.string(),
  }),
});

export const collections = { projects, site };
