import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	build: {
		target: 'esnext',
		minify: 'esbuild',
		cssMinify: 'esbuild',
		modulePreload: {
			polyfill: false // Modern browsers support modulepreload natively
		},
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('lucide-svelte')) return 'lucide';
					if (id.includes('globe.gl') || id.includes('three')) return 'globe';
					if (id.includes('@emailjs')) return 'emailjs';
					if (id.includes('@fontsource')) return 'fonts';
				}
			},
			treeshake: {
				moduleSideEffects: 'no-external',
				preset: 'recommended'
			}
		}
	}
});
