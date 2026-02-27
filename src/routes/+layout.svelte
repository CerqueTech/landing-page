<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();
	let loading = $state(true);

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, 100);
	});
</script>

{#if loading}
	<div class="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-zinc-950">
		<div class="flex flex-col items-center gap-4">
			<div class="h-12 w-12 animate-spin rounded-full border-4 border-brand-500/20 border-t-brand-500"></div>
			<span class="text-sm font-medium text-zinc-500 dark:text-zinc-400">Cargando...</span>
		</div>
	</div>
{:else}
	{@render children()}
{/if}