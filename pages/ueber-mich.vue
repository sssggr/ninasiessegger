<script setup>
useSeoMeta({
  title: 'Über mich',
  ogTitle: 'Über mich',
  ogDescription: 'Hallo, ich bin Nina Siessegger - Mediatorin, Team- und Organisationsentwicklerin.',
  description: 'Hallo, ich bin Nina Siessegger - Mediatorin, Team- und Organisationsentwicklerin.',
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
       Über mich
      </h1>
      <p class="z-100">Ich bin 1980 geboren und lebe seit 2001 in Hamburg. Während meines Studiums der Geschichte, Politik und Osteuropastudien verschlug es mich in den Online-Medien-Bereich, wo ich fast 10 Jahre in unterschiedlichen Rollen - zuletzt als Online-Redakteurin beim NDR - tätig war.</p>
      <p class="z-100">Seit 2014 bin ich in agilen Kontexten unterwegs - als Softwareentwicklerin, Tech Lead, Agile Coach, Beraterin, Autorin und Teamcoach. Zunächst für verschiedene Start-Ups, dann als Entwicklerin und Beraterin bei der Technologieberatung ThoughtWorks. Seit 2019 bin ich selbstständig tätig. Im Laufe der Jahre habe ich Erfahrungen in verschiedenen Firmen und Organisationen, vom kleinen Start-Up bis zum Großkonzern gesammelt und dabei in und mit internationalen und multikulturellen Teams gearbeitet.</p>
      <p class="z-100">
        Seit 2020 lege ich einen immer stärkeren Fokus auf die Begleitung von Organisationen und Teams in ihrer Weiterentwicklung und in Veränderungsprozessen. Mehr zu meiner Arbeitsweise habe ich 
        <NuxtLink to="/wie-ich-arbeite">
          hier zusammengefasst.
        </NuxtLink>
      </p>
      <h2 class="z-100">Aus- und Weiterbildungen</h2>
      <ul class="z-100">
        <li>Zertifizierte Mediatorin nach Mediationsgesetz (IMK/EHV)</li>
        <li>Systemisches Teamcoaching (die coachingakademie)</li>
        <li>Soziokratie 3.0 Practitioner Level 1</li>
        <li>Der agile Kulturwandel & Organsationsentwicklung (Teamworks)</li>
        <li>Autorisierte Prozessberaterin im Programm INQA-Coaching</li>
        <li>Certified ScrumMaster®</li>
        <li>Verschiedene Weiterbildungen (Online Moderation, Visualisierung, Management von Remote Teams, Liberating Structures, Design Thinking)</li>
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
