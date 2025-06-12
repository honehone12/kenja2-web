'use strict';

import type {Encoder, Decoder} from "$lib/server/endec/endec";
import type {TextQuery, VectorQuery, QueryResult} from "$lib/documents/queries";

export interface ApiAdapter {
    textSearch(q: TextQuery): Promise<QueryResult>;
    vectorSearch(q: VectorQuery): Promise<QueryResult>;
    encoder(): Encoder;
    decoder(): Decoder;
}
