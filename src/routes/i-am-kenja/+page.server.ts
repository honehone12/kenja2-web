import { redirect, type Actions } from "@sveltejs/kit";
import { hasAgeCookie, setAgeCookie } from "$lib/server/cookies";


const CACHE_HEADER = {
    "Cache-Control": "public, max-age=86400"
};

export function load({setHeaders}) {
    setHeaders(CACHE_HEADER);
}

function redirectHTop() {
    return redirect(303, '/kenja');
}

export const actions: Actions = {
    default: async ({cookies}) => {
        if (hasAgeCookie(cookies)) {
            return redirectHTop() 
        }

        setAgeCookie(cookies);

        return redirectHTop();
    }
};
