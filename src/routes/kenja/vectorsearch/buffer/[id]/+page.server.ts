import {ITypeConv, Rating} from "$lib/documents/anime-search/queries.js";
import { VFieldConv } from "$lib/documents/anime-search/queries";
import { badRequest, internalError } from "$lib/server/errors.js";
import kenja from "$lib/server/kenja.js";
import logs from "$lib/server/logs.js";
import {hasAgeCookie} from "$lib/server/cookies.js";
import {NO_CACHE_HEADER} from "$lib/server/headers.js";
import { validateItemType, validateOid, validateVectorField } from "$lib/server/validation.js";

export function load({cookies, url, params, setHeaders}) {
    const id = params.id;
    if (!validateOid(id)) {
        return badRequest();
    }

    const item_type = ITypeConv.fromString(url.searchParams.get('item-type'));
    if (!item_type || !validateItemType(item_type)) {
        return badRequest();
    }

    const vfield = VFieldConv.fromString(url.searchParams.get('vector'));
    if (!vfield || !validateVectorField(vfield)) {
        return badRequest();
    }

    const needAgeVerification = !hasAgeCookie(cookies);

    setHeaders(NO_CACHE_HEADER);
    
    try {
        const bufferedStream = kenja.animeSearch().vectorSearch(
            Rating.Hentai,
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
