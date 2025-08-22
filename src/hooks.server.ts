import {building} from "$app/environment";
import type { Handle } from "@sveltejs/kit";
import kenja from "$lib/server/kenja";
import logs from "$lib/server/logs";

// headers are done on cdn
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const TRANSPORT_SECURITY_HEADERS = new Map([
//     ['Strict-Transport-Security', 'max-age=86400; includeSubDomains; preload']
// ]);

export const handle: Handle = async ({ event, resolve }) => {
    if (building) {
        const response = await resolve(event);
        return response;
    }

    const h = event.request.headers;
    const url = event.request.url;
    const referer = h.get('Referer');
    const userAgent = h.get('User-Agent');
    const host = h.get('Host');
    const origin = h.get('Origin');

    if (kenja.isLocal()) {
        const ip = event.getClientAddress();
        logs.info(
            {url, referer, userAgent, ip, host, origin}, 
            'local request header values'
        );

        const SECURITY_HEADERS = {
            "X-XSS-Protection": "0",
            "X-Frame-Options": "DENY",
            "X-Content-Type-Options": "nosniff",
            "Referrer-Policy": "strict-origin-when-cross-origin",
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp",
            "Cross-Origin-Resource-Policy": "same-site",
            "Permissions-Policy": "geolocation=(), camera=(), microphone=()",
            "Content-Security-Policy": "script-src 'self' 'unsafe-inline';  font-src 'self';  img-src 'self' data: ;  worker-src 'self';  connect-src 'self';  base-uri 'self';  form-action 'self';  media-src 'self';  object-src 'self';  manifest-src 'self';  child-src 'none';  frame-src 'none';  frame-ancestors 'none';"
        };

        event.setHeaders(SECURITY_HEADERS);
    } else {
        const xIp = h.get('X-Forwarded-For');
        if (xIp) {
            // Some guides will tell you to read the left-most address,
            // but this leaves you vulnerable to spoofing.
            // <spoofed address>, <client address>, <proxy 1 address>, <proxy 2 address>
            // We instead read from the right, accounting for the number of trusted proxies. 
            // https://svelte.dev/docs/kit/adapter-node
            //
            // don't trust this ip address
            const ip = xIp.split(',').at(0)?.trim();
            if (ip) {
                logs.info(
                    {url, referer, userAgent, ip, host, origin}, 
                    'request header values'
                );
            } else {
                throw new Error('invalid x ip header');
            }
        } else {
            throw new Error('could not find x ip host proto header');
        }

        const viewerAddress = h.get('CloudFront-Viewer-Address');
        if (!viewerAddress) {
            throw new Error('could not find cdn viewer address');
        }
        const viewerASN = h.get('CloudFront-Viewer-ASN');
        if (!viewerASN) {
            throw new Error('could not find cdn viewer ASN');
        }
        const viewerCountry = h.get('CloudFront-Viewer-Country');
        if (!viewerCountry) {
            throw new Error('could not find cdn viewer country');
        }
        const viewerCity = h.get('CloudFront-Viewer-City') ?? 'unknown';
        
        logs.info(
            {viewerAddress, viewerASN, viewerCountry, viewerCity},
            'cdn viewer header values'
        );
    }

    const lang = h.get('accept-language')?.startsWith('ja') ? 'ja' : 'en';
    const response = await resolve(
        event, 
        {transformPageChunk: ({html}) => html.replace('%kenja.lang%', lang)}
    );
    return response;
};
