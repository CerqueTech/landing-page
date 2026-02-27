<script lang="ts">
	import { scrollReveal } from '$lib/utils/animations';

	interface Props {
		label: string;
		title: string;
		subtitle?: string;
		centered?: boolean;
	}

	let { label, title, subtitle, centered = true }: Props = $props();
</script>

<div class="{centered ? 'text-center' : ''} mb-10 sm:mb-14 lg:mb-16" use:scrollReveal>
	<span
		class="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-[10px] font-semibold tracking-wider text-brand-700 uppercase sm:mb-4 sm:px-4 sm:py-1.5 sm:text-xs dark:bg-brand-950/50 dark:text-brand-400"
	>
		{label}
	</span>
	<h2 class="font-display text-2xl font-bold text-zinc-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
		{title}
	</h2>
	{#if subtitle}
		<p class="mx-auto mt-3 max-w-2xl text-sm text-zinc-600 sm:mt-4 sm:text-base lg:text-lg dark:text-zinc-400">
			{subtitle}
		</p>
	{/if}
</div>
