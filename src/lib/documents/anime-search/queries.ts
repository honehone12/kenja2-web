export const enum ItemType {
  Unspecified = 0,
  Anime,
  Character,
  YVideo,
}

export class ITypeConv {
  static fromString(s: string | null) {
    switch (s) {
      case "anime":
        return ItemType.Anime;
      case "character":
        return ItemType.Character;
      case "trailer":
        return ItemType.YVideo;
      default:
        return undefined;
    }
  }

  static toString(iType: ItemType) {
    switch (iType) {
      case ItemType.Anime:
        return "anime";
      case ItemType.Character:
        return "character";
      case ItemType.YVideo:
        return "trailer";
      default:
        return "all";
    }
  }
}

export const enum FunctionId {
  Unspecified = 0,
  Ping,
  Random,
  TextSearch,
  VectorSearch,
  DirectVectorSearch,
  MultiVectorSearch,

  TextSearchStream = 101,
  VectorSearchStreeam,
  DirectVectorSearchStream,
  MultiVectorSearchStream,
}

export const enum FuzzyKind {
  Unspecified = 0,
  Use,
}

export class FuzzyConv {
  static fromString(s: string | null) {
    return s === "use" ? FuzzyKind.Use : undefined;
  }
}

export interface SearchQuery {
  function_id: FunctionId;
  item_type?: ItemType | undefined;
  id?: string | undefined;
  keywords?: string | undefined;
  fuzzy_kind?: FuzzyKind | undefined;
  vector?: string | undefined;
  ids?: string[] | undefined;
}
