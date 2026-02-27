<script lang="ts">
	import { staggerChildren } from '$lib/utils/animations';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import ServiceCard from '$lib/components/ui/ServiceCard.svelte';
	import type { Translations } from '$lib/i18n/types';

	interface Props {
		t: Translations;
	}

	let { t }: Props = $props();
</script>

<section id="services" class="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32 dark:bg-zinc-950">
	<!-- Gradient Orbs -->
	<div class="pointer-events-none absolute inset-0">
		<div class="absolute -right-40 top-0 h-80 w-80 rounded-full bg-brand-200/30 blur-[100px] dark:bg-brand-700/15"></div>
		<div class="absolute -left-32 bottom-1/4 h-64 w-64 rounded-full bg-brand-300/20 blur-[100px] dark:bg-brand-600/10"></div>
	</div>

	<!-- Grid Pattern -->
	<div class="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style="background-image: linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px); background-size: 60px 60px;"></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6">
		<SectionHeading label={t.services.label} title={t.services.title} />

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" use:staggerChildren={{ stagger: 120 }}>
			{#each t.services.items as item, i}
				<ServiceCard title={item.title} description={item.description} icon={item.icon} index={i} />
			{/each}
		</div>
	</div>
</section>
