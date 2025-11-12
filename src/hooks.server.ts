import { building } from "$app/environment";
import type { Handle } from "@sveltejs/kit";
import kenja from "$lib/server/kenja";
import logs from "$lib/server/logs";

export const handle: Handle = async ({ event, resolve }) => {
  if (building) {
    const response = await resolve(event);
    return response;
  }

  let lang = event.url.searchParams.get("lang") ?? "en";
  lang = lang === "ja" ? "ja" : "en";

  {
    const headers = event.request.headers;
    const url = event.request.url;
    const referer = headers.get("Referer");
    const userAgent = headers.get("User-Agent");
    const host = headers.get("Host");
    const origin = headers.get("Origin");

    if (kenja.isLocal()) {
      const ip = event.getClientAddress();
      logs.info(
        { url, referer, userAgent, ip, host, origin },
        "local request header values",
      );

      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      // headers are done on cdn.
      // transport headers are not set for local.
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      // const TRANSPORT_SECURITY_HEADERS = new Map([
      //     ['Strict-Transport-Security', 'max-age=86400; includeSubDomains; preload']
      // ]);
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      const SECURITY_HEADERS = {
        "X-XSS-Protection": "0",
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Cross-Origin-Opener-Policy": "same-origin",
        "Cross-Origin-Resource-Policy": "same-origin",
        "Permissions-Policy": "geolocation=(), camera=(), microphone=()",
        "Content-Security-Policy":
          "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net/npm/ 'wasm-unsafe-eval'; font-src 'self'; img-src 'self' data: ; worker-src 'self' blob: ; connect-src 'self' https://huggingface.co/ https://cas-bridge.xethub.hf.co/ https://cdn.jsdelivr.net/npm/; base-uri 'self'; form-action 'self'; media-src 'self'; object-src 'self'; manifest-src 'self'; child-src 'none'; frame-src https://www.youtube.com/ https://www.youtube-nocookie.com/; frame-ancestors 'none';",
      };

      event.setHeaders(SECURITY_HEADERS);
    } else {
      const xIp = headers.get("X-Forwarded-For");
      if (xIp) {
        // Some guides will tell you to read the left-most address,
        // but this leaves you vulnerable to spoofing.
        // <spoofed address>, <client address>, <proxy 1 address>, <proxy 2 address>
        // We instead read from the right, accounting for the number of trusted proxies.
        // https://svelte.dev/docs/kit/adapter-node
        //
        // don't trust this ip address
        const ip = xIp.split(",").at(0)?.trim();
        if (ip) {
          logs.info(
            { url, referer, userAgent, ip, host, origin },
            "request header values",
          );
        } else {
          throw new Error("invalid x ip header");
        }
      } else {
        throw new Error("could not find x ip host proto header");
      }

      const viewerAddress = headers.get("CloudFront-Viewer-Address");
      if (!viewerAddress) {
        throw new Error("could not find cdn viewer address");
      }
      const viewerASN = headers.get("CloudFront-Viewer-ASN");
      if (!viewerASN) {
        throw new Error("could not find cdn viewer ASN");
      }
      const viewerCountry = headers.get("CloudFront-Viewer-Country");
      if (!viewerCountry) {
        throw new Error("could not find cdn viewer country");
      }
      const viewerCity = headers.get("CloudFront-Viewer-City") ?? "unknown";

      logs.info(
        { viewerAddress, viewerASN, viewerCountry, viewerCity },
        "cdn viewer header values",
      );
    }
  }

  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%kenja.lang%", lang),
  });
  return response;
};
