import { ITypeConv } from "$lib/documents/anime-search/queries.js";
import { internalError } from "$lib/server/errors.js";
import kenja from "$lib/server/kenja.js";
import logs from "$lib/server/logs.js";

export function load({ url }) {
  const itemType = ITypeConv.fromString(url.searchParams.get("item-type"));

  try {
    const bufferedStream = kenja.animeSearch().random(itemType);
    return { bufferedStream };
  } catch (err) {
    logs.error(err, "error on random");
    return internalError();
  }
}
