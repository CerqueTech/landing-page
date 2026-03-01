<script lang="ts">
	import { staggerChildren } from '$lib/utils/animations';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import PortfolioCard from '$lib/components/ui/PortfolioCard.svelte';
	import type { Translations } from '$lib/i18n/types';

	interface Props {
		t: Translations;
	}

	let { t }: Props = $props();

	let activeFilter = $state('all');

	// Build filters dynamically from categories that actually exist in projects
	// Build filters dynamically from categories that actually exist in projects
	const categories = $derived([...new Set(t.portfolio.projects.map((p) => p.category))]);
	const filters = $derived([
		{ key: 'all', label: t.portfolio.filterAll },
		...categories.map((cat) => ({
			key: cat,
			label: t.portfolio.filterLabels[cat] ?? cat
		}))
	]);

	const filteredProjects = $derived(
		activeFilter === 'all'
			? t.portfolio.projects
			: t.portfolio.projects.filter((p) => p.category === activeFilter)
	);
</script>

<section id="portfolio" class="relative overflow-hidden bg-zinc-50 py-20 sm:py-24 lg:py-32 dark:bg-zinc-900/50">
	<!-- Gradient Orbs -->
	<div class="pointer-events-none absolute inset-0">
		<div class="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-brand-200/25 blur-[100px] dark:bg-brand-600/12"></div>
		<div class="absolute -right-32 top-1/4 h-64 w-64 rounded-full bg-brand-300/15 blur-[100px] dark:bg-brand-500/8"></div>
	</div>

	<!-- Grid Pattern -->
	<div class="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style="background-image: linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px); background-size: 60px 60px;"></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6">
		<SectionHeading label={t.portfolio.label} title={t.portfolio.title} />

		<!-- Filter Buttons -->
		<div class="mb-8 flex flex-wrap justify-center gap-2 sm:mb-12">
			{#each filters as filter}
				<button
					onclick={() => (activeFilter = filter.key)}
					class="rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-300 sm:px-5 sm:py-2 sm:text-sm {activeFilter ===
					filter.key
						? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25 scale-105'
						: 'bg-white text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'}"
				>
					{filter.label}
				</button>
			{/each}
		</div>

		<!-- Project Grid -->
		{#key activeFilter}
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8" use:staggerChildren={{ stagger: 100 }}>
				{#each filteredProjects as project, i (project.title)}
					<PortfolioCard
						title={project.title}
						description={project.description}
						category={project.category}
						image={project.image}
						tags={project.tags}
						url={project.url}
						index={i}
					/>
				{/each}
			</div>
		{/key}
	</div>
</section>
