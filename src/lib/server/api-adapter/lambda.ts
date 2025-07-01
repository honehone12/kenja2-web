'use strict';

import { 
    InvokeCommand, LambdaClient, 
    type LambdaClientConfig, type InvokeCommandInput 
} from "@aws-sdk/client-lambda";
import type { Decoder, Encoder } from "$lib/server/endec/endec";
import type { ApiAdapter } from "$lib/server/api-adapter/api-adapter";
import type { DocumentQuery, TextQuery, VectorQuery } from "$lib/documents/queries";
import type {SearchResult, SingleDocument} from "$lib/documents/documents";

export interface LambdaFunctions {
    document: string;
    textSearch: string;
    vectorSearch: string;
}

export class LambdaApi<
    E extends Encoder, 
    D extends Decoder
> implements ApiAdapter {
    private _encoder: E;
    private _decoder: D;
    private _lambda: LambdaClient;
    private _functions: LambdaFunctions;

    constructor(
        e: E, 
        d: D, 
        functions: LambdaFunctions
    ) {
        this._encoder = e;
        this._decoder = d;
        this._functions = functions;
        this._lambda = new LambdaClient();
    }

    encoder(): Encoder {
        return this._encoder;
    }

    decoder(): Decoder {
        return this._decoder;
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
        const result = this._decoder.unmarshal<T>(b);
        return result;
    }

    async document(q: DocumentQuery): Promise<SingleDocument> {
        const payload = this._encoder.marshal(q);
        const input: InvokeCommandInput = {
            FunctionName: this._functions.document,
            Payload: payload
        };

        return this.lambdaQuery<SingleDocument>(input);
    }

    async textSearch(q: TextQuery): Promise<SearchResult> {
        const payload = this._encoder.marshal(q);
        const input: InvokeCommandInput = {
            FunctionName: this._functions.textSearch,
            Payload:  payload
        }; 
        
        return this.lambdaQuery<SearchResult>(input);
    }

    async vectorSearch(q: VectorQuery): Promise<SearchResult> {
        const payload = this._encoder.marshal(q);
        const input: InvokeCommandInput = {
            FunctionName: this._functions.vectorSearch,
            Payload: payload
        };
        
        return this.lambdaQuery<SearchResult>(input);
    }
}
