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
  app: {
    head: {
      title: 'Módulo Nuxt - Curso VueExpert',
      htmlAttrs: {
        lang: 'pt-br'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in'}
  }
})
