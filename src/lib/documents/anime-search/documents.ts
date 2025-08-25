import type { ItemType } from "$lib/documents/anime-search/queries";

export interface Parent {
    id: string;
    name: string;
    name_japanese: string | undefined;
}

export interface FlatDocument {
    id: string;
    item_type: ItemType;
    url: string | undefined;
    license: string[] | undefined;
    img: string | undefined;
    src: string | undefined;
    parent: Parent | undefined;
    name: string | undefined;
    name_english: string | undefined;
    name_japanese: string | undefined;
}

export interface SearchResult {
    documents: FlatDocument[] | undefined;
}
