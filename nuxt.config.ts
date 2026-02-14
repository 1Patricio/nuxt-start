// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   runtimeConfig: {
    titleSite: 'Curso VueJs',
    public: {
      apiBase: '/api',
      titleSite: 'Curso Vuejs Expert'
    },
  },
})
