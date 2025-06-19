'use strict';

import {Buffer} from "node:buffer";
import type { Decoder, Encoder } from "$lib/server/endec/endec";
import type { ApiAdapter } from "$lib/server/api-adapter/api-adapter";
import type { DocumentQuery, TextQuery, VectorQuery } from "$lib/documents/queries";
import type {SearchResult, SingleDocument} from "$lib/documents/documents";

export class HttpBufferApi<
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

    private async httpQuery<T>(url: URL, body: Buffer): Promise<T> {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': this._encoder.contentType()
            },
            body 
        });

        if (!res.ok) {
            throw new Error(`HTTP fail: ${res.status} ${res.statusText}`);
        }
        
        const b = await res.arrayBuffer(); 
        const result = this._decoder.unmarshal<T>(Buffer.from(b));
        return result;
    }

    async document(q: DocumentQuery): Promise<SingleDocument> {
        const url = new URL('/document', this._baseUrl);
        const body = this._encoder.marshal(q);

        return this.httpQuery<SingleDocument>(url, body);
    }

    async textSearch(q: TextQuery): Promise<SearchResult> {
        const url = new URL('/search/buffer/text', this._baseUrl);
        const body = this._encoder.marshal(q);
    
        return this.httpQuery<SearchResult>(url, body);
    }

    async vectorSearch(q: VectorQuery): Promise<SearchResult> {
        const url = new URL('/search/buffer/vector', this._baseUrl);
        const body = this._encoder.marshal(q);

        return this.httpQuery<SearchResult>(url, body);
    }
}
