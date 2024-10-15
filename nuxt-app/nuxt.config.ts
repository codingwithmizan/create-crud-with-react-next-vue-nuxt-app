export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  // ssr: false,

  // imports: {
  //   autoImport: false,
  // },

  devServer: {
    port: 3004,
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_BASE_URL,
    },
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

  modules: ["@nuxt/image"],
});