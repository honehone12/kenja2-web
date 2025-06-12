'use strict';

import type { Decoder, Encoder } from "$lib/server/endec/endec";
import type { ApiAdapter } from "$lib/server/api-adapter/api-adapters";
import type { TextQuery, QueryResult, VectorQuery } from "$lib/documents/queries";

export class HttpApi<
    E extends Encoder, 
    D extends Decoder
> implements ApiAdapter {
    private _encoder: E;
    private _decoder: D;
    private _url: string;

    constructor(e: E, d: D, url: string) {
        this._encoder = e;
        this._decoder = d;
        this._url = url;
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
