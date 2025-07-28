const CACHE_HEADER = {
    "Cache-Control": "public, max-age=86400"
};

export function load({setHeaders}) {
    setHeaders(CACHE_HEADER);
}
