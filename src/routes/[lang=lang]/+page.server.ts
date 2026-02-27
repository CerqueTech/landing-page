import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	return [{ lang: 'es' }, { lang: 'en' }];
};

export const prerender = true;
