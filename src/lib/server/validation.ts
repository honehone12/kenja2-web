import { ItemType } from "$lib/documents/anime-search/queries";
import {
  KEYWORDS_MAX_LEN,
  OBJECT_ID_LEN,
  VECTOR_ENCODED_LEN,
} from "$lib/index.js";
import logs from "$lib/server/logs.js";

export function validateKeyword(keyword: string): boolean {
  if (!keyword || keyword.length > KEYWORDS_MAX_LEN) {
    logs.warn("keywords length 0 or over limit");
    return false;
  }
  if (keyword.trim().length === 0) {
    logs.warn("keywords only white spaces");
    return false;
  }

  return true;
}

export function validateOid(oid: string): boolean {
  if (!oid || oid.length !== OBJECT_ID_LEN) {
    logs.warn("invalid oid length");
    return false;
  }

  return true;
}

export function validateVectorItemType(
  itemType: ItemType | undefined,
): boolean {
  if (
    !itemType ||
    (itemType !== ItemType.Anime && itemType !== ItemType.Character)
  ) {
    logs.warn("invalid item type for vector search");
    return false;
  }

  return true;
}

export function validateVector(vector: string): boolean {
  if (!vector || vector.length !== VECTOR_ENCODED_LEN) {
    logs.warn("invalid vector length");
    return false;
  }

  return true;
}
