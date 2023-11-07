<template>
  <div class="row">
    <div class="col-xs-12 col-md-offset-1 col-lg-offset-2 col-lg-9 col-md-10">
      <h2 class="z-100">
        {{ $t('teamcoaching.myOffer') }}
      </h2>
      <h1 class="z-100">
        {{ $t('teamcoaching.headline') }}
      </h1>
      <p class="z-100">{{ $t('teamcoaching.paragraph1') }}</p>
      <p class="z-100">{{ $t('teamcoaching.paragraph2') }}</p>
      <p class="z-100">{{ $t('teamcoaching.paragraph3') }}</p>
      <ul class="z-100">
        <li>{{ $t('teamcoaching.teamcoachingReasons.listItem1')}}</li>
        <li>{{ $t('teamcoaching.teamcoachingReasons.listItem2')}}</li>
        <li>{{ $t('teamcoaching.teamcoachingReasons.listItem3')}}</li>
        <li>{{ $t('teamcoaching.teamcoachingReasons.listItem4')}}</li>
        <li>{{ $t('teamcoaching.teamcoachingReasons.listItem5')}}</li>
        <li>{{ $t('teamcoaching.teamcoachingReasons.listItem6')}}</li>
      </ul>
      <p class="z-100">{{ $t('teamcoaching.paragraph4') }}</p>
      <p class="z-100">{{ $t('teamcoaching.paragraph5') }}</p>
      <p class="z-100">{{ $t('teamcoaching.paragraph6') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Teamcoaching',
}
</script>
<style scoped>
.hg-marker .svg-container{
  margin-top: 5rem;
}
</style>
