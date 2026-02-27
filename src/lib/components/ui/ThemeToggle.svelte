<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { Sun, Moon } from 'lucide-svelte';
</script>

<button
	onclick={() => theme.toggle()}
	class="relative flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
	aria-label="Toggle theme"
>
	{#if $theme === 'dark'}
		<Sun class="h-5 w-5" />
	{:else}
		<Moon class="h-5 w-5" />
	{/if}
</button>
