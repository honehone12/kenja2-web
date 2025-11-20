import { FuzzyConv, ITypeConv } from "$lib/documents/anime-search/queries";
import { emptySearchResult, internalError } from "$lib/client/errors";
import { validateKeyword } from "$lib/client/validation";
import api from "$lib/client/api/api";

export function load({ url }) {
  const keyword = url.searchParams.get("keyword");
  if (!keyword || !validateKeyword(keyword)) {
    // not showing error page
    return { bufferedStream: emptySearchResult() };
  }

  const fuzzyKind = FuzzyConv.fromString(url.searchParams.get("fuzzy"));
  const itemType = ITypeConv.fromString(url.searchParams.get("item-type"));

  try {
    const bufferedStream = api.textSearch(itemType, keyword, fuzzyKind);
    return { bufferedStream };
  } catch {
    console.error("error on text search");
    return internalError();
  }
}
