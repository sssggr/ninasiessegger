<template>
  <footer>
    <div class="footer-email z-100">
      <strong class="question">{{ $t('components.footer.contact') }}</strong>
      <div class="adress-container">
        <div class="adress">
          <a href="mailto:hallo@ninasiessegger.de">
            hallo@ninasiessegger.de
          </a>
        </div>
        <div class="svg-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 356 57" fill="none"><path stroke-width="46" d="M1.564 34c37.565-2.352 70.75-.994 108.269-4 16.05-1.286 26.167-5.443 38.386-6 32.992-1.504 34.483-1.198 72.791 1.391 50.207 2.394 87.76 7.818 128.554-3.169"/></svg>
        </div>
      </div>
    </div>

    <div class="footer-links">
      <NuxtLink :to="localePath('/impressum')">
        {{$t('components.footer.imprint')}} 
      </NuxtLink> 
      und
      <NuxtLink :to="localePath('/datenschutz')">
        {{$t('components.footer.dataProtection')}} 
      </NuxtLink>
    </div>
  </footer>
</template>
<style scoped>
  footer{
    margin: 8rem 0 4rem;
    text-align: center;
  }
  footer a{
    text-decoration: none;
  }
  .footer-email{
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
}
</style>

