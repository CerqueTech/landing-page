<script lang="ts">
	import { ArrowRight, CheckCircle } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Globe3D from '$lib/components/ui/Globe3D.svelte';
	import RotatingText from '$lib/components/ui/RotatingText.svelte';
	import type { Translations, Locale } from '$lib/i18n/types';

	interface Props {
		t: Translations;
		lang: Locale;
	}

	let { t, lang }: Props = $props();

	const features = $derived(t.hero.features ?? []);
</script>

<section class="hero-section relative min-h-screen overflow-hidden bg-white dark:bg-zinc-950">
	<!-- Background -->
	<div class="pointer-events-none absolute inset-0">
		<!-- Gradient mesh -->
		<div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(168,85,247,0.10),transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,80,220,0.25),transparent_70%)]"></div>
		<div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(139,92,246,0.06),transparent_60%)] dark:bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(139,92,246,0.12),transparent_60%)]"></div>
		<div class="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(168,85,247,0.06),transparent_60%)] dark:bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(168,85,247,0.10),transparent_60%)]"></div>

		<!-- Animated orbs (reduced blur for perf, GPU-promoted) -->
		<div class="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-brand-400/8 blur-[80px] animate-float dark:bg-brand-700/15" style="will-change: transform;"></div>
		<div class="absolute top-1/3 -right-20 h-[400px] w-[400px] rounded-full bg-brand-300/8 blur-[70px] animate-float-delayed dark:bg-brand-500/10" style="will-change: transform;"></div>
		<div class="absolute -bottom-20 left-1/3 h-[350px] w-[350px] rounded-full bg-brand-400/6 blur-[70px] animate-float-slow dark:bg-brand-600/12" style="will-change: transform;"></div>

		<!-- Grid -->
		<div
			class="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
			style="background-image: linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.06) 1px, transparent 1px); background-size: 60px 60px;"
		></div>

		<!-- Bottom fade -->
		<div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-zinc-950"></div>
	</div>

	<!-- Globe: mobile=absolute right half-visible, desktop=flex item -->
	<div class="pointer-events-none absolute inset-0 z-[1] lg:hidden">
		<div class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[60%]">
			<div class="globe-wrapper h-[1100px] w-[1100px] sm:h-[1200px] sm:w-[1200px]">
				<Globe3D />
			</div>
		</div>
	</div>

	<!-- Content -->
	<div class="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 pt-20 sm:px-6 lg:flex-row lg:items-center lg:pt-0">
		<!-- Globe - desktop only (inline) -->
		<div class="hidden lg:flex order-2 w-full items-center justify-center lg:w-[58%] lg:py-0">
			<div class="globe-wrapper overflow-hidden rounded-full dark:overflow-visible dark:rounded-none lg:h-[680px] lg:w-[680px] xl:h-[820px] xl:w-[820px] 2xl:h-[920px] 2xl:w-[920px]">
				<Globe3D />
			</div>
		</div>

		<!-- Text Content -->
		<div class="relative z-10 order-1 max-w-2xl lg:pb-0 lg:pt-0 lg:w-[42%] flex flex-col justify-center min-h-[calc(100vh-5rem)] lg:min-h-0">
			<!-- Badge -->
			<div class="hero-fade-in mb-4 sm:mb-6">
				<span
					class="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-[10px] font-semibold tracking-wider text-brand-400 uppercase backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-xs"
				>
					<span class="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse-slow"></span>
					{t.hero.badge ?? (lang === 'es' ? 'Transformamos ideas en tecnologia' : 'We transform ideas into technology')}
				</span>
			</div>

		<h1
			class="hero-fade-in font-display text-3xl leading-[1.1] font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
			style="animation-delay: 0.1s"
		>
			{@html t.hero.headlineBefore.replace(
				/(digitales|Digital)/,
				'<span class="hero-gradient-text">$1</span>'
			)}
			<br />
			<RotatingText
				texts={t.hero.rotatingWords}
				class="hero-neon-text"
				interval={3000}
				staggerMs={30}
			/>
		</h1>
		<p
			class="hero-fade-in mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:mt-6 sm:text-base md:text-lg lg:text-xl"
			style="animation-delay: 0.2s"
		>
			{t.hero.subheadline}
		</p>

		<!-- Feature bullets -->
		{#if features.length > 0}
			<ul class="hero-fade-in mt-4 flex flex-col gap-1.5 sm:mt-6 sm:gap-2 lg:mt-8" style="animation-delay: 0.3s">
				{#each features as feature, i}
					<li class="feature-item flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300 sm:text-sm" style="animation-delay: {0.3 + i * 0.08}s">
						<CheckCircle class="h-3.5 w-3.5 shrink-0 text-brand-400 sm:h-4 sm:w-4" />
						{feature}
					</li>
				{/each}
			</ul>
		{/if}

		<div class="hero-fade-in mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4 lg:mt-10" style="animation-delay: 0.4s">
			<Button variant="primary" href="/{lang}#contact">
				{t.hero.cta}
				<ArrowRight class="h-4 w-4" />
			</Button>
			<Button variant="outline" href="/{lang}#portfolio">
				{t.portfolio.label}
			</Button>
		</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
		<div class="scroll-indicator flex h-8 w-5 items-start justify-center rounded-full border-2 border-zinc-400/50 p-1 dark:border-zinc-600/50">
			<div class="h-1.5 w-1 animate-bounce rounded-full bg-zinc-500 dark:bg-zinc-400"></div>
		</div>
	</div>
</section>

<style>
	:global(.hero-neon-text) {
		color: #7c3aed;
		text-shadow: 0 0 20px rgba(124, 58, 237, 0.35);
		background: none !important;
		-webkit-background-clip: unset !important;
		-webkit-text-fill-color: currentColor !important;
		background-clip: unset !important;
	}

	:global(.dark .hero-neon-text) {
		color: #c084fc;
		text-shadow: 0 0 15px rgba(192, 132, 252, 0.5), 0 0 40px rgba(192, 132, 252, 0.2);
	}

	.hero-gradient-text {
		background: linear-gradient(135deg, #a855f7, #c084fc, #a855f7);
		background-size: 200% 200%;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		animation: gradient-shift 4s ease-in-out infinite;
		will-change: background-position;
	}

	@keyframes gradient-shift {
		0%, 100% { background-position: 0% 50%; }
		50% { background-position: 100% 50%; }
	}

	.hero-fade-in {
		opacity: 0;
		transform: translateY(20px);
		animation: hero-enter 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
		will-change: opacity, transform;
	}

	@keyframes hero-enter {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.feature-item {
		opacity: 0;
		transform: translateX(-10px);
		animation: feature-slide 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
	}

	@keyframes feature-slide {
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.globe-wrapper {
		animation: globe-fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
		will-change: opacity, transform;
	}

	@keyframes globe-fade-in {
		from {
			opacity: 0;
			transform: scale(0.9);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.scroll-indicator {
		animation: scroll-fade 2s ease-in-out 1.5s both;
	}

	@keyframes scroll-fade {
		from { opacity: 0; transform: translateX(-50%) translateY(10px); }
		to { opacity: 1; transform: translateX(-50%) translateY(0); }
	}
</style>
