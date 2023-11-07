<template>
  <div>
    <div class="row">
      <div class="col-lg-offset-1 col-lg-10 col-md-12">
        <div class="row hero">
          <div class="col-xs-12 col-md-6 col-sm-6 hero-item1">
            <h1>
              {{ $t('index.headline', {char: '&#173;'}) }}
            </h1>
            <div class="button-container">
              <NuxtLink :to="localePath('/ueber-mich')" class="btn">
              {{ $t('index.aboutMe') }}
            </NuxtLink>
            </div>
           </div>
          <div class="col-xs-12 col-md-6 col-sm-6 portrait-container hero-item2">
            <img src="~/assets/images/portrait_web.jpg" srcset="~/assets/images/portrait_web_2x.jpg 2x" alt="Portrait Nina Siessegger von Meike Kuether" class="responsive-img">
          </div>
        </div>
      </div>
    </div>
    <section>
      <h2>
        {{ $t('index.myOffer') }}
      </h2>
      <div class="row">
        <div class="col-xs-12 col-md-5 col-sm-5 col-lg-offset-1">
          <img srcset="~/assets/images/desk1.jpg 2x" alt="Ninas desk" class="responsive-img">
        </div>
        <div class="col-xs-12 col-md-7 col-sm-7 col-lg-5 teaser-container">
          <h3 class="organisationalConsulting">
            {{ $t('index.organisationalConsulting') }}
          </h3>
          <p>
            {{ $t('index.organisationalConsultingTeaser') }}
          </p>
          <NuxtLink :to="localePath('/agile-organisationsberatung')" class="btn">
            {{ $t('index.more') }}
          </NuxtLink>
        </div>
        <div class="col-xs-12 col-md-5 col-sm-5 col-lg-offset-1">
          <img srcset="~/assets/images/desk2.jpg 2x" alt="Ninas desk" class="responsive-img">
        </div>
        <div class="col-xs-12 col-md-7 col-sm-7 col-lg-5 teaser-container">
          <h3>
            {{ $t('index.teamcoaching') }}
          </h3>
          <p>
            {{ $t('index.teamcoachingTeaser') }}
          </p>
          <NuxtLink :to="localePath('/teamentwicklung')" class="btn">
            {{ $t('index.more') }}
          </NuxtLink>
        </div>
        <div class="col-xs-12 col-md-5 col-sm-5 col-lg-offset-1">
          <img srcset="~/assets/images/desk3.jpg 2x" alt="Ninas desk" class="responsive-img">
        </div>
        <div class="col-xs-12 col-md-7 col-sm-7 col-lg-5 teaser-container">
          <h3>
            {{ $t('index.mediation') }}
          </h3>
          <p>
            {{ $t('index.mediationTeaser') }}
          </p>
          <NuxtLink :to="localePath('/mediation')" class="btn">
            {{ $t('index.more') }}
          </NuxtLink>
        </div>
      </div>
    </section>
      <section>
        <h2>
          {{ $t('index.myTopics') }}
        </h2>
        <div class="row">
          <div class="col-xs-12 col-md-offset-1 col-md-10 col-sm-12">
            <ul>
              <li>{{ $t('index.topics.collaboration') }}</li>
              <li>{{ $t('index.topics.agile') }}</li>
              <li>{{ $t('index.topics.selfOrganization') }}</li>
              <li>{{ $t('index.topics.changeProcesses') }}</li>
              <li>{{ $t('index.topics.remote') }}</li>
              <li>{{ $t('index.topics.software') }}</li>
            </ul>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style scoped>
  .hero {
    background-color: var(--white);
    margin: 0;
  }
  .hero div {
    padding: 0;
  }
  .hero > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .hero-item1 {
    order:1;
  }
  .hero-item2 {
    order:2;
  }
  .hero h1 {
    font-size: var(--fs-big);
    padding: 2rem;
    margin-bottom: 0rem;
  }
  .portrait-container {
    line-height: 0;
  }
  .button-container .btn {
    margin: 2rem;
  }

  h2 {
    margin-bottom: 2rem;
    margin-top: 6rem;
  }

  .teaser-container {
    margin-bottom: 3rem;
    margin-top: 2rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style-position: inside;
    margin: 0;
  }

  li:nth-child(1){
    animation: topics 6s infinite;
  }
  li:nth-child(5){
    animation: topics 6s infinite;
    animation-delay: 1s;
  }
  li:nth-child(2){
    animation: topics 6s infinite;
    animation-delay: 2s;
  }
  li:nth-child(3){
    animation: topics 6s infinite;
    animation-delay: 3s;
  }
  li:nth-child(4){
    animation: topics 6s infinite;
    animation-delay: 4s;
  }
  li:nth-child(6){
    animation: topics 6s infinite;
    animation-delay: 5s;

  }
  @keyframes topics {
    0%{font-weight: 700;  padding-right: 14px;}
    16.6666% {font-weight: 700; padding-right: 14px;}
    16.6667% {font-weight: 500; padding-right: 18px;}
    100% {font-weight: 500; padding-right: 18px;}
  }
  li {
    padding-right: 18px;
  }
  .svg-container svg path{
    stroke: var(--blue);
  }

@media (max-width: 1024px) {
  .hero h1 {
    padding: 1rem;
  }
  h2 {
    margin-top: 5.5rem;
  }
  .teaser-container {
    margin-bottom: 2rem;
    margin-top: 0;
  }
}
@media (max-width: 768px) {

  h2 {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
  .teaser-container {
    margin-bottom: 1rem;
    margin-top: 0;
  }
  .hero-item1 {
    order: 2;
  }
  .hero-item2 {
    order: 1;
  }
}
@media (max-width: 480px) {
  .hero {
    margin: 0 0.5rem; 
  }
  .hero h1 {
    padding-bottom: 0;
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
    margin-left: 0em;
    margin-right: 0em;
  }
  
  .button-container .btn {
    margin: 1.5rem;
  }

  h3 {
    margin-top: 1rem;
  }

  .teaser-container .btn  {
    margin-bottom: 2.5rem;
  }
}
</style>
