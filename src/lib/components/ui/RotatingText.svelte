<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	interface Props {
		texts: string[];
		interval?: number;
		staggerMs?: number;
		staggerFrom?: 'first' | 'last';
		class?: string;
	}

	let {
		texts,
		interval = 3000,
		staggerMs = 25,
		staggerFrom = 'last',
		class: className = ''
	}: Props = $props();

	let currentIndex = $state(0);
	let phase = $state<'enter' | 'visible' | 'exit'>('enter');
	let timer: ReturnType<typeof setInterval> | null = null;
	let wrapper: HTMLSpanElement;

	// Split text into words, each word into characters (like propi-www)
	interface WordGroup {
		chars: string[];
		needsSpace: boolean;
	}

	let words = $derived.by((): WordGroup[] => {
		const parts = texts[currentIndex].split(' ');
		return parts.map((word, i) => ({
			chars: Array.from(word),
			needsSpace: i < parts.length - 1
		}));
	});

	let totalChars = $derived(
		words.reduce((sum, w) => sum + w.chars.length, 0)
	);

	// Same stagger direction for enter AND exit (matches Framer Motion AnimatePresence behavior)
	function getDelay(globalIndex: number): number {
		return (staggerFrom === 'last' ? totalChars - 1 - globalIndex : globalIndex) * staggerMs;
	}

	function startTimer() {
		if (timer) return;
		timer = setInterval(() => {
			phase = 'exit';
			// Wait for exit to finish, then swap text and enter
			const exitDuration = totalChars * staggerMs + 350;
			setTimeout(() => {
				currentIndex = (currentIndex + 1) % texts.length;
				phase = 'enter';
			}, exitDuration);
		}, interval);
	}

	function stopTimer() {
		if (timer) {
			clearInterval(timer);
			timer = null;
		}
	}

	onMount(() => {
		phase = 'enter';
		startTimer();

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					startTimer();
				} else {
					stopTimer();
				}
			},
			{ rootMargin: '50px' }
		);
		if (wrapper) observer.observe(wrapper);

		return () => {
			observer.disconnect();
			stopTimer();
		};
	});

	onDestroy(() => {
		stopTimer();
	});
</script>

<span bind:this={wrapper} class="rt-wrapper {className}">
	{#key currentIndex}
		<span class="rt-inner" aria-label={texts[currentIndex]}>
			{#each words as word, wordIdx}
				{@const prevChars = words.slice(0, wordIdx).reduce((s, w) => s + w.chars.length, 0)}
				<span class="rt-word">
					{#each word.chars as char, charIdx}
						<span
							class="rt-char"
							class:enter={phase === 'enter'}
							class:exit={phase === 'exit'}
							style="--delay: {getDelay(prevChars + charIdx)}ms"
						>{char}</span>
					{/each}
					{#if word.needsSpace}
						<span class="rt-space">&nbsp;</span>
					{/if}
				</span>
			{/each}
		</span>
	{/key}
</span>

<style>
	.rt-wrapper {
		display: inline-flex;
		overflow: hidden;
		vertical-align: baseline;
		position: relative;
		background: transparent;
		-webkit-text-fill-color: inherit;
	}

	.rt-inner {
		display: inline-flex;
		flex-wrap: wrap;
		white-space: pre-wrap;
		background: transparent;
	}

	.rt-word {
		display: inline-flex;
	}

	.rt-space {
		white-space: pre;
	}

	.rt-char {
		display: inline-block;
		opacity: 0;
		transform: translateY(100%);
		color: inherit;
		text-shadow: inherit;
	}

	.rt-char.enter {
		animation: rt-enter 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
		animation-delay: var(--delay);
	}

	.rt-char.exit {
		opacity: 1;
		transform: translateY(0);
		animation: rt-exit 0.3s cubic-bezier(0.55, 0, 1, 0.45) forwards;
		animation-delay: var(--delay);
	}

	@keyframes rt-enter {
		from {
			opacity: 0;
			transform: translateY(100%);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes rt-exit {
		from {
			opacity: 1;
			transform: translateY(0);
		}
		to {
			opacity: 0;
			transform: translateY(-120%);
		}
	}
</style>
