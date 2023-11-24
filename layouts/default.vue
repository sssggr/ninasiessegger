<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

useHead({
  meta: [
    { property: "og:title", content: t('seo.title') },
    { property: "og:description", content: t('seo.description') },
    { property: "og:image", content: 'https://ninasiessegger.de/card.png' },
  ]
})
</script>

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
}
</script>

<style>

</style>
