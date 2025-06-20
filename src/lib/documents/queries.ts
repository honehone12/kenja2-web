'use strict';

import type { Candidate } from "$lib/documents/documents";

export const enum Rating {
    AllAges = 1,
    Hentai = 2
}

export class RatingConv {
    static fromString(s: string | null) {
        switch (s) {
        case 'all':
            return undefined;
        case 'hentai':
            return Rating.Hentai;
        default:
            return Rating.AllAges;
        }
    }
}

export const enum VectorField {
    Txt = 1,
    Img = 2
}

export class VFieldConv {
    static fromString(s: string | null) {
        switch (s) {
        case 'text':
            return VectorField.Txt;
        case 'image':
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
    static fromString(s: string | null) {
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

export interface DocumentQuery {
    id: string;
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
