'use strict'

import { OID_LEN } from '$lib';
import type { DocumentQuery } from '$lib/documents/queries.js';
import { badRequest, internalError } from '$lib/server/errors.js';
import kenja from '$lib/server/kenja.js';
import logs from '$lib/server/logs.js';

export function load({params}) {
    const id = params.id;
    if (id.length != OID_LEN) {
        return badRequest();
    }

    const query: DocumentQuery = {
        id
    };

    try {
        const documentStream = kenja.api().document(query);
        return {documentStream};
    } catch (err) {
        logs.error(err, 'error on document');
        return internalError();
    }
}
