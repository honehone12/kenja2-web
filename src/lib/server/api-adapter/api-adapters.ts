'use strict';

import {type Encoder, type Decoder} from "$lib/server/endec/endec";

export interface TextSearchPayload {

}

export interface VectorSearchPayload {
    
}

export interface TextSearchResult {

}

export interface VectorSearchResult {

}

export interface ApiAdapter<
    E extends Encoder, 
    D extends Decoder
> {
    TextSearch(payload: TextSearchPayload): Promise<TextSearchResult>;
    VectorSearch(payload: VectorSearchPayload): Promise<VectorSearchResult>;
}
