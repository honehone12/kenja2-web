'use strict';

import kenja from "$lib/server/kenja";
import logs from "$lib/server/logs";

export function load() {
    return {pingStream: new Promise<void>(async (resolve) => {
        try {
            await kenja.api().ping();
            resolve();
        } catch (error) {
            logs.error(error, "error on ping");
            return;
        }
    })};
}
