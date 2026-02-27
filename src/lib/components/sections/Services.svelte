<script lang="ts">
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import ServiceCard from '$lib/components/ui/ServiceCard.svelte';
	import type { Translations } from '$lib/i18n/types';

	interface Props {
		t: Translations;
	}

	let { t }: Props = $props();
</script>

<section id="services" class="py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeading label={t.services.label} title={t.services.title} />

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each t.services.items as item, i}
				<ServiceCard title={item.title} description={item.description} icon={item.icon} index={i} />
			{/each}
		</div>
	</div>
</section>
