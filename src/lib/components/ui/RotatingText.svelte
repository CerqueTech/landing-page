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
	let characters = $state<string[]>([]);
	let phase = $state<'enter' | 'visible' | 'exit'>('enter');
	let timer: ReturnType<typeof setInterval> | null = null;
	let wrapper: HTMLSpanElement;
	let isVisible = true;

	$effect(() => {
		characters = texts[currentIndex].split('');
	});

	function getDelay(i: number): number {
		const len = characters.length;
		if (phase === 'exit') {
			// Exit: reverse of enter
			return (staggerFrom === 'last' ? i : len - 1 - i) * staggerMs;
		}
		// Enter
		return (staggerFrom === 'last' ? len - 1 - i : i) * staggerMs;
	}

	function startTimer() {
		if (timer) return;
		timer = setInterval(() => {
			phase = 'exit';
			setTimeout(() => {
				currentIndex = (currentIndex + 1) % texts.length;
				phase = 'enter';
			}, characters.length * staggerMs + 200);
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
				isVisible = entries[0].isIntersecting;
				if (isVisible) {
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

<span bind:this={wrapper} class="rotating-text-wrapper {className}">
	{#key currentIndex}
		<span class="rotating-text-inner" aria-label={texts[currentIndex]}>
			{#each characters as char, i}
				<span
					class="rotating-char"
					class:is-space={char === ' '}
					class:enter={phase === 'enter'}
					class:exit={phase === 'exit'}
					style="--delay: {getDelay(i)}ms"
				>{char === ' ' ? '\u00A0' : char}</span>
			{/each}
		</span>
	{/key}
</span>

<style>
	.rotating-text-wrapper {
		display: inline-flex;
		overflow: hidden;
		vertical-align: baseline;
		background: transparent;
		-webkit-text-fill-color: inherit;
	}

	.rotating-text-inner {
		display: inline-flex;
		background: transparent;
	}

	.rotating-char {
		display: inline-block;
		opacity: 0;
		transform: translateY(100%);
		animation: none;
		color: inherit;
		text-shadow: inherit;
	}

	.rotating-char.enter {
		animation: char-enter 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
		animation-delay: var(--delay);
	}

	.rotating-char.exit {
		opacity: 1;
		transform: translateY(0);
		animation: char-exit 0.35s cubic-bezier(0.6, 0, 0.735, 0.045) forwards;
		animation-delay: var(--delay);
	}

	.rotating-char.is-space {
		width: 0.3em;
	}

	@keyframes char-enter {
		from {
			opacity: 0;
			transform: translateY(100%);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes char-exit {
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
