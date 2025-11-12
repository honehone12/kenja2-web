import type { AnimeSearch } from "$lib/server/api-adapter/api-adapter";
import {
  FunctionId,
  ItemType,
  FuzzyKind,
  type SearchQuery,
} from "$lib/documents/anime-search/queries";
import type { SearchResult } from "$lib/documents/anime-search/documents";

export class HttpBufferApi implements AnimeSearch {
  private _apiUrl: URL;

  constructor(baseUrl: string) {
    this._apiUrl = new URL("/anime-search", baseUrl);
  }

  private async httpQuery(body: string): Promise<SearchResult> {
    const res = await fetch(this._apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body,
    });
    if (!res.ok) {
      throw new Error(`HTTP FAIL: ${res.status} ${res.statusText}`);
    }

    const result: SearchResult = await res.json();
    return result;
  }

  public async ping(): Promise<SearchResult> {
    const q: SearchQuery = {
      function_id: FunctionId.Ping,
    };
    const body = JSON.stringify(q);

    return this.httpQuery(body);
  }

  public async random(item_type: ItemType | undefined): Promise<SearchResult> {
    const q: SearchQuery = {
      function_id: FunctionId.Random,
      item_type,
    };
    const body = JSON.stringify(q);

    return this.httpQuery(body);
  }

  public async textSearch(
    item_type: ItemType | undefined,
    keywords: string,
    fuzzy_kind: FuzzyKind | undefined,
  ): Promise<SearchResult> {
    const q: SearchQuery = {
      function_id: FunctionId.TextSearch,
      item_type,
      keywords,
      fuzzy_kind,
    };
    const body = JSON.stringify(q);

    return this.httpQuery(body);
  }

  public async vectorSearch(
    item_type: ItemType,
    id: string,
  ): Promise<SearchResult> {
    const q: SearchQuery = {
      function_id: FunctionId.VectorSearch,
      item_type,
      id,
    };
    const body = JSON.stringify(q);

    return this.httpQuery(body);
  }

  public async directVectorSearch(
    item_type: ItemType,
    vector: string,
  ): Promise<SearchResult> {
    const q: SearchQuery = {
      function_id: FunctionId.DirectVectorSearch,
      item_type,
      vector,
    };
    const body = JSON.stringify(q);

    return this.httpQuery(body);
  }

  public async multiVectorSearch(
    item_type: ItemType,
    ids: string[],
  ): Promise<SearchResult> {
    const q: SearchQuery = {
      function_id: FunctionId.MultiVectorSearch,
      item_type,
      ids,
    };
    const body = JSON.stringify(q);

    return this.httpQuery(body);
  }
}
