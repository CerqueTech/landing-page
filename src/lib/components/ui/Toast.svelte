<script lang="ts">
	import { CheckCircle, XCircle, X } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	interface Props {
		message: string;
		type: 'success' | 'error';
		visible: boolean;
		onclose: () => void;
	}

	let { message, type, visible, onclose }: Props = $props();

	$effect(() => {
		if (visible) {
			const timer = setTimeout(onclose, 5000);
			return () => clearTimeout(timer);
		}
	});
</script>

{#if visible}
	<div
		class="fixed right-4 bottom-4 z-[100] flex items-center gap-3 rounded-xl border px-5 py-4 shadow-xl backdrop-blur-sm {type ===
		'success'
			? 'border-green-200 bg-green-50/90 text-green-800 dark:border-green-800 dark:bg-green-950/90 dark:text-green-200'
			: 'border-red-200 bg-red-50/90 text-red-800 dark:border-red-800 dark:bg-red-950/90 dark:text-red-200'}"
		transition:fly={{ y: 20, duration: 300 }}
	>
		{#if type === 'success'}
			<CheckCircle class="h-5 w-5 shrink-0" />
		{:else}
			<XCircle class="h-5 w-5 shrink-0" />
		{/if}
		<span class="text-sm font-medium">{message}</span>
		<button onclick={onclose} class="ml-2 shrink-0 opacity-60 transition-opacity hover:opacity-100">
			<X class="h-4 w-4" />
		</button>
	</div>
{/if}
