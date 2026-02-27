<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let container = $state<HTMLDivElement>(undefined!);
	let loaded = $state(false);
	let isDesktop = $state(false);
	let globe: any = null;
	let globeInitialized = false;

	const GLOBE_NIGHT = '//unpkg.com/three-globe/example/img/earth-night.jpg';
	const GLOBE_DAY = '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg';
	const LG_BREAKPOINT = 1024;

	function isDarkMode(): boolean {
		return document.documentElement.classList.contains('dark');
	}

	onMount(() => {
		if (!browser) return;

		isDesktop = window.innerWidth >= LG_BREAKPOINT;

		if (!isDesktop) {
			loaded = true;
			return;
		}

		// Desktop: lazy load 3D globe with IntersectionObserver
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					initGlobe();
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);
		observer.observe(container);

		// Watch for theme changes
		const themeObserver = new MutationObserver(() => {
			if (globe && globeInitialized) {
				const nowDark = isDarkMode();
				globe.globeImageUrl(nowDark ? GLOBE_NIGHT : GLOBE_DAY);
				globe.atmosphereColor(
					nowDark ? 'rgba(100, 160, 255, 0.3)' : 'rgba(100, 120, 255, 0.4)'
				);
			}
		});
		themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

		return () => {
			observer.disconnect();
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
				.atmosphereColor(dark ? 'rgba(100, 160, 255, 0.3)' : 'rgba(100, 120, 255, 0.4)')
				.atmosphereAltitude(dark ? 0.12 : 0.15)
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

{#if isDesktop}
	<!-- Desktop: 3D Globe -->
	<div bind:this={container} class="globe-container relative">
		{#if !loaded}
			<div class="absolute inset-0 flex items-center justify-center">
				<div class="globe-placeholder">
					<div class="globe-placeholder-sphere"></div>
					<div class="globe-placeholder-ring"></div>
				</div>
			</div>
		{/if}
	</div>
{:else}
	<!-- Mobile: CSS Globe (no Three.js) -->
	<div class="css-globe">
		<div class="css-globe-sphere">
			<div class="css-globe-shine"></div>
		</div>
		<!-- Animated arcs -->
		<div class="css-globe-arc css-globe-arc--1"></div>
		<div class="css-globe-arc css-globe-arc--2"></div>
		<div class="css-globe-arc css-globe-arc--3"></div>
		<!-- Dots -->
		<div class="css-globe-dot css-globe-dot--1"></div>
		<div class="css-globe-dot css-globe-dot--2"></div>
		<div class="css-globe-dot css-globe-dot--3"></div>
	</div>
{/if}

<style>
	/* Desktop 3D Globe */
	.globe-container {
		width: 100%;
		height: 100%;
	}
	.globe-container :global(canvas) {
		cursor: default !important;
	}

	/* Desktop placeholder while loading */
	.globe-placeholder {
		position: relative;
		width: 200px;
		height: 200px;
	}

	.globe-placeholder-sphere {
		position: absolute;
		inset: 20px;
		border-radius: 50%;
		background: radial-gradient(circle at 30% 30%, #c084fc, #7c3aed 50%, #4c1d95 80%, #1e1b4b);
		opacity: 0.5;
		animation: placeholder-pulse 2s ease-in-out infinite;
	}

	.globe-placeholder-ring {
		position: absolute;
		inset: 0;
		border-radius: 50%;
		border: 2px solid transparent;
		border-top-color: rgba(168, 85, 247, 0.4);
		border-right-color: rgba(124, 58, 237, 0.2);
		animation: placeholder-spin 3s linear infinite;
	}

	@keyframes placeholder-pulse {
		0%, 100% { opacity: 0.4; transform: scale(1); }
		50% { opacity: 0.6; transform: scale(1.02); }
	}

	@keyframes placeholder-spin {
		to { transform: rotate(360deg); }
	}

	/* Mobile CSS Globe */
	.css-globe {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.css-globe-sphere {
		position: relative;
		width: 85%;
		max-width: 320px;
		aspect-ratio: 1;
		border-radius: 50%;
		background: radial-gradient(circle at 35% 30%, #7c3aed, #4c1d95 50%, #1e1b4b 80%, #0f0a1e);
		box-shadow:
			0 0 60px rgba(124, 58, 237, 0.3),
			0 0 120px rgba(124, 58, 237, 0.15),
			inset 0 0 60px rgba(0, 0, 0, 0.3);
		overflow: hidden;
	}

	:global(.dark) .css-globe-sphere {
		background: radial-gradient(circle at 35% 30%, #7c3aed, #4c1d95 50%, #1e1b4b 80%, #0f0a1e);
		box-shadow:
			0 0 80px rgba(124, 58, 237, 0.4),
			0 0 160px rgba(124, 58, 237, 0.2),
			inset 0 0 60px rgba(0, 0, 0, 0.3);
	}

	:global(:not(.dark)) .css-globe-sphere {
		background: radial-gradient(circle at 35% 30%, #8b5cf6, #6d28d9 40%, #4c1d95 65%, #2e1065);
		box-shadow:
			0 0 40px rgba(139, 92, 246, 0.25),
			0 0 80px rgba(139, 92, 246, 0.1),
			inset 0 0 40px rgba(0, 0, 0, 0.2);
	}

	.css-globe-shine {
		position: absolute;
		top: 8%;
		left: 15%;
		width: 45%;
		height: 45%;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent 70%);
	}

	/* Animated arcs */
	.css-globe-arc {
		position: absolute;
		border-radius: 50%;
		border: 1.5px solid transparent;
	}

	.css-globe-arc--1 {
		width: 70%;
		height: 70%;
		top: 15%;
		left: 15%;
		border-top-color: rgba(168, 85, 247, 0.5);
		border-right-color: rgba(124, 58, 237, 0.3);
		animation: arc-rotate 8s linear infinite;
	}

	.css-globe-arc--2 {
		width: 55%;
		height: 55%;
		top: 22.5%;
		left: 22.5%;
		border-bottom-color: rgba(192, 132, 252, 0.4);
		border-left-color: rgba(168, 85, 247, 0.2);
		animation: arc-rotate 12s linear infinite reverse;
	}

	.css-globe-arc--3 {
		width: 85%;
		height: 85%;
		top: 7.5%;
		left: 7.5%;
		border-top-color: rgba(139, 92, 246, 0.3);
		animation: arc-rotate 16s linear infinite;
	}

	@keyframes arc-rotate {
		to { transform: rotate(360deg); }
	}

	/* Animated dots */
	.css-globe-dot {
		position: absolute;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #a855f7;
		box-shadow: 0 0 8px rgba(168, 85, 247, 0.6);
	}

	.css-globe-dot--1 {
		top: 30%;
		left: 35%;
		animation: dot-blink 2s ease-in-out infinite;
	}

	.css-globe-dot--2 {
		top: 55%;
		left: 60%;
		animation: dot-blink 2s ease-in-out 0.7s infinite;
	}

	.css-globe-dot--3 {
		top: 40%;
		left: 50%;
		width: 4px;
		height: 4px;
		animation: dot-blink 2s ease-in-out 1.4s infinite;
	}

	@keyframes dot-blink {
		0%, 100% { opacity: 0.3; transform: scale(0.8); }
		50% { opacity: 1; transform: scale(1.2); }
	}
</style>
