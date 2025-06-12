'use strict';

import {building} from "$app/environment";
import {env} from "$env/dynamic/private";
import type { ApiAdapter } from "$lib/server/api-adapter/api-adapter";
import type { Decoder, Encoder } from "$lib/server/endec/endec";
import  { Json } from "$lib/server/endec/json";
import { HttpApi } from "$lib/server/api-adapter/http-api";

class Kenja {
    private _api: ApiAdapter | null = null;

    useHttp<
        E extends Encoder, 
        D extends Decoder
    >(e: E, d: D) {
        if (this._api) {
            throw new Error("api is already initialized");
        }

        const baseUrl = env.HTTP_API_BASE_URL;
        if (!baseUrl) {
            throw new Error("env for http api url is not set");
        }

        this._api = new HttpApi(e, d, baseUrl);
    }

    useLambda<
        E extends Encoder,
        D extends Decoder
    >(e: E, d: D) {
        if (this._api) {
            throw new Error("api is already initialized");
        }

        throw new Error("not implemented yet");
    }

    api(): ApiAdapter {
        if (!this._api) {
            throw new Error("api adapter is not initialized");
        }
        return this._api;
    }
}

const kenja = new Kenja();

if (!building) {
    kenja.useHttp(
        new Json(), 
        new Json()
    );    
}

export default kenja;
