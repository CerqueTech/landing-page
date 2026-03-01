import type { Translations } from '../types';

export const es: Translations = {
	meta: {
		title: 'CerqueTech Solutions - Soluciones digitales para tu empresa',
		description:
			'En CerqueTech Solutions, transformamos tus ideas en soluciones tecnológicas innovadoras. Desarrollo web, aplicaciones móviles, cloud y más.'
	},
	nav: {
		home: 'Inicio',
		services: 'Servicios',
		about: 'Nosotros',
		portfolio: 'Portafolio',
		contact: 'Contacto',
		quote: 'Cotizar'
	},
	hero: {
		badge: 'Transformamos ideas en tecnología',
		headlineBefore: 'Soluciones digitales para',
		rotatingWords: ['tu empresa', 'tu negocio', 'el futuro', 'tu marca'],
		subheadline:
			'Transformamos tus ideas en soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio.',
		cta: 'Contáctanos',
		features: [
			'Desarrollo de aplicaciones a medida',
			'Soluciones digitales de alto impacto',
			'Tecnologías basadas en IA y Cloud'
		]
	},
	trustedBy: {
		title: 'Confían en nosotros',
		clients: [
			{ name: 'Finanzas Argy', logo: '/images/clients/finanzasargy.webp' },
			{ name: 'Campana', logo: '/images/clients/campana.webp' },
			{ name: 'Municipalidad de San Miguel', logo: '/images/clients/sanmiguel.webp' }
		]
	},
	services: {
		label: 'Nuestros Servicios',
		title: 'Las soluciones que necesitás',
		items: [
			{
				title: 'Desarrollo Web',
				description:
					'Soluciones web personalizadas para impulsar tu negocio en el mundo digital.',
				icon: 'Globe'
			},
			{
				title: 'Aplicaciones Móviles',
				description:
					'Aplicaciones móviles intuitivas y eficientes para alcanzar a tus clientes donde quiera que estén.',
				icon: 'Smartphone'
			},
			{
				title: 'Software a Medida',
				description:
					'Soluciones de software personalizadas que se adaptan a las necesidades únicas de tu negocio.',
				icon: 'Code'
			},
			{
				title: 'Soluciones en la Nube',
				description:
					'Estrategias personalizadas de nube para optimizar tu infraestructura y operaciones.',
				icon: 'Cloud'
			},
			{
				title: 'IA y Machine Learning',
				description:
					'Impulsa tu negocio con soluciones avanzadas de inteligencia artificial adaptadas a tus necesidades.',
				icon: 'Brain'
			},
			{
				title: 'DevOps y Automatización',
				description:
					'Automatización y eficiencia para tus procesos de desarrollo y operaciones.',
				icon: 'Settings'
			}
		]
	},
	portfolio: {
		label: 'Nuestro Trabajo',
		title: 'Proyectos destacados',
		filterAll: 'Todos',
		filterMobile: 'Móvil',
		filterWeb: 'Web',
		filterAI: 'IA',
		projects: [
			{
				title: 'Propi',
				description:
					'Plataforma de gestión inmobiliaria digital con cobros automáticos, contratos digitales y dashboard centralizado para administradores de propiedades.',
				category: 'web',
				image: '/images/portfolio/propi.webp',
				tags: ['Next.js', 'TypeScript', 'AWS', 'PostgreSQL']
			},
			{
				title: 'VendeYaBot',
				description:
					'Chatbot de WhatsApp con IA para PYMES que atiende consultas, muestra catálogos y toma pedidos automáticamente las 24/7.',
				category: 'ai',
				image: '/images/portfolio/vendeyabot.webp',
				tags: ['WhatsApp API', 'IA', 'Node.js', 'NLP']
			}
		]
	},
	about: {
		label: '¿Por qué elegirnos?',
		title: 'Impulsamos tu negocio',
		description:
			'En CerqueTech, transformamos tus ideas en soluciones tecnológicas innovadoras. Nos comprometemos a entender tus necesidades y colaborar contigo para llevar tu negocio a nuevas alturas de éxito y eficiencia. Con nosotros, tu visión se hace realidad.',
		steps: [
			{ number: '01', title: 'Contanos tu idea' },
			{ number: '02', title: 'Diseñamos la solución' },
			{ number: '03', title: 'Desarrollamos y entregamos' }
		],
		stats: [
			{ value: 14, suffix: '+', label: 'Clientes satisfechos' },
			{ value: 4, suffix: '+', label: 'Años de experiencia' },
			{ value: 23, suffix: '+', label: 'Proyectos completados' }
		],
		team: {
			label: 'Nuestro Equipo',
			title: 'Conocé a nuestro equipo',
			members: [
				{
					name: 'Mateo Cerquetella',
					role: 'Sr. Full Stack Developer',
					image: '/images/team/mateo.webp',
					linkedin: 'https://www.linkedin.com/in/mateocerquetella/'
				},
				{
					name: 'Mateo Rodriguez',
					role: 'Sr. Full Stack Developer',
					image: '/images/team/mateo-rodriguez.webp',
					linkedin: ''
				},
				{
					name: 'Federico Rosales',
					role: 'Sr. Full Stack Developer',
					image: '/images/team/fede.webp',
					linkedin: 'https://www.linkedin.com/in/federosaless/'
				},
				{
					name: 'Matias Kalil Gomez',
					role: 'Sr. Full Stack Developer',
					image: '/images/team/mati.webp',
					linkedin: 'https://www.linkedin.com/in/mat%C3%ADas-kalil-g%C3%B3mez-26b647223/'
				}
			]
		}
	},
	testimonials: {
		label: 'Testimonios',
		title: 'Lo que dicen nuestros clientes',
		items: [
			{
				quote:
					'La dedicación del equipo de Cerquetech fue más allá de lo esperado. Personalmente, siempre sentí que realmente les importaba el éxito de nuestro proyecto.',
				name: 'Tomas Pacios Moya',
				role: 'CEO de PM Finance',
				avatar: '/images/testimonials/avatar_1.png',
				rating: 5
			},
			{
				quote:
					'Lo que más valoro de Cerquetech es su enfoque humano. Fernando, de su equipo, fue particularmente atento; su habilidad para escuchar y entender nuestras preocupaciones transformó completamente nuestra forma de trabajar.',
				name: 'Andres Sosa',
				role: 'Maestro Mayor de Obras',
				avatar: '/images/testimonials/avatar_2.png',
				rating: 5
			},
			{
				quote:
					'El soporte técnico de Cerquetech es confiable y siempre accesible. Su capacidad para solucionar problemas rápidamente y con eficacia nos ha ayudado a mantener nuestras operaciones funcionando sin problemas.',
				name: 'Trinidad Tevini',
				role: 'CEO de Tevini Finance',
				avatar: '/images/testimonials/avatar_3.png',
				rating: 5
			}
		]
	},
	contact: {
		label: 'Contacto',
		title: 'Ponete en contacto',
		subtitle: 'Estamos listos para ayudarte a llevar tu proyecto al siguiente nivel.',
		form: {
			name: 'Nombre',
			email: 'Email',
			phone: 'Teléfono',
			subject: 'Seleccionar Asunto',
			message: 'Escribe tu mensaje',
			submit: 'Enviar ahora',
			subjects: [
				'Desarrollo Web',
				'Aplicaciones Móviles',
				'Soluciones en la Nube',
				'DevOps y Automatización',
				'Consultoría en Ciberseguridad',
				'Análisis de Datos',
				'IA & Aprendizaje Automático'
			],
			validation: {
				nameRequired: 'Nombre es requerido',
				nameMin: 'Nombre debe tener al menos 3 caracteres',
				nameMax: 'Nombre debe tener máximo 20 caracteres',
				nameLetters: 'Solo se permiten letras en el nombre',
				emailRequired: 'Email es requerido',
				emailInvalid: 'Email no es válido',
				phoneRequired: 'Teléfono es requerido',
				phoneNumbers: 'Solo se permiten números',
				messageRequired: 'El mensaje es requerido',
				messageMin: 'El mínimo de caracteres es 5'
			}
		},
		info: {
			email: 'info@cerquetech.com',
			phone: '+54 9 11 4054-1120',
			location: 'Núñez, Buenos Aires, Argentina',
			whatsapp: 'https://wa.me/5491140541120'
		},
		success: 'Mensaje enviado correctamente',
		error: 'Error al enviar el mensaje. Por favor, intenta nuevamente.',
		recaptchaError: 'Complete el recaptcha por favor'
	},
	footer: {
		cta: {
			title: '¿Listo para empezar tu proyecto?',
			button: 'Empezar'
		},
		description:
			'Transformamos tu empresa con tecnología. Soluciones digitales innovadoras para llevar tu negocio al siguiente nivel.',
		columns: {
			navigation: 'Navegación',
			services: 'Servicios',
			contact: 'Contacto'
		},
		location: 'Núñez, Buenos Aires, Argentina',
		copyright: '© 2024 CerqueTech Solutions. Todos los derechos reservados.'
	},
	whatsapp: {
		message: '¡Hola! ¿Cómo puedo ayudarte?',
		status: 'Normalmente responde en 1 hora',
		placeholder: 'Ingresa tu mensaje...'
	},
	faq: {
		title: 'Preguntas frecuentes',
		items: [
			{
				question: '¿Cómo se determina el costo de un proyecto?',
				answer:
					'El costo de un proyecto depende de varios factores, como la complejidad del diseño, las funcionalidades requeridas, y el tiempo de desarrollo. Siempre proporcionamos una cotización detallada después de entender completamente tus necesidades específicas.'
			},
			{
				question: '¿Ofrecen mantenimiento continuo para proyectos desarrollados?',
				answer:
					'Sí, ofrecemos servicios de mantenimiento y soporte para todos los proyectos que desarrollamos. Esto incluye actualizaciones de seguridad, mejoras de rendimiento y asistencia técnica.'
			},
			{
				question: '¿Cómo aseguran la compatibilidad con dispositivos móviles?',
				answer:
					'Nos enfocamos en el diseño responsivo para asegurar que todas nuestras aplicaciones y sitios web funcionen sin problemas en una variedad de dispositivos móviles, optimizando la experiencia del usuario en todas las plataformas.'
			},
			{
				question:
					'¿Qué tipo de soporte ofrecen después del lanzamiento de un sitio web o aplicación?',
				answer:
					'Tras el lanzamiento, ofrecemos un período de soporte técnico para abordar cualquier problema o duda que puedas tener. Además, estamos disponibles para colaboraciones futuras, ya sean mejoras, actualizaciones o el desarrollo de nuevas funcionalidades.'
			},
			{
				question: '¿Qué tecnologías utilizan para el desarrollo de proyectos?',
				answer:
					'Utilizamos una variedad de tecnologías modernas y eficientes, incluyendo JavaScript, TypeScript, Angular, React, Node.js, entre otras. Nuestra selección de tecnología depende de los requisitos específicos del proyecto y de la mejor solución para tus necesidades.'
			},
			{
				question:
					'¿Pueden desarrollar soluciones personalizadas para necesidades específicas de negocio?',
				answer:
					'Absolutamente. Nos especializamos en desarrollar soluciones personalizadas que se adaptan específicamente a las necesidades únicas de tu negocio, asegurando que el producto final cumpla con tus expectativas y objetivos.'
			}
		]
	}
};
