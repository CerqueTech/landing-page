import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"span":"Testimonials","h3":"What my clients say","elem1Title":"Innovative Solutions","elem1Content":"The dedication of the Cerquetech team was beyond expectations. Personally, I always felt that they really cared about the success of our project.","elem1Name":"Tomas Pacios Moya","elem1Designation":"CEO de PM Finance","elem2Title":"Outstanding User Experience","elem2Content":"What I value most about Cerquetech is its human approach. Fernando, from his team, was particularly attentive; his ability to listen and understand our concerns completely transformed the way we work.","elem2Name":"Andres Sosa","elem2Designation":"Senior Master of Works","elem3Title":"Reliable and Effective Support","elem3Content":"Cerquetech's technical support is reliable and always accessible. Their ability to resolve issues quickly and effectively has helped us keep our operations running smoothly.","elem3Name":"Trinidad Tevini","elem3Designation":"CEO de Tevini Finance"};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/en/index/review.md";
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
