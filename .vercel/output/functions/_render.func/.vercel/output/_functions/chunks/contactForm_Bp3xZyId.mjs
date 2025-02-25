import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"snackTitle":"Success","snackMsg":"Enviado correctamente","snack1Title":"Error","snack1Msg1":"Complete el recaptcha porfavor","snack1Msg2":"Error al enviar el mensaje. Por favor, intenta nuevamente.","span":"Contactanos","h3":"Ponete en contacto","placeHolderName":"Nombre","msgName":"Nombre es requerido","msg1Name":"Nombre debe tener al menos 3 caracteres","msg2Name":"Nombre debe tener máximo 20 caracteres","msg3Name":"Solo se permiten letras en el nombre","placeHolderLastName":"Apellido","msgLastName":"Apellido es requerido","msg1LastName":"Apellido debe tener al menos 3 caracteres","msg2LastName":"Apellido debe tener máximo 20 caracteres","msg3LastName":"Solo se permiten letras en el apellido","placeHolderTel":"Telefono","msgTel":"Telefono es requerido","msg1Tel":"Solo se permiten números","select1":"Seleccionar Asunto","select2":"Desarrollo Web","select3":"Desarrollo de Aplicaciones Móviles","select4":"Soluciones en la Nube","select5":"DevOps y Automatización","select6":"Arquitectura de Microservicios","select7":"Consultoría en Ciberseguridad","select8":"Análisis de Datos","select9":"IA & Aprendizaje Automático","placeHolderMsg":"Escribe tu mensaje","msgMsg":"El mensaje es requerido","msg1Msg":"El minimo de caracteres es 5","bttnTxt":"Enviar ahora"};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/es/contact/contactForm.md";
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
