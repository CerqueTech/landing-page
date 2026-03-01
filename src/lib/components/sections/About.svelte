<script lang="ts">
	import { scrollReveal, staggerChildren } from '$lib/utils/animations';
	import { Linkedin, MessageSquare, Lightbulb, Rocket } from 'lucide-svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import AnimatedCounter from '$lib/components/ui/AnimatedCounter.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import type { Translations, Locale } from '$lib/i18n/types';

	interface Props {
		t: Translations;
		lang: Locale;
	}

	let { t, lang }: Props = $props();

	const stepIcons = [MessageSquare, Lightbulb, Rocket];
</script>

<section id="about" class="relative overflow-hidden bg-white pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-36 dark:bg-zinc-950">
	<!-- Gradient Orbs (reduced blur for perf) -->
	<div class="pointer-events-none absolute inset-0">
		<div class="absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-brand-200/25 blur-[60px] dark:bg-brand-700/12"></div>
		<div class="absolute -left-32 bottom-1/4 h-64 w-64 rounded-full bg-brand-300/15 blur-[60px] dark:bg-brand-600/8"></div>
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-brand-400/10 blur-[80px] dark:bg-brand-500/8"></div>
	</div>

	<!-- Grid Pattern -->
	<div class="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style="background-image: linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px); background-size: 60px 60px;"></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6">
		<!-- Heading + Description + CTA -->
		<div class="mx-auto max-w-3xl text-center" use:scrollReveal>
			<span
				class="mb-4 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold tracking-wider text-brand-700 uppercase dark:bg-brand-950/50 dark:text-brand-400"
			>
				{t.about.label}
			</span>
			<h2 class="font-display text-3xl font-bold text-zinc-900 sm:text-4xl lg:text-5xl dark:text-white">
				{t.about.title}
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
				{t.about.description}
			</p>
			<div class="mt-8">
				<Button href="/{lang}#services" variant="primary">{t.nav.services}</Button>
			</div>
		</div>

		<!-- Steps -->
		<div class="mt-20 sm:mt-24">
			<div class="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3" use:staggerChildren={{ stagger: 150 }}>
				{#each t.about.steps as step, i}
					{@const Icon = stepIcons[i]}
					<div class="group relative rounded-2xl border border-zinc-200/60 bg-zinc-50/50 p-6 sm:p-8 transition-all duration-300 hover:border-brand-500/20 hover:bg-brand-500/[0.03] hover:shadow-lg hover:shadow-brand-500/5 dark:border-zinc-800/60 dark:bg-zinc-900/50 dark:hover:border-brand-500/25 dark:hover:bg-brand-500/[0.05] dark:hover:shadow-brand-500/10">
						<!-- Step number badge -->
						<div class="mb-5 flex items-center gap-4">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 transition-colors duration-300 group-hover:bg-brand-200 dark:bg-brand-950/60 dark:group-hover:bg-brand-900/60">
								<Icon class="h-5 w-5 text-brand-600 dark:text-brand-400" />
							</div>
							<span class="font-display text-sm font-bold tracking-wider text-brand-500/40 uppercase transition-colors duration-300 group-hover:text-brand-500/70">{step.number}</span>
						</div>
						<!-- Step title -->
						<h3 class="font-display text-lg font-bold text-zinc-900 sm:text-xl dark:text-white">
							{step.title}
						</h3>
						<!-- Step description -->
						<p class="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
							{step.description}
						</p>
						<!-- Connector line (hidden on last item and on mobile) -->
						{#if i < t.about.steps.length - 1}
							<div class="pointer-events-none absolute top-1/2 -right-4 hidden h-px w-8 bg-gradient-to-r from-brand-500/20 to-transparent md:block"></div>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<!-- Stats -->
		<div class="mt-20 sm:mt-24">
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6" use:staggerChildren={{ stagger: 120 }}>
				{#each t.about.stats as stat}
					<div class="rounded-2xl border border-zinc-200/60 bg-zinc-50/30 p-6 sm:p-8 text-center transition-all duration-300 hover:border-brand-500/15 hover:shadow-md hover:shadow-brand-500/5 dark:border-zinc-800/60 dark:bg-zinc-900/30 dark:hover:border-brand-500/20 dark:hover:shadow-brand-500/10">
						<AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
					</div>
				{/each}
			</div>
		</div>

		<!-- Team -->
		<div class="mt-20 sm:mt-24">
			<div class="mb-10 text-center sm:mb-12" use:scrollReveal>
				<span
					class="mb-4 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold tracking-wider text-brand-700 uppercase dark:bg-brand-950/50 dark:text-brand-400"
				>
					{t.about.team.label}
				</span>
				<h3 class="font-display text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-white">
					{t.about.team.title}
				</h3>
			</div>

			<div class="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8" use:staggerChildren={{ stagger: 120 }}>
				{#each t.about.team.members as member, i}
					<div class="group text-center">
						<div
							class="relative mx-auto mb-3 aspect-square overflow-hidden rounded-full border-2 border-zinc-200/60 bg-gradient-to-b from-zinc-100 to-zinc-200 shadow-lg shadow-black/5 sm:mb-4 dark:border-brand-500/20 dark:from-zinc-800 dark:to-zinc-900 dark:shadow-brand-500/5 {i < 2 ? 'w-32 sm:w-40 lg:w-44' : 'w-28 sm:w-36 lg:w-40'}"
						>
							<img
								src={member.image}
								alt={member.name}
								width="400"
								height="400"
								class="h-full w-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-110"
								loading="lazy"
								decoding="async"
							/>
						</div>
						<h4 class="font-display text-sm font-bold text-zinc-900 sm:text-base dark:text-white">
							{member.name}
						</h4>
						<p class="mt-0.5 text-xs text-zinc-600 sm:mt-1 sm:text-sm dark:text-zinc-400">{member.role}</p>
						{#if member.linkedin}
						<a
							href={member.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-1.5 inline-flex items-center gap-1 text-sm text-brand-600 transition-colors hover:text-brand-700 sm:mt-2 dark:text-brand-400 dark:hover:text-brand-300"
							aria-label="LinkedIn - {member.name}"
						>
							<Linkedin class="h-4 w-4" />
						</a>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
