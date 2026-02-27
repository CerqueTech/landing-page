import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/') {
		throw redirect(308, '/es');
	}

	const lang = event.params.lang;
	if (lang === 'es' || lang === 'en') {
		event.locals.lang = lang;
	}

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('lang="es"', `lang="${lang || 'es'}"`);
		}
	});

	return response;
};
