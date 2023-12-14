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
  title: t('seo.mediation.title'),
  ogTitle: t('seo.mediation.title'),
  ogDescription: t('seo.mediation.description'),
  description: t('seo.mediation.description'),
})
</script>

<template>
  <div class="row">
    <div class="col-xs-12 col-md-offset-1 col-lg-offset-2 col-lg-9 col-md-10">
      <h2 class="z-100">
        {{ $t('mediation.myOffer') }}
      </h2>
      <h1 class="z-100">
        {{ $t('mediation.headline') }}
      </h1>
      <p class="z-100">{{ $t('mediation.teaser') }}</p>
      <h3>{{ $t('mediation.subheadline1') }}</h3>
      <p class="z-100">{{ $t('mediation.paragraph1') }}</p>
      <h3>{{ $t('mediation.subheadline2') }}</h3>
      <p class="z-100">{{ $t('mediation.paragraph2') }}</p>
      <h3>{{ $t('mediation.subheadline3') }}</h3>
      <p class="z-100">{{ $t('mediation.paragraph3') }}</p>
      <h3>{{ $t('mediation.subheadline4') }}</h3>
      <p class="z-100">{{ $t('mediation.paragraph4') }}</p>
      <p class="z-100">{{ $t('mediation.paragraph5') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mediation',
}
</script>
<style scoped>
.hg-marker .svg-container{
  margin-top: 5rem;
}

h3 {
  font-weight: 700;
  margin: 2rem 0 2rem;
}
</style>
