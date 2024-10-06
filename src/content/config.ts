import { defineCollection, reference, z } from "astro:content";

const bearBrandsCollection = defineCollection({
    type: "content",
    schema: () =>
        z.object({
            name: z.string()
        }),
});

const bearsCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            uploadedOn: z.date(),
            picture: image(),
            info: z.object({
                brand: reference("bearBrands"),
                species: reference("bearSpecies"),
            }),
            rescued: z.object({
                location: reference("locations"),
                date: z.date(),
            }),
            event: reference("events").optional(),
            rehomed: z.object({
                location: reference("locations"),
                date: z.date(),
            }).optional()
        })
            .transform(values => ({
                ...values,
                get status(): "rehomed" | "rescued" {
                    return values.rehomed ? "rehomed" : "rescued";
                }
            })),
});

const bearSpeciesCollection = defineCollection({
    type: "content",
    schema: () =>
        z.object({
            name: z.string()
        }),
});

const eventsCollection = defineCollection({
    type: "content",
    schema: () =>
        z.object({
            name: z.string(),
            date: z.date(),
            description: z.string(),
            location: z.object({
                name: z.string(),
                location: reference("location"),
            }),
            website: z.string(),
            time: z.string(),
        }),
});

const locationsCollection = defineCollection({
    type: "content",
    schema: () =>
        z.object({
            name: z.string(),
            latitude: z.number(),
            longitude: z.number()
        }),
});

export const collections = {
    bearBrands: bearBrandsCollection,
    bearSpecies: bearSpeciesCollection,
    locations: locationsCollection,
    events: eventsCollection,
    bears: bearsCollection
};