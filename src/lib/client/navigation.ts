import { page } from "$app/state";
import { settled } from "svelte";
import { replaceState } from "$app/navigation";
import type { AfterNavigate } from "@sveltejs/kit";

export function onBeforeNavigate() {
  const y = window.scrollY;
  replaceState("", { scrollY: y });
}

export async function onAfterNavigate(nav: AfterNavigate) {
  await nav.complete;

  let y = page.state.scrollY;
  if (!y || y < 0) {
    y = 0;
  }

  await settled();

  window.scrollTo({
    top: y,
    behavior: "instant",
  });
}
