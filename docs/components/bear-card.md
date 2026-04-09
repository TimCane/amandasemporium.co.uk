# Component: Bear Card

## File

`src/components/bears/bear-card.astro`

## Purpose

Displays a bear as a card in the bears listing grid. Shows photo, name, status, and species at a glance.

## Props

```typescript
interface Props {
  bear: CollectionEntry<'bears'>;
  species: string;  // Zod enum value (e.g., 'bear', 'cat', 'dog')
}
```

## Structure

```html
<Card href={`/bears/${bear.slug}`}>
  <Image
    src={bear.data.picture}
    alt={`${bear.data.name} the ${species.data.name}`}
    width={300}
    height={300}
  />
  <div class="bear-card__body">
    <h3>{bear.data.name}</h3>
    <span class="bear-card__status">{status}</span>
    <span class="bear-card__species">{species.data.name}</span>
  </div>
</Card>
```

## Status Badge

- **Looking for a Home:** styled with `--color-accent` or `--color-primary`
- **Found Their Home:** styled with `--color-secondary`

## Image

- Square crop (1:1 aspect ratio) via Astro `<Image>` component
- 300px width for grid display
- Lazy loaded (unless in first visible row)
- Alt text: "{name} the {species}"

## Responsive Grid

Bear cards sit in a CSS grid:

- Mobile: 1 column
- Small tablet: 2 columns
- Tablet: 3 columns
- Desktop: 4 columns

Grid is defined by the parent page, not this component.

## Accessibility

- Card is a link (`<a>`) — entire card is clickable
- Image has meaningful alt text
- Status communicated via text (not colour alone)
