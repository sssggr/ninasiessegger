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
  title: t('seo.howIWork.title'),
  ogTitle: t('seo.howIWork.title'),
  ogDescription: t('seo.howIWork.description'),
  description: t('seo.howIWork.description'),
})
</script>

<template>
  <div class="row">
    <div class="col-xs-12 col-md-offset-1 col-lg-offset-2 col-lg-9 col-md-10">
      <h1 class="z-100">
        {{ $t('howIWork.headline') }}
      </h1>
        <p class="z-100">{{ $t('howIWork.paragraph1') }}</p>
        <p class="z-100">{{ $t('howIWork.paragraph2') }}</p>
        <p class="z-100">{{ $t('howIWork.paragraph3') }}</p>
        <p class="z-100">{{ $t('howIWork.paragraph4') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WieIchArbeite',
}
</script>
<style scoped>
.hg-marker .svg-container{
  margin-top: 2rem;
}
  .svg-cont { 
	display: inline-block;
	position: relative;
	width: 100%;
	padding-bottom: 100%; 
	vertical-align: middle; 
	overflow: hidden; 
}
.svg-content { 
	display: inline-block;
	position: absolute;
	top: 0;
	left: 0;
}
</style>
