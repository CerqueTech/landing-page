<script lang="ts">
	import { scrollReveal } from '$lib/utils/animations';
	import { Send, Mail, Phone, MapPin, MessageCircle } from 'lucide-svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Toast from '$lib/components/ui/Toast.svelte';
	import { sendEmail, RECAPTCHA_SITE_KEY } from '$lib/utils/emailjs';
	import type { Translations } from '$lib/i18n/types';

	interface Props {
		t: Translations;
	}

	let { t }: Props = $props();

	let form = $state({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	});

	let errors = $state<Record<string, string>>({});
	let submitting = $state(false);
	let toast = $state({ visible: false, message: '', type: 'success' as 'success' | 'error' });

	function validate(): boolean {
		const v = t.contact.form.validation;
		const newErrors: Record<string, string> = {};

		if (!form.name.trim()) newErrors.name = v.nameRequired;
		else if (form.name.length < 3) newErrors.name = v.nameMin;
		else if (form.name.length > 20) newErrors.name = v.nameMax;
		else if (!/^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/.test(form.name)) newErrors.name = v.nameLetters;

		if (!form.email.trim()) newErrors.email = v.emailRequired;
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = v.emailInvalid;

		if (!form.phone.trim()) newErrors.phone = v.phoneRequired;
		else if (!/^\d+$/.test(form.phone)) newErrors.phone = v.phoneNumbers;

		if (!form.message.trim()) newErrors.message = v.messageRequired;
		else if (form.message.length < 5) newErrors.message = v.messageMin;

		errors = newErrors;
		return Object.keys(newErrors).length === 0;
	}

	async function handleSubmit() {
		if (!validate()) return;

		submitting = true;
		try {
			await sendEmail({
				name: form.name,
				email: form.email,
				phone: form.phone,
				subject: form.subject || 'General',
				message: form.message
			});
			toast = { visible: true, message: t.contact.success, type: 'success' };
			form = { name: '', email: '', phone: '', subject: '', message: '' };
		} catch {
			toast = { visible: true, message: t.contact.error, type: 'error' };
		} finally {
			submitting = false;
		}
	}
</script>

<section id="contact" class="py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6">
		<SectionHeading label={t.contact.label} title={t.contact.title} subtitle={t.contact.subtitle} />

		<div class="grid gap-12 lg:grid-cols-5">
			<!-- Form -->
			<div class="lg:col-span-3" use:scrollReveal>
				<form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} class="space-y-5">
					<div class="grid gap-5 sm:grid-cols-2">
						<!-- Name -->
						<div>
							<input
								type="text"
								bind:value={form.name}
								placeholder={t.contact.form.name}
								class="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-white dark:placeholder:text-zinc-500"
							/>
							{#if errors.name}
								<p class="mt-1.5 text-xs text-red-500">{errors.name}</p>
							{/if}
						</div>

						<!-- Email -->
						<div>
							<input
								type="email"
								bind:value={form.email}
								placeholder={t.contact.form.email}
								class="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-white dark:placeholder:text-zinc-500"
							/>
							{#if errors.email}
								<p class="mt-1.5 text-xs text-red-500">{errors.email}</p>
							{/if}
						</div>
					</div>

					<div class="grid gap-5 sm:grid-cols-2">
						<!-- Phone -->
						<div>
							<input
								type="tel"
								bind:value={form.phone}
								placeholder={t.contact.form.phone}
								class="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-white dark:placeholder:text-zinc-500"
							/>
							{#if errors.phone}
								<p class="mt-1.5 text-xs text-red-500">{errors.phone}</p>
							{/if}
						</div>

						<!-- Subject -->
						<div>
							<select
								bind:value={form.subject}
								class="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-sm text-zinc-900 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-white"
							>
								<option value="" disabled>{t.contact.form.subject}</option>
								{#each t.contact.form.subjects as subject}
									<option value={subject}>{subject}</option>
								{/each}
							</select>
						</div>
					</div>

					<!-- Message -->
					<div>
						<textarea
							bind:value={form.message}
							placeholder={t.contact.form.message}
							rows="5"
							class="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-white dark:placeholder:text-zinc-500"
						></textarea>
						{#if errors.message}
							<p class="mt-1.5 text-xs text-red-500">{errors.message}</p>
						{/if}
					</div>

					<Button type="submit" variant="primary" disabled={submitting}>
						{#if submitting}
							<div class="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
						{:else}
							<Send class="h-4 w-4" />
						{/if}
						{t.contact.form.submit}
					</Button>
				</form>
			</div>

			<!-- Info Sidebar -->
			<div class="lg:col-span-2" use:scrollReveal={{ delay: 200 }}>
				<div class="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
					<h3 class="font-display text-lg font-bold text-zinc-900 dark:text-white">
						{t.contact.label}
					</h3>

					<div class="mt-6 space-y-5">
						<a
							href="mailto:{t.contact.info.email}"
							class="flex items-start gap-3 text-sm text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
						>
							<Mail class="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
							{t.contact.info.email}
						</a>
						<a
							href="tel:{t.contact.info.phone}"
							class="flex items-start gap-3 text-sm text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
						>
							<Phone class="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
							{t.contact.info.phone}
						</a>
						<div class="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
							<MapPin class="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
							{t.contact.info.location}
						</div>
						<a
							href={t.contact.info.whatsapp}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-start gap-3 text-sm text-zinc-600 transition-colors hover:text-green-600 dark:text-zinc-400 dark:hover:text-green-400"
						>
							<MessageCircle class="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
							WhatsApp
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<Toast
	message={toast.message}
	type={toast.type}
	visible={toast.visible}
	onclose={() => (toast.visible = false)}
/>
