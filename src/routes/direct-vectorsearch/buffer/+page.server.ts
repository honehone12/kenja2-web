import { ITypeConv } from "$lib/documents/anime-search/queries";
import { emptySearchResult, internalError } from "$lib/server/errors";
import kenja from "$lib/server/kenja.js";
import logs from "$lib/server/logs.js";
import {
  validateVector,
  validateVectorItemType,
} from "$lib/server/validation.js";

export async function load({ url }) {
  const vector = url.searchParams.get("vector");
  if (!vector || !validateVector(vector)) {
    // not showing error page
    return { bufferedStream: emptySearchResult() };
  }

  const itemType = ITypeConv.fromString(url.searchParams.get("item-type"));
  if (!itemType || !validateVectorItemType(itemType)) {
    // not showing error page
    return { bufferedStream: emptySearchResult() };
  }

  try {
    const bufferedStream = kenja
      .animeSearch()
      .directVectorSearch(itemType, vector);
    return { bufferedStream };
  } catch (err) {
    logs.error(err, "error on direct vector search");
    return internalError();
  }
}
