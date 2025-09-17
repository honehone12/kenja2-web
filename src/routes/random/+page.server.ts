import { ITypeConv } from "$lib/documents/anime-search/queries.js";
import { internalError } from "$lib/server/errors.js";
import { CACHE_HEADER } from "$lib/server/headers.js";
import kenja from "$lib/server/kenja.js";
import logs from "$lib/server/logs.js";

export function load({ url, setHeaders }) {
  const itemType = ITypeConv.fromString(url.searchParams.get("item-type"));

  setHeaders(CACHE_HEADER);

  try {
    const bufferedStream = kenja.animeSearch().random(itemType);
    return { bufferedStream };
  } catch (err) {
    logs.error(err, "error on random");
    return internalError();
  }
}
