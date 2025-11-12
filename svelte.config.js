import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // csp is done on cdn.
    // or see hooks for local.
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  },
};

export default config;
