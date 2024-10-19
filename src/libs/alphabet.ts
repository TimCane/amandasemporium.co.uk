import { getCollection } from "astro:content";

export async function bearNamesAlphabet(status: "rehomed" | "rescued" | "all") {

    const alphabet = (
        await getCollection("bears", ({ data }) => status == "all" || data.status == status)
    )
        .map((b) => b.data.name[0].toLowerCase())
        .filter((value, index, array) => array.indexOf(value) === index);


    return alphabet;

}