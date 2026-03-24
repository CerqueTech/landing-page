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

	<div class="marquee-wrapper touch-pan-x">
		<div class="marquee-track">
			{#each Array(4) as _, setIndex}
				<div class="marquee-set" aria-hidden={setIndex > 0}>
					{#each clients as client}
						<div class="mx-6 flex shrink-0 items-center sm:mx-12">
							{#if client.size === 'lg'}
								<img
									src={client.logo}
									alt={client.name}
									class="client-logo client-logo-lg"
									loading="lazy"
								/>
							{:else}
								<img
									src={client.logo}
									alt={client.name}
									class="client-logo"
									loading="lazy"
								/>
							{/if}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.marquee-wrapper {
		overflow-x: auto;
		overflow-y: hidden;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: none;
		-ms-overflow-style: none;
		-webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
		mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
	}

	.marquee-wrapper::-webkit-scrollbar {
		display: none;
	}

	.marquee-track {
		display: flex;
		width: max-content;
		animation-name: marquee;
		animation-duration: 18s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	.marquee-set {
		display: flex;
		flex-shrink: 0;
	}

	.client-logo {
		height: 2.5rem;
		width: auto;
		max-width: 140px;
		object-fit: contain;
		filter: grayscale(100%) brightness(0) opacity(0.4);
		transition: all 0.3s ease;
	}

	.client-logo:hover {
		filter: grayscale(0) brightness(1) opacity(1);
	}

	.client-logo-lg {
		height: 5rem;
		max-width: 280px;
	}

	@media (min-width: 640px) {
		.client-logo {
			height: 3.5rem;
			max-width: 180px;
		}

		.client-logo-lg {
			height: 7rem;
			max-width: 360px;
		}
	}

	:global(.dark) .client-logo {
		filter: grayscale(100%) brightness(0) invert(1) opacity(0.4);
	}

	:global(.dark) .client-logo:hover {
		filter: grayscale(0) brightness(1) invert(0) opacity(1);
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-25%);
		}
	}

	.marquee-track:hover {
		animation-play-state: paused;
	}
</style>
