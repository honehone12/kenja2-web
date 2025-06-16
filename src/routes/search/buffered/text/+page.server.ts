'use strict';

import { ITypeConv, RatingConv, type TextQuery } from "$lib/documents/queries.js";
import { badRequest, internalError } from "$lib/server/errors.js";
import kenja from "$lib/server/kenja.js";
import logs from "$lib/server/logs.js";

export function load({url, setHeaders}) {
    const keywords = url.searchParams.get('keyword');
    if (!keywords || keywords.length > MAX_KEYWORDS_LENGTH) {
        return badRequest();
    }

    const item_type = ITypeConv.fromString(url.searchParams.get('item-type'));
    const rating = RatingConv.fromString(url.searchParams.get('rating'));
    const query: TextQuery = {
        rating,
        item_type,
        keywords
    };

    try {
        const bufferedStream = kenja.api().textSearch(query);
        return { bufferedStream };
    } catch (err) {
        logs.error(err, 'error on text search');
        return internalError();
    }
}
