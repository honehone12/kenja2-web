export const enum Rating {
    Unspecified = 0,
    G,
    X
}

export class RatingConv {
    static fromString(s: string | null) {
        switch (s) {
        case 'g':
            return Rating.G;
        case 'x':
            return Rating.X;
        default:
            return undefined;
        }
    }
}

export const enum VectorField {
    Unspecified = 0,
    Img
}

export class VFieldConv {
    static fromString(s: string | null) {
        switch (s) {
        case 'image':
            return VectorField.Img;
        // add vector name here when use
        default:
            return undefined;
        }
    }
}

export const enum ItemType {
    Unspecified = 0,
    Anime,
    Character
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

    static toString(iType: ItemType){
        switch (iType) {
        case ItemType.Anime:
            return 'anime';
        case ItemType.Character:
            return 'character';
        default:
            return 'all';
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
