import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"span":"Nuestro equipo","h3":"Nuestros miembros del equipo","m1Name":"Mateo Cerquetella","m1Designation":"CEO & Software Architect","m1Linkedin":"https://www.linkedin.com/in/mateocerquetella/","m2Name":"Fernando Schlottman","m2Designation":"Sr. Software Developer","m2Linkedin":"https://www.linkedin.com/in/fernando-schlottmann/","m3Name":"Federico Rosales","m3Designation":"Jr. Software Developer","m3Linkedin":"https://www.linkedin.com/in/federosaless/","m4Name":"Matias Kalil Gomez","m4Designation":"Jr. Software Developer","m4Linkedin":"https://www.linkedin.com/in/matías-kalil-gómez-26b647223/","span1":"Conocé a nuestro equipo"};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/es/index/team.md";
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
