# Experience logos pack

## Files
- `experience.ts`: updated data model and entries, with a `logo` path for each organization.
- `public/logos/*.svg`: eight local SVG logo placeholders Personal portfolio built with Astro.

## Add to your Astro project
1. Copy the `public/logos` folder into your project's `public/` folder.
2. Copy `experience.ts` into the folder where your current experience data file lives (or copy the `logo` property into your existing file).
3. In the component that renders each experience entry, add:

```astro
<img
  src={item.logo}
  alt={`${item.organization} logo`}
  class="experience-logo"
/>
```

Example CSS:

```css
.experience-logo {
  width: 52px;
  height: 52px;
  object-fit: contain;
  flex: 0 0 auto;
  border-radius: 10px;
}
```

These SVGs are clean, editable placeholders using organization names/initials. They are **not official logo artwork**. Replace each SVG with an official logo file when you obtain it, keeping the same filename and path; the code will not need to change.
