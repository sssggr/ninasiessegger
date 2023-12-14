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
  title: t('seo.organizationConsulting.title'),
  ogTitle: t('seo.organizationConsulting.title'),
  ogDescription: t('seo.organizationConsulting.description'),
  description: t('seo.organizationConsulting.description'),
})
</script>

<template>
  <div class="row">
    <div class="col-xs-12 col-md-offset-1 col-lg-offset-2 col-lg-9 col-md-10">
      <h2 class="z-100">
        {{ $t('organizationConsulting.myOffer') }}
      </h2>
      <h1 class="z-100">
        {{ $t('organizationConsulting.headline') }}
      </h1>
      <p class="z-100">{{ $t('organizationConsulting.paragraph1') }}</p>
      <p class="z-100">{{ $t('organizationConsulting.paragraph2') }}</p>
      <p class="z-100">{{ $t('organizationConsulting.paragraph3') }}</p>
      <p class="z-100">{{ $t('organizationConsulting.paragraph4') }}</p>
      <p class="z-100">{{ $t('organizationConsulting.paragraph5') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'agileOrganisationsberatung',
}
</script>
<style scoped>
.hg-marker .svg-container{
  margin-top: 3rem;
}
@media all and (max-width: 480px) {
  .hg-marker .svg-container{
  margin-top: 5rem;
}
}
</style>
