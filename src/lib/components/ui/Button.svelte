<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

	type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';

	interface Props {
		variant?: Variant;
		href?: string;
		class?: string;
		children: Snippet;
		onclick?: () => void;
		type?: 'button' | 'submit';
		disabled?: boolean;
	}

	let {
		variant = 'primary',
		href,
		class: className = '',
		children,
		onclick,
		type = 'button',
		disabled = false
	}: Props = $props();

	const base =
		'inline-flex items-center justify-center gap-2 rounded-xl font-display font-semibold text-sm transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

	const variants: Record<Variant, string> = {
		primary:
			'bg-gradient-to-r from-brand-700 to-brand-500 text-white px-8 py-3.5 hover:shadow-lg hover:shadow-brand-500/25 hover:-translate-y-0.5 active:translate-y-0',
		secondary:
			'bg-zinc-100 text-zinc-900 px-8 py-3.5 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700',
		ghost:
			'text-zinc-600 px-4 py-2 hover:text-brand-600 hover:bg-brand-50 dark:text-zinc-400 dark:hover:text-brand-400 dark:hover:bg-brand-950/50',
		outline:
			'border border-brand-500/30 text-brand-600 px-8 py-3.5 hover:bg-brand-50 hover:border-brand-500 dark:text-brand-400 dark:hover:bg-brand-950/50 dark:hover:border-brand-400'
	};
</script>

{#if href}
	<a {href} class="{base} {variants[variant]} {className}">
		{@render children()}
	</a>
{:else}
	<button {type} {disabled} {onclick} class="{base} {variants[variant]} {className}">
		{@render children()}
	</button>
{/if}
