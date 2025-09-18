import { Lang } from "$lib";

export function load({ url }) {
  const qlang = url.searchParams.get("lang") ?? "en";
  const lang = qlang === "ja" ? Lang.Jp : Lang.En;
  return { lang };
}
