import {checkAgeCookie} from "$lib/server/cookies.js";

const CACHE_HEADER = {
    "Cache-Control": "max-age=86400"
};

export function load({cookies, setHeaders}) {
    checkAgeCookie(cookies);

    setHeaders(CACHE_HEADER);
}
