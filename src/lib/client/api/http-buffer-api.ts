import {
  FunctionId,
  ItemType,
  FuzzyKind,
  type SearchQuery,
} from "$lib/documents/anime-search/queries";
import type { SearchResult } from "$lib/documents/anime-search/documents";
import type { BufferApi } from "$lib/client/api/buffer-api";
import { Base64 } from "js-base64";

export class HttpBufferApi implements BufferApi {
  private _apiUrl: URL;

  public constructor(apiUrl: string) {
    const host = new URL(window.location.href);
    this._apiUrl = new URL(apiUrl, `${host.protocol}//${host.host}`);
  }

  private async httpQuery(body: string): Promise<SearchResult> {
    const url = new URL(this._apiUrl);
    const payload = Base64.encode(body, true);
    url.searchParams.append("payload", payload);

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP FAIL: ${res.status} ${res.statusText}`);
    }

    const result: SearchResult = await res.json();
    return result;
  }

  public ping(): Promise<SearchResult> {
    const q: SearchQuery = {
      function_id: FunctionId.Ping,
    };
    const body = JSON.stringify(q);

    return this.httpQuery(body);
  }

  public random(item_type: ItemType | undefined): Promise<SearchResult> {
    const q: SearchQuery = {
      function_id: FunctionId.Random,
      item_type,
    };
    const body = JSON.stringify(q);

    return this.httpQuery(body);
  }

  public textSearch(
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

  public vectorSearch(item_type: ItemType, id: string): Promise<SearchResult> {
    const q: SearchQuery = {
      function_id: FunctionId.VectorSearch,
      item_type,
      id,
    };
    const body = JSON.stringify(q);

    return this.httpQuery(body);
  }

  public directVectorSearch(
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

  public multiVectorSearch(
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
