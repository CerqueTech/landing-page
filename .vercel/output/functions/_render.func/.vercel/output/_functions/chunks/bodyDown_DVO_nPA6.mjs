import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"box1Title":"Customer Support","box1Txt":"Customer service is our top priority, and we seek to go beyond simple satisfaction. We strive to offer genuine care, exceeding the expectations and needs of those who trust us.","box2Title":"Using empathy","box2Txt":"We continue with customer care. Practicing empathy and putting yourself in the customer's shoes takes customer service to a higher level.","box3Title":"Communication skills","box3Txt":"This may seem obvious, but in reality there is much more to do. Learn how to communicate with a client. First, you must be able to speak openly","box4Title":"Teaching and mentoring","box4Txt":"The last but one of the most important things is to give back. Taking the time to teach new developers or mentor someone is essential."};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/en/about-us/bodyDown.md";
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
