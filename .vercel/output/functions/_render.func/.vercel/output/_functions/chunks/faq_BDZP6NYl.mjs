import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"headingTitle":"User FAQs","bttnTxt":"I need to know more","item1Txt":"How is the cost of a project determined?","item1BodyTxt":"The cost of a project depends on several factors, such as the complexity of the design, the required functionalities, and the development time. We always provide a detailed quote after fully understanding your specific needs.","item1Id":"cost","item2Txt":"Do you offer ongoing maintenance for developed projects?","item2BodyTxt":"Yes, we offer maintenance and support services for all the projects we develop. This includes security updates, performance improvements and technical assistance.","item2Id":"maintenance","item3Txt":"How do you ensure compatibility with mobile devices?","item3BodyTxt":"We focus on responsive design to ensure that all of our apps and websites work seamlessly on a variety of mobile devices, optimizing the user experience across all platforms.","item3Id":"mobile compatibility","item4Txt":"What kind of support do you offer after launching a website or app?","item4BodyTxt":"After launch, we offer a period of technical support to address any problems or questions you may have. In addition, we are available for future collaborations, whether it be improvements, updates or the development of new functionality.","item4Id":"future_support","item5Txt":"What technologies do you use for project development?","item5BodyTxt":"We use a variety of modern and efficient technologies, including JavaScript, TypeScript, Angular, React, Node.js, among others. Our technology selection depends on the specific requirements of the project and the best solution for your needs.","item5Id":"tech_stack","item6Txt":"Can you develop customized solutions for specific business needs?","item6BodyTxt":"Absolutely. We specialize in developing customized solutions that are specifically tailored to the unique needs of your business, ensuring that the final product meets your expectations and objectives.","item6Id":"custom_solution"};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/en/contact/faq.md";
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
