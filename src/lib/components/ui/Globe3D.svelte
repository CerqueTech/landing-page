<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let container: HTMLDivElement;
	let loaded = $state(false);
	let globe: any = null;
	let globeInitialized = false;

	const GLOBE_NIGHT = '//unpkg.com/three-globe/example/img/earth-night.jpg';
	const GLOBE_DAY = '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg';

	function isDarkMode(): boolean {
		return document.documentElement.classList.contains('dark');
	}

	onMount(() => {
		if (!browser) return;

		const dark = isDarkMode();
		const link = document.createElement('link');
		link.rel = 'preload';
		link.as = 'image';
		link.href = dark ? GLOBE_NIGHT : GLOBE_DAY;
		document.head.appendChild(link);

		// Watch for theme changes
		const observer = new MutationObserver(() => {
			if (globe && globeInitialized) {
				const nowDark = isDarkMode();
				globe.globeImageUrl(nowDark ? GLOBE_NIGHT : GLOBE_DAY);
				globe.atmosphereColor(
					nowDark ? 'rgba(100, 160, 255, 0.3)' : 'rgba(100, 120, 255, 0.4)'
				);
			}
		});
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

		setTimeout(() => initGlobe(), 50);

		return () => observer.disconnect();
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

<div bind:this={container} class="globe-container relative">
	{#if !loaded}
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="globe-loader">
				<!-- Outer ring -->
				<div class="globe-loader-ring"></div>
				<!-- Middle ring -->
				<div class="globe-loader-ring globe-loader-ring--mid"></div>
				<!-- Inner orb -->
				<div class="globe-loader-orb"></div>
				<!-- Orbiting dots -->
				<div class="globe-loader-orbit">
					<div class="globe-loader-dot"></div>
				</div>
				<div class="globe-loader-orbit globe-loader-orbit--2">
					<div class="globe-loader-dot globe-loader-dot--2"></div>
				</div>
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

	.globe-loader {
		position: relative;
		width: 120px;
		height: 120px;
	}

	.globe-loader-ring {
		position: absolute;
		inset: 0;
		border-radius: 50%;
		border: 2px solid transparent;
		border-top-color: #a855f7;
		border-right-color: #7c3aed;
		animation: globe-spin 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
	}

	.globe-loader-ring--mid {
		inset: 12px;
		border-top-color: #c084fc;
		border-left-color: #a855f7;
		animation-duration: 1.8s;
		animation-direction: reverse;
	}

	.globe-loader-orb {
		position: absolute;
		inset: 28px;
		border-radius: 50%;
		background: radial-gradient(circle at 35% 35%, #c084fc, #7c3aed 60%, #581c87);
		opacity: 0.6;
		animation: globe-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	.globe-loader-orbit {
		position: absolute;
		inset: -4px;
		animation: globe-spin 2.4s linear infinite;
	}

	.globe-loader-orbit--2 {
		inset: 6px;
		animation-duration: 3.2s;
		animation-direction: reverse;
	}

	.globe-loader-dot {
		position: absolute;
		top: 50%;
		left: 0;
		width: 6px;
		height: 6px;
		margin-top: -3px;
		border-radius: 50%;
		background: #a855f7;
		box-shadow: 0 0 8px #a855f7, 0 0 16px rgba(168, 85, 247, 0.4);
	}

	.globe-loader-dot--2 {
		left: auto;
		right: 0;
		width: 4px;
		height: 4px;
		margin-top: -2px;
		background: #c084fc;
		box-shadow: 0 0 6px #c084fc, 0 0 12px rgba(192, 132, 252, 0.4);
	}

	@keyframes globe-spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	@keyframes globe-pulse {
		0%, 100% { opacity: 0.4; transform: scale(1); }
		50% { opacity: 0.7; transform: scale(1.06); }
	}
</style>
