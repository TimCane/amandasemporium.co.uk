# Component: OpenGraph Meta

## File

`src/components/seo/opengraph-meta.astro`

## Purpose

Generates Open Graph meta tags in `<head>` for rich link previews when pages are shared.

## Props

```typescript
interface Props {
  title: string;
  description: string;
  image?: string;        // Absolute URL to OG image
  url: string;           // Canonical URL
  type?: string;         // Default: 'website'
}
```

## Output

```html
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{description}" />
<meta property="og:image" content="{image}" />
<meta property="og:url" content="{url}" />
<meta property="og:type" content="{type}" />
<meta property="og:site_name" content="Amanda's Emporium" />
```

## Usage

Placed in the `og-meta` named slot of the base layout:

```astro
<BaseLayout title="Abbie" description="A rescued bear">
  <OpenGraphMeta
    slot="og-meta"
    title="Abbie | Amanda's Emporium"
    description="A rescued bear from Guildford"
    image="https://amandasemporium.co.uk/bears/abbie/abbie.jpg"
    url="https://amandasemporium.co.uk/bears/abbie"
  />
</BaseLayout>
```

## Notes

- Image URLs must be absolute (including domain) for OG to work
- If no image provided, could fall back to a default brand image
- Consider also adding Twitter Card meta tags (`twitter:card`, etc.) for Twitter/X previews
