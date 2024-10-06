import type { CollectionEntry } from "astro:content";

export type Bear = {
    slug: string;
    name: string;
    picture: {
        src: string;
        width: number;
        height: number;
        format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif";
    }
    species: string;
    status: "rehomed" | "rescued";
    uploadedOn: Date;
}

export function MapBears(bears: CollectionEntry<"bears">[]): Bear[] {
    return bears.map(MapBear);
}

export function MapBear({ slug, data: { name, picture, status, uploadedOn, info: { species } } }: CollectionEntry<"bears">): Bear {
    return {
        slug,
        name,
        picture,
        species: species.slug,
        status,
        uploadedOn
    }
}