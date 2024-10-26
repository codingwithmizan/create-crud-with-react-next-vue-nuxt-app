export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  devServer: {
    port: 3004,
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // components:{
  //   dirs:[]
  // },

  routeRules: {
    // "/": { prerender: true },
    "/home": { redirect: "/" },
  },
  // ssr: false,
  // imports: {
  //   autoImport: false,fa
  // },
  image: {
    dir: "assets/images",
  },
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
        language: "en-US",
        file: "en.json",
      },
      {
        code: "bn",
        name: "বাংলা",
        language: "bn-BD",
        file: "bn.json",
      },
    ],
  },
  modules: ["@nuxt/image", "@nuxt/icon", "@vee-validate/nuxt", "@nuxtjs/i18n"],
});
