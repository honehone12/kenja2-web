import {Lang} from "$lib";

export function load({request, url}) {
    let lang = Lang.Unspecified;

    const qLang = url.searchParams.get('lang');
    if (qLang === 'ja') {
        lang = Lang.Jp;
    } else if (qLang === 'en') {
        lang = Lang.En;
    } else {
        const accLangs = request.headers.get('accept-language'); 
        lang = accLangs?.startsWith('ja') ? Lang.Jp : Lang.En;
    }

    return {lang};
}
