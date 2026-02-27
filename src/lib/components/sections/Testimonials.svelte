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
	<!-- Gradient Orbs -->
	<div class="pointer-events-none absolute inset-0">
		<div class="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-brand-200/25 blur-[100px] dark:bg-brand-600/15"></div>
		<div class="pointer-events-none absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-brand-300/20 blur-[100px] dark:bg-brand-500/10"></div>
	</div>

	<!-- Grid Pattern -->
	<div class="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style="background-image: linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px); background-size: 60px 60px;"></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6">
		<SectionHeading label={t.testimonials.label} title={t.testimonials.title} />

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
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
