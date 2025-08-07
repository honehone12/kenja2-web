import { redirect, type Cookies } from "@sveltejs/kit";
import kenja from "$lib/server/kenja";

export const AGE_COOKIE_KEY = 'age-verification';
export const AGE_COOKIE_VALUE = 'true';

export function hasAgeCookie(cookies: Cookies) {
    const ageCookie = cookies.get(AGE_COOKIE_KEY);
    return !!ageCookie && ageCookie === AGE_COOKIE_VALUE;
}

export function checkAgeCookie(cookies: Cookies): void | never {
    if (!hasAgeCookie(cookies)) {
        return redirect(303, '/i-am-kenja');
    }
}

export function setCookie(
    cookies: Cookies,
    key: string,
    value: string
) {
    cookies.set(
        key,
        value,
        {
            httpOnly: true,
            maxAge: 7776000,
            path: '/',
            sameSite: `lax`,
            secure: !kenja.isLocal()
        }
    );
}

export function setAgeCookie(cookies: Cookies) {
    setCookie(
        cookies,
        AGE_COOKIE_KEY, 
        AGE_COOKIE_VALUE,
    );
}
