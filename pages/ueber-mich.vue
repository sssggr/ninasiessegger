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
  title: t('seo.about.title'),
  ogTitle: t('seo.about.title'),
  ogDescription: t('seo.about.description'),
  description: t('seo.about.description'),
})
</script>

<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <img src="~/assets/images/about_me.jpg" srcset="~/assets/images/about_me_2x.jpg 2x" alt="Portrait Nina Siessegger von Meike Kuether" class="responsive-img">
      </div>
    </div>
    <div class="row">
    <div class="col-xs-12 col-md-offset-1 col-lg-offset-2 col-lg-9 col-md-10">
      <h1 class="z-100">
        {{ $t('aboutMe.headline') }}
        </h1>
      <p class="z-100">{{ $t('aboutMe.paragraph1') }}</p>
      <p class="z-100">{{ $t('aboutMe.paragraph2') }}</p>
      <p class="z-100">
        {{ $t('aboutMe.paragraph3') }}
        <NuxtLink :to="localePath('/wie-ich-arbeite')">
          {{ $t('aboutMe.paragraph4') }} 
        </NuxtLink>
      </p>
      <h2 class="z-100">{{ $t('aboutMe.qualificationsHeadline') }}</h2>
      <ul class="z-100">
        <li> {{ $t('aboutMe.qualifications.listItem1') }} </li>
        <li> {{ $t('aboutMe.qualifications.listItem2') }} </li>
        <li> {{ $t('aboutMe.qualifications.listItem3') }} </li>
        <li> {{ $t('aboutMe.qualifications.listItem4') }} </li>
        <li> {{ $t('aboutMe.qualifications.listItem5') }} </li>
        <li> {{ $t('aboutMe.qualifications.listItem6') }} </li>
        <li> {{ $t('aboutMe.qualifications.listItem7') }} </li>
      </ul>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UeberMich',
}
</script>
<style scoped>
  img{
    margin-top: -5rem;
    padding-bottom: 2.5rem;
  }
  @media (max-width: 1200px) {
  footer .svg-container{
    width: 306px;
  }
}
@media (max-width: 1024px) {
  img{
    margin-top: -3rem;
    padding-bottom: 2rem;
  }
}
@media (max-width: 768px) {
  img{
    margin-top: 0;
    padding-bottom: 2rem;
  }
}
@media (max-width: 480px) {
  img{
    margin-top: 0;
    padding-bottom: 2rem;
  }
}
</style>
