declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"en/about-us/aboutUs.md": {
	id: "en/about-us/aboutUs.md";
  slug: "en/about-us/aboutus";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/about-us/bodyDown.md": {
	id: "en/about-us/bodyDown.md";
  slug: "en/about-us/bodydown";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/contact/contactForm.md": {
	id: "en/contact/contactForm.md";
  slug: "en/contact/contactform";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/contact/faq.md": {
	id: "en/contact/faq.md";
  slug: "en/contact/faq";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/enviroment/footer.md": {
	id: "en/enviroment/footer.md";
  slug: "en/enviroment/footer";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/enviroment/header.md": {
	id: "en/enviroment/header.md";
  slug: "en/enviroment/header";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/enviroment/whatsApp.md": {
	id: "en/enviroment/whatsApp.md";
  slug: "en/enviroment/whatsapp";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/index/counter.md": {
	id: "en/index/counter.md";
  slug: "en/index/counter";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/index/hero.md": {
	id: "en/index/hero.md";
  slug: "en/index/hero";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/index/portafolio.md": {
	id: "en/index/portafolio.md";
  slug: "en/index/portafolio";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/index/providing.md": {
	id: "en/index/providing.md";
  slug: "en/index/providing";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/index/review.md": {
	id: "en/index/review.md";
  slug: "en/index/review";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/index/step.md": {
	id: "en/index/step.md";
  slug: "en/index/step";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/index/team.md": {
	id: "en/index/team.md";
  slug: "en/index/team";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/portfolio/portfolio1.md": {
	id: "en/portfolio/portfolio1.md";
  slug: "en/portfolio/portfolio1";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/portfolio/portfolio2.md": {
	id: "en/portfolio/portfolio2.md";
  slug: "en/portfolio/portfolio2";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/portfolio/portfolio3.md": {
	id: "en/portfolio/portfolio3.md";
  slug: "en/portfolio/portfolio3";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/portfolio/portfolio4.md": {
	id: "en/portfolio/portfolio4.md";
  slug: "en/portfolio/portfolio4";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"en/services/service.md": {
	id: "en/services/service.md";
  slug: "en/services/service";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/about-us/aboutUs.md": {
	id: "es/about-us/aboutUs.md";
  slug: "es/about-us/aboutus";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/about-us/bodyDown.md": {
	id: "es/about-us/bodyDown.md";
  slug: "es/about-us/bodydown";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/contact/contactForm.md": {
	id: "es/contact/contactForm.md";
  slug: "es/contact/contactform";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/contact/faq.md": {
	id: "es/contact/faq.md";
  slug: "es/contact/faq";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/enviroment/footer.md": {
	id: "es/enviroment/footer.md";
  slug: "es/enviroment/footer";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/enviroment/header.md": {
	id: "es/enviroment/header.md";
  slug: "es/enviroment/header";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/enviroment/whatsApp.md": {
	id: "es/enviroment/whatsApp.md";
  slug: "es/enviroment/whatsapp";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/index/counter.md": {
	id: "es/index/counter.md";
  slug: "es/index/counter";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/index/hero.md": {
	id: "es/index/hero.md";
  slug: "es/index/hero";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/index/portafolio.md": {
	id: "es/index/portafolio.md";
  slug: "es/index/portafolio";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/index/providing.md": {
	id: "es/index/providing.md";
  slug: "es/index/providing";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/index/review.md": {
	id: "es/index/review.md";
  slug: "es/index/review";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/index/step.md": {
	id: "es/index/step.md";
  slug: "es/index/step";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/index/team.md": {
	id: "es/index/team.md";
  slug: "es/index/team";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/portfolio/portfolio1.md": {
	id: "es/portfolio/portfolio1.md";
  slug: "es/portfolio/portfolio1";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/portfolio/portfolio2.md": {
	id: "es/portfolio/portfolio2.md";
  slug: "es/portfolio/portfolio2";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/portfolio/portfolio3.md": {
	id: "es/portfolio/portfolio3.md";
  slug: "es/portfolio/portfolio3";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/portfolio/portfolio4.md": {
	id: "es/portfolio/portfolio4.md";
  slug: "es/portfolio/portfolio4";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/services/service.md": {
	id: "es/services/service.md";
  slug: "es/services/service";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
