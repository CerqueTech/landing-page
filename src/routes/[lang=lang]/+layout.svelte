<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import WhatsAppButton from '$lib/components/layout/WhatsAppButton.svelte';
	import { theme } from '$lib/stores/theme';

	let { data, children } = $props();

	// Ensure theme store is initialized and synced with DOM
	$effect(() => {
		// Subscribe to force store initialization on mount
		const _ = $theme;
	});
</script>

<svelte:head>
	<title>{data.t.meta.title}</title>
	<meta name="description" content={data.t.meta.description} />
	<meta name="keywords" content="desarrollo web, aplicaciones móviles, software a medida, soluciones cloud, IA, machine learning, devops, Argentina, Buenos Aires" />
	
	<meta property="og:title" content={data.t.meta.title} />
	<meta property="og:description" content={data.t.meta.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://cerquetech.com/{data.lang}" />
	<meta property="og:site_name" content="CerqueTech Solutions" />
	<meta property="og:locale" content={data.lang === 'es' ? 'es_AR' : 'en_US'} />
	
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.t.meta.title} />
	<meta name="twitter:description" content={data.t.meta.description} />
	
	<link rel="canonical" href="https://cerquetech.com/{data.lang}" />
	{#if data.lang === 'es'}
		<link rel="alternate" hreflang="en" href="https://cerquetech.com/en" />
		<link rel="alternate" hreflang="x-default" href="https://cerquetech.com/es" />
	{:else}
		<link rel="alternate" hreflang="es" href="https://cerquetech.com/es" />
		<link rel="alternate" hreflang="x-default" href="https://cerquetech.com/en" />
	{/if}
</svelte:head>

<Header t={data.t} lang={data.lang} />

<main>
	{@render children()}
</main>

<Footer t={data.t} lang={data.lang} />
<WhatsAppButton t={data.t} />
