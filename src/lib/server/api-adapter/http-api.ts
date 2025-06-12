'use strict';

import {Buffer} from "node:buffer";
import type { Decoder, Encoder } from "$lib/server/endec/endec";
import type { ApiAdapter } from "$lib/server/api-adapter/api-adapter";
import type { TextQuery, QueryResult, VectorQuery } from "$lib/documents/queries";

export class HttpApi<
    E extends Encoder, 
    D extends Decoder
> implements ApiAdapter {
    private _encoder: E;
    private _decoder: D;
    private _baseUrl: string;

    constructor(e: E, d: D, baseUrl: string) {
        this._encoder = e;
        this._decoder = d;
        this._baseUrl = baseUrl;
    }

    encoder(): Encoder {
        return this._encoder;
    }

    decoder(): Decoder {
        return this._decoder;
    }

    private async httpQuery(url: URL, body: Buffer): Promise<QueryResult> {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': this._encoder.contentType()
            },
            body 
        });

        if (!res.ok) {
            throw new Error(`HTTP fail: ${res.status} ${res.statusText}`);
        }
        
        const b = await res.arrayBuffer(); 
        const result = this._decoder.unmarshal<QueryResult>(Buffer.from(b));
        return result;
    }

    async textSearch(q: TextQuery): Promise<QueryResult> {
        const url = new URL('/text', this._baseUrl);
        const body = this._encoder.marshal(q);
    
        return this.httpQuery(url, body);
    }

    async vectorSearch(q: VectorQuery): Promise<QueryResult> {
        const url = new URL('/vector', this._baseUrl);
        const body = this._encoder.marshal(q);

        return this.httpQuery(url, body);
    }
}
