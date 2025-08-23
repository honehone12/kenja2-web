import {ITypeConv, Rating} from "$lib/documents/anime-search/queries.js";
import { emptySearchResult, internalError } from "$lib/server/errors.js";
import kenja from "$lib/server/kenja.js";
import logs from "$lib/server/logs.js";
import {hasAgeCookie} from "$lib/server/cookies.js";
import {COOKIE_VARY_CACHE_HEADER} from "$lib/server/headers.js";
import { validateItemType, validateOid } from "$lib/server/validation.js";

export function load({cookies, url, params, setHeaders}) {
    const id = params.id;
    if (!validateOid(id)) {
        // not showing error page
        return {
            needAgeVerification: true,
            bufferedStream: emptySearchResult()
        };
    }

    const item_type = ITypeConv.fromString(url.searchParams.get('item-type'));
    if (!item_type || !validateItemType(item_type)) {
        // not showing error page
        return {
            needAgeVerification: true,
            bufferedStream: emptySearchResult()
        };
    }

    const needAgeVerification = !hasAgeCookie(cookies);

    setHeaders(COOKIE_VARY_CACHE_HEADER);
    
    try {
        const bufferedStream = kenja.animeSearch().vectorSearch(
            Rating.X,
            item_type,
            undefined,
            id            
        );
        return {needAgeVerification, bufferedStream};
    } catch (err) {
        logs.error(err, 'error on vector search');
        return internalError();
    }
}
