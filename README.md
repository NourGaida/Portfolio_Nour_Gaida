# Nour Gaïda — Portfolio

Personal portfolio built with **Astro + MDX + Tailwind CSS**. Left sidebar, editorial content column, "Recently Updated" panel, client-side search, tags, reading time and an RSS feed.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321 (drafts are visible)
npm run build      # production build in dist/ (drafts are hidden)
npm run preview
```

Requires Node 18.17+ (Node 20 recommended).

## First things to edit

1. `src/data/site.ts` — name, tagline, email, GitHub and LinkedIn links, `url`.
2. `astro.config.mjs` and `public/robots.txt` — replace `YOUR_USERNAME` with your GitHub username (the `site` value must match `site.url`).
3. `public/profile.jpg` — add your photo, then set `avatar: '/profile.jpg'` in `site.ts`.
4. `src/data/experience.ts` — add your internship and project dates.
5. `src/content/projects/*.mdx` — add GitHub links (uncomment the `github:` line), your measured results and figures (`public/images/projects/`). Search for `TODO` to find every gap.
6. `public/cv.pdf` — optional, add your CV.

## Adding content

| What | Where | Notes |
| --- | --- | --- |
| Project | `src/content/projects/<slug>.mdx` | `order` sets the position, `featured: true` shows it on the home page |
| Article | `src/content/writing/<slug>.mdx` | `tags` feed the filter buttons, reading time is automatic |
| Publication | `src/content/publications/<slug>.mdx` | shown on `/publications/` |

Set `draft: true` in the frontmatter to hide an entry in production while keeping it visible in `npm run dev`. `neuroadapt`, `smartcare` and the three articles start as drafts.

Figures: put images in `public/images/projects/` and reference them in MDX with `![caption](/images/projects/figure.png)`.

## Deploying to GitHub Pages

1. Create a repository named `YOUR_USERNAME.github.io` (so the site is served from the root, which this project assumes) and push this code to `main`.
2. In the repository: Settings → Pages → Source: **GitHub Actions**.
3. Every push to `main` triggers `.github/workflows/deploy.yml`.

Vercel, Netlify and Cloudflare Pages also work with no changes (build command `npm run build`, output `dist`). Set `site` in `astro.config.mjs` to the final URL.

## Structure

```
src/
  content/      projects, writing, publications (MDX) + schemas in config.ts
  layouts/      BaseLayout, SiteLayout (sidebar + content + right panel), ArticleLayout
  components/   Sidebar, SearchBar, RecentlyUpdated, ProjectCard, ArticleCard, ...
  pages/        index, about, experience, publications, projects/, writing/, rss.xml.js, search.json.ts
  data/         site.ts, experience.ts
  styles/       global.css
  utils/        content.ts, readingTime.ts, formatDate.ts
```
