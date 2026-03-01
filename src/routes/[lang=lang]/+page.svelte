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
<div class="below-fold">
	<Services t={data.t} />
</div>
<div class="below-fold">
	<About t={data.t} />
</div>
<div class="below-fold">
	<Portfolio t={data.t} />
</div>
<div class="below-fold">
	<Testimonials t={data.t} />
</div>
<div class="below-fold">
	<Contact t={data.t} />
</div>

<style>
	.below-fold {
		content-visibility: auto;
		contain-intrinsic-size: auto 800px;
	}
</style>
