import {ITypeConv, VectorField} from "$lib/documents/anime-search/queries.js";
import { badRequest, internalError } from "$lib/server/errors.js";
import kenja from "$lib/server/kenja.js";
import logs from "$lib/server/logs.js";
import {CACHE_HEADER} from "$lib/server/headers.js";
import { validateItemType, validateOid } from "$lib/server/validation.js";


export function load({url, params, setHeaders}) {
    const id = params.id;
    if (!validateOid(id)) {
        return badRequest();
    }

    const itemType = ITypeConv.fromString(url.searchParams.get('item-type'));
    if (!itemType || !validateItemType(itemType)) {
        return badRequest();
    }

    setHeaders(CACHE_HEADER);
    
    try {
        const bufferedStream = kenja.animeSearch().vectorSearch(
            undefined,
            itemType,
            VectorField.Img,
            id            
        );
        return {bufferedStream};
    } catch (err) {
        logs.error(err, 'error on vector search');
        return internalError();
    }
}
