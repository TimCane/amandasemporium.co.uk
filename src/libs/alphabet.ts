import { getCollection, type CollectionEntry } from "astro:content";

export async function bearNamesAlphabet(filter: (data: CollectionEntry<"bears">) => boolean) {

    const alphabet = (
        await getCollection("bears", filter)
    )
        .map((b) => b.data.name[0].toLowerCase())
        .filter((value, index, array) => array.indexOf(value) === index);


    return alphabet;

}