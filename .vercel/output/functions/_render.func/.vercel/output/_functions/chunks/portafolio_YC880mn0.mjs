import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"span1":"Nuestro trabajo","h3":"Nuestro último trabajo","portElem1title":"Aplicación movil","portElem1Desc":"Aplicación de tienda de muebles móvil","portElem2title":"UI/UX","portElem2Desc":"Mapa de arte callejero de la ciudad","portElem3title":"Página web","portElem3Desc":"Elaboración de una página de destino eficaz","portElem4title":"Producto","portElem4Desc":"Entrega de seguimiento de paquetes 3D"};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/es/index/portafolio.md";
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
