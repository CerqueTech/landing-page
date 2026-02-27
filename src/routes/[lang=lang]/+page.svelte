<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import Services from '$lib/components/sections/Services.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Portfolio from '$lib/components/sections/Portfolio.svelte';
	import Testimonials from '$lib/components/sections/Testimonials.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';

	let { data } = $props();
</script>

<Hero t={data.t} lang={data.lang} />
<Services t={data.t} />
<About t={data.t} />
<Portfolio t={data.t} />
<Testimonials t={data.t} />
<Contact t={data.t} />
