// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['normalize.css/normalize.css', 'flexboxgrid', '@/assets/css/base.css'],
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    lazy: true,
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js' },
      { code: 'de', iso: 'de-DE', file: 'de.js' },
    ],
    langDir: 'locales/',
    defaultLocale: 'de',
    detectBrowserLanguage: false,
    customRoutes: 'config', 
    pages: {
      'ueber-mich': {
        de: '/ueber-mich',
        en: '/about-me', 
      },
      'agile-organisationsberatung': {
        de: '/agile-organisationsberatung',
        en: '/agile-organization-development'
      },
      kontakt: {
        de: '/kontakt',
        en: '/contact', 
      },
      impressum: {
        de: '/impressum',
        en: '/imprint', 
      },
      teamentwicklung: {
        de: '/teamentwicklung',
        en: '/team-development', 
      },
      datenschutz: {
        de: '/datenschutz',
        en: '/data-protection', 
      },
      'wie-ich-arbeite': {
        de: '/wie-ich-arbeite',
        en: '/how-i-work', 
      },
    },
    baseUrl: 'https://ninasiessegger.de'
  },
})
