import { 
    InvokeCommand, 
    LambdaClient, 
    type InvokeCommandInput, 
    type LambdaClientConfig 
} from "@aws-sdk/client-lambda";
import type { AnimeSearch } from "$lib/server/api-adapter/api-adapter";
import {
    ItemType, 
    Rating, 
    VectorField, 
    FunctionId, 
    FuzzyKind,
    type SearchQuery
} from "$lib/documents/anime-search/queries";
import type {SearchResult} from "$lib/documents/anime-search/documents";

export class LambdaApi implements AnimeSearch {
    private _lambda: LambdaClient;
    private _functionName: string;
    private _imgRoot: string;

    constructor(functionName: string, config: LambdaClientConfig) {
        this._functionName = functionName;
        this._lambda = new LambdaClient(config);
        this._imgRoot = '/preview'
    }
    
    private ok(code: number | undefined): boolean {
        if (!code) {
            return false;
        }

        return code >= 200 && code <= 299;
    }

    private async lambdaQuery(input: InvokeCommandInput): Promise<SearchResult> {
        const cmd = new InvokeCommand(input);
        const res = await this._lambda.send(cmd);
        
        if (!this.ok(res.StatusCode) || res.FunctionError) {
            throw new Error(`LAMBDA fail: ${res.StatusCode ?? '-'} ${res.FunctionError ?? '-'}`);
        }
        if (!res.Payload) {
            throw new Error('response without payload');
        }

        const b = Buffer.from(res.Payload);
        const result: SearchResult = JSON.parse(b.toString());
        if (result.documents) {
            for (const doc of result.documents) {
                doc.img = this.imgPath(doc.img);
            }
        }
        
        return result;
    }

    private imgPath(fileName: string) {
        return `${this._imgRoot}/${fileName}`;
    }

    async ping(): Promise<SearchResult> {
        const q: SearchQuery = {
            function_id: FunctionId.Ping
        };
        const payload = Buffer.from(JSON.stringify(q));
        const input: InvokeCommandInput = {
            FunctionName: this._functionName,
            Payload: payload
        };

        return this.lambdaQuery(input)
    }

    async document(id: string): Promise<SearchResult> {
        const q: SearchQuery = {
            function_id: FunctionId.Document,
            id
        };
        const payload = JSON.stringify(q);
        const input: InvokeCommandInput = {
            FunctionName: this._functionName,
            Payload: payload
        };

        return this.lambdaQuery(input);
    }

    async textSearch(
        rating: Rating | undefined,
        item_type: ItemType | undefined,
        keywords: string,
        fuzzy_kind: FuzzyKind | undefined
    ): Promise<SearchResult> {
        const q: SearchQuery = {
            function_id: FunctionId.TextSearchBuffer,
            rating,
            item_type,
            keywords,
            fuzzy_kind
        };
        const payload = JSON.stringify(q);
        const input: InvokeCommandInput = {
            FunctionName: this._functionName,
            Payload:  payload
        }; 
        
        return this.lambdaQuery(input);
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
        const payload = JSON.stringify(q);
        const input: InvokeCommandInput = {
            FunctionName: this._functionName,
            Payload: payload
        };
        
        return this.lambdaQuery(input);
    }
}
