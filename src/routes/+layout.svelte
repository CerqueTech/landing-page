<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		// Remove the HTML loader once the app is hydrated
		const loader = document.getElementById('app-loader');
		if (loader) {
			loader.style.opacity = '0';
			loader.style.transition = 'opacity 0.3s';
			setTimeout(() => loader.remove(), 300);
		}
	});
</script>

{@render children()}
