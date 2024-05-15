import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto 僅支援某些環境，請參考 https://kit.svelte.dev/docs/adapter-auto 以查看支援的環境列表。
		// 如果您的環境未得到支援，或者您已經決定使用特定的環境，請切換適合的 adapter。
		// 更多有關 adapter 的信息，請參考 https://kit.svelte.dev/docs/adapters。
		adapter: adapter()
	},
	preprocess: vitePreprocess()
};

export default config;
