<script lang="ts">
	import type { Translations } from '$lib/i18n/types';

	interface Props {
		t: Translations;
	}

	let { t }: Props = $props();

	const clients = $derived(t.trustedBy.clients ?? []);
</script>

<section class="relative overflow-hidden border-y border-zinc-200/60 bg-zinc-50/50 py-10 sm:py-14 dark:border-zinc-800/60 dark:bg-zinc-900/30">
	<div class="mb-6 text-center sm:mb-8">
		<p class="text-xs font-semibold tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
			{t.trustedBy.title}
		</p>
	</div>

	<div class="marquee-wrapper">
		<div class="marquee-track">
			{#each Array(2) as _, setIndex}
				<div class="marquee-set" aria-hidden={setIndex > 0}>
					{#each clients as client}
						<div class="mx-8 flex shrink-0 items-center sm:mx-12">
							<img
								src={client.logo}
								alt={client.name}
								class="h-10 w-auto max-w-[140px] object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14 sm:max-w-[180px]"
								loading="lazy"
							/>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.marquee-wrapper {
		overflow: hidden;
		-webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
		mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
	}

	.marquee-track {
		display: flex;
		width: max-content;
		animation: marquee 25s linear infinite;
	}

	.marquee-set {
		display: flex;
		shrink: 0;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.marquee-track:hover {
		animation-play-state: paused;
	}
</style>
