import { ItemType } from "$lib/documents/anime-search/queries";
import {
  KEYWORDS_MAX_LEN,
  OBJECT_ID_LEN,
  VECTOR_ENCODED_LEN,
} from "$lib/index";

export function validateKeyword(keyword: string): boolean {
  if (!keyword || keyword.length > KEYWORDS_MAX_LEN) {
    return false;
  }
  if (keyword.trim().length === 0) {
    return false;
  }

  return true;
}

export function validateOid(oid: string): boolean {
  if (!oid || oid.length !== OBJECT_ID_LEN) {
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
    return false;
  }

  return true;
}

export function validateVector(vector: string): boolean {
  if (!vector || vector.length !== VECTOR_ENCODED_LEN) {
    return false;
  }

  return true;
}
