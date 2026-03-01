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

		// Only start loading globe when it's visible in the viewport
		const visibilityObserver = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visibilityObserver.disconnect();
					scheduleGlobeLoad();
				}
			},
			{ rootMargin: '100px' }
		);
		visibilityObserver.observe(container);

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
			visibilityObserver.disconnect();
			themeObserver.disconnect();
		};
	});

	function scheduleGlobeLoad() {
		// Wait for the page to be fully loaded and idle before starting the globe
		// This ensures all text, images, and other content loads first
		const startGlobe = () => {
			// Preload the texture right before init
			const dark = isDarkMode();
			const img = new Image();
			img.src = dark ? GLOBE_NIGHT : GLOBE_DAY;
			img.onload = () => initGlobe();
			img.onerror = () => initGlobe();
		};

		// Wait for document to be fully loaded (all resources), then use idle callback
		if (document.readyState === 'complete') {
			if ('requestIdleCallback' in window) {
				requestIdleCallback(startGlobe, { timeout: 5000 });
			} else {
				setTimeout(startGlobe, 1000);
			}
		} else {
			window.addEventListener('load', () => {
				if ('requestIdleCallback' in window) {
					requestIdleCallback(startGlobe, { timeout: 5000 });
				} else {
					setTimeout(startGlobe, 1000);
				}
			}, { once: true });
		}
	}

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
	<div class="globe-placeholder absolute inset-0 flex items-center justify-center transition-opacity duration-700" class:opacity-0={loaded} class:pointer-events-none={loaded}>
		<div class="relative aspect-square w-[75%]">
			<!-- Outer glow -->
			<div class="absolute -inset-4 rounded-full bg-brand-500/10 blur-2xl dark:bg-brand-400/15"></div>
			<!-- Planet shape -->
			<div class="absolute inset-0 rounded-full bg-gradient-to-br from-brand-200 via-brand-300 to-brand-500 opacity-30 dark:from-brand-900 dark:via-brand-700 dark:to-brand-500 dark:opacity-40"></div>
			<div class="absolute inset-[3%] rounded-full bg-gradient-to-br from-brand-100 via-brand-200/80 to-brand-400/60 dark:from-zinc-800 dark:via-brand-950 dark:to-brand-800/80"></div>
			<!-- Shine highlight -->
			<div class="absolute inset-0 rounded-full bg-gradient-to-tl from-transparent via-transparent to-white/30 dark:to-white/10"></div>
			<!-- Subtle spinner -->
			<div class="absolute inset-0 flex items-center justify-center">
				<div class="h-8 w-8 rounded-full border-2 border-brand-400/30 border-t-brand-500 animate-spin"></div>
			</div>
		</div>
	</div>
</div>

<style>
	.globe-container {
		width: 100%;
		height: 100%;
	}
	.globe-container :global(canvas) {
		cursor: default !important;
		animation: globe-canvas-in 0.8s ease-out forwards;
	}
	@keyframes globe-canvas-in {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	.globe-placeholder {
		transition: opacity 0.5s ease-out;
	}
</style>
