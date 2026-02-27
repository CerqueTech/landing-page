<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import WhatsAppButton from '$lib/components/layout/WhatsAppButton.svelte';
	import { theme } from '$lib/stores/theme';

	let { data, children } = $props();

	// Ensure theme store is initialized and synced with DOM
	$effect(() => {
		const _ = $theme;
	});

	const jsonLd = $derived(JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'CerqueTech Solutions',
		url: 'https://cerquetech.com',
		logo: 'https://cerquetech.com/images/logo/favicon.png',
		description: data.t.meta.description,
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Buenos Aires',
			addressCountry: 'AR'
		},
		sameAs: [
			'https://www.linkedin.com/company/cerquetech'
		],
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'sales',
			availableLanguage: ['Spanish', 'English']
		}
	}));
</script>

<svelte:head>
	<title>{data.t.meta.title}</title>
	<meta name="description" content={data.t.meta.description} />
	<meta name="keywords" content="desarrollo web, aplicaciones móviles, software a medida, soluciones cloud, IA, machine learning, devops, Argentina, Buenos Aires, web development, mobile apps, custom software" />

	<!-- Open Graph -->
	<meta property="og:title" content={data.t.meta.title} />
	<meta property="og:description" content={data.t.meta.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://cerquetech.com/{data.lang}" />
	<meta property="og:site_name" content="CerqueTech Solutions" />
	<meta property="og:locale" content={data.lang === 'es' ? 'es_AR' : 'en_US'} />
	<meta property="og:image" content="https://cerquetech.com/images/logo/favicon.png" />
	<meta property="og:image:width" content="512" />
	<meta property="og:image:height" content="512" />
	<meta property="og:image:alt" content="CerqueTech Solutions" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.t.meta.title} />
	<meta name="twitter:description" content={data.t.meta.description} />
	<meta name="twitter:image" content="https://cerquetech.com/images/logo/favicon.png" />

	<!-- Canonical & Hreflang -->
	<link rel="canonical" href="https://cerquetech.com/{data.lang}" />
	{#if data.lang === 'es'}
		<link rel="alternate" hreflang="en" href="https://cerquetech.com/en" />
		<link rel="alternate" hreflang="es" href="https://cerquetech.com/es" />
		<link rel="alternate" hreflang="x-default" href="https://cerquetech.com/es" />
	{:else}
		<link rel="alternate" hreflang="es" href="https://cerquetech.com/es" />
		<link rel="alternate" hreflang="en" href="https://cerquetech.com/en" />
		<link rel="alternate" hreflang="x-default" href="https://cerquetech.com/en" />
	{/if}

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<Header t={data.t} lang={data.lang} />

<main>
	{@render children()}
</main>

<Footer t={data.t} lang={data.lang} />
<WhatsAppButton t={data.t} />
