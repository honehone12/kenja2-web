import { MAX_KW_LEN, OID_LEN } from "$lib/index.js";
import logs from "$lib/server/logs.js";

export function validateKeyword(keyword: string | null | undefined) {
  if (!keyword || keyword.length > MAX_KW_LEN) {
    logs.warn("keywords length 0 or over limit");
    return false;
  }
  if (keyword.trim().length === 0) {
    logs.warn("keywords only white spaces");
    return false;
  }

  return true;
}

export function validateOid(oid: string | null | undefined) {
  if (!oid || oid.length !== OID_LEN) {
    logs.warn("invalid oid");
    return false;
  }

  return true;
}
