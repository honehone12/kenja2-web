import type { SearchResult } from "./documents/anime-search/documents";
import type { ItemType } from "./documents/anime-search/queries";

export const KEYWORDS_MAX_LEN = 150;
export const OBJECT_ID_LEN = 24;
export const VECTOR_ENCODED_LEN = 1024;
export const MAX_RECOMMEND_SRC = 10;

export const enum SearchType {
  Text = 1,
  Vector,
  Random,
  DirectVector,
}

export const enum Lang {
  Unspecified = 0,
  En,
  Jp,
}

export interface RecommendResult {
  isRecommended: boolean;
  itemType: ItemType;
  bufferedStream: Promise<SearchResult>;
}

export function canonicalUrl(url: URL, lang: Lang) {
  if (lang === Lang.Jp) {
    return url;
  } else {
    const u = new URL(url);
    u.searchParams.delete("lang");
    return u;
  }
}

export const URL_CTRLS = /[&#]/g;

export const SPLITTER = /[\s\p{P}\p{S}]+/u;

export const HTML_TAG = /<.*?>/g;

export function preparedTextSearchQuery(
  keyword: string | undefined,
  keywordJapanese: string | undefined,
  lang: Lang,
) {
  keyword ??= "";
  keywordJapanese ??= keyword;

  const q =
    lang === Lang.Jp
      ? new URLSearchParams({
          keyword: keywordJapanese,
          "item-type": "all",
          lang: "ja",
        })
      : new URLSearchParams({
          keyword,
          "item-type": "all",
        });

  return q.toString();
}

export function extractTitle(raw: string) {
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
  const title = split.at(0) ?? clean;
  return encodeURIComponent(title);
}
