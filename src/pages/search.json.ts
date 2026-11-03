import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const [projects, writing] = await Promise.all([
    getCollection('projects', ({ data }) => !data.draft),
    getCollection('writing', ({ data }) => !data.draft),
  ]);

  const index = [
    ...projects.map((p) => ({
      title: p.data.title,
      summary: p.data.summary,
      url: `/projects/${p.slug}/`,
      type: 'Project',
      tags: p.data.stack,
    })),
    ...writing.map((w) => ({
      title: w.data.title,
      summary: w.data.summary,
      url: `/writing/${w.slug}/`,
      type: 'Writing',
      tags: w.data.tags,
    })),
  ];

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
