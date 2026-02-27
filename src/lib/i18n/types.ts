export type Locale = 'es' | 'en';

export interface Translations {
	meta: {
		title: string;
		description: string;
	};
	nav: {
		home: string;
		services: string;
		about: string;
		portfolio: string;
		contact: string;
		quote: string;
	};
	hero: {
		headline: string;
		subheadline: string;
		cta: string;
	};
	services: {
		label: string;
		title: string;
		items: Array<{
			title: string;
			description: string;
			icon: string;
		}>;
	};
	portfolio: {
		label: string;
		title: string;
		filterAll: string;
		filterMobile: string;
		filterWeb: string;
		filterAI: string;
		projects: Array<{
			title: string;
			description: string;
			category: string;
			image: string;
			tags: string[];
		}>;
	};
	about: {
		label: string;
		title: string;
		description: string;
		values: Array<{
			title: string;
			description: string;
		}>;
		stats: Array<{
			value: number;
			suffix: string;
			label: string;
		}>;
		team: {
			label: string;
			title: string;
			members: Array<{
				name: string;
				role: string;
				image: string;
				linkedin: string;
			}>;
		};
	};
	testimonials: {
		label: string;
		title: string;
		items: Array<{
			quote: string;
			name: string;
			role: string;
			avatar: string;
			rating: number;
		}>;
	};
	contact: {
		label: string;
		title: string;
		subtitle: string;
		form: {
			name: string;
			email: string;
			phone: string;
			subject: string;
			message: string;
			submit: string;
			subjects: string[];
			validation: {
				nameRequired: string;
				nameMin: string;
				nameMax: string;
				nameLetters: string;
				emailRequired: string;
				emailInvalid: string;
				phoneRequired: string;
				phoneNumbers: string;
				messageRequired: string;
				messageMin: string;
			};
		};
		info: {
			email: string;
			phone: string;
			location: string;
			whatsapp: string;
		};
		success: string;
		error: string;
		recaptchaError: string;
	};
	footer: {
		cta: {
			title: string;
			button: string;
		};
		description: string;
		columns: {
			navigation: string;
			services: string;
			contact: string;
		};
		location: string;
		copyright: string;
	};
	whatsapp: {
		message: string;
		status: string;
		placeholder: string;
	};
	faq: {
		title: string;
		items: Array<{
			question: string;
			answer: string;
		}>;
	};
}
