import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"bttnTxt":"Descubre Nuestra Filosofía","headTitle":"Innovando con Valores y Tecnología","righTxt":"En Cerquetech Solutions, nuestra pasión por la tecnología se fusiona con un compromiso firme hacia la innovación ética y sostenible. Adoptamos las últimas tendencias tecnológicas para ofrecer soluciones que no solo son avanzadas, sino también responsables y alineadas con los valores de nuestros clientes.","item1Txt":"Compromiso Ético: Innovación con responsabilidad.","item2Txt":"Sostenibilidad: Tecnología para un futuro mejor.","item3Txt":"Avance Tecnológico: Adoptamos las últimas tendencias.","imgAlt":"Equipo de Cerquetech Solutions","bBttnTxt":"Nuestras Tecnologías","bHeadTxt":"Liderando con Innovación y Expertise Tecnológico"};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/es/about-us/aboutUs.md";
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
