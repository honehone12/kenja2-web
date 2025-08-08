import { redirect, type Actions } from "@sveltejs/kit";
import { setAgeCookie } from "$lib/server/cookies";
import { badRequest } from "$lib/server/errors.js";
import { MAX_REF_LEN } from "$lib";
import logs from "$lib/server/logs.js";

const CACHE_HEADER = {
    "Cache-Control": "max-age=86400"
};

export function load({setHeaders}) {
    setHeaders(CACHE_HEADER);
}

export const actions: Actions = {
    default: async ({cookies, request}) => {
        const form = await request.formData();
        const ref = form.get('ref');
        if (!ref || typeof ref !== 'string' || ref.length > MAX_REF_LEN) {
            return badRequest();
        }
        
        if (
            !ref.startsWith('/kenja') &&
            !ref.startsWith('/textsearch') &&
            !ref.startsWith('/vectorsearch')
        ) {
            return badRequest();
        }

        return setAgeCookie(cookies, ref);
    }
};
