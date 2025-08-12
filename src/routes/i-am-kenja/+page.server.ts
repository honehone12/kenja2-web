import { type Actions } from "@sveltejs/kit";
import { setAgeCookie } from "$lib/server/cookies";
import { badRequest } from "$lib/server/errors.js";
import { CACHE_HEADER } from '$lib/server/headers.js';
import { MAX_REF_LEN } from "$lib";
import logs from "$lib/server/logs.js";

export function load({setHeaders}) {
    setHeaders(CACHE_HEADER);
}

export const actions: Actions = {
    default: async ({cookies, request}) => {
        const form = await request.formData();
        const ref = form.get('ref');
        if (!ref || typeof ref !== 'string') {
            logs.warn('null ref');
            return badRequest();
        }
        if (ref.length > MAX_REF_LEN) {
            logs.warn(`ref over limit: ${ref}`);
            return badRequest();
        }
        if (
            ref !== '/' &&
            !ref.startsWith('/kenja') &&
            !ref.startsWith('/textsearch/') &&
            !ref.startsWith('/vectorsearch/')
        ) {
            logs.warn(`invalid ref: ${ref}`);
            return badRequest();
        }

        return setAgeCookie(cookies, ref);
    }
};
