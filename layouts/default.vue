<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useSeoMeta({
  title: t('seo.title'),
  ogTitle: t('seo.title'),
  ogDescription: t('seo.description'),
  description: t('seo.description'),
  ogSiteName: t('seo.title'),
  ogUrl: 'https://ninasiessegger.de',
  ogImage: 'https://ninasiessegger.de/card.png'
})
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <div class="wrap container-fluid">
      <NavBar />
      <main>
        <slot />
      </main>
      <DefaultFooter />
    </div>
  </Html>
</template>

<script>
import DefaultFooter from '~/components/DefaultFooter'
import NavBar from '~/components/NavBar'

export default {
  components: {
    DefaultFooter,
    NavBar
  },
}
</script>

<style>

</style>
