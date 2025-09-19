import type { CollectionEntry } from "astro:content";

export interface BearGroup {
    slug: string;
    filter: (data: CollectionEntry<"bears">) => boolean

    title: string; 
    heading: string; 
    subText: string;
    hideEventCol: boolean;
    hideRehomedCol: boolean;
}


export const groups: BearGroup[] = [
    {
        slug: "all",
        filter: () => true,
        title: "All my bears",
        heading: "All my bears",
        subText: "...",
        hideEventCol: false,
        hideRehomedCol: false,
    },
    {
        slug: "found-their-home",
        filter: ({ data }) => data.status == "rehomed",
        title: "Bears who found their home",
        heading: "Bears who found their home",
        subText: "...",
        hideEventCol: false,
        hideRehomedCol: false,
    },
    {
        slug: "looking-for-their-home",
        filter: ({ data }) => data.status == "rescued",
        title: "Bears looking for their home",
        heading: "Bears looking for their home",
        subText: "...",
        hideEventCol: true,
        hideRehomedCol: true,
    },
];