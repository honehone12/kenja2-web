'use strict';

import {Buffer} from "node:buffer";
import {pack, unpack} from "msgpackr";
import type {Encoder, Decoder} from "$lib/server/endec/endec";

export class MsgPack implements Encoder, Decoder {
    marshal(a: any): Buffer {
        return pack(a);
    }

    unmarshal<T>(b: Buffer): T {
        return unpack(b);
    }

    contentType(): string {
        return 'application/messagepack'
    }
}
