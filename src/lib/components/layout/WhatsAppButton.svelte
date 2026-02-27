<script lang="ts">
	import { MessageCircle, X, Send } from 'lucide-svelte';
	import { fly, scale } from 'svelte/transition';
	import type { Translations } from '$lib/i18n/types';

	interface Props {
		t: Translations;
	}

	let { t }: Props = $props();

	let open = $state(false);
	let message = $state('');

	function sendMessage() {
		const text = encodeURIComponent(message || t.whatsapp.message);
		window.open(`${t.contact.info.whatsapp}?text=${text}`, '_blank');
		message = '';
		open = false;
	}
</script>

<div class="fixed bottom-6 right-6 z-50">
	{#if open}
		<div
			class="mb-4 w-80 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-800"
			transition:fly={{ y: 20, duration: 300 }}
		>
			<!-- Header -->
			<div class="flex items-center justify-between bg-green-600 px-4 py-3">
				<div>
					<p class="text-sm font-semibold text-white">CerqueTech</p>
					<p class="text-xs text-green-100">{t.whatsapp.status}</p>
				</div>
				<button onclick={() => (open = false)} class="text-white/80 hover:text-white">
					<X class="h-5 w-5" />
				</button>
			</div>

			<!-- Chat Area -->
			<div class="bg-zinc-50 p-4 dark:bg-zinc-900">
				<div class="rounded-lg bg-white p-3 text-sm text-zinc-700 shadow-sm dark:bg-zinc-800 dark:text-zinc-300">
					{t.whatsapp.message}
				</div>
			</div>

			<!-- Input -->
			<div class="flex items-center gap-2 border-t border-zinc-200 p-3 dark:border-zinc-700">
				<input
					type="text"
					bind:value={message}
					placeholder={t.whatsapp.placeholder}
					class="flex-1 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-800 placeholder:text-zinc-400 focus:border-green-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
					onkeydown={(e) => e.key === 'Enter' && sendMessage()}
				/>
				<button
					onclick={sendMessage}
					class="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white transition-colors hover:bg-green-700"
				>
					<Send class="h-4 w-4" />
				</button>
			</div>
		</div>
	{/if}

	<button
		onclick={() => (open = !open)}
		class="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-600/30 transition-transform hover:scale-110"
		aria-label="WhatsApp"
		transition:scale={{ duration: 200 }}
	>
		{#if open}
			<X class="h-6 w-6" />
		{:else}
			<MessageCircle class="h-6 w-6" />
		{/if}
	</button>
</div>
