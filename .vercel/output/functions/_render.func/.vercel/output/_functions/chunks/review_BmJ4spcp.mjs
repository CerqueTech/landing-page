import { k as createComponent, l as renderTemplate, n as maybeRenderHead, x as unescapeHTML } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"span":"Testimonios","h3":"Lo que dicen nuestros clientes","elem1Title":"Soluciones Innovadoras","elem1Content":"La dedicación del equipo de Cerquetech fue más allá de lo esperado. Personalmente, siempre sentí que realmente les importaba el éxito de nuestro proyecto.","elem1Name":"Tomas Pacios Moya","elem1Designation":"CEO de PM Finance","elem2Title":"Experiencia de Usuario Sobresaliente","elem2Content":"Lo que más valoro de Cerquetech es su enfoque humano. Fernando, de su equipo, fue particularmente atento; su habilidad para escuchar y entender nuestras preocupaciones transformó completamente nuestra forma de trabajar.","elem2Name":"Andres Sosa","elem2Designation":"Maestro Mayor de Obras","elem3Title":"Soporte Confiable y Eficaz","elem3Content":"El soporte técnico de Cerquetech es confiable y siempre accesible. Su capacidad para solucionar problemas rápidamente y con eficacia nos ha ayudado a mantener nuestras operaciones funcionando sin problemas.","elem3Name":"Trinidad Tevini","elem3Designation":"CEO de Tevini Finance"};
				const file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/content/docs/es/index/review.md";
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
