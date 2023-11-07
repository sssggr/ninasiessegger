// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['normalize.css/normalize.css', 'flexboxgrid', '@/assets/css/base.css'],
  modules: [
    '@nuxtjs/i18n',
  ],
  app: {
    head: {
      title: 'Nina Siessegger - Agile Organisationsberatung, Teamentwicklung & Moderation',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: "180x180", href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon-16x316.png' },
        { rel: 'manifest', href: '/site.manifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: "#5bbad5" }
      ]
    },
  },
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
