import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
	const initial = browser
		? localStorage.getItem('theme') === 'light'
			? 'light'
			: 'dark'
		: 'dark';

	const { subscribe, set, update } = writable<'light' | 'dark'>(initial);

	return {
		subscribe,
		toggle: () => {
			update((current) => {
				const next = current === 'dark' ? 'light' : 'dark';
				if (browser) {
					localStorage.setItem('theme', next);
					document.documentElement.classList.toggle('dark', next === 'dark');
				}
				return next;
			});
		},
		set: (value: 'light' | 'dark') => {
			if (browser) {
				localStorage.setItem('theme', value);
				document.documentElement.classList.toggle('dark', value === 'dark');
			}
			set(value);
		}
	};
}

export const theme = createThemeStore();
