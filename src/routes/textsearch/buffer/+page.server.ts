import { FuzzyConv, ITypeConv, Rating, RatingConv } from "$lib/documents/anime-search/queries.js";
import { badRequest, internalError } from "$lib/server/errors.js";
import kenja from "$lib/server/kenja.js";
import logs from "$lib/server/logs.js";
import {hasAgeCookie} from "$lib/server/cookies.js";
import {CACHE_HEADER, NO_CACHE_HEADER} from "$lib/server/headers";
import {MAX_KW_LEN} from "$lib/index.js";

export function load({cookies, url, setHeaders}) {
    const rating = RatingConv.fromString(url.searchParams.get('rating'));
    
    const keywords = url.searchParams.get('keyword');
    if (!keywords || keywords.length > MAX_KW_LEN) {
        logs.warn('keywords length 0 or over limit')
        return badRequest();
    }
    if (keywords.trim().length === 0) {
        logs.warn('keywords only white spaces');
        return badRequest();
    }

    const fuzzy_kind = FuzzyConv.fromString(url.searchParams.get('fuzzy'));
    const item_type = ITypeConv.fromString(url.searchParams.get('item-type'));

    const needAgeVerification = rating === Rating.Hentai ? !hasAgeCookie(cookies) : false;
    
    if (rating === Rating.Hentai) {
        setHeaders(NO_CACHE_HEADER);
    } else {
        setHeaders(CACHE_HEADER)
    }

    try {
        const bufferedStream = kenja.animeSearch().textSearch(
            rating,
            item_type,
            keywords,
            fuzzy_kind
        );
        return {needAgeVerification, bufferedStream};
    } catch (err) {
        logs.error(err, 'error on text search');
        return internalError();
    }
}
