import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

import { createEvent, type EventAttributes } from 'ics';

export const GET: APIRoute = async ({ params, props, request }) => {

    const { slug, data } = props.bear as CollectionEntry<"events">;

    const event: EventAttributes = {
        start: data.date.getTime(),
        duration: { hours: 1 },
        title: data.name,
        description: data.description,
        location: data.location.name,
        url: data.website,
    };

    var ee = await createEvent(event);
    return new Response(ee.value!)
};


export async function getStaticPaths() {

    const eventsCollection: CollectionEntry<"events">[] =
        await getCollection("events");
    return eventsCollection.map((item) => ({
        params: { slug: item.slug },
        props: {
            bear: item
        },
    }));
}
