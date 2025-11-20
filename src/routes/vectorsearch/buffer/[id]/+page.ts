import { ITypeConv } from "$lib/documents/anime-search/queries";
import { emptySearchResult, internalError } from "$lib/client/errors";
import { validateOid, validateVectorItemType } from "$lib/client/validation";
import api from "$lib/client/api/api.js";

export function load({ url, params }) {
  const id = params.id;
  if (!validateOid(id)) {
    // not showing error page
    return { bufferedStream: emptySearchResult() };
  }

  const itemType = ITypeConv.fromString(url.searchParams.get("item-type"));
  if (!itemType || !validateVectorItemType(itemType)) {
    // not showing error page
    return { bufferedStream: emptySearchResult() };
  }

  try {
    const bufferedStream = api.vectorSearch(itemType, id);
    return { bufferedStream };
  } catch {
    console.error("error on vector search");
    return internalError();
  }
}
