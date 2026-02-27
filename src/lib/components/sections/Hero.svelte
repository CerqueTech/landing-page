<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import type { Translations, Locale } from '$lib/i18n/types';

	interface Props {
		t: Translations;
		lang: Locale;
	}

	let { t, lang }: Props = $props();
</script>

<section class="relative min-h-screen overflow-hidden bg-zinc-950">
	<!-- Gradient Orbs -->
	<div class="pointer-events-none absolute inset-0">
		<div
			class="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-brand-700/30 blur-[120px] animate-float"
		></div>
		<div
			class="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-brand-500/20 blur-[120px] animate-float-delayed"
		></div>
		<div
			class="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-brand-600/25 blur-[120px] animate-float-slow"
		></div>
	</div>

	<!-- Grid Pattern -->
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.03]"
		style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 60px 60px;"
	></div>

	<!-- Content -->
	<div class="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
		<div class="max-w-2xl py-32 lg:w-1/2">
			<h1
				class="font-display text-5xl leading-tight font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
			>
				{t.hero.headline}
			</h1>
			<p class="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
				{t.hero.subheadline}
			</p>
			<div class="mt-10 flex flex-wrap gap-4">
				<Button variant="primary" href="/{lang}#contact">
					{t.hero.cta}
					<ArrowRight class="h-4 w-4" />
				</Button>
				<Button variant="outline" href="/{lang}#portfolio">
					{t.portfolio.label}
				</Button>
			</div>
		</div>

		<!-- Night Earth Globe -->
		<div class="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
			<div class="earth-container">
				<!-- Outer glow -->
				<div class="earth-atmosphere"></div>
				<!-- Planet sphere -->
				<div class="earth">
					<div class="earth-surface"></div>
					<div class="earth-lights"></div>
					<div class="earth-overlay"></div>
				</div>
				<!-- Orbiting dots -->
				<div class="orbit orbit-1">
					<div class="orbit-dot"></div>
				</div>
				<div class="orbit orbit-2">
					<div class="orbit-dot orbit-dot-sm"></div>
				</div>
				<div class="orbit orbit-3">
					<div class="orbit-dot orbit-dot-lg"></div>
				</div>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2">
		<div class="flex h-8 w-5 items-start justify-center rounded-full border-2 border-zinc-600 p-1">
			<div class="h-1.5 w-1 animate-bounce rounded-full bg-zinc-400"></div>
		</div>
	</div>
</section>

<style>
	.earth-container {
		position: relative;
		width: 500px;
		height: 500px;
	}

	.earth-atmosphere {
		position: absolute;
		inset: 10px;
		border-radius: 50%;
		background: radial-gradient(
			circle at 35% 35%,
			rgba(100, 180, 255, 0.12) 0%,
			rgba(80, 140, 240, 0.06) 40%,
			transparent 70%
		);
		filter: blur(20px);
		animation: atmosphere-pulse 4s ease-in-out infinite;
	}

	.earth {
		position: absolute;
		inset: 50px;
		border-radius: 50%;
		overflow: hidden;
		box-shadow:
			inset -30px -20px 60px rgba(0, 0, 0, 0.8),
			inset 10px 10px 40px rgba(80, 140, 240, 0.1),
			0 0 60px rgba(80, 140, 240, 0.15),
			0 0 120px rgba(80, 140, 240, 0.05);
	}

	.earth-surface {
		position: absolute;
		inset: 0;
		border-radius: 50%;
		background:
			/* Ocean base - deep dark blue */
			radial-gradient(circle at 35% 35%, #0a1628 0%, #060d1a 60%, #020810 100%);
	}

	.earth-lights {
		position: absolute;
		inset: 0;
		border-radius: 50%;
		animation: earth-rotate 30s linear infinite;
		/* City lights pattern using radial gradients */
		background:
			/* Europe cluster */
			radial-gradient(1.5px 1.5px at 52% 28%, rgba(255, 200, 80, 0.9) 0%, transparent 100%),
			radial-gradient(1px 1px at 50% 30%, rgba(255, 200, 80, 0.7) 0%, transparent 100%),
			radial-gradient(2px 2px at 53% 32%, rgba(255, 200, 80, 0.8) 0%, transparent 100%),
			radial-gradient(1px 1px at 48% 31%, rgba(255, 200, 80, 0.6) 0%, transparent 100%),
			radial-gradient(1.5px 1.5px at 55% 29%, rgba(255, 200, 80, 0.7) 0%, transparent 100%),
			radial-gradient(1px 1px at 51% 33%, rgba(255, 200, 80, 0.5) 0%, transparent 100%),
			/* North Africa / Middle East */
			radial-gradient(1px 1px at 55% 38%, rgba(255, 200, 80, 0.6) 0%, transparent 100%),
			radial-gradient(1.5px 1.5px at 58% 36%, rgba(255, 200, 80, 0.5) 0%, transparent 100%),
			radial-gradient(1px 1px at 60% 35%, rgba(255, 200, 80, 0.4) 0%, transparent 100%),
			/* South America */
			radial-gradient(1.5px 1.5px at 32% 55%, rgba(255, 200, 80, 0.7) 0%, transparent 100%),
			radial-gradient(1px 1px at 34% 52%, rgba(255, 200, 80, 0.6) 0%, transparent 100%),
			radial-gradient(2px 2px at 33% 58%, rgba(255, 200, 80, 0.8) 0%, transparent 100%),
			radial-gradient(1px 1px at 30% 50%, rgba(255, 200, 80, 0.5) 0%, transparent 100%),
			radial-gradient(1px 1px at 35% 48%, rgba(255, 200, 80, 0.4) 0%, transparent 100%),
			/* North America east coast */
			radial-gradient(1.5px 1.5px at 25% 32%, rgba(255, 200, 80, 0.8) 0%, transparent 100%),
			radial-gradient(1px 1px at 23% 34%, rgba(255, 200, 80, 0.6) 0%, transparent 100%),
			radial-gradient(1.5px 1.5px at 22% 30%, rgba(255, 200, 80, 0.7) 0%, transparent 100%),
			radial-gradient(1px 1px at 20% 35%, rgba(255, 200, 80, 0.5) 0%, transparent 100%),
			/* India / Asia */
			radial-gradient(2px 2px at 68% 40%, rgba(255, 200, 80, 0.7) 0%, transparent 100%),
			radial-gradient(1.5px 1.5px at 70% 38%, rgba(255, 200, 80, 0.6) 0%, transparent 100%),
			radial-gradient(1px 1px at 72% 42%, rgba(255, 200, 80, 0.5) 0%, transparent 100%),
			radial-gradient(1px 1px at 65% 37%, rgba(255, 200, 80, 0.4) 0%, transparent 100%),
			/* East Asia / China / Japan */
			radial-gradient(2px 2px at 78% 33%, rgba(255, 200, 80, 0.8) 0%, transparent 100%),
			radial-gradient(1.5px 1.5px at 80% 30%, rgba(255, 200, 80, 0.7) 0%, transparent 100%),
			radial-gradient(1px 1px at 76% 35%, rgba(255, 200, 80, 0.6) 0%, transparent 100%),
			radial-gradient(1.5px 1.5px at 82% 32%, rgba(255, 200, 80, 0.5) 0%, transparent 100%),
			/* Scattered lights */
			radial-gradient(1px 1px at 40% 42%, rgba(255, 200, 80, 0.3) 0%, transparent 100%),
			radial-gradient(1px 1px at 45% 25%, rgba(255, 200, 80, 0.3) 0%, transparent 100%),
			radial-gradient(1px 1px at 62% 45%, rgba(255, 200, 80, 0.3) 0%, transparent 100%),
			radial-gradient(1px 1px at 15% 38%, rgba(255, 200, 80, 0.3) 0%, transparent 100%);
		/* Continent shapes - dark landmasses slightly lighter than ocean */
		background-color: transparent;
	}

	.earth-overlay {
		position: absolute;
		inset: 0;
		border-radius: 50%;
		/* 3D lighting - illuminated edge and dark side */
		background:
			radial-gradient(circle at 30% 30%, rgba(100, 160, 255, 0.08) 0%, transparent 50%),
			radial-gradient(circle at 75% 70%, rgba(0, 0, 0, 0.6) 0%, transparent 60%),
			/* Subtle atmosphere rim */
			radial-gradient(circle at 50% 50%, transparent 45%, rgba(60, 120, 220, 0.08) 48%, rgba(60, 120, 220, 0.12) 50%, transparent 52%);
	}

	@keyframes earth-rotate {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}

	@keyframes atmosphere-pulse {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.7; transform: scale(1.02); }
	}

	/* Orbits */
	.orbit {
		position: absolute;
		top: 50%;
		left: 50%;
		border-radius: 50%;
		border: 1px solid rgba(100, 160, 255, 0.08);
		transform: translate(-50%, -50%);
	}

	.orbit-1 {
		width: 440px;
		height: 440px;
		animation: orbit-spin 14s linear infinite;
	}

	.orbit-2 {
		width: 360px;
		height: 360px;
		animation: orbit-spin 20s linear infinite reverse;
	}

	.orbit-3 {
		width: 500px;
		height: 500px;
		border-color: rgba(100, 160, 255, 0.04);
		animation: orbit-spin 28s linear infinite;
	}

	.orbit-dot {
		position: absolute;
		top: -4px;
		left: 50%;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: rgba(100, 180, 255, 0.7);
		box-shadow: 0 0 12px rgba(100, 180, 255, 0.5);
		transform: translateX(-50%);
	}

	.orbit-dot-sm {
		width: 5px;
		height: 5px;
		top: -2.5px;
		background: rgba(140, 200, 255, 0.5);
		box-shadow: 0 0 8px rgba(140, 200, 255, 0.3);
	}

	.orbit-dot-lg {
		width: 6px;
		height: 6px;
		top: -3px;
		background: rgba(80, 140, 240, 0.6);
		box-shadow: 0 0 10px rgba(80, 140, 240, 0.4);
	}

	@keyframes orbit-spin {
		from { transform: translate(-50%, -50%) rotate(0deg); }
		to { transform: translate(-50%, -50%) rotate(360deg); }
	}
</style>
