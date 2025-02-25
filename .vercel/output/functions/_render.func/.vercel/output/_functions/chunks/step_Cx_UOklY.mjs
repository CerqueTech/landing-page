import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"step1title":"Expertos Globales","step2title":"Calidad Garantizada","step3title":"Respuesta Rápida","span":"¿Por qué elegirnos?","h3":"Impulsamos tu negocio","p":"En CerqueTech, transformamos tus ideas en soluciones tecnológicas innovadoras. Nos comprometemos a entender tus necesidades y colaborar contigo para llevar tu negocio a nuevas alturas de éxito y eficiencia. Con nosotros, tu visión se hace realidad.","spanbuttontext":"Explora nuestros servicios"};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/es/index/step.md";
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
