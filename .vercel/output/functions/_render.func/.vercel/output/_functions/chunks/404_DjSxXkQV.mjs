import { k as createComponent, l as renderTemplate, m as renderComponent, n as maybeRenderHead } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_CTaNW-fO.mjs';
import { $ as $$Image } from './_astro_assets_vtXDUP6m.mjs';
/* empty css                       */

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "es", "menu": "", "title": "Error", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="error_section text-center mouse_move" data-astro-cid-zetdm5md> <div class="container" data-astro-cid-zetdm5md> <div class="error_image decoration_wrap text-center" data-astro-cid-zetdm5md> ${renderComponent($$result2, "Image", $$Image, { "width": 600, "height": 600, "src": "/assets/images/bg/error.png", "alt": "Imagen de error", "data-astro-cid-zetdm5md": true })} </div> <div class="error_content" data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>Página no encontrada</h1> <p data-astro-cid-zetdm5md>
La URL solicitada que estás buscando no <span class="d-md-block" data-astro-cid-zetdm5md>existe en este servidor.</span> </p> <a href="/es" data-astro-reload class="bd-btn-link btn_primary" data-astro-cid-zetdm5md> <span class="bd-button-content-wrapper" data-astro-cid-zetdm5md> <span class="bd-button-icon" data-astro-cid-zetdm5md> <i class="fa-light fa-arrow-right-long" data-astro-cid-zetdm5md></i> </span> <span class="pd-animation-flip" data-astro-cid-zetdm5md> <span class="bd-btn-anim-wrapp" data-astro-cid-zetdm5md> <span class="bd-button-text" data-astro-cid-zetdm5md>Volver a la Página Principal</span> <span class="bd-button-text" data-astro-cid-zetdm5md>Volver a la Página Principal</span> </span> </span> </span> </a> </div> </div> </section> ` })} `;
}, "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/pages/404.astro", void 0);

const $$file = "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
