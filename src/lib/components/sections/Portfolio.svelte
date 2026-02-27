<script lang="ts">
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import PortfolioCard from '$lib/components/ui/PortfolioCard.svelte';
	import type { Translations } from '$lib/i18n/types';

	interface Props {
		t: Translations;
	}

	let { t }: Props = $props();

	let activeFilter = $state('all');

	const filters = $derived([
		{ key: 'all', label: t.portfolio.filterAll },
		{ key: 'mobile', label: t.portfolio.filterMobile },
		{ key: 'web', label: t.portfolio.filterWeb },
		{ key: 'ai', label: t.portfolio.filterAI }
	]);

	const filteredProjects = $derived(
		activeFilter === 'all'
			? t.portfolio.projects
			: t.portfolio.projects.filter((p) => p.category === activeFilter)
	);
</script>

<section id="portfolio" class="relative overflow-hidden bg-zinc-50 py-24 lg:py-32 dark:bg-zinc-900/50">
	<!-- Gradient Orbs -->
	<div class="pointer-events-none absolute inset-0">
		<div class="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-brand-200/30 blur-[100px] dark:bg-brand-600/15"></div>
		<div class="pointer-events-none absolute -right-32 top-1/4 h-64 w-64 rounded-full bg-brand-300/20 blur-[100px] dark:bg-brand-500/10"></div>
	</div>

	<!-- Grid Pattern -->
	<div class="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style="background-image: linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px); background-size: 60px 60px;"></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6">
		<SectionHeading label={t.portfolio.label} title={t.portfolio.title} />

		<!-- Filter Buttons -->
		<div class="mb-12 flex flex-wrap justify-center gap-2">
			{#each filters as filter}
				<button
					onclick={() => (activeFilter = filter.key)}
					class="rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 {activeFilter ===
					filter.key
						? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25'
						: 'bg-white text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'}"
				>
					{filter.label}
				</button>
			{/each}
		</div>

		<!-- Project Grid -->
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each filteredProjects as project, i (project.title)}
				<PortfolioCard
					title={project.title}
					description={project.description}
					category={project.category}
					image={project.image}
					tags={project.tags}
					index={i}
				/>
			{/each}
		</div>
	</div>
</section>
