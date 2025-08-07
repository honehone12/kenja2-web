import { hasAgeCookie } from '$lib/server/cookies';

export function load({cookies}) {
    return {hasAgeCookie: hasAgeCookie(cookies)};
}
