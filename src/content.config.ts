import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({
  label: z.string(),
  href: z.string().optional(),
});

const fact = z.object({
  label: z.string(),
  value: z.string(),
});

const translation = z.object({
  title: z.string(),
  label: z.string(),
  summary: z.string(),
  subtitle: z.string(),
  description: z.string(),
  status: z.string().optional(),
  meta: z.array(z.string()),
  tags: z.array(z.string()),
  cardTags: z.array(z.string()).optional(),
  result: z.string().optional(),
  decision: z.string().optional(),
  imageAlt: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: translation.extend({
    order: z.number(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    visual: z.enum(['pipeline', 'bars', 'ndvi', 'image']),
    steps: z.array(z.string()).optional(),
    oneLine: z.string(),
    context: z.string(),
    image: z.string().optional(),
    caseImage: z.string().optional(),
    caseImageAlt: z.string().optional(),
    video: z.string().optional(),
    videoCaption: z.string().optional(),
    stack: z.array(z.string()),
    links: z.array(link),
    ar: translation.extend({
      steps: z.array(z.string()).optional(),
    }),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/site' }),
  schema: z.object({
    lang: z.enum(['en', 'ar']),
    title: z.string(),
    description: z.string(),
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    linkedin: z.string(),
    github: z.string(),
    cv: z.string(),
    skipToContent: z.string(),
    nav: z.object({
      projects: z.string(),
      about: z.string(),
      contact: z.string(),
      menu: z.string(),
      close: z.string(),
      language: z.string(),
      languageLabel: z.string(),
    }),
    hero: z.object({
      coordinates: z.string(),
      eyebrow: z.string(),
      eyebrowShort: z.string(),
      role: z.string(),
      tagline: z.string(),
      taglineShort: z.string(),
      viewProjects: z.string(),
      downloadCv: z.string(),
      skip: z.string(),
      scan: z.string(),
      note: z.string(),
      explore: z.string(),
    }),
    pins: z.record(z.string(), z.string()),
    layers: z.object({
      title: z.string(),
      subtitle: z.string(),
      skills: z.string(),
      projects: z.string(),
      goals: z.string(),
      note: z.string(),
      skillPins: z.array(z.string()),
      goalPins: z.array(z.string()),
      openProject: z.string(),
    }),
    detail: z.object({
      breadcrumb: z.string(),
      openCase: z.string(),
      backToMap: z.string(),
      sample: z.string(),
      ndviNote: z.string(),
      lowZone: z.string(),
      low: z.string(),
      high: z.string(),
      barsTitle: z.string(),
      barsNote: z.string(),
      stores: z.array(z.string()),
      pipelineNote: z.string(),
    }),
    projectsSection: z.object({
      title: z.string(),
      subtitle: z.string(),
      viewProject: z.string(),
    }),
    training: z.object({
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
      title: z.string(),
      text: z.string(),
      facts: z.array(fact),
    }),
    contact: z.object({
      title: z.string(),
      email: z.string(),
      phone: z.string(),
      linkedin: z.string(),
      github: z.string(),
      downloadCv: z.string(),
    }),
    notFound: z.object({
      title: z.string(),
      text: z.string(),
      home: z.string(),
    }),
  }),
});

export const collections = { projects, site };
