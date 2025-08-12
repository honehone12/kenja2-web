import {ITypeConv, Rating, RatingConv} from "$lib/documents/anime-search/queries.js";
import { VFieldConv } from "$lib/documents/anime-search/queries";
import { badRequest, internalError } from "$lib/server/errors.js";
import kenja from "$lib/server/kenja.js";
import logs from "$lib/server/logs.js";
import {hasAgeCookie} from "$lib/server/cookies.js";
import {CACHE_HEADER, NO_CACHE_HEADER} from "$lib/server/headers.js";
import {OID_LEN} from "$lib/index.js";

export function load({cookies, url, params, setHeaders}) {
    const id = params.id;
    if (id.length !== OID_LEN) {
        logs.warn('invalid oid');
        return badRequest();
    }

    const item_type = ITypeConv.fromString(url.searchParams.get('item-type'));
    if (!item_type) {
        logs.warn('invalid item type');
        return badRequest();
    }

    const vfield = VFieldConv.fromString(url.searchParams.get('vector'));
    if (!vfield) {
        logs.warn('invalid vector field');
        return badRequest();
    }

    const rating = RatingConv.fromString(url.searchParams.get('rating'));
    const needAgeVerification = rating === Rating.Hentai ? !hasAgeCookie(cookies) : false;

    if (rating === Rating.Hentai) {
        setHeaders(NO_CACHE_HEADER);
    } else {
        setHeaders(CACHE_HEADER);
    }

    try {
        const bufferedStream = kenja.animeSearch().vectorSearch(
            rating,
            item_type,
            vfield,
            id            
        );
        return {needAgeVerification, bufferedStream};
    } catch (err) {
        logs.error(err, 'error on vector search');
        return internalError();
    }
}
