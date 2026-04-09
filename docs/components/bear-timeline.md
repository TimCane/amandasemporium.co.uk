# Component: Bear Timeline

## File

`src/components/bears/bear-timeline.astro`

## Purpose

Vertical timeline displaying bear rescue and rehoming events chronologically. Used on the `/bears/timeline` page.

## Props

```typescript
interface Props {
  entries: Array<{
    date: Date;
    type: 'rescued' | 'rehomed';
    bearName: string;
    bearSlug: string;
    bearPicture: ImageMetadata;
    locationName: string;
  }>;
}
```

## Structure

```html
<div class="timeline">
  {entries.map(entry => (
    <div class="timeline__entry">
      <div class="timeline__date">
        {formatDate(entry.date)}
      </div>
      <div class="timeline__marker"></div>
      <div class="timeline__content">
        <a href={`/bears/${entry.bearSlug}`}>
          <Image src={entry.bearPicture} alt={entry.bearName} width={60} height={60} />
          <div>
            <h3>{entry.bearName}</h3>
            <span class="timeline__badge">{entry.type}</span>
            <span class="timeline__location">{entry.locationName}</span>
          </div>
        </a>
      </div>
    </div>
  ))}
</div>
```

## Layout

- Vertical line running down the centre (desktop) or left side (mobile)
- Entries alternate left/right on desktop, all on right on mobile
- Each entry: date on one side, content card on the other
- Marker dot on the timeline line

## Theme Variations

| Theme | Line colour | Marker style | Feel |
| ----- | ----------- | ------------ | ---- |
| Boutique | `--color-border` | Circle, `--color-primary` | Museum exhibit |
| Whimsical | `--color-primary-light` | Rounded circle, `--color-primary` | Storybook chapter |
| Modern | `--color-border` | Small square, `--color-primary` | Data visualization |
| Fun | `--color-primary` | Large colourful circle | Board game path |

## Data Preparation

The parent page generates timeline entries from the bears collection:

```typescript
const bears = await getCollection('bears');
const entries = [];

for (const bear of bears) {
  // Add rescue entry
  entries.push({
    date: bear.data.rescued.date,
    type: 'rescued',
    bearName: bear.data.name,
    bearSlug: bear.slug,
    bearPicture: bear.data.picture,
    locationName: resolvedLocation.data.name,
  });

  // Add rehome entry if applicable
  if (bear.data.rehomed) {
    entries.push({
      date: bear.data.rehomed.date,
      type: 'rehomed',
      // ...
    });
  }
}

// Sort chronologically
entries.sort((a, b) => b.date.getTime() - a.date.getTime());
```

## Performance

With 500+ entries, consider:

- Grouping by month/year with collapsible sections
- Pagination or "load more" button
- Virtual scrolling (adds JS complexity — probably not worth it)

## Accessibility

- Timeline is a list (`<ol>` or `<ul>`)
- Each entry is a list item
- Dates and content are readable without the visual timeline
- Links to bear profiles are keyboard accessible
