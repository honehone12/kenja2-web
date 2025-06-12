'use strict';

import type { Decoder, Encoder } from "$lib/server/endec/endec";
import type { ApiAdapter } from "$lib/server/api-adapter/api-adapters";
import type { TextQuery, QueryResult, VectorQuery } from "$lib/documents/queries";

export class LambdaApi<
    E extends Encoder, 
    D extends Decoder
> implements ApiAdapter {
    private _encoder: E;
    private _decoder: D;

    constructor(e: E, d: D) {
        this._encoder = e;
        this._decoder = d;
    }

    encoder(): Encoder {
        return this._encoder;
    }

    decoder(): Decoder {
        return this._decoder;
    }
    
    textSearch(q: TextQuery): Promise<QueryResult> {
        throw new Error("Method not implemented.");
    }

    vectorSearch(q: VectorQuery): Promise<QueryResult> {
        throw new Error("Method not implemented.");
    }
}
