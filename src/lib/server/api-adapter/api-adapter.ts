'use strict';

import type {Rating, ItemType, VectorField} from "$lib/documents/anime-search/queries";
import type { SearchResult } from "$lib/documents/anime-search/documents";

export interface AnimeSearch {
    ping(): Promise<SearchResult>
    textSearch(
        rating: Rating | undefined,
        item_type: ItemType | undefined,
        keywords: string 
    ): Promise<SearchResult>;
    vectorSearch(
        rating: Rating | undefined,
        item_type: ItemType,
        vector_field: VectorField,
        id: string
    ): Promise<SearchResult>;
    document(id: string): Promise<SearchResult>;
}
