export const enum Rating {
    AllAges = 1,
    Hentai
}

export class RatingConv {
    static fromString(s: string | null) {
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
    Img
}

export class VFieldConv {
    static fromString(s: string | null) {
        switch (s) {
        case 'text':
            return VectorField.Txt;
        case 'image':
            return VectorField.Img;
        default:
            return undefined;
        }
    }
}

export const enum ItemType {
    Anime = 1,
    Character,
    AnimeImgOnly,
    CharacterImgOnly
}

export class ITypeConv {
    static fromString(s: string | null) {
        switch (s) {
        case 'anime':
            return ItemType.Anime;
        case 'character':
            return ItemType.Character;
        default:
            return undefined;
        }
    }
}

export const enum FunctionId {
    Unspecified = 0,
    Ping,
    Document,
    TextSearchBuffer,
    VectorSearchBuffer
}

export const enum FuzzyKind {
    Unspecified = 0,
    Use
}

export class FuzzyConv {
    static fromString(s: string | null) {
        return s === 'use' ? FuzzyKind.Use : undefined;
    }
}

export interface SearchQuery {
    function_id: FunctionId;
    rating?: Rating | undefined;
    item_type?: ItemType | undefined;
    vector_field?: VectorField | undefined;
    id?: string | undefined;
    keywords?: string | undefined;
    fuzzy_kind?: FuzzyKind | undefined; 
}
