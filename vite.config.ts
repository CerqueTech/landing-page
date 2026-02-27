import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					'lucide': ['lucide-svelte'],
					'three': ['three']
				}
			}
		}
	},
	optimizeDeps: {
		include: ['three']
	}
});
