import { getCollection, type CollectionEntry } from "astro:content";

export async function bearNamesAlphabet(filter: (data: CollectionEntry<"bears">) => boolean) {

    const alphabet = (
        await getCollection("bears", filter)
    )
        .map((b) => b.data.name[0].toLowerCase())
        .filter((value, index, array) => array.indexOf(value) === index);


    return alphabet;

}

export async function noBearNamesAlphabet(filter: (data: CollectionEntry<"bears">) => boolean) {

    const alphabet: string[] = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
        "w", "x", "y", "z"
    ];

    const bearsAlphabet = (
        await getCollection("bears", filter)
    )
        .map((b) => b.data.name[0].toLowerCase())
        .filter((value, index, array) => array.indexOf(value) === index);

    return alphabet.filter(x => !bearsAlphabet.includes(x));

}