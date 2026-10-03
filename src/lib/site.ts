import { getCollection, getEntry } from 'astro:content';

export async function getSite() {
  const entry = await getEntry('site', 'home');
  if (!entry) throw new Error('Missing src/content/site/home.yaml');
  return entry.data;
}

export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export function shortUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, '');
}
