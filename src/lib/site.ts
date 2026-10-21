import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

export type Lang = 'en' | 'ar';

export async function getSite(lang: Lang = 'en') {
  const entry = await getEntry('site', lang);
  if (!entry) throw new Error(`Missing src/content/site/${lang}.yaml`);
  return entry.data;
}

export const home = (lang: Lang) => (lang === 'ar' ? '/ar/' : '/');

export const projectHref = (id: string, lang: Lang) => `${lang === 'ar' ? '/ar' : ''}/projects/${id}/`;

export type Project = Awaited<ReturnType<typeof getProjects>>[number];

export async function getProjects(lang: Lang) {
  const base = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
  const arabic = lang === 'ar' ? await getCollection('projectsAr') : [];
  return base.map((entry) => {
    const ar = arabic.find((item) => item.id === entry.id);
    if (lang === 'ar' && !ar) throw new Error(`Missing src/content/projects-ar/${entry.id}.md`);
    const text = ar ? ar.data : entry.data;
    return {
      id: entry.id,
      entry: (ar ?? entry) as CollectionEntry<'projects'> | CollectionEntry<'projectsAr'>,
      ...entry.data,
      ...text,
      steps: text.steps ?? entry.data.steps ?? [],
      href: projectHref(entry.id, lang),
    };
  });
}

export function builtMonth(lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-SA-u-ca-gregory-nu-latn' : 'en-GB', {
    month: 'long',
    year: 'numeric',
  }).format(new Date());
}
