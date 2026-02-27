<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let container: HTMLDivElement;
	let loaded = $state(false);
	let globe: any = null;
	let globeInitialized = false;

	const GLOBE_NIGHT = '/images/globe/earth-night.jpg';
	const GLOBE_DAY = '/images/globe/earth-blue-marble.jpg';

	function isDarkMode(): boolean {
		return document.documentElement.classList.contains('dark');
	}

	onMount(() => {
		if (!browser) return;

		// Preload the current theme's texture
		const dark = isDarkMode();
		const link = document.createElement('link');
		link.rel = 'preload';
		link.as = 'image';
		link.href = dark ? GLOBE_NIGHT : GLOBE_DAY;
		document.head.appendChild(link);

		setTimeout(() => initGlobe(), 50);

		// Watch for theme changes
		const themeObserver = new MutationObserver(() => {
			if (globe && globeInitialized) {
				const nowDark = isDarkMode();
				globe.globeImageUrl(nowDark ? GLOBE_NIGHT : GLOBE_DAY);
				globe.atmosphereColor(
					nowDark ? 'rgba(100, 160, 255, 0.3)' : 'rgba(120, 100, 255, 0.15)'
				);
				globe.atmosphereAltitude(nowDark ? 0.12 : 0.1);
			}
		});
		themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

		return () => {
			themeObserver.disconnect();
		};
	});

	async function initGlobe() {
		if (globeInitialized || !container) return;

		try {
			const GlobeModule = await import('globe.gl');
			const Globe = GlobeModule.default as any;
			const width = container.clientWidth;
			const height = container.clientHeight;

			const dark = isDarkMode();
			globe = Globe()
				.globeImageUrl(dark ? GLOBE_NIGHT : GLOBE_DAY)
				.backgroundColor('rgba(0,0,0,0)')
				.atmosphereColor(dark ? 'rgba(100, 160, 255, 0.3)' : 'rgba(120, 100, 255, 0.15)')
				.atmosphereAltitude(dark ? 0.12 : 0.1)
				.width(width)
				.height(height)
				.pointOfView({ lat: -34.6037, lng: -58.3816, altitude: 2.2 }, 0);

			const connections = [
				{ startLat: -34.6037, startLng: -58.3816, endLat: -23.5505, endLng: -46.6333, color: ['#7C3AED', '#A855F7'] },
				{ startLat: -34.6037, startLng: -58.3816, endLat: -22.9068, endLng: -43.1729, color: ['#7C3AED', '#8B5CF6'] },
				{ startLat: -34.6037, startLng: -58.3816, endLat: 19.4326, endLng: -99.1332, color: ['#A855F7', '#C084FC'] },
				{ startLat: 19.4326, startLng: -99.1332, endLat: 40.4168, endLng: -3.7038, color: ['#A855F7', '#7C3AED'] },
				{ startLat: 40.4168, startLng: -3.7038, endLat: 35.6762, endLng: 139.6503, color: ['#7C3AED', '#8B5CF6'] },
				{ startLat: -34.6037, startLng: -58.3816, endLat: -33.8688, endLng: 151.2093, arcAltitude: 0.25, color: ['#8B5CF6', '#7C3AED'] },
				{ startLat: 51.5074, startLng: -0.1278, endLat: 48.8566, endLng: 2.3522, color: ['#7C3AED', '#8B5CF6'] }
			];

			globe
				.arcsData(connections)
				.arcColor('color')
				.arcDashLength(0.4)
				.arcDashGap(0.25)
				.arcDashAnimateTime(2000)
				.arcStroke(0.6)
				.arcAltitude(0.08)
				.arcAltitudeAutoScale(0.12);

			globe(container);

			globe.controls().autoRotate = true;
			globe.controls().autoRotateSpeed = 0.4;
			globe.controls().enableZoom = false;
			globe.controls().enablePan = false;
			globe.controls().minDistance = globe.controls().getDistance();
			globe.controls().maxDistance = globe.controls().getDistance();

			globe.pointOfView({ lat: -34.6037, lng: -58.3816, altitude: 2.0 }, 1000);

			globeInitialized = true;
			loaded = true;
		} catch (e) {
			console.error('Globe error:', e);
			loaded = true;
		}
	}
</script>

<div bind:this={container} class="globe-container relative">
	{#if !loaded}
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="relative h-full w-full">
				<div class="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-brand-500/20 to-brand-700/20"></div>
				<div class="absolute inset-4 animate-pulse rounded-full bg-gradient-to-br from-brand-400/30 to-brand-600/30" style="animation-delay: 0.2s"></div>
			</div>
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
