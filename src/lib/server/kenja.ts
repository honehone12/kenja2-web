import {building} from "$app/environment";
import {env} from "$env/dynamic/private";
import type { AnimeSearch } from "$lib/server/api-adapter/api-adapter";
import { HttpBufferApi } from "$lib/server/api-adapter/anime-search/http-buffer";
import { LambdaApi } from "$lib/server/api-adapter/anime-search/lambda";
import logs from "$lib/server/logs";
import type { LambdaClientConfig } from "@aws-sdk/client-lambda";

class Kenja {
    private _isLocal = false;
    private _api: AnimeSearch | null = null;

    useHttpBuffer() {
        if (this._api) {
            throw new Error('api client is already initialized');
        }

        const baseUrl = env.HTTP_API_BASE_URL;
        if (!baseUrl) {
            throw new Error('env for http api url is not set');
        }

        this._api = new HttpBufferApi(baseUrl);
    
        if (env.USING_LOCAL) {
            this._isLocal = true;
        }
    }

    useLambda() {
        if (this._api) {
            throw new Error('api client is already initialized');
        }

        const functionName = env.LAMBDA_FUNCTION_NAME;
        if (!functionName) {
            throw new Error('env for lambda function name is no set');
        }
        const region = env.AWS_REGION;
        if (!region) {
            throw new Error('env for aws region is not set')
        }

        const config: LambdaClientConfig = {
            region
        }; 
 
        this._api = new LambdaApi(functionName, config);
    }

    api(): AnimeSearch {
        if (!this._api) {
            throw new Error('api client is not initialized');
        }
        return this._api;
    }

    isLocal() {
        return this._isLocal;
    }
}

const kenja = new Kenja();

if (!building) {
    try {
        if (env.HTTP_API_BASE_URL) {
            logs.info('http env is found, initializing http api')
            kenja.useHttpBuffer();
            
            
        } else {
            logs.info('initializing lambda api')
            kenja.useLambda();
        }
    } catch (err) {
        logs.error(err, 'api client initialization failed');
    }
}

export default kenja;
