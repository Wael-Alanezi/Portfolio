import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
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

export async function projectImage(file: string) {
  const folder = path.join(process.cwd(), 'public', 'projects');
  const small = file.replace(/\.webp$/, '-640.webp');
  const { width = 1280, height = 800 } = await sharp(path.join(folder, file)).metadata();
  const hasSmall = fs.existsSync(path.join(folder, small));
  return {
    src: `/projects/${file}`,
    srcset: hasSmall ? `/projects/${small} 640w, /projects/${file} ${width}w` : undefined,
    width,
    height,
  };
}
