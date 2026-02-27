<script lang="ts">
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import TestimonialCard from '$lib/components/ui/TestimonialCard.svelte';
	import type { Translations } from '$lib/i18n/types';

	interface Props {
		t: Translations;
	}

	let { t }: Props = $props();
</script>

<section class="relative overflow-hidden bg-zinc-50 py-24 lg:py-32 dark:bg-zinc-900/50">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeading label={t.testimonials.label} title={t.testimonials.title} />

		<div class="grid gap-8 md:grid-cols-3">
			{#each t.testimonials.items as item, i}
				<TestimonialCard
					quote={item.quote}
					name={item.name}
					role={item.role}
					avatar={item.avatar}
					rating={item.rating}
					index={i}
				/>
			{/each}
		</div>
	</div>
</section>
