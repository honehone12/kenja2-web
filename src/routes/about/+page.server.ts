const CACHE_HEADER = {
    "Cache-Control": "max-age=86400"
};

export function load({setHeaders}) {
    setHeaders(CACHE_HEADER);
}
