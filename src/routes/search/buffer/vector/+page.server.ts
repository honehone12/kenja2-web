import {ITypeConv, RatingConv} from "$lib/documents/anime-search/queries.js";
import { badRequest, internalError } from "$lib/server/errors.js";
import kenja from "$lib/server/kenja.js";
import logs from "$lib/server/logs.js";
import {OID_LEN} from "$lib/index.js";
import { VFieldConv } from "$lib/documents/anime-search/queries";

const CACHE_HEADER = {
    "Cache-Control": "public, max-age=86400"
};

export function load({url, setHeaders}) {
    const id = url.searchParams.get('id');
    if (!id || id.length !== OID_LEN) {
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

    const rating = RatingConv.fromString(url.searchParams.get('rating'));

    setHeaders(CACHE_HEADER);

    try {
        const bufferedStream = kenja.api().vectorSearch(
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
