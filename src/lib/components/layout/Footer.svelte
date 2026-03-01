<script lang="ts">
	import { Linkedin, Github, Instagram, MapPin, Mail, Phone } from 'lucide-svelte';
	import type { Translations, Locale } from '$lib/i18n/types';
	import { theme } from '$lib/stores/theme';

	interface Props {
		t: Translations;
		lang: Locale;
	}

	let { t, lang }: Props = $props();

	// Logo naming: "dark_one_line" = white text (for dark bg), "white_one_line" = black text (for white bg)
	const logoSrc = $derived(
		$theme === 'dark' ? '/images/logo/dark_one_line.webp' : '/images/logo/white_one_line.webp'
	);

	const navLinks = $derived([
		{ label: t.nav.home, href: `/${lang}#` },
		{ label: t.nav.services, href: `/${lang}#services` },
		{ label: t.nav.portfolio, href: `/${lang}#portfolio` },
		{ label: t.nav.about, href: `/${lang}#about` },
		{ label: t.nav.contact, href: `/${lang}#contact` }
	]);

	const serviceLinks = $derived(t.services.items.slice(0, 4).map((s) => s.title));
</script>

<!-- CTA Bar -->
<section class="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-600 to-brand-500 py-20 sm:py-24">
	<!-- Decorative elements -->
	<div class="pointer-events-none absolute inset-0">
		<div class="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-[80px]"></div>
		<div class="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-brand-300/20 blur-[90px]"></div>
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-[600px] rounded-full bg-white/5 blur-[60px]"></div>
	</div>
	<!-- Grid pattern -->
	<div class="pointer-events-none absolute inset-0 opacity-[0.04]" style="background-image: linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px); background-size: 50px 50px;"></div>

	<div class="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
		<h2 class="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
			{t.footer.cta.title}
		</h2>
		<p class="mx-auto mt-4 max-w-lg text-base text-white/70 sm:text-lg">
			{t.footer.cta.subtitle}
		</p>
		<div class="mt-10">
			<a
				href="/{lang}#contact"
				class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 font-display text-sm font-semibold text-brand-700 shadow-lg shadow-brand-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-600"
			>
				{t.footer.cta.button}
			</a>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 py-16">
		<div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Brand -->
			<div class="lg:col-span-1">
				<img src={logoSrc} alt="CerqueTech" class="mb-4 h-[7.5rem]" loading="lazy" decoding="async" />
				<p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
					{t.footer.description}
				</p>
				<div class="mt-6 flex gap-3">
					<a
						href="https://www.linkedin.com/company/cerquetech"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950/50 dark:hover:text-brand-400"
						aria-label="LinkedIn"
					>
						<Linkedin class="h-4 w-4" />
					</a>
					<a
						href="https://github.com/cerquetech"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950/50 dark:hover:text-brand-400"
						aria-label="GitHub"
					>
						<Github class="h-4 w-4" />
					</a>
					<a
						href="https://instagram.com/cerquetech"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950/50 dark:hover:text-brand-400"
						aria-label="Instagram"
					>
						<Instagram class="h-4 w-4" />
					</a>
				</div>
			</div>

			<!-- Navigation -->
			<div>
				<h3 class="mb-4 text-sm font-semibold text-zinc-900 dark:text-white">
					{t.footer.columns.navigation}
				</h3>
				<ul class="space-y-2.5">
					{#each navLinks as link}
						<li>
							<a
								href={link.href}
								class="text-sm text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Services -->
			<div>
				<h3 class="mb-4 text-sm font-semibold text-zinc-900 dark:text-white">
					{t.footer.columns.services}
				</h3>
				<ul class="space-y-2.5">
					{#each serviceLinks as service}
						<li>
							<span class="text-sm text-zinc-600 dark:text-zinc-400">{service}</span>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h3 class="mb-4 text-sm font-semibold text-zinc-900 dark:text-white">
					{t.footer.columns.contact}
				</h3>
				<ul class="space-y-3">
					<li class="flex items-start gap-2.5">
						<Mail class="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
						<a
							href="mailto:{t.contact.info.email}"
							class="text-sm text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
						>
							{t.contact.info.email}
						</a>
					</li>
					<li class="flex items-start gap-2.5">
						<Phone class="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
						<a
							href="tel:{t.contact.info.phone}"
							class="text-sm text-zinc-600 transition-colors hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
						>
							{t.contact.info.phone}
						</a>
					</li>
					<li class="flex items-start gap-2.5">
						<MapPin class="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
						<span class="text-sm text-zinc-600 dark:text-zinc-400">
							{t.footer.location}
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Copyright -->
	<div class="border-t border-zinc-200 dark:border-zinc-800">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 py-6">
			<p class="text-center text-xs text-zinc-500 dark:text-zinc-500">
				{t.footer.copyright}
			</p>
		</div>
	</div>
</footer>
