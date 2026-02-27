<script lang="ts">
	import { ArrowRight, CheckCircle } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Globe3D from '$lib/components/ui/Globe3D.svelte';
	import type { Translations, Locale } from '$lib/i18n/types';

	interface Props {
		t: Translations;
		lang: Locale;
	}

	let { t, lang }: Props = $props();

	const features = $derived(t.hero.features ?? []);
</script>

<section class="relative min-h-screen overflow-hidden bg-white dark:bg-zinc-950">
	<!-- Gradient Orbs -->
	<div class="pointer-events-none absolute inset-0">
		<div
			class="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-brand-600/20 blur-[120px] animate-float dark:bg-brand-700/30"
		></div>
		<div
			class="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-brand-500/10 blur-[120px] animate-float-delayed dark:bg-brand-500/20"
		></div>
		<div
			class="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-brand-600/15 blur-[120px] animate-float-slow dark:bg-brand-600/25"
		></div>
	</div>

	<!-- Grid Pattern -->
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.03]"
		style="background-image: linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px); background-size: 60px 60px;"
	></div>

	<!-- Content -->
	<div class="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6">
		<div class="relative z-10 max-w-2xl py-24 sm:py-32 lg:w-1/2">
			<!-- Badge -->
			<div class="hero-fade-in mb-6">
				<span
					class="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-brand-400 uppercase backdrop-blur-sm"
				>
					<span class="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse-slow"></span>
					{t.hero.badge ?? (lang === 'es' ? 'Transformamos ideas en tecnologia' : 'We transform ideas into technology')}
				</span>
			</div>

			<h1
				class="hero-fade-in font-display text-4xl leading-[1.1] font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
				style="animation-delay: 0.1s"
			>
				{@html t.hero.headline.replace(
					/(digitales|Digital)/,
					'<span class="hero-gradient-text">$1</span>'
				)}
			</h1>
			<p
				class="hero-fade-in mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg md:text-xl"
				style="animation-delay: 0.2s"
			>
				{t.hero.subheadline}
			</p>

			<!-- Feature bullets -->
			{#if features.length > 0}
				<ul class="hero-fade-in mt-6 flex flex-col gap-2 sm:mt-8" style="animation-delay: 0.3s">
					{#each features as feature}
						<li class="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
							<CheckCircle class="h-4 w-4 shrink-0 text-brand-400" />
							{feature}
						</li>
					{/each}
				</ul>
			{/if}

			<div class="hero-fade-in mt-8 flex flex-wrap gap-4 sm:mt-10" style="animation-delay: 0.4s">
				<Button variant="primary" href="/{lang}#contact">
					{t.hero.cta}
					<ArrowRight class="h-4 w-4" />
				</Button>
				<Button variant="outline" href="/{lang}#portfolio">
					{t.portfolio.label}
				</Button>
			</div>
		</div>

		<!-- Globe.gl 3D Globe -->
		<div class="pointer-events-auto absolute inset-y-0 right-0 w-[55%] lg:w-[55%]">
			<div class="flex h-full items-center justify-center">
				<div class="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px]">
					<Globe3D />
				</div>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
		<div class="flex h-8 w-5 items-start justify-center rounded-full border-2 border-zinc-400 p-1 dark:border-zinc-600">
			<div class="h-1.5 w-1 animate-bounce rounded-full bg-zinc-500 dark:bg-zinc-400"></div>
		</div>
	</div>
</section>

<style>
	.hero-gradient-text {
		background: linear-gradient(135deg, #a855f7, #c084fc, #a855f7);
		background-size: 200% 200%;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		animation: gradient-shift 4s ease-in-out infinite;
	}

	@keyframes gradient-shift {
		0%, 100% { background-position: 0% 50%; }
		50% { background-position: 100% 50%; }
	}

	.hero-fade-in {
		opacity: 0;
		transform: translateY(20px);
		animation: hero-enter 0.8s ease-out forwards;
	}

	@keyframes hero-enter {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
