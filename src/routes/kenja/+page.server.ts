import {checkAgeCookie} from "$lib/server/cookies.js";

const CACHE_HEADER = {
    "Cache-Control": "public, max-age=86400"
};

export function load({cookies, setHeaders}) {
    checkAgeCookie(cookies, 'top');

    setHeaders(CACHE_HEADER);
}
