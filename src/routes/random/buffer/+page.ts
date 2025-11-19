import { ITypeConv } from "$lib/documents/anime-search/queries";
import { internalError } from "$lib/client/errors";
import api from "$lib/client/api/api";

export function load({ url }) {
  const itemType = ITypeConv.fromString(url.searchParams.get("item-type"));

  try {
    const bufferedStream = api.random(itemType);
    return { bufferedStream };
  } catch {
    console.error("error on random");
    return internalError();
  }
}
