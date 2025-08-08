import { type Actions } from "@sveltejs/kit";
import { setAgeCookie } from "$lib/server/cookies";

const CACHE_HEADER = {
    "Cache-Control": "max-age=86400"
};

export function load({setHeaders}) {
    setHeaders(CACHE_HEADER);
}

export const actions: Actions = {
    default: async ({cookies}) => {
        return setAgeCookie(cookies);
    }
};
