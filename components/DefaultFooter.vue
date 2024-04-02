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
    margin: 8rem 0 4rem;
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
  .footer-links{
    margin-bottom: 5rem;
  }
  /* .footer-email{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .question{
    display: inline-block;
    padding-right: 0.25rem;
    padding-top: 0.75rem;
  }
  .adress-container{
    position: relative;
  }
  .adress{
    position: absolute;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
  .adress a {
    position: absolute;
    left: 10px;
    padding-top: 0.75rem;
  }
  .footer-links{
    font-size: var(--fs-smaller);
    margin-top: 3.25rem;
  }
  footer .svg-container{
    width: 356px;
  }
  footer svg path{
  stroke: var(--red);
}
@media (max-width: 1200px) {
  footer .svg-container{
    width: 306px;
  }
}
@media (max-width: 1024px) {
  footer{
    margin: 6rem 0 3rem;
  }
  footer .svg-container{
    width: 264px;
  }
}
@media (max-width: 768px) {
  footer{
    margin: 4rem 0 2rem;
  }
  footer .svg-container{
    width: 246px;
  }
}
@media (max-width: 480px) {
  footer{
    margin: 3rem 0 1.5rem;
  }
  footer .svg-container{
    width: 214px;
  }
} */
</style>

