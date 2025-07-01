'use strict';

import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
import {building} from "$app/environment";
import {env} from "$env/dynamic/private";
import type { ApiAdapter } from "$lib/server/api-adapter/api-adapter";
import type { Decoder, Encoder } from "$lib/server/endec/endec";
import  { MsgPack } from "$lib/server/endec/msgpack";
import { HttpBufferApi } from "$lib/server/api-adapter/http-buffer";
import { LambdaApi, type LambdaFunctions } from "$lib/server/api-adapter/lambda";
import logs from "$lib/server/logs";

class Kenja {
    private _api: ApiAdapter | null = null;

    useHttpBuffer<
        E extends Encoder, 
        D extends Decoder
    >(e: E, d: D) {
        if (this._api) {
            throw new Error('api client is already initialized');
        }

        const baseUrl = env.HTTP_API_BASE_URL;
        if (!baseUrl) {
            throw new Error('env for http api url is not set');
        }

        this._api = new HttpBufferApi(e, d, baseUrl);
    }

    useLambda<
        E extends Encoder,
        D extends Decoder
    >(e: E, d: D) {
        if (this._api) {
            throw new Error('api client is already initialized');
        }

        const textSearch = env.LAMBDA_TEXT_SEARCH;
        if (!textSearch) {
            throw new Error('env for lambda text search is no set');
        }
        const vectorSearch = env.LAMBDA_VECTOR_SEARCH;
        if (!vectorSearch) {
            throw new Error('env for lambda vector search is not set');
        }
        const document = env.LAMBDA_DOCUMENT;
        if (!document) {
            throw new Error('env for lambda vector search is not set');
        }

        const functions: LambdaFunctions = {
            document,
            textSearch,
            vectorSearch
        };
 
        this._api = new LambdaApi(e, d, functions);
    }

    api(): ApiAdapter {
        if (!this._api) {
            throw new Error('api client is not initialized');
        }
        return this._api;
    }
}

const kenja = new Kenja();

if (!building) {
    try {
        kenja.useHttpBuffer(
            new MsgPack(), 
            new MsgPack()
        );    
    } catch (err) {
        logs.error(err, 'api client initialization failed');
    }
}

export default kenja;
