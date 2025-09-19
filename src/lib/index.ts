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

export function extractTitle(raw: string | undefined) {
  if (!raw) {
    return undefined;
  }

  // be careful for ordering
  const clean = raw
    .replace("映画", " ")
    .replace("劇場版", " ")
    .replace("テレビアニメーション", " ")
    .replace("テレビアニメ", " ")
    .replace("TVアニメ", " ")
    .replace("OVA", " ")
    .replace("オリジナルビデオアニメーション", " ")
    .replace("アニメーション", " ")
    .trim();

  const split = clean.split(SPLITTER).filter((value) => value.length > 1);
  return split.length > 0 ? split.at(0) : clean;
}
