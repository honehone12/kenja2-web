'use strict';

import {Buffer} from "node:buffer";

export interface Encoder {
    marshal(a: any): Buffer;
    contentType(): string
}

export interface Decoder {
    unmarshal<T>(b: Buffer): T;
    contentType(): string
}
