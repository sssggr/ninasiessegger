<template>
  <footer>
    <p>
      <strong>Du möchtest mehr erfahren?</strong><br>
      Kontaktiere mich für ein unverbindliches Erstgespräch.
    </p>
    <NuxtLink to="/kontakt" class="btn">
            Kontakt
          </NuxtLink>
    <hr>

    <div class="footer-links">
      <NuxtLink to="/impressum">
        Impressum
      </NuxtLink> 
      und
      <NuxtLink to="/datenschutz">
        Datenschutz
      </NuxtLink>
    </div>
  </footer>
</template>
<style scoped>
  p {
    font-size: var(--fs-basic);
  }

  footer{
    margin: 6em 0 5em;
    text-align: center;
  }

  footer a{
    text-decoration: none;
  }

  .footer-links a:hover{
    border-color: var(--blue);
    border-style: solid;
    border-width: 0 0 2px 0;
    transition: 0.2s ease;
  }
</style>

