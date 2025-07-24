import {building} from "$app/environment";
import type { Handle } from "@sveltejs/kit";
import kenja from "$lib/server/kenja";
import logs from "$lib/server/logs";

// headers are done on cdn
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const SECURITY_HEADERS = new Map([
//     ['X-XSS-Protection', '0'],
//     ['X-Frame-Options', 'DENY'],
//     ['X-Content-Type-Options', 'nosniff'],
//     ['Referrer-Policy', 'strict-origin-when-cross-origin'],
//     ['Cross-Origin-Opener-Policy', 'same-origin'],
//     ['Cross-Origin-Embedder-Policy', 'require-corp'],
//     ['Cross-Origin-Resource-Policy', 'same-site'],
//     ['Permissions-Policy', 'geolocation=(), camera=(), microphone=()']
// ]);

// const TRANSPORT_SECURITY_HEADERS = new Map([
//     ['Strict-Transport-Security', 'max-age=86400; includeSubDomains; preload']
// ]);

export const handle: Handle = async ({ event, resolve }) => {
    const isLocal = kenja.isLocal();
    
    if (!building) {
        const h = event.request.headers;
        const url = event.request.url;
        const referer = h.get('Referer');
        const userAgent = h.get('User-Agent');

        if (isLocal) {
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
    // headers are done on cdn
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // SECURITY_HEADERS.forEach((value, key) => response.headers.set(key, value));
    // if (!isLocal) {
    //     TRANSPORT_SECURITY_HEADERS.forEach((value, key) => response.headers.set(key, value));
    // }
    return response;
};
