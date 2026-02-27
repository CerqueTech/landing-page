import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	build: {
		target: 'esnext',
		minify: 'esbuild',
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('lucide-svelte')) return 'lucide';
					if (id.includes('globe.gl') || id.includes('three')) return 'globe';
				}
			}
		}
	}
});
