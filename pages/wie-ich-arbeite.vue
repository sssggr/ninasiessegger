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
