<script lang="ts">
	import { scrollReveal } from '$lib/utils/animations';
	import { Award, Shield, Zap, Linkedin } from 'lucide-svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import AnimatedCounter from '$lib/components/ui/AnimatedCounter.svelte';
	import type { Translations } from '$lib/i18n/types';

	interface Props {
		t: Translations;
	}

	let { t }: Props = $props();

	const valueIcons = [Award, Shield, Zap];
</script>

<section id="about" class="relative overflow-hidden bg-white py-24 lg:py-32 dark:bg-zinc-950">
	<!-- Gradient Orbs -->
	<div class="pointer-events-none absolute inset-0">
		<div class="pointer-events-none absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-brand-200/30 blur-[100px] dark:bg-brand-700/15"></div>
		<div class="pointer-events-none absolute -left-32 bottom-1/4 h-64 w-64 rounded-full bg-brand-300/20 blur-[100px] dark:bg-brand-600/10"></div>
		<div class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-brand-400/15 blur-[120px] dark:bg-brand-500/10"></div>
	</div>

	<!-- Grid Pattern -->
	<div class="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style="background-image: linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px); background-size: 60px 60px;"></div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6">
		<SectionHeading label={t.about.label} title={t.about.title} subtitle={t.about.description} />

		<!-- Values -->
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-3" use:scrollReveal>
			{#each t.about.values as val, i}
				{@const Icon = valueIcons[i]}
				<div
					class="rounded-2xl border border-zinc-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50"
				>
					<div
						class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-950/50 dark:text-brand-400"
					>
						<Icon class="h-6 w-6" />
					</div>
					<h3 class="font-display text-lg font-bold text-zinc-900 dark:text-white">
						{val.title}
					</h3>
					<p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{val.description}</p>
				</div>
			{/each}
		</div>

		<!-- Stats -->
		<div class="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
			{#each t.about.stats as stat}
				<AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
			{/each}
		</div>

		<!-- Team -->
		<div class="mt-24">
			<div class="mb-12 text-center" use:scrollReveal>
				<span
					class="mb-4 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold tracking-wider text-brand-700 uppercase dark:bg-brand-950/50 dark:text-brand-400"
				>
					{t.about.team.label}
				</span>
				<h3 class="font-display text-3xl font-bold text-zinc-900 dark:text-white">
					{t.about.team.title}
				</h3>
			</div>

			<div class="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
				{#each t.about.team.members as member, i}
					<div
						class="group text-center"
						use:scrollReveal={{ delay: i * 100 }}
					>
						<div
							class="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-2xl bg-zinc-100 sm:h-40 sm:w-40 dark:bg-zinc-800"
						>
							<img
								src={member.image}
								alt={member.name}
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
								loading="lazy"
							/>
						</div>
						<h4 class="font-display text-base font-bold text-zinc-900 dark:text-white">
							{member.name}
						</h4>
						<p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{member.role}</p>
						{#if member.linkedin}
						<a
							href={member.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-2 inline-flex items-center gap-1 text-sm text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
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
