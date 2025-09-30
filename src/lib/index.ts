export const MAX_KW_LEN = 120;
export const OID_LEN = 24;

export const enum SearchType {
  Text = 1,
  Vector = 2,
  Random = 3,
}


export const enum Lang {
  Unspecified = 0,
  En,
  Jp,
}

export const URL_CTRLS = /[&#]/g;

export const SPLITTER = /[\s\p{P}\p{S}]+/u;

export function preparedTextSearchQuery(
  keyword: string | undefined,
  keywordJapanese: string | undefined, 
  lang: Lang
) {
  keyword ??= "";
  keywordJapanese ??= keyword;

  const q = lang === Lang.Jp ?
    new URLSearchParams({
      keyword: keywordJapanese,
      "item-type": "all",
      lang: "ja"
    }) :
    new URLSearchParams({
      keyword,
      "item-type": "all"
    });
  
  return q.toString();
}
