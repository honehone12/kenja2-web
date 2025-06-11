'use strict';

import type { Candidate } from "$lib/documents/documents";

export const enum Rating {
    AllAges = 1,
    Hentai = 2
}

export class RatingConv {
    static fromString(s: string) {
        switch (s) {
        case 'all-ages':
            return Rating.AllAges;
        case 'hentai':
            return Rating.Hentai;
        default:
            return undefined;
        }
    }
}

export const enum VectorField {
    Txt = 1,
    Img = 2
}

export class VFieldConv {
    static fromString(s: string) {
        switch (s) {
        case 'text-vector':
            return VectorField.Txt;
        case 'image-vector':
            return VectorField.Img
        default:
            undefined
        }
    }
}

export const enum ItemType {
    Anime = 1,
    Character = 2
}

export class ITypeConv {
    static fromString(s: string) {
        switch (s) {
        case 'anime':
            return ItemType.Anime;
        case 'character':
            return ItemType.Character;
        default:
            undefined
        }
    }
}

export interface TextQuery {
    rating: Rating | undefined;
    item_type: ItemType | undefined;
    keywords: string;
}

export interface VectorQuery {
    rating: Rating | undefined;
    item_type: ItemType | undefined;
    source_field: VectorField | undefined;
    target_field: VectorField | undefined;
    id: string;
}

export interface QueryResult {
    candidates: Candidate[] | undefined;
}
