<template>
    <div class="col-xs-12 col-md-offset-1 col-lg-offset-2 col-lg-9 col-md-10">
      <h1 class="z-100">
        {{ $t('dataProtection.headline') }}
      </h1>
      <h2 class="z-100">
        {{ $t('dataProtection.operator.headline') }}
      </h2>
      <p><NuxtLink to="/impressum">
        {{ $t('dataProtection.operator.paragraph1') }}
      </NuxtLink></p>
      <h2 class="z-100">
        {{ $t('dataProtection.dataCollection.headline') }}
      </h2> 
      <p class="z-100">{{ $t('dataProtection.dataCollection.paragraph1') }}</p>
      <h2 class="z-100">
        {{ $t('dataProtection.hosting.headline') }}
      </h2> 
      <p class="z-100">{{ $t('dataProtection.hosting.paragraph1') }}</p> 
      <p class="z-100">{{ $t('dataProtection.hosting.paragraph2') }}</p> 
      <p class="z-100">{{ $t('dataProtection.hosting.paragraph3') }}</p> 
      <p class="z-100">{{ $t('dataProtection.hosting.paragraph4') }}</p> 
      <p class="z-100">{{ $t('dataProtection.hosting.paragraph5') }}</p> 
      <p class="z-100">{{ $t('dataProtection.hosting.paragraph6') }}</p> 
      <p class="z-100">{{ $t('dataProtection.hosting.paragraph7') }}</p> 
      <p class="z-100">{{ $t('dataProtection.hosting.paragraph8') }}</p> 
      <p class="z-100">{{ $t('dataProtection.hosting.paragraph9') }}</p> 
      <p class="z-100">{{ $t('dataProtection.hosting.paragraph10') }}</p> 
      <p class="z-100">{{ $t('dataProtection.hosting.paragraph11') }}</p> 
    </div>
</template>

<script>
export default {
  name: 'Datenschutz',
}
</script>
