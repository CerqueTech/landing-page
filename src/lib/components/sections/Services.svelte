<script lang="ts">
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import ServiceCard from '$lib/components/ui/ServiceCard.svelte';
	import type { Translations } from '$lib/i18n/types';

	interface Props {
		t: Translations;
	}

	let { t }: Props = $props();
</script>

<section id="services" class="relative overflow-hidden bg-white py-24 lg:py-32 dark:bg-zinc-950">
	<!-- Decorative gradient orb -->
	<div class="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-brand-200/40 blur-[100px] dark:bg-brand-700/20"></div>

	<div class="relative mx-auto max-w-7xl px-6">
		<SectionHeading label={t.services.label} title={t.services.title} />

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each t.services.items as item, i}
				<ServiceCard title={item.title} description={item.description} icon={item.icon} index={i} />
			{/each}
		</div>
	</div>
</section>
