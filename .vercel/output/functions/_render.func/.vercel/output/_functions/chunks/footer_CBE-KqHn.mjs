import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"headTitle":"Transformamos tu empresa con tecnología.","bottomTitle":"Empezar","bottom":"Empezar","widget1Ttitle":"Contactanos","widget1Titlep":"Si deseas empezar un nuevo proyecto:","widget2Title":"Encuéntranos","widget2Titlep":"San Miguel CP1613, Buenos Aires, Argentina","newsletterPlace":"Dirección de Email","newsletter":"Newsletter","copyright":"Derechos de Autor","copyright1":"Todos los derechos reservados","by":"por"};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/es/enviroment/footer.md";
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
