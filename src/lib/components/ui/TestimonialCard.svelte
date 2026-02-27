<script lang="ts">
	import { Star } from 'lucide-svelte';
	import { scrollReveal } from '$lib/utils/animations';

	interface Props {
		quote: string;
		name: string;
		role: string;
		avatar: string;
		rating: number;
		index: number;
	}

	let { quote, name, role, avatar, rating, index }: Props = $props();
</script>

<div
	class="rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:shadow-lg sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50"
	use:scrollReveal={{ delay: index * 150 }}
>
	<!-- Stars -->
	<div class="mb-4 flex gap-1">
		{#each Array(rating) as _}
			<Star class="h-4 w-4 fill-amber-400 text-amber-400" />
		{/each}
	</div>

	<!-- Quote -->
	<blockquote class="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
		"{quote}"
	</blockquote>

	<!-- Author -->
	<div class="mt-6 flex items-center gap-3">
		<img
			src={avatar}
			alt={name}
			class="h-10 w-10 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
			loading="lazy"
		/>
		<div>
			<p class="text-sm font-semibold text-zinc-900 dark:text-white">{name}</p>
			<p class="text-xs text-zinc-500 dark:text-zinc-400">{role}</p>
		</div>
	</div>
</div>
