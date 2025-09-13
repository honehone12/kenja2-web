import {language} from "$lib";

export function load({request, url}) {
    let lang = language(url, request.headers);
    return {lang};
}
