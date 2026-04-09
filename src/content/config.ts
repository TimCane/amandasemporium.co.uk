import { defineCollection, z, reference } from 'astro:content';

// Exported Zod enums — reuse these in components, pages, and utilities
export const bearBrands = z.enum([
  'as-watson', 'baby-gund', 'barnes-and-noble', 'beam-feature-ltd',
  'bear-factory', 'birthdays', 'build-a-bear', 'cuddles-collection',
  'disney-store', 'funtastic', 'giorgio', 'glorious-britain-jointed',
  'glorious-britain', 'i-love-fancy-dress', 'infinite-designs',
  'john-lewis', 'keel-cubby', 'keel-teddy', 'lbi-ltd', 'morrisons',
  'plush-company', 'russ', 'sainsburys', 'teddy-tastic', 'tesco',
  'the-christmas-magical-adventure-bear', 'the-works', 'ty',
  'unknown', 'valentine-heart', 'wh-smith', 'wilkinson', 'with-love',
]);

export const bearSpecies = z.enum([
  'bear', 'cat', 'dog', 'frog', 'hippo', 'koala', 'monkey', 'rabbit', 'sheep',
]);

export const productCategories = z.enum([
  'bags-and-cases', 'baby-and-children', 'knitted-and-crocheted',
  'home-and-gifts', 'soaps', 'rescued-bears',
]);

/** Bear profiles — the heart of the site. Each bear has a name, picture, rescue story, and optional rehoming record. */
const bears = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    tagline: z.string().optional(),
    uploadedOn: z.date(),
    picture: image(),
    photos: z.array(image()).optional(),
    featured: z.boolean().optional(),
    tags: z.array(z.string()),
    brand: bearBrands,
    species: bearSpecies,
    rescued: z.object({
      location: reference('locations'),
      date: z.date(),
    }),
    event: reference('events').optional(),
    rehomed: z.object({
      location: reference('locations'),
      date: z.date(),
    }).optional(),
    notes: z.string().optional(),
  }),
});

/** Craft market events Amanda has attended or plans to attend. */
const events = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    tagline: z.string().optional(),
    date: z.date(),
    recapPhotos: z.array(image()).optional(),
    location: z.object({
      name: z.string(),
      location: reference('locations'),
    }),
    website: z.string(),
    time: z.string(),
  }),
});

/** Named geographic locations with lat/lng coordinates — referenced by bears and events. */
const locations = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    latitude: z.number(),
    longitude: z.number(),
  }),
});

/** Products available at the stall — bags, knitted items, soaps, and more. */
const products = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    tagline: z.string().optional(),
    category: productCategories,
    price: z.string(),
    materials: z.string().optional(),
    photos: z.array(image()),
    hidden: z.boolean().optional(),
  }),
});

/** Gallery images — photos from events, bears, and products with optional cross-collection references. */
const gallery = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    image: image(),
    caption: z.string(),
    category: z.string().optional(),
    relatedBear: reference('bears').optional(),
    relatedProduct: reference('products').optional(),
    relatedEvent: reference('events').optional(),
    date: z.date().optional(),
  }),
});

export const collections = { bears, events, locations, products, gallery };
