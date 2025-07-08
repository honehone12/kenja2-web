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
    const ip = event.getClientAddress();
    logs.info(ip, 'client address');

    const response = await resolve(event);
    SECURITY_HEADERS.forEach((value, key) => response.headers.set(key, value));
    return response;
};
