import {building} from "$app/environment";
import type { Handle } from "@sveltejs/kit";
import kenja from "$lib/server/kenja";
import logs from "$lib/server/logs";

const SECURITY_HEADERS = new Map([
    ['X-XSS-Protection', '0'],
    ['X-Frame-Options', 'DENY'],
    ['X-Content-Type-Options', 'nosniff'],
    ['Referrer-Policy', 'strict-origin-when-cross-origin'],
    ['Cross-Origin-Opener-Policy', 'same-origin'],
    ['Cross-Origin-Embedder-Policy', 'require-corp'],
    ['Cross-Origin-Resource-Policy', 'same-site'],
    ['Permissions-Policy', 'geolocation=(), camera=(), microphone=()']
]);

export const handle: Handle = async ({ event, resolve }) => {
    if (!building) {
        const h = event.request.headers;
        const url = event.request.url;
        const referer = h.get('Referer');
        const userAgent = h.get('User-Agent');

        if (kenja.isLocal()) {
            const ip = event.getClientAddress();
            logs.info({url, referer, userAgent, ip}, 'local request header values');
        } else {
            const ipHeader = h.get('X-Forwarded-For');
            if (ipHeader) {
                const ip = ipHeader.split(',').at(0)?.trim();
                if (ip) {
                    logs.info({url, referer, userAgent, ip}, 'request header values');
                } else {
                    throw new Error('invalid ip header');
                }
            } else {
                throw new Error('could not find ip header');
            }
        }
    }

    const response = await resolve(event);
    SECURITY_HEADERS.forEach((value, key) => response.headers.set(key, value));
    return response;
};
