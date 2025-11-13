import type { ItemType, FuzzyKind } from "$lib/documents/anime-search/queries";
import type { SearchResult } from "$lib/documents/anime-search/documents";

export interface AnimeSearch {
  ping(): Promise<SearchResult>;
  random(item_type: ItemType | undefined): Promise<SearchResult>;
  textSearch(
    item_type: ItemType | undefined,
    keywords: string,
    fuzzy_kind: FuzzyKind | undefined,
  ): Promise<SearchResult>;
  vectorSearch(item_type: ItemType, id: string): Promise<SearchResult>;
  directVectorSearch(
    item_type: ItemType,
    vector: string,
  ): Promise<SearchResult>;
  multiVectorSearch(item_type: ItemType, ids: string[]): Promise<SearchResult>;
}
