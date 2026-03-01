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
			loader.style.transition = 'opacity 0.3s';
			setTimeout(() => loader.remove(), 300);
		}
	});
</script>

{@render children()}
