import { getCollection } from 'astro:content';

// Drafts are visible with `npm run dev` and hidden in production builds.
const visible = ({ data }: { data: { draft?: boolean } }) => import.meta.env.DEV || !data.draft;

export async function getProjects() {
  const all = await getCollection('projects', visible);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getWriting() {
  const all = await getCollection('writing', visible);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPublications() {
  const all = await getCollection('publications');
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const lastTouched = (d: { date: Date; updated?: Date }) => d.updated ?? d.date;
