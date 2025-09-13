import {selectLang} from "$lib";

export function load({request, url}) {
    let lang = selectLang(url, request.headers);
    return {lang};
}
