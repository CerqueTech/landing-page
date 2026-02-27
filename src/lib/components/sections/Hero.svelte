<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Globe3D from '$lib/components/ui/Globe3D.svelte';
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
	<div class="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6">
		<div class="relative z-10 max-w-2xl py-24 sm:py-32 lg:w-1/2">
			<h1
				class="font-display text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
			>
				{t.hero.headline}
			</h1>
			<p class="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg md:text-xl">
				{t.hero.subheadline}
			</p>
			<div class="mt-8 flex flex-wrap gap-4 sm:mt-10">
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
		<div class="pointer-events-auto absolute inset-y-0 right-0 hidden w-[55%] lg:block">
			<div class="flex h-full items-center justify-center">
				<div class="h-[600px] w-[600px] xl:h-[700px] xl:w-[700px]">
					<Globe3D />
				</div>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
		<div class="flex h-8 w-5 items-start justify-center rounded-full border-2 border-zinc-600 p-1">
			<div class="h-1.5 w-1 animate-bounce rounded-full bg-zinc-400"></div>
		</div>
	</div>
</section>
