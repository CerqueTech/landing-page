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

		<!-- Globe -->
		<div class="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
			<div class="globe-container">
				<div class="globe">
					<div class="globe-inner"></div>
					<div class="globe-meridian globe-meridian-1"></div>
					<div class="globe-meridian globe-meridian-2"></div>
					<div class="globe-meridian globe-meridian-3"></div>
					<div class="globe-parallel globe-parallel-1"></div>
					<div class="globe-parallel globe-parallel-2"></div>
					<div class="globe-parallel globe-parallel-3"></div>
					<div class="globe-glow"></div>
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
	.globe-container {
		position: relative;
		width: 520px;
		height: 520px;
	}

	.globe {
		position: absolute;
		inset: 60px;
		border-radius: 50%;
		background: radial-gradient(
			circle at 35% 35%,
			rgba(168, 85, 247, 0.15) 0%,
			rgba(124, 58, 237, 0.08) 40%,
			rgba(59, 7, 100, 0.05) 70%,
			transparent 100%
		);
		border: 1px solid rgba(168, 85, 247, 0.2);
		overflow: hidden;
		animation: globe-rotate 20s linear infinite;
	}

	.globe-inner {
		position: absolute;
		inset: 0;
		border-radius: 50%;
		background: radial-gradient(
			circle at 30% 30%,
			rgba(168, 85, 247, 0.1) 0%,
			transparent 60%
		);
	}

	.globe-meridian {
		position: absolute;
		inset: 0;
		border-radius: 50%;
		border: 1px solid rgba(168, 85, 247, 0.12);
	}

	.globe-meridian-1 {
		transform: rotateY(0deg);
		border-left: 1px solid rgba(168, 85, 247, 0.15);
		border-right: 1px solid rgba(168, 85, 247, 0.15);
		width: 60%;
		left: 20%;
	}

	.globe-meridian-2 {
		transform: rotateY(60deg);
		border-left: 1px solid rgba(168, 85, 247, 0.12);
		border-right: 1px solid rgba(168, 85, 247, 0.12);
		width: 35%;
		left: 32.5%;
	}

	.globe-meridian-3 {
		border-left: none;
		border-right: none;
		border-top: 1px solid rgba(168, 85, 247, 0.1);
		border-bottom: 1px solid rgba(168, 85, 247, 0.1);
		width: 85%;
		left: 7.5%;
	}

	.globe-parallel {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 50%;
		border: 1px solid rgba(168, 85, 247, 0.1);
	}

	.globe-parallel-1 {
		width: 90%;
		height: 30%;
		top: 35%;
	}

	.globe-parallel-2 {
		width: 70%;
		height: 20%;
		top: 20%;
	}

	.globe-parallel-3 {
		width: 70%;
		height: 20%;
		bottom: 20%;
	}

	.globe-glow {
		position: absolute;
		inset: -20%;
		border-radius: 50%;
		background: radial-gradient(
			circle,
			rgba(168, 85, 247, 0.08) 0%,
			rgba(124, 58, 237, 0.04) 40%,
			transparent 70%
		);
	}

	@keyframes globe-rotate {
		from { transform: rotateY(0deg); }
		to { transform: rotateY(360deg); }
	}

	/* Orbits */
	.orbit {
		position: absolute;
		top: 50%;
		left: 50%;
		border-radius: 50%;
		border: 1px solid rgba(168, 85, 247, 0.08);
		transform: translate(-50%, -50%);
	}

	.orbit-1 {
		width: 460px;
		height: 460px;
		animation: orbit-spin 12s linear infinite;
	}

	.orbit-2 {
		width: 380px;
		height: 380px;
		animation: orbit-spin 18s linear infinite reverse;
	}

	.orbit-3 {
		width: 520px;
		height: 520px;
		border-color: rgba(168, 85, 247, 0.05);
		animation: orbit-spin 25s linear infinite;
	}

	.orbit-dot {
		position: absolute;
		top: -4px;
		left: 50%;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: rgba(168, 85, 247, 0.6);
		box-shadow: 0 0 12px rgba(168, 85, 247, 0.4);
		transform: translateX(-50%);
	}

	.orbit-dot-sm {
		width: 5px;
		height: 5px;
		top: -2.5px;
		background: rgba(192, 132, 252, 0.5);
		box-shadow: 0 0 8px rgba(192, 132, 252, 0.3);
	}

	.orbit-dot-lg {
		width: 6px;
		height: 6px;
		top: -3px;
		background: rgba(147, 51, 234, 0.5);
		box-shadow: 0 0 10px rgba(147, 51, 234, 0.3);
	}

	@keyframes orbit-spin {
		from { transform: translate(-50%, -50%) rotate(0deg); }
		to { transform: translate(-50%, -50%) rotate(360deg); }
	}
</style>
