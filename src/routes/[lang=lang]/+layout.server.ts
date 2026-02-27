import type { LayoutServerLoad } from './$types';
import { getTranslations, isValidLocale } from '$lib/i18n';
import { error } from '@sveltejs/kit';

export const load: LayoutServerLoad = ({ params }) => {
	const lang = params.lang;

	if (!isValidLocale(lang)) {
		throw error(404, 'Not found');
	}

	return {
		lang,
		t: getTranslations(lang)
	};
};
