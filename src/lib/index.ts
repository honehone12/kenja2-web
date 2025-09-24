export const MAX_KW_LEN = 120;
export const OID_LEN = 24;

export const enum Lang {
  Unspecified = 0,
  En,
  Jp,
}

export const URL_CRLS = /[&#]/g;

/**
  this is not fundamental solution.
  encoding should be generally used.
**/
export function removeUrlCtl(url: string) {
  return url.replaceAll(URL_CRLS, " ");
}

export const SPLITTER = /[\s\p{P}\p{S}]+/u;
