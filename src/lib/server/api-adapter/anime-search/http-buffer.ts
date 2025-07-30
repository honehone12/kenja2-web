import {Buffer} from "node:buffer";
import type { AnimeSearch } from "$lib/server/api-adapter/api-adapter";
import { 
    FunctionId, 
    Rating, 
    ItemType, 
    VectorField, 
    type SearchQuery 
} from "$lib/documents/anime-search/queries";
import type {SearchResult} from "$lib/documents/anime-search/documents";

export class HttpBufferApi implements AnimeSearch {
    private _apiUrl: URL;
    private _imgRootUrl: URL;

    constructor(baseUrl: string) {
        this._apiUrl = new URL('/anime-search', baseUrl);
        this._imgRootUrl = new URL('/preview', baseUrl);
    }

    private async httpQuery(url: URL, body: Buffer): Promise<SearchResult> {
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
        
        const result: SearchResult = await res.json();
        if (result.documents) {
            for (const doc of result.documents) {
                doc.img = this.imgPath(doc.img);
            }
        }
        
        return result;
    }

    private imgPath(fileName: string) {
        return `${this._imgRootUrl}/${fileName}`;
    }

    async ping(): Promise<SearchResult> {
        const q: SearchQuery = {
            function_id: FunctionId.Ping
        };
        const body = Buffer.from(JSON.stringify(q));

        return this.httpQuery(this._apiUrl, body);
    }

    async document(id: string): Promise<SearchResult> {
        const q: SearchQuery = {
            function_id: FunctionId.Document,
            id
        };
        const body = Buffer.from(JSON.stringify(q));

        return this.httpQuery(this._apiUrl, body);
    }

    async textSearch(
        rating: Rating | undefined,
        item_type: ItemType | undefined,
        keywords: string
    ): Promise<SearchResult> {
        const q: SearchQuery = {
            function_id: FunctionId.TextSearchBuffer,
            rating,
            item_type,
            keywords
        };
        const body = Buffer.from(JSON.stringify(q));
    
        return this.httpQuery(this._apiUrl, body);
    }

    async vectorSearch(
        rating: Rating | undefined,
        item_type: ItemType,
        vector_field: VectorField,
        id: string
    ): Promise<SearchResult> {
        const q: SearchQuery = {
            function_id: FunctionId.VectorSearchBuffer,
            rating,
            item_type,
            vector_field,
            id
        };
        const body = Buffer.from(JSON.stringify(q));

        return this.httpQuery(this._apiUrl, body);
    }
}
