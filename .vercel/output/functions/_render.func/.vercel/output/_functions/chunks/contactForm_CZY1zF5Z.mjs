import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"snackTitle":"Success","snackMsg":"Submitted successfully","snack1Title":"Error","snack1Msg1":"Please complete the recaptcha","snack1Msg2":"Error sending message. Please try again.","span":"Contact us","h3":"Get in touch","placeHolderName":"Name","msgName":"Name is required","msg1Name":"Name must be at least 3 characters","msg2Name":"Name must have a maximum of 20 characters","msg3Name":"Only letters are allowed in the name","placeHolderLastName":"Last name","msgLastName":"Last name is required","msg1LastName":"Last name must be at least 3 characters","msg2LastName":"Last name must have a maximum of 20 characters","msg3LastName":"Only letters are allowed in the last name","placeHolderTel":"Phone","msgTel":"Phone is required","msg1Tel":"Only numbers are allowed","select1":"Select Subject","select2":"Web development","select3":"Mobile application development","select4":"Cloud Solutions","select5":"DevOps and Automation","select6":"Microservices Architecture","select7":"Cybersecurity Consulting","select8":"Analysis of data","select9":"AI and Machine Learning","placeHolderMsg":"Write your message","msgMsg":"The message is required","msg1Msg":"The minimum number of characters is 5","bttnTxt":"Send now"};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/en/contact/contactForm.md";
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
