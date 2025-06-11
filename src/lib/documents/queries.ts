'use strict';

export const enum Rating {
    Unspecified = 0,
    AllAges = 1,
    Hentai = 2
}

export const enum VectorField {
    Unspecified = 0,
    Txt = 1,
    Img = 2
}

export const enum ItemType {
    Unspecified = 0,
    Anime = 1,
    Character = 2
}

export interface TextQuery {
    rating: Rating;
    item_type: ItemType;
    keywords: string
}

export interface VectorQuery {
    rating: Rating,
    item_type: ItemType,
    source_field: VectorField,
    target_field: VectorField,
    id: string
}

export interface QueryResult {

}
