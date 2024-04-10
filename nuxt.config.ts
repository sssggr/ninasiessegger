// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-simple-sitemap'],
  sitemap: {
    hostname: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://ninasiessegger.de',
  },
  css: ['normalize.css/normalize.css', 'flexboxgrid', '@/assets/css/base.css'],
  app: {
    head: {
      title: 'Nina Siessegger - Team- und Organisationsentwicklung, Mediation',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: "180x180", href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon-16x316.png' },
        { rel: 'manifest', href: '/site.manifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: "#5bbad5" },
      ]
    },
  }
})
