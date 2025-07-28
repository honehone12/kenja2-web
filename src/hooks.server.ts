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
                // Some guides will tell you to read the left-most address,
                // but this leaves you vulnerable to spoofing.
                // <spoofed address>, <client address>, <proxy 1 address>, <proxy 2 address>
                // We instead read from the right, accounting for the number of trusted proxies. 
                // https://svelte.dev/docs/kit/adapter-node
                //
                // don't trust this ip address
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

    return response;
};
