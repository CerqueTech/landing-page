import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"box1Title":"Atención al cliente","box1Txt":"La atención al cliente es nuestra máxima prioridad, y buscamos ir más allá de la simple satisfacción. Nos esmeramos en ofrecer un cuidado genuino, superando las expectativas y necesidades de quienes confían en nosotros.","box2Title":"Usando la empatía","box2Txt":"Continuamos con el cuidado al cliente. Practicar la empatía y ponerse en el lugar del cliente lleva la atención al cliente a un nivel superior.","box3Title":"Habilidades de comunicación","box3Txt":"Esto puede parecer obvio, pero en realidad hay mucho mas que hacer. Aprender a comunicarse con un cliente. Primero, deber ser capaz de hablar abiertamente","box4Title":"Enseñanza y tutoría","box4Txt":"La última pero una de las cosas más importantes es retribuir. Tomarse el tiempo para enseñar a desarrolladores novatos o asesorar a alguien es fundamental."};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/es/about-us/bodyDown.md";
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
