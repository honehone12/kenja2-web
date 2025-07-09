'use-strict';

import logs from "$lib/server/logs";
import type { Handle } from "@sveltejs/kit";

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
    const ipHeader = event.request.headers.get('X-Forwarded-For');
    if (ipHeader) {
        const ip = ipHeader.split(',').at(0)?.trim();
        if (ip) {
            const url = event.request.url;
            const referer = event.request.referrer;

            logs.info({url, referer, ip}, 'request header values');
        } else {
            throw new Error('invalid ip header');
        }
    } else {
        throw new Error('could not find ip header');
    }

    const response = await resolve(event);
    SECURITY_HEADERS.forEach((value, key) => response.headers.set(key, value));
    return response;
};
