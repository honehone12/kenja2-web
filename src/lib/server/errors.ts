import type { SearchResult } from "$lib/documents/anime-search/documents";
import {error} from "@sveltejs/kit";

export function badRequest() {
    return error(400, "Bad request.");
}

export function internalError() {
    return error(500, "Internal server error.");
}

export async function emptySearchResult(): Promise<SearchResult> {
    return {documents: undefined};
}
