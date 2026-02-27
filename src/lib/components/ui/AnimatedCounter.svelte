<script lang="ts">
	import { browser } from '$app/environment';

	interface Props {
		value: number;
		suffix?: string;
		label: string;
	}

	let { value, suffix = '', label }: Props = $props();

	let displayed = $state(0);
	let element: HTMLDivElement;

	$effect(() => {
		if (!browser) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animateCount();
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);

		if (element) observer.observe(element);

		return () => observer.disconnect();
	});

	function animateCount() {
		const duration = 2000;
		const start = performance.now();

		function tick(now: number) {
			const elapsed = now - start;
			const progress = Math.min(elapsed / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			displayed = Math.round(eased * value);

			if (progress < 1) {
				requestAnimationFrame(tick);
			}
		}

		requestAnimationFrame(tick);
	}
</script>

<div bind:this={element} class="text-center">
	<div class="font-display text-4xl font-bold text-brand-600 sm:text-5xl dark:text-brand-400">
		{displayed}{suffix}
	</div>
	<p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{label}</p>
</div>
