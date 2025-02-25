import { k as createComponent, u as renderUniqueStylesheet, v as renderScriptElement, w as createHeadAndContent, l as renderTemplate, m as renderComponent, x as unescapeHTML, o as createAstro, n as maybeRenderHead, p as addAttribute, q as renderTransition, s as createTransitionScope, y as renderSlot, z as renderHead } from './astro/server_CUYOnHqq.mjs';
import 'kleur/colors';
import 'p-limit';
import { A as AstroError, Z as UnknownContentCollectionError, x as prependForwardSlash } from './astro/assets-service_CrHFGqWZ.mjs';
/* empty css                           */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                           */

const defaultLang = "es";
const ui = {
  es: {},
  en: {}
};
const routes = {
  es: {
    servicios: "services",
    nosotros: "about-us",
    contactanos: "contact",
    portfolio1: "portfolio1",
    portfolio2: "portfolio2",
    portfolio3: "portfolio3",
    portfolio4: "portfolio4"
  },
  en: {
    servicios: "services",
    nosotros: "about-us",
    contactanos: "contact",
    portfolio1: "portfolio1",
    portfolio2: "portfolio2",
    portfolio3: "portfolio3",
    portfolio4: "portfolio4"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function getRouteFromUrl(url) {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split("/");
  const path = parts?.pop() || parts?.pop();
  if (path === void 0) {
    return void 0;
  }
  const currentLang = getLangFromUrl(url);
  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    const routerPath = route[path];
    return routerPath !== void 0 ? routerPath : void 0;
  }
  const getKeyByValue = (obj, value) => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };
  const reversedKey = getKeyByValue(
    routes[currentLang],
    path
  );
  if (reversedKey !== void 0) {
    return reversedKey;
  }
  return void 0;
}

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/en/about-us/aboutUs.md": () => import('./aboutUs_qAQe8Erm.mjs'),"/src/content/docs/en/about-us/bodyDown.md": () => import('./bodyDown_DTVfjcmY.mjs'),"/src/content/docs/en/contact/contactForm.md": () => import('./contactForm_y6rl3rlK.mjs'),"/src/content/docs/en/contact/faq.md": () => import('./faq_BmtuObyk.mjs'),"/src/content/docs/en/enviroment/footer.md": () => import('./footer_D1eCMaTC.mjs'),"/src/content/docs/en/enviroment/header.md": () => import('./header_DxugjAMu.mjs'),"/src/content/docs/en/enviroment/whatsApp.md": () => import('./whatsApp_C3KFnVCX.mjs'),"/src/content/docs/en/index/counter.md": () => import('./counter_CRdOv9yr.mjs'),"/src/content/docs/en/index/hero.md": () => import('./hero_BsrOhw1W.mjs'),"/src/content/docs/en/index/portafolio.md": () => import('./portafolio_C_PZhsGs.mjs'),"/src/content/docs/en/index/providing.md": () => import('./providing_D6qcn84C.mjs'),"/src/content/docs/en/index/review.md": () => import('./review_BXIcZX3J.mjs'),"/src/content/docs/en/index/step.md": () => import('./step_CtxvOsLV.mjs'),"/src/content/docs/en/index/team.md": () => import('./team_DMCXSST9.mjs'),"/src/content/docs/en/portfolio/portfolio1.md": () => import('./portfolio1_B8Apj53Q.mjs'),"/src/content/docs/en/portfolio/portfolio2.md": () => import('./portfolio2_DWWTOGNf.mjs'),"/src/content/docs/en/portfolio/portfolio3.md": () => import('./portfolio3_BPdB5snK.mjs'),"/src/content/docs/en/portfolio/portfolio4.md": () => import('./portfolio4_B7XRLWZh.mjs'),"/src/content/docs/en/services/service.md": () => import('./service_CYY4AHKY.mjs'),"/src/content/docs/es/about-us/aboutUs.md": () => import('./aboutUs_DzzrMsoT.mjs'),"/src/content/docs/es/about-us/bodyDown.md": () => import('./bodyDown_Bhzz-U1J.mjs'),"/src/content/docs/es/contact/contactForm.md": () => import('./contactForm_DTGAuC2n.mjs'),"/src/content/docs/es/contact/faq.md": () => import('./faq_aHXw1z1I.mjs'),"/src/content/docs/es/enviroment/footer.md": () => import('./footer_BaRg3lCY.mjs'),"/src/content/docs/es/enviroment/header.md": () => import('./header_AL1_Z0b5.mjs'),"/src/content/docs/es/enviroment/whatsApp.md": () => import('./whatsApp_Bx2f7qH8.mjs'),"/src/content/docs/es/index/counter.md": () => import('./counter_Djhnbs_3.mjs'),"/src/content/docs/es/index/hero.md": () => import('./hero_BNFU31rt.mjs'),"/src/content/docs/es/index/portafolio.md": () => import('./portafolio_FUS6_19S.mjs'),"/src/content/docs/es/index/providing.md": () => import('./providing_DkHgkfBp.mjs'),"/src/content/docs/es/index/review.md": () => import('./review_CWag4KUN.mjs'),"/src/content/docs/es/index/step.md": () => import('./step_DYlcSSg2.mjs'),"/src/content/docs/es/index/team.md": () => import('./team_BDu8MTRD.mjs'),"/src/content/docs/es/portfolio/portfolio1.md": () => import('./portfolio1_CPPsijY7.mjs'),"/src/content/docs/es/portfolio/portfolio2.md": () => import('./portfolio2_CA_1ygbz.mjs'),"/src/content/docs/es/portfolio/portfolio3.md": () => import('./portfolio3_DreoOtzA.mjs'),"/src/content/docs/es/portfolio/portfolio4.md": () => import('./portfolio4_BzOvUwFd.mjs'),"/src/content/docs/es/services/service.md": () => import('./service_DQR0AAnW.mjs')});
createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"docs":{"type":"content","entries":{"en/about-us/aboutus":"/src/content/docs/en/about-us/aboutUs.md","en/contact/contactform":"/src/content/docs/en/contact/contactForm.md","en/about-us/bodydown":"/src/content/docs/en/about-us/bodyDown.md","en/enviroment/footer":"/src/content/docs/en/enviroment/footer.md","en/contact/faq":"/src/content/docs/en/contact/faq.md","en/enviroment/header":"/src/content/docs/en/enviroment/header.md","en/enviroment/whatsapp":"/src/content/docs/en/enviroment/whatsApp.md","en/index/counter":"/src/content/docs/en/index/counter.md","en/index/hero":"/src/content/docs/en/index/hero.md","en/index/portafolio":"/src/content/docs/en/index/portafolio.md","en/index/providing":"/src/content/docs/en/index/providing.md","en/index/review":"/src/content/docs/en/index/review.md","en/index/step":"/src/content/docs/en/index/step.md","en/index/team":"/src/content/docs/en/index/team.md","en/services/service":"/src/content/docs/en/services/service.md","en/portfolio/portfolio1":"/src/content/docs/en/portfolio/portfolio1.md","en/portfolio/portfolio2":"/src/content/docs/en/portfolio/portfolio2.md","en/portfolio/portfolio3":"/src/content/docs/en/portfolio/portfolio3.md","en/portfolio/portfolio4":"/src/content/docs/en/portfolio/portfolio4.md","es/about-us/aboutus":"/src/content/docs/es/about-us/aboutUs.md","es/about-us/bodydown":"/src/content/docs/es/about-us/bodyDown.md","es/contact/contactform":"/src/content/docs/es/contact/contactForm.md","es/contact/faq":"/src/content/docs/es/contact/faq.md","es/enviroment/footer":"/src/content/docs/es/enviroment/footer.md","es/enviroment/whatsapp":"/src/content/docs/es/enviroment/whatsApp.md","es/enviroment/header":"/src/content/docs/es/enviroment/header.md","es/index/counter":"/src/content/docs/es/index/counter.md","es/index/hero":"/src/content/docs/es/index/hero.md","es/index/portafolio":"/src/content/docs/es/index/portafolio.md","es/index/providing":"/src/content/docs/es/index/providing.md","es/index/review":"/src/content/docs/es/index/review.md","es/index/step":"/src/content/docs/es/index/step.md","es/index/team":"/src/content/docs/es/index/team.md","es/services/service":"/src/content/docs/es/services/service.md","es/portfolio/portfolio1":"/src/content/docs/es/portfolio/portfolio1.md","es/portfolio/portfolio2":"/src/content/docs/es/portfolio/portfolio2.md","es/portfolio/portfolio3":"/src/content/docs/es/portfolio/portfolio3.md","es/portfolio/portfolio4":"/src/content/docs/es/portfolio/portfolio4.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/en/about-us/aboutUs.md": () => import('./aboutUs_DOXfI3BL.mjs'),"/src/content/docs/en/about-us/bodyDown.md": () => import('./bodyDown_0Ze6Dzgu.mjs'),"/src/content/docs/en/contact/contactForm.md": () => import('./contactForm_CdajQWWb.mjs'),"/src/content/docs/en/contact/faq.md": () => import('./faq_Dr5lqphS.mjs'),"/src/content/docs/en/enviroment/footer.md": () => import('./footer_6VLRPa9h.mjs'),"/src/content/docs/en/enviroment/header.md": () => import('./header_BP4VW8CG.mjs'),"/src/content/docs/en/enviroment/whatsApp.md": () => import('./whatsApp_Xd3SAYbe.mjs'),"/src/content/docs/en/index/counter.md": () => import('./counter_DK6OzRDT.mjs'),"/src/content/docs/en/index/hero.md": () => import('./hero_DllbBrd2.mjs'),"/src/content/docs/en/index/portafolio.md": () => import('./portafolio_CSSlj1Gq.mjs'),"/src/content/docs/en/index/providing.md": () => import('./providing_kfGlIoyo.mjs'),"/src/content/docs/en/index/review.md": () => import('./review_Ba-fdPGe.mjs'),"/src/content/docs/en/index/step.md": () => import('./step_BCv7WSAG.mjs'),"/src/content/docs/en/index/team.md": () => import('./team_CQT8S5fo.mjs'),"/src/content/docs/en/portfolio/portfolio1.md": () => import('./portfolio1_BbwjeVEk.mjs'),"/src/content/docs/en/portfolio/portfolio2.md": () => import('./portfolio2_CnVNzK9U.mjs'),"/src/content/docs/en/portfolio/portfolio3.md": () => import('./portfolio3_7Wh4MKrf.mjs'),"/src/content/docs/en/portfolio/portfolio4.md": () => import('./portfolio4_BP3Q1FEr.mjs'),"/src/content/docs/en/services/service.md": () => import('./service_BYwgUgbc.mjs'),"/src/content/docs/es/about-us/aboutUs.md": () => import('./aboutUs_CZDB2NPH.mjs'),"/src/content/docs/es/about-us/bodyDown.md": () => import('./bodyDown_Wl9lt5-9.mjs'),"/src/content/docs/es/contact/contactForm.md": () => import('./contactForm_DrVNfQN_.mjs'),"/src/content/docs/es/contact/faq.md": () => import('./faq_DFjjb6zX.mjs'),"/src/content/docs/es/enviroment/footer.md": () => import('./footer_CKZCu7L_.mjs'),"/src/content/docs/es/enviroment/header.md": () => import('./header_CL8-bxuP.mjs'),"/src/content/docs/es/enviroment/whatsApp.md": () => import('./whatsApp_tNG9nccd.mjs'),"/src/content/docs/es/index/counter.md": () => import('./counter_pUx8ZDT7.mjs'),"/src/content/docs/es/index/hero.md": () => import('./hero_Cx2hsmvf.mjs'),"/src/content/docs/es/index/portafolio.md": () => import('./portafolio_CUKChIhC.mjs'),"/src/content/docs/es/index/providing.md": () => import('./providing_CrN65HXk.mjs'),"/src/content/docs/es/index/review.md": () => import('./review_BSkbPAVi.mjs'),"/src/content/docs/es/index/step.md": () => import('./step_ByqVQbL2.mjs'),"/src/content/docs/es/index/team.md": () => import('./team_BcxO9n4m.mjs'),"/src/content/docs/es/portfolio/portfolio1.md": () => import('./portfolio1_zNQ3eZBs.mjs'),"/src/content/docs/es/portfolio/portfolio2.md": () => import('./portfolio2_B6-HnEaC.mjs'),"/src/content/docs/es/portfolio/portfolio3.md": () => import('./portfolio3_B9ys6A0e.mjs'),"/src/content/docs/es/portfolio/portfolio4.md": () => import('./portfolio4_hagp-kI3.mjs'),"/src/content/docs/es/services/service.md": () => import('./service_BEfFJLzH.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getData = async (url) => {
  const data = await getEntry("docs", url);
  return data?.data;
};

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const { lang } = Astro2.props;
  const data = await getData(`${lang}/enviroment/footer`);
  return renderTemplate`${maybeRenderHead()}<div class="calltoaction_section style_5" data-astro-cid-fy7dfr74> <div class="container" data-astro-cid-fy7dfr74> <div class="content_box bg_primary decoration_wrap text-center" data-astro-cid-fy7dfr74> <div class="row justify-content-center" data-astro-cid-fy7dfr74> <div class="col col-lg-7" data-astro-cid-fy7dfr74> <div class="section_heading text-white" data-astro-cid-fy7dfr74> <h2 class="heading_title mb-0" data-astro-cid-fy7dfr74> ${data.headTitle} </h2> </div> <a href="contact.html" class="bd-btn-link btn_warning" data-astro-cid-fy7dfr74> <span class="bd-button-content-wrapper" data-astro-cid-fy7dfr74> <span class="bd-button-icon" data-astro-cid-fy7dfr74> <i class="fa-light fa-arrow-right-long" data-astro-cid-fy7dfr74></i> </span> <span class="pd-animation-flip" data-astro-cid-fy7dfr74> <span class="bd-btn-anim-wrapp" data-astro-cid-fy7dfr74> <span class="bd-button-text" data-astro-cid-fy7dfr74>${data.bottomTitle}</span> <span class="bd-button-text" data-astro-cid-fy7dfr74>${data.bottomTitle}</span> </span> </span> </span> </a> </div> </div> <div class="deco_item shape_2" data-astro-cid-fy7dfr74> <img class="wow fadeInUp" data-wow-delay=".2s" src="assets/images/shapes/shape_9.svg" alt="Paradox Illustration Image" data-astro-cid-fy7dfr74> </div> </div> </div> </div> <div class="footer_widget_area" data-astro-cid-fy7dfr74> <div class="container" data-astro-cid-fy7dfr74> <div class="row" data-astro-cid-fy7dfr74> <div class="col col-lg-3 col-md-6" data-astro-cid-fy7dfr74> <div class="site_logo" data-astro-cid-fy7dfr74> <a class="site_link"${addAttribute("/" + lang, "href")} data-astro-reload data-astro-cid-fy7dfr74> ${renderComponent($$result, "Logo", null, { "alt": "Logo de CerqueTech Solutions", "srcdark": "/assets/images/logo/white_with.png", "srcwith": "/assets/images/logo/dark_with_icon_color.png", "client:only": "react", "client:component-hydration": "only", "data-astro-cid-fy7dfr74": true, "client:component-path": "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/components/environment/Logo/Logo", "client:component-export": "default" })} </a> </div> </div> <div class="col col-lg-3 col-md-6" data-astro-cid-fy7dfr74> <div class="footer_widget" data-astro-cid-fy7dfr74> <h3 class="footer_widget_title" data-astro-cid-fy7dfr74>${data.widget1Ttitle}</h3> <div class="icon_list_widget" data-astro-cid-fy7dfr74> <h4 class="widget_title mb-0" data-astro-cid-fy7dfr74>${data.widget1Titlep}</h4> <ul class="icon_list unordered_list_block" data-astro-cid-fy7dfr74> <li data-astro-cid-fy7dfr74> <a href="mailto:mateo.cerquetella@cerquetech.com" data-astro-cid-fy7dfr74> <span class="list_item_text" data-astro-cid-fy7dfr74>
mateo.cerquetella@cerquetech.com</span> </a> </li> </ul> </div> </div> </div> <div class="col col-lg-3 col-md-6" data-astro-cid-fy7dfr74> <div class="footer_widget" data-astro-cid-fy7dfr74> <h3 class="footer_widget_title" data-astro-cid-fy7dfr74>${data.widget2Title}</h3> <div class="icon_list_widget" data-astro-cid-fy7dfr74> <ul class="icon_list unordered_list_block" data-astro-cid-fy7dfr74> <li data-astro-cid-fy7dfr74> <a data-astro-cid-fy7dfr74> <span class="d-block mb-2" data-astro-cid-fy7dfr74></span> <span class="list_item_text" data-astro-cid-fy7dfr74> ${data.widget2Titlep} </span> </a> </li> </ul> </div> </div> </div> <div class="col col-lg-3 col-md-6" data-astro-cid-fy7dfr74> <div class="footer_widget" data-astro-cid-fy7dfr74> <h3 class="footer_widget_title" data-astro-cid-fy7dfr74>${data.newsletter}</h3> <form action="#" data-astro-cid-fy7dfr74> <div class="small_newsletter_form" data-astro-cid-fy7dfr74> <input type="email" id="email"${addAttribute(data.newsletterPlace, "placeholder")} autocomplete="email" data-astro-cid-fy7dfr74> <button type="submit" data-astro-cid-fy7dfr74> <i class="far fa-arrow-right" data-astro-cid-fy7dfr74></i> </button> </div> </form> </div> </div> </div> </div> </div> <div class="footer_bottom" data-astro-cid-fy7dfr74> <div class="container" data-astro-cid-fy7dfr74> <div class="footer_bottom_grid" data-astro-cid-fy7dfr74> <div class="copyright_widget" data-astro-cid-fy7dfr74> ${data.copyright} © 2023-${currentYear} ${data.by} <a target="_blank" href="https://www.cerquetech.com" data-astro-cid-fy7dfr74><u data-astro-cid-fy7dfr74>CerqueTech Solutions™</u></a> ${data.copyright1} </div> </div> </div> </div> `;
}, "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/components/environment/Footer.astro", void 0);

const Preloader = () => {
  const [visible, setVisible] = useState("visible");
  useEffect(() => {
    const checkForHeader = () => {
      const header = document.querySelector(".site_header.site_header_3");
      if (header) {
        hidePreloader();
        clearInterval(intervalId);
      }
    };
    const hidePreloader = () => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.classList.add("hidden");
        setVisible("hidden");
      }
    };
    const intervalId = setInterval(checkForHeader, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "preloader " + visible, id: "preloader", children: /* @__PURE__ */ jsxs("div", { className: "sk-three-bounce", children: [
    /* @__PURE__ */ jsx("div", { className: "sk-child sk-bounce1" }),
    /* @__PURE__ */ jsx("div", { className: "sk-child sk-bounce2" }),
    /* @__PURE__ */ jsx("div", { className: "sk-child sk-bounce3" })
  ] }) });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, menu, lang } = Astro2.props;
  const route = getRouteFromUrl(Astro2.url);
  return renderTemplate(_a || (_a = __template(["<html", "", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta http-equiv="x-ua-compatible" content="ie=edge"><meta name="description" content="CerqueTech Solutions es una empresa l\xEDder en tecnolog\xEDa especializada en desarrollo web, soluciones de software y m\xE1s."><meta name="keywords" content="CerqueTech Solutions, Desarrollo Web, Soluciones de Software"><meta name="author" content="CerqueTech Solutions"><link rel="canonical" href="https://www.cerquetech.com"><link rel="shortcut icon" href="/assets/images/logo/favicon.png" type="image/x-icon"><link rel="stylesheet" type="text/css" href="/assets/css/cursor.css"><link rel="stylesheet" type="text/css" href="/assets/css/slick.css"><link rel="stylesheet" type="text/css" href="/assets/css/slick-theme.css"><link rel="stylesheet" type="text/css" href="/assets/css/style.css"><link rel="stylesheet" type="text/css" href="/assets/css/darkMode.css"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="/assets/css/fontawesome-pro.css"><meta property="og:title" content="CerqueTech Solutions"><meta property="og:description" content="CerqueTech Solutions es una empresa l\xEDder en tecnolog\xEDa especializada en desarrollo web, soluciones de software y m\xE1s."><meta property="og:image" content="https://www.cerquetech.com/logo.png"><meta property="og:url" content="https://www.cerquetech.com"><meta name="twitter:card" content="summary_large_image"><meta name="generator"', "><title>", "</title><!-- <ViewTransitions /> -->", '</head> <body> <div class="page_wrapper"> ', " ", " <header> ", ' </header> <main class="page_content"> ', ' </main> <footer class="site_footer style_4"> ', ` </footer> </div> <script>
            function setDarkMode(document) {
                let theme =
                    localStorage.getItem('darkMode') === 'true'
                        ? 'dark'
                        : 'light';
                document.documentElement.dataset.theme = theme;
            }
            setDarkMode(document);
            document.addEventListener('astro:before-swap', (ev) => {
                setDarkMode(ev.newDocument);
            });
        <\/script> <script src="/assets/js/jquery.min.js"><\/script> <script src="/assets/js/parallax-scroll.js"><\/script> <script src="/assets/js/cursor.js"><\/script>  </body> </html>`])), addAttribute(lang, "lang"), addAttribute(renderTransition($$result, "smooz4hq", "none", ""), "data-astro-transition-scope"), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Preloader", Preloader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/components/environment/Preloader/Preloader", "client:component-export": "default" }), renderComponent($$result, "WhatsAppButton", null, { "client:only": "react", "lang": lang, "client:component-hydration": "only", "client:component-path": "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/components/environment/WhatsAppButton/WhatsAppButton", "client:component-export": "default" }), renderComponent($$result, "Header", null, { "client:only": "react", "menu": menu, "lang": lang, "route": route, "url": Astro2.url, "client:component-hydration": "only", "client:component-path": "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/components/environment/Header/Header", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "lang": lang, "data-astro-transition-scope": renderTransition($$result, "w4qmxiah", "none", ""), "data-astro-transition-persist": createTransitionScope($$result, "w4qmxiah") }));
}, "/Users/mateocerquetella/Documents/Mateo/Developer/CerqueTech/CerqueTech Landing Page/src/layouts/Layout.astro", "self");

export { $$Layout as $, getLangFromUrl as a, getData as g };
