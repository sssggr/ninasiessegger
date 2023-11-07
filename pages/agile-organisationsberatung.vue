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
