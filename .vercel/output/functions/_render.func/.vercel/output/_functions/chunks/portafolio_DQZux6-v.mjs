import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"span1":"Our work","h3":"Our last work","portElem1title":"Mobile app","portElem1Desc":"Mobile furniture store app","portElem2title":"UI/UX","portElem2Desc":"City street art map","portElem3title":"Web page","portElem3Desc":"Crafting an effective landing page","portElem4title":"Product","portElem4Desc":"3D package tracking delivery"};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/en/index/portafolio.md";
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
