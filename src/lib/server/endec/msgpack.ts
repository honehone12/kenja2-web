'use strict';

import {Buffer} from "node:buffer";
import {encode, decode} from "@msgpack/msgpack";
import type {Encoder, Decoder} from "$lib/server/endec/endec";

export class MsgPack implements Encoder, Decoder {
    marshal(a: any): Buffer {
        return Buffer.from(encode(a, {ignoreUndefined: true}));
    }

    unmarshal<T>(b: Buffer): T {
        return decode(b) as T;
    }

    contentType(): string {
        return 'application/messagepack'
    }
}
