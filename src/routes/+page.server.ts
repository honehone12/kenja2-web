'use strict';

import { internalError } from "$lib/server/errors";
import kenja from "$lib/server/kenja";
import logs from "$lib/server/logs";

export function load() {
    try {
        const pingStream = kenja.api().ping();
        return {pingStream};
    } catch (error) {
        logs.error(error, "error on ping");
        return internalError();
    }
}
