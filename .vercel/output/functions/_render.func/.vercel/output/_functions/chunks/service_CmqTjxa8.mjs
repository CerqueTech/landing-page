import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"item1title":"Desarrollo Web","item1Desc":"Soluciones web personalizadas para impulsar tu negocio en el mundo digital","itemBtnText":"Ver detalles","item2title":"Diseño UX/UI","item2Desc":"Diseños intuitivos y optimizados para una mejor interacción con los usuarios","item3title":"Desarrollo de Aplicaciones Móviles","item3Desc":"Aplicaciones móviles eficientes para alcanzar a tus clientes donde quiera que estén","item4title":"DevOps y Automatización","item4Desc":"Automatización y eficiencia para tus procesos de desarrollo y operaciones","item5title":"Soluciones en la Nube","item5Desc":"Estrategias de nube personalizadas para optimizar tu infraestructura y operaciones","item6title":"Consultoría en Ciberseguridad","item6Desc":"Protege tu negocio con estrategias de seguridad de vanguardia y consultoría experta"};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/es/services/service.md";
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
