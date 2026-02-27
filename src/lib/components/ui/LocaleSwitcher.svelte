<script lang="ts">
	import { page } from '$app/stores';
	import { Globe } from 'lucide-svelte';
	import type { Locale } from '$lib/i18n/types';

	interface Props {
		lang: Locale;
	}

	let { lang }: Props = $props();

	const otherLang = $derived(lang === 'es' ? 'en' : 'es');
	const otherLabel = $derived(lang === 'es' ? 'EN' : 'ES');
	const switchHref = $derived(`/${otherLang}`);
</script>

<a
	href={switchHref}
	class="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
	aria-label="Switch to {otherLabel}"
>
	<Globe class="h-4 w-4" />
	<span>{otherLabel}</span>
</a>
