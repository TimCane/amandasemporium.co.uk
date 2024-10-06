import { persistentMap } from "@nanostores/persistent";
import { atom, batched, computed } from "nanostores"
import type { Bear } from "./types/bear.type";
import { SortAge, SortAlphabetical, SortFavourites, SortStatus, type SortId } from "./types/sort-option.enum";

export const BEARS_PER_PAGE = 12;

export const $bears = atom<Bear[]>([])
export const $showMoreCount = atom<number>(1);
export const $sortOrder = atom<SortId>(SortStatus);
export const $sortDirection = atom<"ASC" | "DESC">("ASC");

export const $favourites = persistentMap<Record<string, (string | undefined)>>("favourite-bears", {}, {
    encode: JSON.stringify,
    decode: JSON.parse,
})

export const $filteredBears = batched(([$bears, $showMoreCount, $sortOrder, $sortDirection, $favourites]), (bears, showMoreCount, sortOrder, sortDirection, favourites) => {
    if (!bears) {
        return [];
    }

    var sortMethod = -1;
    if (sortDirection == 'ASC') {
        sortMethod = 1;
    }

    // Initially sort them in alphabetical order.
    bears = bears.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    })


    switch (sortOrder) {
        case SortAlphabetical:
            bears = bears.sort((a, b) => {
                if (a.name < b.name) {
                    return -1 * sortMethod;
                }
                if (a.name > b.name) {
                    return 1 * sortMethod;
                }
                return 0;
            })
            break;

        case SortStatus:
            bears = bears.sort((a, b) => {
                if (a.status > b.status) {
                    return -1 * sortMethod;
                }
                if (a.status < b.status) {
                    return 1 * sortMethod;
                }

                return 0;
            })
            break;

        case SortAge:
            bears = bears.sort((a, b) => {
                if (a.uploadedOn.getTime() < b.uploadedOn.getTime()) {
                    return -1 * sortMethod;
                }
                if (a.uploadedOn.getTime() > b.uploadedOn.getTime()) {
                    return 1 * sortMethod;
                }
                return 0;
            })
            break;


        case SortFavourites:
            let keys = Object.keys(favourites)

            bears = bears.sort((a, b) => {
                if (keys.indexOf(a.slug) > keys.indexOf(b.slug)) {
                    return -1 * sortMethod;
                }
                if (keys.indexOf(a.slug) < keys.indexOf(b.slug)) {
                    return 1 * sortMethod;
                }
                return 0;
            })
            break;
    }

    let filtered = [];

    let amountToShow = showMoreCount * BEARS_PER_PAGE;
    if (bears.length > amountToShow) {

        filtered = [...bears.slice(0, amountToShow)]

    } else {
        filtered = [...bears];
    }


    return filtered;
});

export function initialise(data: { bears: Bear[] }) {
    $bears.set(data.bears);
}

export function toggleFavourite(bear: Bear) {
    const existingEntry = $favourites.get()[bear.slug];

    let val = undefined;
    if (!existingEntry) {
        val = bear.name;
    }

    $favourites.setKey(bear.slug, val);
}

export function setSortOrder(sortId: SortId) {
    const currentSortOrder = $sortOrder.get();
    $sortOrder.set(sortId);

    let newSortDirection: "ASC" | "DESC" = "ASC";
    if (currentSortOrder == sortId) {
        const sortDirection = $sortDirection.get();
        newSortDirection = sortDirection == "ASC" ? "DESC" : "ASC"
    }

    setSortDirection(newSortDirection);

    resetShowMoreCount();
}

export function setSortDirection(direction: "ASC" | "DESC") {
    $sortDirection.set(direction);
}


export function incrementShowMoreCount() {
    $showMoreCount.set($showMoreCount.get() + 1);
}

export function resetShowMoreCount() {
    $showMoreCount.set(1);
}