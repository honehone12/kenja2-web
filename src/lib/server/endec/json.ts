'use strict';

import {type Encoder, type Decoder} from "$lib/server/endec/endec";

export class Json implements Encoder, Decoder {
    marshal(a: any): Buffer {
        const s = JSON.stringify(a);
        return Buffer.from(s, 'utf8');
    }

    unmarshal<T>(b: Buffer): T {
        const s = b.toString('utf8');
        return JSON.parse(s);
    }

    contentType(): string {
        return 'application/json; charset=utf-8';
    }
}
