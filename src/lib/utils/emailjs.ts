import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_jzbyr2g';
const TEMPLATE_ID = 'template_nx3hy1l';
const PUBLIC_KEY = '-FHCpc8dqO74zCggh';
export const RECAPTCHA_SITE_KEY = '6LcR3VIpAAAAAIrEQNSLspAIsWliq76GBc4RP675';

let initialized = false;
let recaptchaLoadPromise: Promise<void> | null = null;

export function initEmailJS() {
	if (!initialized) {
		emailjs.init(PUBLIC_KEY);
		initialized = true;
	}
}

export function loadRecaptcha(): Promise<void> {
	if (recaptchaLoadPromise) return recaptchaLoadPromise;

	recaptchaLoadPromise = new Promise((resolve, reject) => {
		if (typeof window === 'undefined') return reject(new Error('No window'));

		// Check if already loaded
		if ((window as any).grecaptcha) {
			return resolve();
		}

		const script = document.createElement('script');
		script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
		script.async = true;
		script.defer = true;
		script.onload = () => resolve();
		script.onerror = () => {
			recaptchaLoadPromise = null;
			reject(new Error('Failed to load reCAPTCHA'));
		};
		document.head.appendChild(script);
	});

	return recaptchaLoadPromise;
}

export async function getRecaptchaToken(): Promise<string> {
	await loadRecaptcha();

	return new Promise((resolve, reject) => {
		const grecaptcha = (window as any).grecaptcha;
		if (!grecaptcha) return reject(new Error('reCAPTCHA not loaded'));

		grecaptcha.ready(() => {
			grecaptcha
				.execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
				.then(resolve)
				.catch(reject);
		});
	});
}

export async function sendEmail(params: {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
}): Promise<void> {
	initEmailJS();

	// Try to get reCAPTCHA token, but don't block form if it fails
	let token = '';
	try {
		token = await getRecaptchaToken();
	} catch {
		// reCAPTCHA unavailable (ad blocker, network, etc.) — send without token
	}

	const templateParams: Record<string, string> = {
		from_name: params.name,
		from_email: params.email,
		phone: params.phone,
		subject: params.subject,
		message: params.message
	};

	if (token) {
		templateParams['g-recaptcha-response'] = token;
	}

	await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
}
