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

<div class="{centered ? 'text-center' : ''} mb-16" use:scrollReveal>
	<span
		class="mb-4 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold tracking-wider text-brand-700 uppercase dark:bg-brand-950/50 dark:text-brand-400"
	>
		{label}
	</span>
	<h2 class="font-display text-3xl font-bold text-zinc-900 sm:text-4xl lg:text-5xl dark:text-white">
		{title}
	</h2>
	{#if subtitle}
		<p class="mx-auto mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
			{subtitle}
		</p>
	{/if}
</div>
