<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let { children } = $props();
	let ready = $state(false);

	onMount(() => {
		// Wait for fonts + critical resources, then show
		if (document.fonts?.ready) {
			document.fonts.ready.then(() => {
				ready = true;
			});
		} else {
			ready = true;
		}
	});
</script>

{#if !ready && browser}
	<div class="loading-screen" aria-hidden="true">
		<div class="loading-logo">
			<img src="/images/logo/favicon.png" alt="" width="48" height="48" />
		</div>
		<div class="loading-spinner"></div>
	</div>
{/if}

<div class:loading-hidden={!ready && browser}>
	{@render children()}
</div>

<style>
	.loading-screen {
		position: fixed;
		inset: 0;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		background: #09090b;
	}

	:global(:not(.dark)) .loading-screen {
		background: #ffffff;
	}

	.loading-logo {
		animation: logo-pulse 1.5s ease-in-out infinite;
	}

	.loading-logo img {
		width: 48px;
		height: 48px;
	}

	.loading-spinner {
		width: 32px;
		height: 32px;
		border: 3px solid rgba(168, 85, 247, 0.2);
		border-top-color: #a855f7;
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	.loading-hidden {
		visibility: hidden;
		height: 0;
		overflow: hidden;
	}

	@keyframes spin {
		to { transform: rotate(360deg); }
	}

	@keyframes logo-pulse {
		0%, 100% { opacity: 0.7; transform: scale(1); }
		50% { opacity: 1; transform: scale(1.05); }
	}
</style>
