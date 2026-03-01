<script lang="ts">
	import { scrollReveal } from '$lib/utils/animations';
	import { ChevronDown } from 'lucide-svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import type { Translations } from '$lib/i18n/types';

	interface Props {
		t: Translations;
	}

	let { t }: Props = $props();

	let openIndex = $state<number | null>(null);

	function toggle(i: number) {
		openIndex = openIndex === i ? null : i;
	}
</script>

<section class="relative overflow-hidden bg-zinc-50 py-20 sm:py-24 lg:py-32 dark:bg-zinc-900/50">
	<!-- Gradient Orbs -->
	<div class="pointer-events-none absolute inset-0">
		<div class="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-brand-200/20 blur-[60px] dark:bg-brand-600/10"></div>
		<div class="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-brand-300/15 blur-[60px] dark:bg-brand-500/8"></div>
	</div>

	<!-- Grid Pattern -->
	<div class="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style="background-image: linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px); background-size: 60px 60px;"></div>

	<div class="relative mx-auto max-w-3xl px-4 sm:px-6">
		<SectionHeading label="FAQ" title={t.faq.title} />

		<div class="space-y-3" use:scrollReveal>
			{#each t.faq.items as item, i}
				<div
					class="overflow-hidden rounded-xl border transition-colors duration-200 {openIndex === i
						? 'border-brand-500/30 bg-white dark:border-brand-500/20 dark:bg-zinc-800/80'
						: 'border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50'}"
				>
					<button
						onclick={() => toggle(i)}
						class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
					>
						<span class="font-display text-sm font-semibold text-zinc-900 sm:text-base dark:text-white">
							{item.question}
						</span>
						<ChevronDown
							class="h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-300 dark:text-zinc-500 {openIndex === i ? 'rotate-180 text-brand-500 dark:text-brand-400' : ''}"
						/>
					</button>
					<div
						class="faq-answer grid transition-all duration-300 ease-in-out {openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}"
					>
						<div class="overflow-hidden">
							<p class="px-5 pb-4 text-sm leading-relaxed text-zinc-600 sm:px-6 sm:pb-5 sm:text-base dark:text-zinc-400">
								{item.answer}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
