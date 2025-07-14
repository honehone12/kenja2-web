import { ITypeConv, RatingConv } from "$lib/documents/anime-search/queries.js";
import { badRequest, internalError } from "$lib/server/errors.js";
import kenja from "$lib/server/kenja.js";
import logs from "$lib/server/logs.js";
import {MAX_KW_LEN} from "$lib/index.js";

export function load({url, setHeaders}) {
    const keywords = url.searchParams.get('keyword');
    if (!keywords || keywords.length > MAX_KW_LEN) {
        logs.warn('keywords length over limit')
        return badRequest();
    }

    const rating = RatingConv.fromString(url.searchParams.get('rating'));
    const item_type = ITypeConv.fromString(url.searchParams.get('item-type'));

    try {
        const bufferedStream = kenja.api().textSearch(
            rating,
            item_type,
            keywords
        );
        return {bufferedStream};
    } catch (err) {
        logs.error(err, 'error on text search');
        return internalError();
    }
}
