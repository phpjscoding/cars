// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	content: {
		markdown: {
			toc: {
				depth: 3,
				searchDepth: 3,
			},
		},
		highlight: {
			theme: "dracula-soft",
		},
	},

	modules: ["@nuxt/content", "@nuxtjs/tailwindcss","@nuxt/image-edge"],
	extends: [
		'nuxt-seo-kit'
	  ],
	  runtimeConfig: {
		public: {
		  siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://spain-cars.com',
		  siteName: 'Spain Cars',
		  siteDescription: 'Car renting in Spain,find the best guides that will help you hire a car',
		  language: 'en', // prefer more explicit language codes like `en-AU` over `en`
		}
	  },
});
