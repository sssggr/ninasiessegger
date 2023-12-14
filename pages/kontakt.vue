<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const i18nHead = useLocaleHead({ addSeoAttributes: true })

useHead({
	htmlAttrs: { lang: i18nHead.value.htmlAttrs.lang },
	link: [...i18nHead.value.link],
	meta: [...i18nHead.value.meta]
})

useSeoMeta({
  title: t('seo.contact.title'),
  ogTitle: t('seo.contact.title'),
  ogDescription: t('seo.contact.description'),
  description: t('seo.contact.description'),
})
</script>

<template>
  <div class="row">
    <div class="col-xs-12 col-md-offset-1 col-lg-offset-2 col-lg-9 col-md-10">
      <h1 class="z-100">
        {{ $t('contact.headline') }}
      </h1>
      <p class="z-100">{{ $t('contact.paragraph1') }}</p>
      <p>
        <a href="mailto:hallo@ninasiessegger.de">
          hallo@ninasiessegger.de
        </a>
      </p>
      <p>
        <a href="tel:+49 (0)170 2610977">
          {{ $t('contact.phone') }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kontakt',
}
</script>

<style scoped>
.contact {
  margin-bottom: 1rem;
}

.contact p {
  margin: 0;
}
</style>
