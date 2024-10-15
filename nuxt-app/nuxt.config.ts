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
  //   autoImport: false,
  // },
  modules: ["@nuxt/image"],
});
