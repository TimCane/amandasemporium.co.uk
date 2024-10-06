export const SortAge = "Age";
export const SortAlphabetical = "Alphabetical";
export const SortStatus = "Status";
export const SortFavourites = "Favourites";


export type SortId = typeof SortAge
    | typeof SortAlphabetical
    | typeof SortStatus
    | typeof SortFavourites


export type SortOption = {
    id: SortId;
    name: string;
}