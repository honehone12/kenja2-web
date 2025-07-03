'use strict';

import {Buffer} from "node:buffer";
import type { ApiAdapter } from "$lib/server/api-adapter/api-adapter";
import type { DocumentQuery, TextQuery, VectorQuery } from "$lib/documents/queries";
import type {SearchResult, SingleDocument} from "$lib/documents/documents";

export class HttpBufferApi implements ApiAdapter {
    private _baseUrl: string;

    constructor(baseUrl: string) {
        this._baseUrl = baseUrl;
    }

    private async httpQuery<T>(url: URL, body: Buffer): Promise<T> {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body 
        });

        if (!res.ok) {
            throw new Error(`HTTP fail: ${res.status} ${res.statusText}`);
        }
        
        const result: T = await res.json(); 
        return result;
    }

    async document(q: DocumentQuery): Promise<SingleDocument> {
        const url = new URL('/document', this._baseUrl);
        const body = Buffer.from(JSON.stringify(q));

        return this.httpQuery<SingleDocument>(url, body);
    }

    async textSearch(q: TextQuery): Promise<SearchResult> {
        const url = new URL('/search/buffer/text', this._baseUrl);
        const body = Buffer.from(JSON.stringify(q))
    
        return this.httpQuery<SearchResult>(url, body);
    }

    async vectorSearch(q: VectorQuery): Promise<SearchResult> {
        const url = new URL('/search/buffer/vector', this._baseUrl);
        const body = Buffer.from(JSON.stringify(q));

        return this.httpQuery<SearchResult>(url, body);
    }
}
