import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// csp is done on cdn.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: "200.html",
    }),
  },
};

export default config;
