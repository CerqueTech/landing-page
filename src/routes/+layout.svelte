<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		const root = document.getElementById('app-root');
		const loader = document.getElementById('app-loader');

		// Show the app content
		if (root) {
			root.style.visibility = 'visible';
		}

		// Fade out and remove the loader
		if (loader) {
			loader.style.opacity = '0';
			setTimeout(() => {
				const w = window as Record<string, unknown>;
				if (typeof w.__loaderCleanup === 'function') {
					(w.__loaderCleanup as () => void)();
					delete w.__loaderCleanup;
				}
				loader.remove();
			}, 600);
		}
	});
</script>

{@render children()}
