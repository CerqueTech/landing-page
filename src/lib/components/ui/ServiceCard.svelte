<script lang="ts">
	import { scrollReveal } from '$lib/utils/animations';
	import {
		Globe,
		Smartphone,
		Code,
		Cloud,
		Brain,
		Settings
	} from 'lucide-svelte';

	interface Props {
		title: string;
		description: string;
		icon: string;
		index: number;
	}

	let { title, description, icon, index }: Props = $props();

	const icons: Record<string, typeof Globe> = {
		Globe,
		Smartphone,
		Code,
		Cloud,
		Brain,
		Settings
	};

	const IconComponent = $derived(icons[icon] || Globe);
</script>

<div
	class="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-brand-800 dark:hover:shadow-brand-500/10"
	use:scrollReveal={{ delay: index * 100 }}
>
	<div
		class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-950/50 dark:text-brand-400 dark:group-hover:bg-brand-600 dark:group-hover:text-white"
	>
		<IconComponent class="h-6 w-6" />
	</div>
	<h3 class="font-display text-lg font-bold text-zinc-900 dark:text-white">
		{title}
	</h3>
	<p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
		{description}
	</p>
</div>
