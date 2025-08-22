import {Lang} from "$lib";

export function load({request}) {
    const accLangs = request.headers.get('accept-language'); 
    let lang = accLangs?.startsWith('ja') ? Lang.Jp : Lang.En;
    
    return {lang};
}
