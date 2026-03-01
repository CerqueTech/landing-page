<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';

	interface Props {
		title: string;
		description: string;
		category: string;
		image: string;
		tags: string[];
		index: number;
		url?: string;
	}

	let { title, description, category, image, tags, index, url }: Props = $props();
</script>

<svelte:element
	this={url ? 'a' : 'div'}
	href={url || undefined}
	target={url ? '_blank' : undefined}
	rel={url ? 'noopener noreferrer' : undefined}
	class="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50"
>
	<!-- Image -->
	<div class="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
		<img
			src={image}
			alt={title}
			width="800"
			height="450"
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			loading="lazy"
			decoding="async"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		></div>
	</div>

	<!-- Content -->
	<div class="p-4 sm:p-6">
		<div class="mb-2 flex flex-wrap gap-1.5 sm:mb-3 sm:gap-2">
			{#each tags as tag}
				<span
					class="rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-medium text-brand-700 sm:px-2.5 sm:text-xs dark:bg-brand-950/50 dark:text-brand-400"
				>
					{tag}
				</span>
			{/each}
		</div>
		<div class="flex items-start justify-between gap-2">
			<h3 class="font-display text-base font-bold text-zinc-900 sm:text-lg dark:text-white">
				{title}
			</h3>
			{#if url}
				<ExternalLink class="mt-1 h-4 w-4 shrink-0 text-zinc-400 transition-colors group-hover:text-brand-500" />
			{/if}
		</div>
		<p class="mt-1 text-xs leading-relaxed text-zinc-600 sm:mt-2 sm:text-sm dark:text-zinc-400">
			{description}
		</p>
	</div>
</svelte:element>
