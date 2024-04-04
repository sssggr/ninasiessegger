<script setup>
useSeoMeta({
  title: 'Nina Siessegger - Organisationsberatung, Teamentwicklung, Mediation',
  ogTitle: 'Nina Siessegger - Organisationsberatung, Teamentwicklung, Mediation',
  ogDescription: 'Ich begleite Teams und Organisationen in Veränderungsprozessen und unterstütze sie dabei, kontinuierlich zu lernen und sich weiterzuentwickeln.',
  description: 'Ich begleite Teams und Organisationen in Veränderungsprozessen und unterstütze sie dabei, kontinuierlich zu lernen und sich weiterzuentwickeln.',
})
</script>

<template>
  <div class="row">
    <div class="col-lg-offset-1 col-lg-10 col-md-12">
      <div class="row hero">
        <div class="col-xs-12 col-md-6 col-sm-6 hero-item1">
          <h1>
            Organisationsberatung für eine Welt im Wandel: Gemeinsam wachsen, Veränderungen erfolgreich navigieren und
            die Zukunft gestalten.
          </h1>
          <div class="button-container">
            <NuxtLink to="/ueber-mich" class="btn">
              Über mich
            </NuxtLink>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-sm-6 portrait-container hero-item2">
          <img src="~/assets/images/portrait_web.jpg" srcset="~/assets/images/portrait_web_2x.jpg 2x"
            alt="Portrait Nina Siessegger von Meike Kuether" class="responsive-img">
        </div>
      </div>
    </div>
  </div>
  <section>
    <h2>
      Mein Angebot
    </h2>
    <div class="row teaser-container">
      <div class="col-xs-12 col-md-5 col-sm-5 col-lg-offset-1 teaser-image-container">
        <img srcset="~/assets/images/desk1.jpg 2x" alt="Ninas desk" class="responsive-img">
      </div>
      <div class="col-xs-12 col-md-7 col-sm-7 col-lg-5 teaser-text-container">
        <h3 class="organisationalConsulting">
          Agile Organisationsberatung
        </h3>
        <p>
          In einer Welt im Wandel sind zukunftsfähige Organisationen, die schnell auf Veränderungen reagieren können,
          wichtiger denn je. Ich begleite Organisationen dabei sich weiterzuentwickeln und Veränderungen agil und aktiv
          zu begegnen.
        </p>
        <NuxtLink to="/agile-organisationsberatung" class="btn">
          Mehr
        </NuxtLink>
      </div>
    </div>
    <div class="row teaser-container">
      <div class="col-xs-12 col-md-5 col-sm-5 col-lg-offset-1 teaser-image-container">
        <img srcset="~/assets/images/desk2.jpg 2x" alt="Ninas desk" class="responsive-img">
      </div>
      <div class="col-xs-12 col-md-7 col-sm-7 col-lg-5 teaser-text-container">
        <h3>
          Teamentwicklung
        </h3>
        <p>
          Ihr wollt als Team eure Zusammenarbeit verbessern, steht vor einer besonderen Herausforderung oder wünscht
          euch Unterstützung auf eurer Reise Richtung Agilität und Selbstorganisation? Ich begleite euch als Teamcoach
          und gestalte gemeinsam mit euch nachhaltige Prozesse für eine bessere Zusammenarbeit.
        </p>
        <NuxtLink to="/teamentwicklung" class="btn">
          Mehr
        </NuxtLink>
      </div>
    </div>
    <div class="row teaser-container">
      <div class="col-xs-12 col-md-5 col-sm-5 col-lg-offset-1 teaser-image-container">
        <img srcset="~/assets/images/desk3.jpg 2x" alt="Ninas desk" class="responsive-img">
      </div>
      <div class="col-xs-12 col-md-7 col-sm-7 col-lg-5 teaser-text-container">
        <h3>
          Leadership Coaching
        </h3>
        <p>
          In agilen und selbstorganisierten Umgebungen sind neue Führungsansätze und Kompetenzen gefragt. Du bist in
          einer Führungsrolle und möchtest dich weiterentwickeln? Gemeinsam finden wir Antworten auf deine Fragen und
          entwickeln ein stimmiges Führungsverständnis für dich.
        </p>
        <NuxtLink to="/leadership-coaching" class="btn">
          Mehr
        </NuxtLink>
      </div>
    </div>
    <div class="row teaser-container">
      <div class="col-xs-12 col-md-5 col-sm-5 col-lg-offset-1 teaser-image-container">
        <img srcset="~/assets/images/desk4.jpg" alt="Ninas desk" class="responsive-img">
      </div>
      <div class="col-xs-12 col-md-7 col-sm-7 col-lg-5 teaser-text-container">
        <h3>
          Konfliktmanagement
        </h3>
        <p>
          Konflikte sind in Organisationen und Teams unvermeidlich. Die entscheidende Frage ist deshalb wie wir mit
          ihnen umgehen. Als zertifizierte Mediatorin begleite ich die konstruktive Bearbeitung von Konflikten und
          unterstütze Teams dabei ihre eigene Konfliktkompetenz zu stärken.
        </p>
        <NuxtLink to="/konfliktmanagement" class="btn">
          Mehr
        </NuxtLink>
      </div>
    </div>
  </section>
  <section>
    <h2>
      Meine Themen
    </h2>
    <div class="row">
      <div class="col-xs-12 col-md-offset-1 col-md-10 col-sm-12">
        <ul>
          <li>Kollaboration</li>
          <li>Agiles Arbeiten</li>
          <li>Selbstorganisation</li>
          <li>Veränderungsprozesse</li>
          <li>Führung</li>
          <li>Konfliktmanagement</li>
          <li>Zusammenarbeit in remote oder hybriden Settings</li>
          <li>Softwareentwicklung</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style scoped>
h3 {
  margin: 0;
}

.teaser-container {
  margin-bottom: calc(0.5 * var(--gutter));
  margin-top: calc(0.5 * var(--gutter));
}

.teaser-image-container {
  line-height: 0;
}

.teaser-text-container {
  padding-top: calc(0.5 * var(--gutter));
  padding-bottom: calc(0.5 * var(--gutter));
}

ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style-position: inside;
  margin: 0;
}

li:nth-child(1) {
  animation: topics 6s infinite;
}

li:nth-child(5) {
  animation: topics 6s infinite;
  animation-delay: 1s;
}

li:nth-child(2) {
  animation: topics 6s infinite;
  animation-delay: 2s;
}

li:nth-child(3) {
  animation: topics 6s infinite;
  animation-delay: 3s;
}

li:nth-child(4) {
  animation: topics 6s infinite;
  animation-delay: 4s;
}

li:nth-child(6) {
  animation: topics 6s infinite;
  animation-delay: 5s;

}

@keyframes topics {
  0% {
    font-weight: 700;
    padding-right: 14px;
  }

  16.6666% {
    font-weight: 700;
    padding-right: 14px;
  }

  16.6667% {
    font-weight: 500;
    padding-right: 18px;
  }

  100% {
    font-weight: 500;
    padding-right: 18px;
  }
}

li {
  padding-right: 18px;
}

.svg-container svg path {
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

  .teaser-container .btn {
    margin-bottom: 2.5rem;
  }
}
</style>
