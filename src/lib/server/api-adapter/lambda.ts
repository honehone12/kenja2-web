'use strict';

import { 
    InvokeCommand, LambdaClient, 
    type InvokeCommandInput, type LambdaClientConfig 
} from "@aws-sdk/client-lambda";
import type { ApiAdapter } from "$lib/server/api-adapter/api-adapter";
import type { DocumentQuery, TextQuery, VectorQuery } from "$lib/documents/queries";
import type {SearchResult, SingleDocument} from "$lib/documents/documents";

export interface LambdaFunctions {
    document: string;
    textSearch: string;
    vectorSearch: string;
}

export class LambdaApi implements ApiAdapter {
    private _lambda: LambdaClient;
    private _functions: LambdaFunctions;

    constructor(functions: LambdaFunctions, config: LambdaClientConfig) {
        this._functions = functions;
        this._lambda = new LambdaClient(config);
    }
    
    private ok(code: number | undefined): boolean {
        if (!code) {
            return false;
        }

        return code >= 200 && code <= 299;
    }

    private async lambdaQuery<T>(input: InvokeCommandInput): Promise<T> {
        const cmd = new InvokeCommand(input);
        const res = await this._lambda.send(cmd);
        
        if (!this.ok(res.StatusCode) || res.FunctionError) {
            throw new Error(`LAMBDA fail: ${res.StatusCode ?? '-'} ${res.FunctionError ?? '-'}`);
        }
        if (!res.Payload) {
            throw new Error('response without payload');
        }

        const b = Buffer.from(res.Payload);
        const result: T = JSON.parse(b.toString()); 
        return result;
    }

    async document(q: DocumentQuery): Promise<SingleDocument> {
        const payload = Buffer.from(JSON.stringify(q));
        const input: InvokeCommandInput = {
            FunctionName: this._functions.document,
            Payload: payload
        };

        return this.lambdaQuery<SingleDocument>(input);
    }

    async textSearch(q: TextQuery): Promise<SearchResult> {
        const payload = Buffer.from(JSON.stringify(q));
        const input: InvokeCommandInput = {
            FunctionName: this._functions.textSearch,
            Payload:  payload
        }; 
        
        return this.lambdaQuery<SearchResult>(input);
    }

    async vectorSearch(q: VectorQuery): Promise<SearchResult> {
        const payload = Buffer.from(JSON.stringify(q));
        const input: InvokeCommandInput = {
            FunctionName: this._functions.vectorSearch,
            Payload: payload
        };
        
        return this.lambdaQuery<SearchResult>(input);
    }
}
