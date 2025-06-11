'use strict';

import {type Encoder, type Decoder} from "$lib/server/endec/endec";
import {
    type TextSearchPayload,
    type VectorSearchPayload,
    type SearchResult
} from "$lib/documents/queries";

export interface ApiAdapter<
    E extends Encoder, 
    D extends Decoder
> {
    TextSearch(payload: TextSearchPayload): Promise<SearchResult>;
    VectorSearch(payload: VectorSearchPayload): Promise<SearchResult>;
}
