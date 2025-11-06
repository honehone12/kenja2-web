import { A_WEEK_CACHE_HEADER } from "$lib/server/headers.js";

export function load({ setHeaders }) {
  setHeaders(A_WEEK_CACHE_HEADER);
}
