import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"headTitle":"We transform your business with technology.","bottomTitle":"Get started","bottom":"Get started","widget1Ttitle":"Contact us","widget1Titlep":"If you want to start a new project:","widget2Title":"Find us","widget2Titlep":"San Miguel CP1613, Buenos Aires, Argentina","newsletterPlace":"Email Adreess","newsletter":"Newsletter","copyright":"Copyright","copyright1":"All Rights Reserved.","by":"by"};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/en/enviroment/footer.md";
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
