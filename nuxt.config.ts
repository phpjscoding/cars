// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app:{
     head:{
		link:[
			{rel:'icon',type:'image/x-icon',href:'/favicon.ico'}
		]
	 }
	},
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss","@nuxt/image-edge"],
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
});
