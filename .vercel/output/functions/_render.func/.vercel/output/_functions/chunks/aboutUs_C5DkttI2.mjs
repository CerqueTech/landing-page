import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"bttnTxt":"Discover Our Philosophy","headTitle":"Innovating with Values and Technology","righTxt":"At Cerquetech Solutions, our passion for technology merges with a firm commitment to ethical and sustainable innovation. We adopt the latest technological trends to offer solutions that are not only advanced, but also responsible and aligned with the values of our clients.","item1Txt":"Ethical Commitment: Innovation with responsibility.","item2Txt":"Sustainability: Technology for a better future.","item3Txt":"Technological Advancement: We adopt the latest trends.","imgAlt":"Cerquetech Solutions Team","bBttnTxt":"Our Technologies","bHeadTxt":"Leading with Innovation and Technological Expertise"};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/en/about-us/aboutUs.md";
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
