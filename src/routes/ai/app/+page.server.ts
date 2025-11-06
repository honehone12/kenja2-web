import { A_DAY_CACHE_HEADER } from "$lib/server/headers.js";

export function load({ setHeaders }) {
  setHeaders(A_DAY_CACHE_HEADER);
}
