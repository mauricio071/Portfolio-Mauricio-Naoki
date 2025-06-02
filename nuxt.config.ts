// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "vue3-carousel-nuxt",
    "@vueuse/motion/nuxt",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
  ],
  app: {
    head: {
      title: "Mauricio Naoki - Portfolio",
      meta: [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          name: "description",
          content:
            "Desenvolvedor Front-end com mais de 2 anos de experiência em Vue, React e integração com APIs REST. Graduado em Ciência da Computação pela Universidade Cidade de São Paulo, com sólida formação técnica e prática em desenvolvimento web.",
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Maurício Naoki" },
        { property: "og:title", content: "Mauricio Naoki - Portfolio" },
        {
          property: "og:description",
          content:
            "Desenvolvedor Front-end com mais de 2 anos de experiência em Vue, React e integração com APIs REST. Graduado em Ciência da Computação pela Universidade Cidade de São Paulo, com sólida formação técnica e prática em desenvolvimento web.",
        },
        // { property: 'og:image', content: '' },
        {
          property: "og:url",
          content: "https://mauricio-naoki-portfolio.netlify.app/",
        },
        { property: "og:type", content: "website" },
        // { name: 'twitter:card', content: '' },
        { name: "twitter:title", content: "Mauricio Naoki - Portfolio" },
        {
          name: "twitter:description",
          content:
            "Desenvolvedor Front-end com mais de 2 anos de experiência em Vue, React e integração com APIs REST. Graduado em Ciência da Computação pela Universidade Cidade de São Paulo, com sólida formação técnica e prática em desenvolvimento web.",
        },
        // { name: 'twitter:image', content: '' },
        { name: "language", content: "pt-BR" },
        { name: "geo.region", content: "BR" },
        { name: "geo.placename", content: "Brasil" },
        // { name: 'google-site-verification', content: 'código-de-verificação-google' }
      ],
      htmlAttrs: {
        lang: "pt-BR",
      },
    },
  },
  icon: {
    serverBundle: {
      collections: ["mdi", "material-symbols"],
    },
  },
  i18n: {
    locales: [
      { code: "pt-BR", name: "Português", file: "pt-BR.json" },
      { code: "en-US", name: "English", file: "en-US.json" },
    ],
    defaultLocale: "pt-BR",
    lazy: true,
    strategy: "no_prefix",
    vueI18n: "./i18n.config.ts",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      fallbackLocale: "en-US",
    },
  },
});
