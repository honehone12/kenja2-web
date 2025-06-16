'use strict';

import { 
    InvokeCommand, LambdaClient, 
    type LambdaClientConfig, type InvokeCommandInput 
} from "@aws-sdk/client-lambda";
import type { Decoder, Encoder } from "$lib/server/endec/endec";
import type { ApiAdapter } from "$lib/server/api-adapter/api-adapter";
import type { TextQuery, QueryResult, VectorQuery } from "$lib/documents/queries";

export interface LambdaFunctions {
    textSearch: string;
    vectorSearch: string;
}

export class LambdaApi<
    E extends Encoder, 
    D extends Decoder
> implements ApiAdapter {
    private _encoder: E;
    private _decoder: D;
    private _lambda: LambdaClient
    private _functions: LambdaFunctions

    constructor(
        e: E, 
        d: D, 
        functions: LambdaFunctions, 
        config: LambdaClientConfig
    ) {
        this._encoder = e;
        this._decoder = d;
        this._functions = functions;
        this._lambda = new LambdaClient(config);
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

    private async lambdaQuery(input: InvokeCommandInput): Promise<QueryResult> {
        const cmd = new InvokeCommand(input);
        const res = await this._lambda.send(cmd);
        
        if (!this.ok(res.StatusCode) || res.FunctionError) {
            throw new Error(`LAMBDA fail: ${res.StatusCode ?? '-'} ${res.FunctionError ?? '-'}`);
        }
        if (!res.Payload) {
            throw new Error('response without payload');
        }

        const b = Buffer.from(res.Payload);
        const result = this._decoder.unmarshal<QueryResult>(b);
        return result;
    }

    async textSearch(q: TextQuery): Promise<QueryResult> {
        const payload = this._encoder.marshal(q);
        const input: InvokeCommandInput = {
            FunctionName: this._functions.textSearch,
            Payload:  payload
        }; 
        
        return this.lambdaQuery(input)
    }

    async vectorSearch(q: VectorQuery): Promise<QueryResult> {
        const payload = this._encoder.marshal(q);
        const input: InvokeCommandInput = {
            FunctionName: this._functions.vectorSearch,
            Payload: payload
        };
        
        return this.lambdaQuery(input);
    }
}
