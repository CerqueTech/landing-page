import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"span":"Nuestros Servicios","h3":"Las soluciones","elem1Title":"Desarrollo Web","elem1Desc":"Soluciones web personalizadas para impulsar tu negocio en el mundo digital","elem2Title":"Desarrollo de Aplicaciones Móviles","elem2Desc":"Aplicaciones móviles intuitivas y eficientes para alcanzar a tus clientes donde quiera que estén","elem3Title":"Soluciones en la Nube","elem3Desc":"Estrategias personalizadas de nube para optimizar tu infraestructura y operaciones","elem4Title":"DevOps y Automatización","elem4Desc":"Automatización y eficiencia para tus procesos de desarrollo y operaciones","elem5Title":"Arquitectura de Microservicios","elem5Desc":"Sistemas ágiles y escalables para un crecimiento empresarial sostenible","elem6Title":"Consultoría en Ciberseguridad","elem6Desc":"Protege tu negocio con estrategias de seguridad de vanguardia y consultoría experta","elem7Title":"Análisis de Datos","elem7Desc":"Convierte tus datos en decisiones inteligentes y estrategias competitivas","elem8Title":"IA y Aprendizaje Automático","elem8Desc":"Impulsa tu negocio con soluciones avanzadas de IA adaptadas a tus necesidades"};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/es/index/providing.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
