import type { URL } from "url";

export const MAX_KW_LEN = 120;
export const OID_LEN = 24;

export const enum Lang {
  Unspecified = 0,
  En,
  Jp,
}

export function selectLang(url: URL, headers: Headers) {
  const qLang = url.searchParams.get("lang");
  if (qLang === "ja") {
    return Lang.Jp;
  } else if (qLang === "en") {
    return Lang.En;
  }

  const accLangs = headers.get("accept-language");
  return accLangs?.startsWith("ja") ? Lang.Jp : Lang.En;
}
