/**
 * Field definitions for each collection's admin forms.
 * These map to the Zod schemas in src/content/config.ts.
 */
import type { FieldDef } from '@/components/admin/AdminForm';

// Enum values from content/config.ts — duplicated here as plain arrays
// to avoid importing Zod in the browser bundle
export const BEAR_BRANDS = [
  'as-watson', 'baby-gund', 'barnes-and-noble', 'beam-feature-ltd',
  'bear-factory', 'birthdays', 'build-a-bear', 'cuddles-collection',
  'disney-store', 'funtastic', 'giorgio', 'glorious-britain-jointed',
  'glorious-britain', 'i-love-fancy-dress', 'infinite-designs',
  'john-lewis', 'keel-cubby', 'keel-teddy', 'lbi-ltd', 'morrisons',
  'plush-company', 'russ', 'sainsburys', 'teddy-tastic', 'tesco',
  'the-christmas-magical-adventure-bear', 'the-works', 'ty',
  'unknown', 'valentine-heart', 'wh-smith', 'wilkinson', 'with-love',
];

export const BEAR_SPECIES = [
  'bear', 'cat', 'dog', 'frog', 'hippo', 'koala', 'monkey', 'rabbit', 'sheep',
];

export const PRODUCT_CATEGORIES = [
  'bags-and-cases', 'baby-and-children', 'knitted-and-crocheted',
  'home-and-gifts', 'soaps', 'rescued-bears',
];

function toOptions(values: string[]): { value: string; label: string }[] {
  return values.map((v) => ({
    value: v,
    label: v.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  }));
}

export const bearFields: FieldDef[] = [
  // Structured data — filled first
  { key: 'name', label: 'Name', type: 'text', required: true },
  { key: 'picture', label: 'Main Photo', type: 'file', required: true, hint: 'Auto-resized to max 1200px' },
  { key: 'photos', label: 'Additional Photos', type: 'multifile', hint: 'Optional extra photos' },
  { key: 'brand', label: 'Brand', type: 'select', required: true, options: toOptions(BEAR_BRANDS), half: true },
  { key: 'species', label: 'Species', type: 'select', required: true, options: toOptions(BEAR_SPECIES), half: true },
  { key: 'tags', label: 'Tags', type: 'tags', hint: 'Comma-separated or press Enter to add' },
  { key: 'date', label: 'Rescued Date', type: 'date', required: true, nestedIn: 'rescued', half: true },
  { key: 'location', label: 'Rescued Location', type: 'location-ref', required: true, nestedIn: 'rescued', half: true },
  { key: 'event', label: 'Event', type: 'event-ref', hint: 'Event where this bear was shown' },
  { key: 'date', label: 'Rehomed Date', type: 'date', nestedIn: 'rehomed', half: true },
  { key: 'location', label: 'Rehomed Location', type: 'location-ref', nestedIn: 'rehomed', half: true },
  { key: 'featured', label: 'Featured', type: 'checkbox' },
  // Content fields — filled last (or AI-generated)
  { key: 'tagline', label: 'Tagline', type: 'text', hint: 'Short description', contentField: true },
];

export const eventFields: FieldDef[] = [
  { key: 'name', label: 'Name', type: 'text', required: true },
  { key: 'date', label: 'Date', type: 'date', required: true, half: true },
  { key: 'time', label: 'Time', type: 'text', required: true, half: true, hint: 'e.g. "10am - 4pm"' },
  { key: 'name', label: 'Venue Name', type: 'text', required: true, nestedIn: 'location', hint: 'Venue name or address' },
  { key: 'location', label: 'Location', type: 'location-ref', required: true, nestedIn: 'location' },
  { key: 'website', label: 'Website', type: 'url', required: true },
  { key: 'recapPhotos', label: 'Recap Photos', type: 'multifile', hint: 'Photos from past events' },
  { key: 'info', label: 'Visitor Info', type: 'text', hint: 'e.g. "Free parking, tickets on the gate"' },
];

export const productFields: FieldDef[] = [
  { key: 'name', label: 'Name', type: 'text', required: true },
  { key: 'category', label: 'Category', type: 'select', required: true, options: toOptions(PRODUCT_CATEGORIES), half: true },
  { key: 'price', label: 'Price', type: 'text', required: true, half: true, hint: 'e.g. "from £5" or "£8"' },
  { key: 'materials', label: 'Materials', type: 'text' },
  { key: 'photos', label: 'Photos', type: 'multifile', required: true, hint: 'At least one photo required' },
  { key: 'hidden', label: 'Hidden', type: 'checkbox' },
  // Content fields
  { key: 'tagline', label: 'Tagline', type: 'text', contentField: true },
];

export const galleryFields: FieldDef[] = [
  { key: 'image', label: 'Image', type: 'file', required: true },
  { key: 'caption', label: 'Caption', type: 'text', required: true },
  { key: 'category', label: 'Category', type: 'text', hint: 'e.g. bears, events, products' },
  { key: 'relatedBear', label: 'Related Bear (slug)', type: 'text', hint: 'Bear collection slug' },
  { key: 'relatedProduct', label: 'Related Product (slug)', type: 'text', hint: 'Product collection slug' },
  { key: 'relatedEvent', label: 'Related Event (slug)', type: 'text', hint: 'Event collection slug' },
  { key: 'date', label: 'Date', type: 'date' },
];

export const locationFields: FieldDef[] = [
  { key: 'name', label: 'Name', type: 'text', required: true },
  { key: 'latitude', label: 'Latitude', type: 'number', required: true, half: true },
  { key: 'longitude', label: 'Longitude', type: 'number', required: true, half: true },
  { key: 'country', label: 'Country', type: 'text', half: true },
  { key: 'county', label: 'County', type: 'text', half: true },
  { key: 'postcode', label: 'Postcode District', type: 'text', hint: 'e.g. KT6, GU1' },
];
