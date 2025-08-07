import { redirect, type Cookies } from "@sveltejs/kit";

export const AGE_COOKIE_KEY = 'age-verification';
export const AGE_COOKIE_VALUE = 'true';

export function ageCookieRedirect() {
    return redirect(303, '/kenja/i-am-kenja');
}

export function checkAgeCookie(cookies: Cookies, url: string): void | never {
    const ageCookie = cookies.get(AGE_COOKIE_KEY);
    if (!ageCookie || ageCookie !== AGE_COOKIE_VALUE) {
        return ageCookieRedirect();
    }
}
