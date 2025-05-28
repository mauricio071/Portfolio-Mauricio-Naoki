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
          name: "descriptBrion",
          content:
            "Maurício Naoki é um desenvolvedor front-end especializado em criar experiências digitais funcionais e envolventes. Com experiências em Vue.js, Nuxt.js, Javascript, e outras tecnologias modernas, contribuiu para projetos em empresas como Sixchains Digital House e o grupo Euro 17.",
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Maurício Naoki" },
        { property: "og:title", content: "Mauricio Naoki - Portfolio" },
        {
          property: "og:description",
          content:
            "Maurício Naoki é um desenvolvedor front-end especializado em criar experiências digitais funcionais e envolventes. Com experiências em Vue.js, Nuxt.js, Javascript, e outras tecnologias modernas, contribuiu para projetos em empresas como Sixchains Digital House e o grupo Euro 17.",
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
            "Maurício Naoki é um desenvolvedor front-end especializado em criar experiências digitais funcionais e envolventes. Com experiências em Vue.js, Nuxt.js, Javascript, e outras tecnologias modernas, contribuiu para projetos em empresas como Sixchains Digital House e o grupo Euro 17.",
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
      fallbackLocale: "pt-BR",
    },
  },
});
