import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"step1title":"Global Experts","step2title":"Guaranteed quality","step3title":"Fast answer","span":"Why choose us?","h3":"We boost your business","p":"At CerqueTech, we fuse experience, innovation and commitment to transform your ideas into cutting-edge technological solutions. We are dedicated to understanding and anticipating your needs, guaranteeing a collaboration that goes beyond the conventional. With us, your vision becomes reality, propelling your business to new heights of success and efficiency.","spanbuttontext":"Explore our services"};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/en/index/step.md";
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
