import { FuzzyConv, ITypeConv } from "$lib/documents/anime-search/queries.js";
import { emptySearchResult, internalError } from "$lib/server/errors.js";
import kenja from "$lib/server/kenja.js";
import logs from "$lib/server/logs.js";
import { validateKeyword } from "$lib/server/validation.js";

export function load({ url }) {
  const keyword = url.searchParams.get("keyword");
  if (!keyword || !validateKeyword(keyword)) {
    // not showing error page
    return { bufferedStream: emptySearchResult() };
  }

  const fuzzyKind = FuzzyConv.fromString(url.searchParams.get("fuzzy"));
  const itemType = ITypeConv.fromString(url.searchParams.get("item-type"));

  try {
    const bufferedStream = kenja
      .animeSearch()
      .textSearch(itemType, keyword, fuzzyKind);
    return { bufferedStream };
  } catch (err) {
    logs.error(err, "error on text search");
    return internalError();
  }
}
