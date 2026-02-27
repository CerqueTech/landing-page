<script lang="ts">
	import { fly } from 'svelte/transition';
	import LocaleSwitcher from '$lib/components/ui/LocaleSwitcher.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import type { Translations, Locale } from '$lib/i18n/types';

	interface Props {
		open: boolean;
		navLinks: Array<{ label: string; href: string }>;
		t: Translations;
		lang: Locale;
	}

	let { open = $bindable(), navLinks, t, lang }: Props = $props();

	function close() {
		open = false;
	}
</script>

{#if open}
	<!-- Backdrop -->
	<button
		class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
		onclick={close}
		aria-label="Close menu"
		transition:fly={{ duration: 200 }}
	></button>

	<!-- Drawer -->
	<div
		class="fixed inset-y-0 right-0 z-50 w-80 max-w-full bg-white shadow-2xl lg:hidden dark:bg-zinc-900"
		transition:fly={{ x: 320, duration: 300 }}
	>
		<div class="flex h-full flex-col px-6 py-20">
			<nav class="flex flex-col gap-1">
				{#each navLinks as link}
					<a
						href={link.href}
						onclick={close}
						class="rounded-lg px-4 py-3 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-brand-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-brand-400"
					>
						{link.label}
					</a>
				{/each}
			</nav>

			<div class="mt-8 flex flex-col gap-4">
				<LocaleSwitcher {lang} />
				<Button variant="primary" href="/{lang}#contact" onclick={close}>
					{t.nav.quote}
				</Button>
			</div>
		</div>
	</div>
{/if}
