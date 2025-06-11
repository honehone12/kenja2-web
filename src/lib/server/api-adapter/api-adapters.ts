'use strict';

import {type Encoder, type Decoder} from "$lib/server/endec/endec";
import {
    type TextQuery,
    type VectorQuery,
    type QueryResult
} from "$lib/documents/queries";

export interface ApiAdapter<
    E extends Encoder, 
    D extends Decoder
> {
    TextSearch(payload: TextQuery): Promise<QueryResult>;
    VectorSearch(payload: VectorQuery): Promise<QueryResult>;
}
