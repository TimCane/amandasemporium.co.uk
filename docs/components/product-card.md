# Component: Product Card

## File

`src/components/products/product-card.astro`

## Purpose

Displays a product as a card in the products listing grid. Shows photo, name, price, and category.

## Props

```typescript
interface Props {
  product: CollectionEntry<'products'>;
  category: string;  // Zod enum value (e.g., 'bags-and-cases', 'baby-and-children')
}
```

## Structure

```html
<Card>
  <Image
    src={product.data.photos[0]}
    alt={product.data.name}
    width={300}
    height={300}
  />
  <div class="product-card__body">
    <h3>{product.data.name}</h3>
    <span class="product-card__price">{product.data.price}</span>
    <span class="product-card__category">{category.data.name}</span>
  </div>
</Card>
```

## Notes

- Products link to individual profile pages at `/products/[slug]`.
- Cards show a summary (image, name, price, category) — full details on the profile page.
- First photo from the `photos` array is used as the card image.
- Price displayed as-is (string, e.g., "£8" or "from £5").

## Image

- Square crop (1:1 aspect ratio)
- 300px width for grid display
- Lazy loaded
- Alt text: product name

## Accessibility

- Card is a link (`<a>`) to the product profile page
- Image has alt text
- Price is visible text (not just styled)
