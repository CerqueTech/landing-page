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

<section id="about" class="py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeading label={t.about.label} title={t.about.title} subtitle={t.about.description} />

		<!-- Values -->
		<div class="grid gap-6 sm:grid-cols-3" use:scrollReveal>
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
		<div class="mt-20 grid gap-8 sm:grid-cols-3">
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

			<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{#each t.about.team.members as member, i}
					<div
						class="group text-center"
						use:scrollReveal={{ delay: i * 100 }}
					>
						<div
							class="relative mx-auto mb-4 h-40 w-40 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800"
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
						<a
							href={member.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-2 inline-flex items-center gap-1 text-sm text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
							aria-label="LinkedIn - {member.name}"
						>
							<Linkedin class="h-4 w-4" />
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
