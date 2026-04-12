# Feature: Image Optimisation

## Overview

All images processed through Astro's built-in `astro:assets` pipeline powered by Sharp. Generates optimised formats (WebP, AVIF) with responsive srcsets.

## How It Works

### Content Collection Images

Bear photos, product photos, and gallery images are co-located with their content:

```text
bears/abbie/
├── index.md       (frontmatter references ./abbie.jpg)
└── abbie.jpg      (source image)
```

The `image()` schema helper validates and processes these at build time:

```typescript
// In content config
schema: ({ image }) => z.object({
  picture: image(),
})
```

### Using Images in Components

```astro
---
import { Image } from 'astro:assets';
const { bear } = Astro.props;
---
<Image
  src={bear.data.picture}
  alt={bear.data.name}
  width={400}
  height={400}
/>
```

Astro automatically:

- Resizes to specified dimensions
- Generates WebP and AVIF variants
- Creates `srcset` for responsive sizes
- Adds `width`/`height` attributes (prevents layout shift)
- Lazy loads by default

## Image Sizes by Context

| Context | Width | Aspect | Notes |
| ------- | ----- | ------ | ----- |
| Bear card thumbnail | 300px | Square (1:1) | Grid cards |
| Bear profile hero | 600px | Original | Main profile image |
| Product card | 300px | Square (1:1) | Grid cards |
| Gallery grid | 400px | Original | Masonry/grid |
| Gallery enlarged | 1200px | Original | Lightbox or full view |
| Home page hero | 1200px | Wide (16:9 or similar) | Full-width hero |
| OG image | 1200x630 | Fixed | Open Graph previews |

## Performance Considerations

- **Build time:** 400+ bear images means the first build takes time. Subsequent builds are cached by Sharp.
- **Docker builds:** The Sharp cache is inside the Docker layer. Consider a multi-stage build where the image processing layer is cached.
- **Lazy loading:** All images below the fold should use `loading="lazy"`. Hero images and first-visible cards use `loading="eager"`.
- **Placeholder:** Consider using Astro's blur-up placeholder for a polished loading experience.

## Alt Text

Every image must have meaningful alt text:

- **Bears:** Bear name (e.g., "Abbie the bear")
- **Products:** Product name (e.g., "Handmade tote bag")
- **Gallery:** Caption text serves as alt text

## Files Involved

- `src/content/config.ts` — `image()` schema helpers
- Any component using `<Image>` from `astro:assets`
- `astro.config.mjs` — image service configuration (default Sharp)
