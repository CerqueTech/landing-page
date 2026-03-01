<script lang="ts">
	import { Linkedin, Github, Instagram, MapPin, Mail, Phone, ArrowRight } from 'lucide-svelte';
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
<section class="cta-section relative overflow-hidden py-24 sm:py-32">
	<!-- Animated aurora background -->
	<div class="cta-aurora pointer-events-none absolute inset-0"></div>

	<!-- Top fade: page bg → aurora -->
	<div class="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent dark:from-zinc-950"></div>
	<!-- Bottom fade: aurora → footer bg -->
	<div class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-50 to-transparent dark:from-zinc-900/50"></div>

	<!-- Floating particles -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		{#each { length: 8 } as _, i}
			<div
				class="cta-particle absolute rounded-full bg-white"
				style="--i: {i}; --x: {10 + (i * 37) % 80}; --size: {2 + (i % 3)}; --duration: {4 + (i % 5) * 1.5}; --delay: {i * 0.7}"
			></div>
		{/each}
	</div>

	<!-- Grid pattern -->
	<div class="pointer-events-none absolute inset-0 opacity-[0.04]" style="background-image: linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px); background-size: 50px 50px;"></div>

	<div class="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
		<h2 class="cta-title font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
			{t.footer.cta.title}
		</h2>
		<p class="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
			{t.footer.cta.subtitle}
		</p>
		<div class="mt-10">
			<a
				href="/{lang}#contact"
				class="cta-button group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-9 py-4 font-display text-sm font-bold text-brand-700 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-600"
			>
				{t.footer.cta.button}
				<ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
			</a>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="bg-zinc-50 dark:bg-zinc-900/50">
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
				© {new Date().getFullYear()} CerqueTech Solutions. {t.footer.copyright}
			</p>
		</div>
	</div>
</footer>

<style>
	/* Aurora animated gradient background */
	.cta-aurora {
		background: linear-gradient(
			-45deg,
			#6b21a8,
			#7c3aed,
			#9333ea,
			#a855f7,
			#7c3aed,
			#6b21a8
		);
		background-size: 300% 300%;
		animation: aurora-shift 8s ease infinite;
	}

	@keyframes aurora-shift {
		0%, 100% { background-position: 0% 50%; }
		25% { background-position: 50% 0%; }
		50% { background-position: 100% 50%; }
		75% { background-position: 50% 100%; }
	}

	/* Floating particles */
	.cta-particle {
		width: calc(var(--size) * 1px);
		height: calc(var(--size) * 1px);
		left: calc(var(--x) * 1%);
		bottom: -10px;
		opacity: 0;
		animation: particle-float calc(var(--duration) * 1s) ease-in-out calc(var(--delay) * 1s) infinite;
	}

	@keyframes particle-float {
		0% {
			opacity: 0;
			transform: translateY(0) scale(0);
		}
		10% {
			opacity: 0.6;
			transform: translateY(-20px) scale(1);
		}
		90% {
			opacity: 0.3;
		}
		100% {
			opacity: 0;
			transform: translateY(-300px) scale(0.5);
		}
	}

	/* Title shimmer effect */
	.cta-title {
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 1) 0%,
			rgba(255, 255, 255, 1) 40%,
			rgba(232, 210, 255, 0.9) 50%,
			rgba(255, 255, 255, 1) 60%,
			rgba(255, 255, 255, 1) 100%
		);
		background-size: 200% 100%;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		animation: title-shimmer 4s ease-in-out infinite;
	}

	@keyframes title-shimmer {
		0%, 100% { background-position: 200% center; }
		50% { background-position: -200% center; }
	}

	/* Button glow */
	.cta-button {
		box-shadow:
			0 0 20px rgba(255, 255, 255, 0.15),
			0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.cta-button:hover {
		box-shadow:
			0 0 30px rgba(255, 255, 255, 0.25),
			0 0 60px rgba(168, 85, 247, 0.2),
			0 8px 25px rgba(0, 0, 0, 0.15);
	}
</style>
