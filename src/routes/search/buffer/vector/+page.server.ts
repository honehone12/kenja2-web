'use strict';

import { ITypeConv, RatingConv, type TextQuery } from "$lib/documents/queries.js";
import { badRequest, internalError } from "$lib/server/errors.js";
import kenja from "$lib/server/kenja.js";
import logs from "$lib/server/logs.js";
import {OID_LEN} from "$lib/index.js";
import { VFieldConv } from "$lib/documents/queries";
import type { VectorQuery } from "$lib/documents/queries";

export function load({url}) {
    const id = url.searchParams.get('id');
    if (!id || id.length !== OID_LEN) {
        logs.warn('invalid oid')
        return badRequest();
    }

    const item_type = ITypeConv.fromString(url.searchParams.get('item-type'));
    const rating = RatingConv.fromString(url.searchParams.get('rating'));
    const source_field = VFieldConv.fromString(url.searchParams.get('source'));
    const target_field = VFieldConv.fromString(url.searchParams.get('target'));
    const query: VectorQuery = {
        rating,
        item_type,
        source_field,
        target_field,
        id
    };

    try {
        const bufferedStream = kenja.api().vectorSearch(query);
        return {bufferedStream};
    } catch (err) {
        logs.error(err, 'error on vector search');
        return internalError();
    }
}
