<template>
  <div class="row">
    <div class="col-xs-12 col-md-offset-1 col-lg-offset-2 col-lg-9 col-md-10">
      <h1 class="z-100">
        {{ $t('imprint.headline') }}
      </h1>
      <div class="contact">
        <p class="z-100">Nina Siessegger</p>
        <p class="z-100">Bernstorffstraße 120</p>
        <p class="z-100">22767 Hamburg</p>
      </div>
      <p> 
        {{ $t('imprint.vatId') }}
      </p>
      <h3 class="z-100">
        {{ $t('imprint.contact') }}
      </h3>
      <p>
        <a href="mailto:hallo@ninasiessegger.de">
          hallo@ninasiessegger.de
        </a>
      </p>
      <h3 class="z-100">
        {{ $t('imprint.photos') }}
      </h3>
      <p class="z-100">
        {{ $t('imprint.picBy') }}
        <a href="https://authentische-businessfotografie.de/">Meike Kuether</a>
      </p>
      <h3 class="z-100">
        {{ $t('imprint.design') }}
      </h3>
      <p class="z-100">
        <a href="https://www.exakteaesthetik.de"> Büro für Exakte Ästhetik </a>
      </p>
      <h3 class="z-100">
        {{ $t('imprint.legalNotice.liabilityForContents.headline') }}
      </h3>
      <p class="z-100">
        {{ $t('imprint.legalNotice.liabilityForContents.paragraph1') }}
      </p>
      <h3 class="z-100">
        {{ $t('imprint.legalNotice.liabilityForLinks.headline') }}
      </h3>
      <p class="z-100">
        {{ $t('imprint.legalNotice.liabilityForLinks.paragraph1') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Impressum',
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
