<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import WhatsAppButton from '$lib/components/layout/WhatsAppButton.svelte';

	let { data, children } = $props();
</script>

<svelte:head>
	<title>{data.t.meta.title}</title>
	<meta name="description" content={data.t.meta.description} />
	<meta property="og:title" content={data.t.meta.title} />
	<meta property="og:description" content={data.t.meta.description} />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://cerquetech.com/{data.lang}" />
	{#if data.lang === 'es'}
		<link rel="alternate" hreflang="en" href="https://cerquetech.com/en" />
	{:else}
		<link rel="alternate" hreflang="es" href="https://cerquetech.com/es" />
	{/if}
</svelte:head>

<Header t={data.t} lang={data.lang} />

<main>
	{@render children()}
</main>

<Footer t={data.t} lang={data.lang} />
<WhatsAppButton t={data.t} />
