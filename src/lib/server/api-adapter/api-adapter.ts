import type {Rating, ItemType, VectorField, FuzzyKind} from "$lib/documents/anime-search/queries";
import type { SearchResult } from "$lib/documents/anime-search/documents";

export interface AnimeSearch {
    ping(): Promise<SearchResult>
    textSearch(
        rating: Rating | undefined,
        item_type: ItemType | undefined,
        keywords: string,
        fuzzy_kind: FuzzyKind | undefined 
    ): Promise<SearchResult>;
    vectorSearch(
        rating: Rating | undefined,
        item_type: ItemType,
        vector_field: VectorField,
        id: string
    ): Promise<SearchResult>;
    document(id: string): Promise<SearchResult>;
}
