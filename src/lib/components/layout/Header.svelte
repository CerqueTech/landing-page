<script lang="ts">
	import { onMount } from 'svelte';
	import { Menu, X } from 'lucide-svelte';
	import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';
	import LocaleSwitcher from '$lib/components/ui/LocaleSwitcher.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import type { Translations, Locale } from '$lib/i18n/types';

	interface Props {
		t: Translations;
		lang: Locale;
	}

	let { t, lang }: Props = $props();

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	const navLinks = $derived([
		{ label: t.nav.home, href: `/${lang}#` },
		{ label: t.nav.services, href: `/${lang}#services` },
		{ label: t.nav.portfolio, href: `/${lang}#portfolio` },
		{ label: t.nav.about, href: `/${lang}#about` },
		{ label: t.nav.contact, href: `/${lang}#contact` }
	]);

	const logoSrc = '/images/logo/favicon.png';

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {scrolled
		? 'border-b border-zinc-200/50 bg-white/80 shadow-sm backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/80'
		: 'bg-transparent'}"
>
	<nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<a href="/{lang}" class="shrink-0">
			<img src={logoSrc} alt="CerqueTech" class="h-10 w-10" />
		</a>

		<div class="hidden items-center gap-1 lg:flex">
			{#each navLinks as link}
				<a
					href={link.href}
					class="rounded-lg px-4 py-2 text-sm font-medium transition-colors {scrolled
						? 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
						: 'text-zinc-800 hover:bg-zinc-100/50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white'}"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<div class="hidden items-center gap-2 lg:flex">
			<LocaleSwitcher {lang} />
			<ThemeToggle />
			<Button variant="primary" href="/{lang}#contact" class="ml-2">
				{t.nav.quote}
			</Button>
		</div>

		<div class="flex items-center gap-2 lg:hidden">
			<ThemeToggle />
			<button
				onclick={() => (mobileOpen = !mobileOpen)}
				class="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
				aria-label="Toggle menu"
			>
				{#if mobileOpen}
					<X class="h-5 w-5" />
				{:else}
					<Menu class="h-5 w-5" />
				{/if}
			</button>
		</div>
	</nav>
</header>

<MobileMenu bind:open={mobileOpen} {navLinks} {t} {lang} />
