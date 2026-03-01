<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		// Remove the loading indicator once the app is hydrated
		// Use requestIdleCallback to avoid blocking the main thread
		const removeLoader = () => {
			const loader = document.getElementById('app-loader');
			if (loader) {
				loader.style.opacity = '0';
				loader.style.transition = 'opacity 0.4s ease-out';
				setTimeout(() => loader.remove(), 400);
			}
		};

		if ('requestIdleCallback' in window) {
			requestIdleCallback(removeLoader, { timeout: 2000 });
		} else {
			setTimeout(removeLoader, 100);
		}
	});
</script>

{@render children()}
