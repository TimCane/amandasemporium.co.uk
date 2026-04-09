# Component: Gallery Item

## File

`src/components/gallery/gallery-item.astro`

## Purpose

Displays a single gallery image with caption and optional link to a related bear, product, or event.

## Props

```typescript
interface Props {
  item: CollectionEntry<'gallery'>;
}
```

## Structure

```html
{item.data.relatedBear || item.data.relatedProduct || item.data.relatedEvent ? (
  <a href={resolvedLink} class="gallery-item">
    <Image src={item.data.image} alt={item.data.caption} width={400} />
    <div class="gallery-item__caption">
      <p>{item.data.caption}</p>
      {item.data.category && <span class="gallery-item__tag">{item.data.category}</span>}
    </div>
  </a>
) : (
  <div class="gallery-item">
    <Image src={item.data.image} alt={item.data.caption} width={400} />
    <div class="gallery-item__caption">
      <p>{item.data.caption}</p>
      {item.data.category && <span class="gallery-item__tag">{item.data.category}</span>}
    </div>
  </div>
)}
```

## Link Resolution

If the gallery item has a related entity, resolve the link:

```typescript
let resolvedLink: string | undefined;
if (item.data.relatedBear) resolvedLink = `/bears/${item.data.relatedBear.slug}`;
else if (item.data.relatedProduct) resolvedLink = undefined; // Products have no detail page
else if (item.data.relatedEvent) resolvedLink = `/events`; // Link to events page
```

## Image

- Responsive width (fills grid column)
- Original aspect ratio preserved
- Lazy loaded
- Alt text from caption

## Grid Layout (defined by parent page)

- Responsive grid: 1-2 cols mobile, 2-3 cols tablet, 3-4 cols desktop
- Could use CSS Grid with `auto-fill` for a masonry-like effect
- Or uniform grid with consistent card heights

## Accessibility

- Linked items are clearly interactive (`<a>`)
- Non-linked items are `<div>`
- Image alt text from caption
- Category tags are visible text
