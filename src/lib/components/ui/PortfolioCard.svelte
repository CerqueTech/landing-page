<script lang="ts">
	import { scrollReveal } from '$lib/utils/animations';

	interface Props {
		title: string;
		description: string;
		category: string;
		image: string;
		tags: string[];
		index: number;
	}

	let { title, description, category, image, tags, index }: Props = $props();
</script>

<div
	class="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50"
	use:scrollReveal={{ delay: index * 150 }}
>
	<!-- Image -->
	<div class="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
		<img
			src={image}
			alt={title}
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			loading="lazy"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		></div>
	</div>

	<!-- Content -->
	<div class="p-6">
		<div class="mb-3 flex flex-wrap gap-2">
			{#each tags as tag}
				<span
					class="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-950/50 dark:text-brand-400"
				>
					{tag}
				</span>
			{/each}
		</div>
		<h3 class="font-display text-lg font-bold text-zinc-900 dark:text-white">
			{title}
		</h3>
		<p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
			{description}
		</p>
	</div>
</div>
