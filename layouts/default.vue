<template>
  <div class="wrap container-fluid">
    <NavBar />
    <main>
      <slot />
    </main>
    <DefaultFooter />
  </div>
</template>

<script>
import DefaultFooter from '~/components/DefaultFooter'
import NavBar from '~/components/NavBar'

export default {
  components: {
    DefaultFooter,
    NavBar
  },
  head() {
    const i18nHead = this.$localeHead({ addSeoAttributes: true })
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('seo.description')
        },
        {
          hid: 'og_sitename',
          name: 'og:sitename',
          content: this.$t('seo.title') 
        },
        {
          hid: 'og_url',
          property: 'og:url',
          content: 'https://ninasiessegger.de'
        },
        {
          hid: 'og_image',
          property: 'og:image',
          content: 'https://ninasiessegger.de/card.png'
        },
        {
          hid: 'og_title',
          property: 'og:title',
          content: this.$t('seo.title') 
        },
        {
          hid: 'og_description',
          property: 'og:description',
          content: this.$t('seo.description')
        },
        ...i18nHead.meta
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://ninasiessegger.de'
        },
        ...i18nHead.link
      ]
    }
  }
}
</script>

<style>

</style>
