import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({
  label: z.string(),
  href: z.string(),
});

const text = z.object({
  title: z.string(),
  meta: z.array(z.string()),
  summary: z.string(),
  description: z.string(),
  context: z.string().optional(),
  status: z.string().optional(),
  points: z.array(z.string()).default([]),
  tags: z.array(z.string()),
  figure: z.string(),
  steps: z.array(z.string()).optional(),
  links: z.array(link).default([]),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: text.extend({
    order: z.number(),
    group: z.enum(['work', 'more']),
    visual: z.enum(['rent', 'rag', 'mubsir', 'flow']),
    stack: z.array(z.string()).default([]),
    video: z.string().optional(),
  }),
});

const projectsAr = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects-ar' }),
  schema: text,
});

const site = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/site' }),
  schema: z.object({
    lang: z.enum(['en', 'ar']),
    title: z.string(),
    description: z.string(),
    ogAlt: z.string(),
    name: z.string(),
    otherName: z.string(),
    email: z.string(),
    phone: z.string(),
    phoneDisplay: z.string(),
    linkedin: z.string(),
    github: z.string(),
    cv: z.string(),
    skipToContent: z.string(),
    nav: z.object({
      label: z.string(),
      work: z.string(),
      programs: z.string(),
      about: z.string(),
      contact: z.string(),
      menu: z.string(),
      close: z.string(),
      language: z.string(),
    }),
    hero: z.object({
      kicker: z.string(),
      role: z.string(),
      lead: z.string(),
      work: z.string(),
      cv: z.string(),
      proofLabel: z.string(),
      proof: z.array(
        z.object({
          label: z.string(),
          value: z.string(),
          note: z.string(),
          href: z.string(),
          accent: z.boolean().default(false),
        }),
      ),
      figure: z.string(),
    }),
    work: z.object({ index: z.string(), title: z.string(), readCase: z.string() }),
    programs: z.object({
      index: z.string(),
      title: z.string(),
      items: z.array(
        z.object({
          date: z.string(),
          title: z.string(),
          text: z.string(),
          links: z.array(link).default([]),
        }),
      ),
    }),
    more: z.object({ index: z.string(), title: z.string() }),
    training: z.object({
      index: z.string(),
      title: z.string(),
      subtitle: z.string(),
      coursesLabel: z.string(),
      courses: z.string(),
      close: z.string(),
      missing: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          issuer: z.string(),
          date: z.string(),
          image: z.string(),
          alt: z.string(),
        }),
      ),
    }),
    about: z.object({
      index: z.string(),
      title: z.string(),
      text: z.string(),
      facts: z.array(z.object({ label: z.string(), value: z.string() })),
    }),
    contact: z.object({
      title: z.string(),
      email: z.string(),
      phone: z.string(),
      linkedin: z.string(),
      github: z.string(),
      cv: z.string(),
    }),
    footer: z.object({ built: z.string(), top: z.string(), stats: z.string() }),
    figures: z.record(z.string(), z.string()),
    caseStudy: z.object({
      back: z.string(),
      stack: z.string(),
      links: z.string(),
      next: z.string(),
      video: z.string(),
      architecture: z.string(),
      architectureCredit: z.string(),
    }),
    notFound: z.object({
      title: z.string(),
      text: z.string(),
      home: z.string(),
    }),
  }),
});

export const collections = { projects, projectsAr, site };
