import type { URL } from "url";

export const MAX_KW_LEN = 120;
export const OID_LEN = 24;

export const enum Lang {
  Unspecified = 0,
  En,
  Jp,
}

export const SPLITTER = /[\s\p{P}\p{S}]+/u;
