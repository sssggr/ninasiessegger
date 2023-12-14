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
  title: t('seo.inqa.title'),
  ogTitle: t('seo.inqa.title'),
  ogDescription: t('seo.inqa.description'),
  description: t('seo.inqa.description'),
})
</script>

<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-lg-offset-1 col-lg-10 col-md-12">
        <h1>
          {{ $t('inqa.headline') }}
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-8 col-lg-offset-1 col-lg-7">
        <p class="z-100">{{ $t('inqa.paragraph1') }}</p>
      </div>
      <div class="col-xs-7 col-xs-offset-2 col-md-offset-0 col-md-4 col-lg-3">
        <img src="~/assets/images/inqa-badge.jpg" alt="INQA Badge" class="responsive-img">
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-12 col-lg-offset-1 col-lg-10">
        <p class="z-100">{{ $t('inqa.paragraph2') }}</p>
        <h3>{{ $t('inqa.subheadline1') }}</h3>
        <p class="z-100">{{ $t('inqa.paragraph3') }}</p>
        <h3>{{ $t('inqa.subheadline2') }}</h3>
        <p class="z-100">{{ $t('inqa.paragraph4') }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-8 col-lg-offset-1 col-lg-7">
        <h3>{{ $t('inqa.subheadline3') }}</h3>
        <p class="z-100">{{ $t('inqa.paragraph5') }}</p>
        <ul class="z-100">
            <li>{{ $t('inqa.inqaFields.field1') }}</li>
            <li>{{ $t('inqa.inqaFields.field2') }}</li> 
            <li>{{ $t('inqa.inqaFields.field3') }}</li> 
            <li>{{ $t('inqa.inqaFields.field4') }}</li> 
            <li>{{ $t('inqa.inqaFields.field5') }}</li> 
        </ul>
        <p class="z-100">{{ $t('inqa.paragraph6') }} <a href="https://www.inqa.de/DE/handeln/inqa-coaching/uebersicht.html">INQA Website.</a></p>
        <p class="z-100">{{ $t('inqa.paragraph7') }}</p>
      </div>
      <div class="col-xs-7 col-xs-offset-2 col-md-offset-0 col-md-4 col-lg-3">
        <a download="/inqa-flyer/teaser.jpg" href="https://login.inqa.de/fileadmin/PDF/Materialien/230619_Flyer_INQA-Coaching_digitale_bf_Coaches.pdf" title="INQA Flyer">
          <img alt="INQA Flyer" class="responsive-img" src="/inqa/teaser.jpg"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'INQA',
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
