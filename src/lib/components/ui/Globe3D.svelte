<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';

	let container: HTMLDivElement;
	let loaded = $state(false);
	let globe: any = null;
	let globeInitialized = false;
	let renderer: any = null;
	let animFrameId: number | null = null;

	const GLOBE_NIGHT = '/images/globe/earth-night.webp';
	const GLOBE_DAY = '/images/globe/earth-blue-marble.webp';

	function isDarkMode(): boolean {
		return document.documentElement.classList.contains('dark');
	}

	// Preload texture into browser cache
	function preloadTexture(src: string): Promise<void> {
		return new Promise((resolve) => {
			const img = new Image();
			img.onload = () => resolve();
			img.onerror = () => resolve();
			img.src = src;
		});
	}

	// Pause/resume globe rendering based on visibility
	function pauseGlobe() {
		if (globe && globeInitialized) {
			globe.controls().autoRotate = false;
			globe.pauseAnimation();
		}
	}

	function resumeGlobe() {
		if (globe && globeInitialized) {
			globe.controls().autoRotate = true;
			globe.resumeAnimation();
		}
	}

	let visibilityObserver: IntersectionObserver | null = null;
	let themeObserver: MutationObserver | null = null;

	onMount(() => {
		if (!browser) return;

		// Start loading globe.gl module + texture in parallel immediately
		const dark = isDarkMode();
		const textureUrl = dark ? GLOBE_NIGHT : GLOBE_DAY;

		const modulePromise = import('globe.gl');
		const texturePromise = preloadTexture(textureUrl);

		// Initialize as soon as both are ready
		Promise.all([modulePromise, texturePromise]).then(([GlobeModule]) => {
			if (globeInitialized || !container) return;
			initGlobe(GlobeModule.default as any);
		}).catch((e) => {
			console.error('Globe load error:', e);
			loaded = true;
		});

		// Watch for theme changes
		themeObserver = new MutationObserver(() => {
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

		// Pause globe rendering when scrolled out of view (massive CPU saving)
		visibilityObserver = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					resumeGlobe();
				} else {
					pauseGlobe();
				}
			},
			{ rootMargin: '100px' }
		);
		if (container) visibilityObserver.observe(container);
	});

	onDestroy(() => {
		themeObserver?.disconnect();
		visibilityObserver?.disconnect();
		if (globe) {
			try { globe._destructor?.(); } catch {}
		}
	});

	function initGlobe(Globe: any) {
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

		const controls = globe.controls();
		controls.autoRotate = true;
		controls.autoRotateSpeed = 0.4;
		controls.enableZoom = false;
		controls.enablePan = false;
		controls.minDistance = controls.getDistance();
		controls.maxDistance = controls.getDistance();

		globe.pointOfView({ lat: -34.6037, lng: -58.3816, altitude: 2.0 }, 1000);

		globeInitialized = true;
		loaded = true;
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
