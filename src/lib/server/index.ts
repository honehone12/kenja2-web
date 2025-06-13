'use strict';

import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
import {building} from "$app/environment";
import {env} from "$env/dynamic/private";
import type { ApiAdapter } from "$lib/server/api-adapter/api-adapter";
import type { Decoder, Encoder } from "$lib/server/endec/endec";
import  { Json } from "$lib/server/endec/json";
import { HttpApi } from "$lib/server/api-adapter/http-api";
import { LambdaApi, type LambdaFunctions } from "$lib/server/api-adapter/lambda-api";
import logs from "./logs";

class Kenja {
    private _api: ApiAdapter | null = null;

    useHttp<
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

        this._api = new HttpApi(e, d, baseUrl);
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
        const functions: LambdaFunctions = {
            textSearch,
            vectorSearch
        };

        const config: LambdaClientConfig = {}; 
        const region = env.AWS_REGION;
        if (region) {
            config.region = region;
        }

        this._api = new LambdaApi(e, d, functions, config);
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
        kenja.useHttp(
            new Json(), 
            new Json()
        );    
    } catch (err) {
        logs.error(err, 'api client initialization failed');
    }
}

export default kenja;
