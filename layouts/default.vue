<script setup>
useSeoMeta({
  title: 'Nina Siessegger - Organisations- und Teamentwicklung, Mediation',
  ogTitle: 'Nina Siessegger - Organisations- und Teamentwicklung, Mediation',
  ogDescription: 'Ich begleite Teams, Gruppen und Organisationen in Veränderungs, Lern- und Entwicklungsprozessen.',
  description: 'Ich begleite Teams, Gruppen und Organisationen in Veränderungs, Lern- und Entwicklungsprozessen.',
  ogSiteName: 'Nina Siessegger - Organisations- und Teamentwicklung, Mediation',
  ogUrl: 'https://ninasiessegger.de',
  ogImage: 'https://ninasiessegger.de/card.png'
})
</script>

<template>
  <div class="wrap container-fluid">
    <NavBar />
    <main>
      <slot />
    </main>
    <DefaultFooter />
  </div>
</template>

<script>
import DefaultFooter from '~/components/DefaultFooter'
import NavBar from '~/components/NavBar'

export default {
  components: {
    DefaultFooter,
    NavBar
  },
}
</script>

<style>

</style>
