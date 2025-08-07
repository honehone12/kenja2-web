import {ITypeConv, Rating, RatingConv} from "$lib/documents/anime-search/queries.js";
import { VFieldConv } from "$lib/documents/anime-search/queries";
import { badRequest, internalError } from "$lib/server/errors.js";
import kenja from "$lib/server/kenja.js";
import logs from "$lib/server/logs.js";
import {checkAgeCookie} from "$lib/server/cookies.js";
import {OID_LEN} from "$lib/index.js";

export function load({cookies, url, params}) {
    const rating = RatingConv.fromString(url.searchParams.get('rating'));
    if (rating === Rating.Hentai) {
        checkAgeCookie(cookies, url.toString());
    }
    
    const id = params.id;
    if (id.length !== OID_LEN) {
        logs.warn('invalid oid')
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

    try {
        const bufferedStream = kenja.animeSearch().vectorSearch(
            rating,
            item_type,
            vfield,
            id            
        );
        return {bufferedStream};
    } catch (err) {
        logs.error(err, 'error on vector search');
        return internalError();
    }
}
