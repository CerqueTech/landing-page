<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let container: HTMLDivElement;
	let loading = $state(true);
	let loadError = $state(false);

	let globe: any = null;
	let globeInitialized = false;

	const GLOBE_IMAGE = '//unpkg.com/three-globe/example/img/earth-night.jpg';

	onMount(() => {
		const link = document.createElement('link');
		link.rel = 'preload';
		link.as = 'image';
		link.href = GLOBE_IMAGE;
		document.head.appendChild(link);

		const script = document.createElement('script');
		script.src = '//unpkg.com/globe.gl';
		script.async = true;
		script.onload = () => {
			loading = false;
		};
		script.onerror = () => {
			loadError = true;
			loading = false;
		};
		document.body.appendChild(script);

		return () => {
			script.remove();
		};
	});

	$effect(() => {
		if (!browser || !container || !window.Globe) return;

		let observer: IntersectionObserver | null = null;

		async function initGlobe() {
			if (globeInitialized || loadError) return;

			try {
				const Globe = window.Globe;
				const width = container.clientWidth;
				const height = container.clientHeight;

				globe = (Globe as any)()
					.globeImageUrl(GLOBE_IMAGE)
					.backgroundColor('rgba(0,0,0,0)')
					.atmosphereColor('rgba(100, 160, 255, 0.3)')
					.atmosphereAltitude(0.15)
					.width(width)
					.height(height)
					.pointOfView({ lat: -34.6037, lng: -58.3816, altitude: 2.2 }, 0);

				const connections = [
					{
						startLat: -34.6037,
						startLng: -58.3816,
						endLat: -23.5505,
						endLng: -46.6333,
						color: ['#7C3AED', '#A855F7']
					},
					{
						startLat: -34.6037,
						startLng: -58.3816,
						endLat: -22.9068,
						endLng: -43.1729,
						color: ['#7C3AED', '#8B5CF6']
					},
					{
						startLat: -34.6037,
						startLng: -58.3816,
						endLat: 19.4326,
						endLng: -99.1332,
						color: ['#A855F7', '#C084FC']
					},
					{
						startLat: 19.4326,
						startLng: -99.1332,
						endLat: 40.4168,
						endLng: -3.7038,
						color: ['#A855F7', '#7C3AED']
					},
					{
						startLat: 40.4168,
						startLng: -3.7038,
						endLat: 35.6762,
						endLng: 139.6503,
						color: ['#7C3AED', '#8B5CF6']
					},
					{
						startLat: -23.5505,
						startLng: -46.6333,
						endLat: 40.7128,
						endLng: -74.006,
						color: ['#A855F7', '#C084FC']
					},
					{
						startLat: 51.5074,
						startLng: -0.1278,
						endLat: 48.8566,
						endLng: 2.3522,
						color: ['#7C3AED', '#8B5CF6']
					},
					{
						startLat: 35.6762,
						startLng: 139.6503,
						endLat: 31.2304,
						endLng: 121.4737,
						color: ['#8B5CF6', '#A855F7']
					},
					{
						startLat: 31.2304,
						startLng: 121.4737,
						endLat: 1.3521,
						endLng: 103.8198,
						color: ['#7C3AED', '#A855F7']
					},
					{
						startLat: -34.6037,
						startLng: -58.3816,
						endLat: -33.8688,
						endLng: 151.2093,
						arcAltitude: 0.3,
						color: ['#8B5CF6', '#7C3AED']
					},
					{
						startLat: -33.8688,
						startLng: 151.2093,
						endLat: 1.3521,
						endLng: 103.8198,
						color: ['#7C3AED', '#A855F7']
					},
					{
						startLat: -34.6037,
						startLng: -58.3816,
						endLat: -15.7975,
						endLng: -47.8919,
						color: ['#8B5CF6', '#7C3AED']
					}
				];

				globe
					.arcsData(connections)
					.arcColor('color')
					.arcDashLength(0.4)
					.arcDashGap(0.2)
					.arcDashAnimateTime(2000)
					.arcStroke(1)
					.arcAltitude((d: any) => d.arcAltitude || 0.12)
					.arcAltitudeAutoScale(0.2);

				globe(container);

				globe.controls().autoRotate = true;
				globe.controls().autoRotateSpeed = 0.5;
				globe.controls().enableZoom = false;
				globe.controls().enablePan = false;
				globe.controls().minDistance = globe.controls().getDistance();
				globe.controls().maxDistance = globe.controls().getDistance();

				globe.pointOfView(
					{ lat: -34.6037, lng: -58.3816, altitude: 2.0 },
					1000
				);

				globeInitialized = true;
			} catch (error) {
				console.error('Globe initialization error:', error);
				loadError = true;
			}
		}

		function destroyGlobe() {
			if (!globe) return;
			try {
				const renderer = globe.renderer?.();
				if (renderer) {
					renderer.dispose();
					renderer.domElement?.remove();
				}
			} catch {
			}
			globe = null;
			globeInitialized = false;
			if (container) container.innerHTML = '';
		}

		observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && window.Globe) {
					initGlobe();
				} else if (globeInitialized) {
					destroyGlobe();
				}
			},
			{ threshold: 0.1 }
		);

		observer.observe(container);

		function handleResize() {
			if (globe && globeInitialized) {
				globe.width(container.clientWidth);
				globe.height(container.clientHeight);
			}
		}
		window.addEventListener('resize', handleResize);

		return () => {
			observer?.disconnect();
			window.removeEventListener('resize', handleResize);
			destroyGlobe();
		};
	});
</script>

<div bind:this={container} class="globe-container relative">
	{#if loading || !window.Globe}
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="h-8 w-8 animate-spin rounded-full border-2 border-brand-500/30 border-t-brand-500 sm:h-12 sm:w-12"></div>
		</div>
	{/if}
</div>

<style>
	.globe-container {
		width: 100%;
		height: 100%;
	}

	.globe-container :global(canvas) {
		cursor: default !important;
	}
</style>
