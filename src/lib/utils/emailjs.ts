import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_jzbyr2g';
const TEMPLATE_ID = 'template_nx3hy1l';
const PUBLIC_KEY = '-FHCpc8dqO74zCggh';

let initialized = false;

export function initEmailJS() {
	if (!initialized) {
		emailjs.init(PUBLIC_KEY);
		initialized = true;
	}
}

export async function sendEmail(params: {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
}): Promise<void> {
	initEmailJS();
	await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
		from_name: params.name,
		from_email: params.email,
		phone: params.phone,
		subject: params.subject,
		message: params.message
	});
}

export const RECAPTCHA_SITE_KEY = '6LcR3VIpAAAAAIrEQNSLspAIsWliq76GBc4RP675';
