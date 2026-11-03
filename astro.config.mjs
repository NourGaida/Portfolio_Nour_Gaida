import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// IMPORTANT: keep `site` identical to `site.url` in src/data/site.ts
export default defineConfig({
  site: 'https://nourgaida.vercel.app/',
  integrations: [mdx(), tailwind({ applyBaseStyles: false })],
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: true },
  },
});
