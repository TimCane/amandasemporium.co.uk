# Component: JSON-LD

## File

`src/components/seo/json-ld.astro`

## Purpose

Generates `<script type="application/ld+json">` structured data for search engine rich results.

## Props

```typescript
interface Props {
  data: Record<string, unknown>; // JSON-LD object
}
```

## Output

```html
<script type="application/ld+json">
  {JSON.stringify(data)}
</script>
```

## Usage

```astro
<JsonLd data={{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.data.name,
  "startDate": event.data.date,
  "location": {
    "@type": "Place",
    "name": event.data.location.name,
  },
}} />
```

## Schema Types Used

| Page | Schema Type | Purpose |
| ---- | ----------- | ------- |
| Home | `WebSite` | Site-level metadata |
| Events (upcoming) | `Event` | Google "Events near you" results |
| Products | `Product` | Google rich product snippets |

See `features/seo.md` for full schema examples.

## Notes

- Placed in `<head>` via named slot or directly in page
- Data should be constructed per-page in the page component, passed to this component
- Validate output with Google's Rich Results Test tool
