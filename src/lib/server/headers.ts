export const A_DAY_CACHE_HEADER = {
  "Cache-Control": "max-age=86400",
} as const;

export const NO_CACHE_HEADER = {
  "Cache-Control": "no-cache",
} as const;

export const NO_STORE_HEADER = {
  "Cache-Control": "no-store",
} as const;
