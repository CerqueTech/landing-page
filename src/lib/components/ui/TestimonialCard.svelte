<script lang="ts">
	import { Star } from 'lucide-svelte';

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
	class="rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:shadow-lg sm:p-6 md:p-8 dark:border-zinc-800 dark:bg-zinc-900/50"
>
	<!-- Stars -->
	<div class="mb-3 flex gap-1 sm:mb-4">
		{#each Array(rating) as _}
			<Star class="h-3.5 w-3.5 fill-amber-400 text-amber-400 sm:h-4 sm:w-4" />
		{/each}
	</div>

	<!-- Quote -->
	<blockquote class="text-xs leading-relaxed text-zinc-700 sm:text-sm dark:text-zinc-300">
		"{quote}"
	</blockquote>

	<!-- Author -->
	<div class="mt-4 flex items-center gap-3 sm:mt-6">
		<img
			src={avatar}
			alt={name}
			class="h-9 w-9 rounded-full bg-zinc-100 object-cover sm:h-10 sm:w-10 dark:bg-zinc-800"
			loading="lazy"
		/>
		<div>
			<p class="text-xs font-semibold text-zinc-900 sm:text-sm dark:text-white">{name}</p>
			<p class="text-[10px] text-zinc-500 sm:text-xs dark:text-zinc-400">{role}</p>
		</div>
	</div>
</div>
