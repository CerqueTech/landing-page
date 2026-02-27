import type { Translations } from '../types';

export const en: Translations = {
	meta: {
		title: 'CerqueTech Solutions - Digital Solutions for Your Business',
		description:
			'At CerqueTech Solutions, we transform your ideas into innovative technological solutions. Web development, mobile apps, cloud and more.'
	},
	nav: {
		home: 'Home',
		services: 'Services',
		about: 'About',
		portfolio: 'Portfolio',
		contact: 'Contact',
		quote: 'Get a Quote'
	},
	hero: {
		badge: 'We transform ideas into technology',
		headline: 'Digital solutions for your company',
		subheadline:
			'We transform your ideas into innovative technological solutions that drive your business growth.',
		cta: 'Contact Us',
		features: [
			'Custom application development',
			'High-impact digital solutions',
			'AI and Cloud-based technologies'
		]
	},
	services: {
		label: 'Our Services',
		title: 'The solutions you need',
		items: [
			{
				title: 'Web Development',
				description:
					'Customized web solutions to boost your business in the digital world.',
				icon: 'Globe'
			},
			{
				title: 'Mobile Applications',
				description:
					'Intuitive and efficient mobile applications to reach your customers wherever they are.',
				icon: 'Smartphone'
			},
			{
				title: 'Custom Software',
				description:
					'Tailored software solutions that adapt to the unique needs of your business.',
				icon: 'Code'
			},
			{
				title: 'Cloud Solutions',
				description:
					'Custom cloud strategies to optimize your infrastructure and operations.',
				icon: 'Cloud'
			},
			{
				title: 'AI & Machine Learning',
				description:
					'Boost your business with advanced AI solutions tailored to your needs.',
				icon: 'Brain'
			},
			{
				title: 'DevOps & Automation',
				description:
					'Automation and efficiency for your development and operations processes.',
				icon: 'Settings'
			}
		]
	},
	portfolio: {
		label: 'Our Work',
		title: 'Featured projects',
		filterAll: 'All',
		filterMobile: 'Mobile',
		filterWeb: 'Web',
		filterAI: 'AI',
		projects: [
			{
				title: 'Siempre Alerta',
				description:
					'Emergency button mobile app connecting users with emergency services, achieving a 47% reduction in response times.',
				category: 'mobile',
				image: '/images/portfolio/siempre-alerta.webp',
				tags: ['React Native', 'Node.js', 'Firebase']
			},
			{
				title: 'Digital Queue System',
				description:
					'Digital queue management system that reduced wait times by 65% and handles over 50,000 monthly appointments.',
				category: 'web',
				image: '/images/portfolio/turnero-digital.webp',
				tags: ['Angular', 'Spring Boot', 'PostgreSQL']
			},
			{
				title: 'AI Chatbot',
				description:
					'Customer service chatbot with natural language processing that autonomously resolves 75% of inquiries.',
				category: 'ai',
				image: '/images/portfolio/ai-chatbot.webp',
				tags: ['Python', 'NLP', 'TensorFlow']
			}
		]
	},
	about: {
		label: 'Why Choose Us?',
		title: 'We boost your business',
		description:
			'At CerqueTech, we fuse experience, innovation and commitment to transform your ideas into cutting-edge technological solutions. We are dedicated to understanding and anticipating your needs, guaranteeing a collaboration that goes beyond the conventional. With us, your vision becomes reality, propelling your business to new heights of success and efficiency.',
		values: [
			{
				title: 'Global Experts',
				description:
					'Team with international experience in the most in-demand technologies on the market.'
			},
			{
				title: 'Guaranteed Quality',
				description:
					'Rigorous development and testing processes that ensure products of excellence.'
			},
			{
				title: 'Fast Response',
				description:
					'Agile communication and optimized delivery times for your peace of mind.'
			}
		],
		stats: [
			{ value: 50, suffix: '+', label: 'Satisfied clients' },
			{ value: 4, suffix: '+', label: 'Years of experience' },
			{ value: 100, suffix: '+', label: 'Projects completed' }
		],
		team: {
			label: 'Our Team',
			title: 'Meet our team',
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
		label: 'Testimonials',
		title: 'What our clients say',
		items: [
			{
				quote:
					'The dedication of the Cerquetech team was beyond expectations. Personally, I always felt that they really cared about the success of our project.',
				name: 'Tomas Pacios Moya',
				role: 'CEO at PM Finance',
				avatar: '/images/testimonials/avatar_1.png',
				rating: 5
			},
			{
				quote:
					'What I value most about Cerquetech is its human approach. Fernando, from his team, was particularly attentive; his ability to listen and understand our concerns completely transformed the way we work.',
				name: 'Andres Sosa',
				role: 'Senior Master of Works',
				avatar: '/images/testimonials/avatar_2.png',
				rating: 5
			},
			{
				quote:
					'Cerquetech\'s technical support is reliable and always accessible. Their ability to resolve issues quickly and effectively has helped us keep our operations running smoothly.',
				name: 'Trinidad Tevini',
				role: 'CEO at Tevini Finance',
				avatar: '/images/testimonials/avatar_3.png',
				rating: 5
			}
		]
	},
	contact: {
		label: 'Contact',
		title: 'Get in touch',
		subtitle: 'We are ready to help you take your project to the next level.',
		form: {
			name: 'Name',
			email: 'Email',
			phone: 'Phone',
			subject: 'Select Subject',
			message: 'Write your message',
			submit: 'Send now',
			subjects: [
				'Web Development',
				'Mobile Applications',
				'Cloud Solutions',
				'DevOps & Automation',
				'Cybersecurity Consulting',
				'Data Analysis',
				'AI & Machine Learning'
			],
			validation: {
				nameRequired: 'Name is required',
				nameMin: 'Name must be at least 3 characters',
				nameMax: 'Name must have a maximum of 20 characters',
				nameLetters: 'Only letters are allowed in the name',
				emailRequired: 'Email is required',
				emailInvalid: 'Email is not valid',
				phoneRequired: 'Phone is required',
				phoneNumbers: 'Only numbers are allowed',
				messageRequired: 'The message is required',
				messageMin: 'The minimum number of characters is 5'
			}
		},
		info: {
			email: 'info@cerquetech.com',
			phone: '+54 11 1234-5678',
			location: 'Núñez, Buenos Aires, Argentina',
			whatsapp: 'https://wa.me/5491112345678'
		},
		success: 'Message sent successfully',
		error: 'Error sending message. Please try again.',
		recaptchaError: 'Please complete the recaptcha'
	},
	footer: {
		cta: {
			title: 'Ready to start your project?',
			button: 'Get Started'
		},
		description:
			'We transform your business with technology. Innovative digital solutions to take your business to the next level.',
		columns: {
			navigation: 'Navigation',
			services: 'Services',
			contact: 'Contact'
		},
		location: 'Núñez, Buenos Aires, Argentina',
		copyright: '© 2024 CerqueTech Solutions. All rights reserved.'
	},
	whatsapp: {
		message: 'Hello! How can I help you?',
		status: 'Usually responds within 1 hour',
		placeholder: 'Enter your message...'
	},
	faq: {
		title: 'Frequently Asked Questions',
		items: [
			{
				question: 'How is the cost of a project determined?',
				answer:
					'The cost of a project depends on several factors, such as the complexity of the design, the required functionalities, and the development time. We always provide a detailed quote after fully understanding your specific needs.'
			},
			{
				question: 'Do you offer ongoing maintenance for developed projects?',
				answer:
					'Yes, we offer maintenance and support services for all the projects we develop. This includes security updates, performance improvements and technical assistance.'
			},
			{
				question: 'How do you ensure compatibility with mobile devices?',
				answer:
					'We focus on responsive design to ensure that all of our apps and websites work seamlessly on a variety of mobile devices, optimizing the user experience across all platforms.'
			},
			{
				question:
					'What kind of support do you offer after launching a website or app?',
				answer:
					'After launch, we offer a period of technical support to address any problems or questions you may have. In addition, we are available for future collaborations, whether it be improvements, updates or the development of new functionality.'
			},
			{
				question: 'What technologies do you use for project development?',
				answer:
					'We use a variety of modern and efficient technologies, including JavaScript, TypeScript, Angular, React, Node.js, among others. Our technology selection depends on the specific requirements of the project and the best solution for your needs.'
			},
			{
				question:
					'Can you develop customized solutions for specific business needs?',
				answer:
					'Absolutely. We specialize in developing customized solutions that are specifically tailored to the unique needs of your business, ensuring that the final product meets your expectations and objectives.'
			}
		]
	}
};
