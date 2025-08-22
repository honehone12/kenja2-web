import { Rating } from "$lib/documents/anime-search/queries";

export const enum SearchType {
    Text = 1,
    Vector = 2
}

export function textSearchUrl(name: string | undefined, rating: Rating) {
    return rating === Rating.X ? 
        `/kenja/textsearch/buffer?keyword=${name}&item-type=all` :
        `/textsearch/buffer?keyword=${name}&item-type=all`;
}

export function vectorSearchUrl(id: string, rating: Rating) {
    return rating === Rating.X ? 
        `/kenja/vectorsearch/buffer/${id}?item-type=anime` :
        `/vectorsearch/buffer/${id}?item-type=anime`; 
}