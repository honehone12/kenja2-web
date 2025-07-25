import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: { 
		adapter: adapter()
		// csp is done on cdn.
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
		// csp: {
		// 	directives: {
		// 		'script-src': ['self', 'unsafe-inline'],
		// 		'font-src': ['self'],
		// 		'img-src': ['self', 'data:'],
		// 		'worker-src': ['self'],
		// 		'connect-src': ['self'],
		// 		'base-uri': ['self'],
		// 		'form-action': ['self'],
		// 		'media-src': ['self'],
		// 		'object-src': ['self'],
		// 		'manifest-src': ['self'],
		// 		'child-src': ['none'],
		// 		'frame-src': ['none'],
		// 		'frame-ancestors': ['none'],
		// 	}
		// } 
	}
};

export default config;
