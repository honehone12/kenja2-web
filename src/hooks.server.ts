'use-strict'

import type { Handle } from "@sveltejs/kit";

const SECURITY_HEADERS = {
  'X-XSS-Protection': '0',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Embedder-Policy': 'require-corp',
  'Cross-Origin-Resource-Policy': 'same-site',
  'Permissions-Policy': 'geolocation=(), camera=(), microphone=()'
};

const headerEnties = Object.entries(SECURITY_HEADERS);

export const handle: Handle = async ({ event, resolve }) => {
    const response = await resolve(event);
    headerEnties.forEach(([k, v]) => response.headers.set(k, v));
    return response;
};
