import { FuzzyConv, ITypeConv, Rating } from "$lib/documents/anime-search/queries.js";
import { badRequest, internalError } from "$lib/server/errors.js";
import kenja from "$lib/server/kenja.js";
import logs from "$lib/server/logs.js";
import {hasAgeCookie} from "$lib/server/cookies.js";
import {NO_CACHE_HEADER} from "$lib/server/headers";
import { validateKeyword } from "$lib/server/validation.js";

export function load({cookies, url, setHeaders}) {
    const keyword = url.searchParams.get('keyword');
    if (!keyword || !validateKeyword(keyword)) {
        return badRequest();
    }

    const fuzzy_kind = FuzzyConv.fromString(url.searchParams.get('fuzzy'));
    const item_type = ITypeConv.fromString(url.searchParams.get('item-type'));
    const needAgeVerification = !hasAgeCookie(cookies);
    
    setHeaders(NO_CACHE_HEADER);

    try {
        const bufferedStream = kenja.animeSearch().textSearch(
            Rating.Hentai,
            item_type,
            keyword,
            fuzzy_kind
        );
        return {needAgeVerification, bufferedStream};
    } catch (err) {
        logs.error(err, 'error on text search');
        return internalError();
    }
}
