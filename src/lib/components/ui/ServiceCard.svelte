<script lang="ts">
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
	class="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-brand-800 dark:hover:shadow-brand-500/10"
>
	<div
		class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white sm:mb-5 sm:h-12 sm:w-12 dark:bg-brand-950/50 dark:text-brand-400 dark:group-hover:bg-brand-600 dark:group-hover:text-white"
	>
		<IconComponent class="h-5 w-5 sm:h-6 sm:w-6" />
	</div>
	<h3 class="font-display text-base font-bold text-zinc-900 sm:text-lg dark:text-white">
		{title}
	</h3>
	<p class="mt-1.5 text-xs leading-relaxed text-zinc-600 sm:mt-2 sm:text-sm dark:text-zinc-400">
		{description}
	</p>
</div>
