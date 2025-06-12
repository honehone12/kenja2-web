'use strict';

import {building} from "$app/environment";
import {env} from "$env/dynamic/private";
import { type ApiAdapter } from "$lib/server/api-adapter/api-adapters";

class Kenja {
    private _api: ApiAdapter | null;

    constructor() {
        this._api = null;
    }

    intiHttp() {
        if (this._api) {
            throw new Error("api is already initialized");
        }
    }

    initLambda() {
        if (this._api) {
            throw new Error("api is already initialized");
        }
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
    kenja.intiHttp();    
}

export default kenja;
