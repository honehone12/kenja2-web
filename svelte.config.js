import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// csp is done on cdn.
// or see hooks for local.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    experimental: {
      remoteFunctions: true,
    },
  },
};

export default config;
