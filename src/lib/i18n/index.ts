import type { Locale, Translations } from './types';
import { es } from './translations/es';
import { en } from './translations/en';

const translations: Record<Locale, Translations> = { es, en };

export function getTranslations(locale: Locale): Translations {
	return translations[locale];
}

export function isValidLocale(value: string): value is Locale {
	return value === 'es' || value === 'en';
}

export type { Locale, Translations };
