<template>
  <nav class="navbar">
    <NuxtLink to="/" class="navbar-item logo-container">
      <div class="logo">
        <div class="forename">Nina</div>
        <div class="surname-container">
          <div class="surname">
            <span>Siessegger</span>
          </div>
          <div class="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 254 58" fill="none">
              <path stroke-width="46"
                d="M2.095 34.601c49.889-4.544 77.594-9.218 100.442-4.84 6.602 1.265 22.442-1.614 30.973-1.583 5.552.02 37.377-8.735 58.793-2.674 18.497 5.235 41.096 1.184 57.689 4.027" />
            </svg>
          </div>
        </div>
      </div>
    </NuxtLink>
    <div id="menuToggle" class="nav-links">
      <a role="button" class="hamburger" data-target="menu" aria-label="menu" aria-expanded="false"
        :class="{ 'is-active': menuActive }" @click="toggleMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <ul id="menu" :class="{ menu: true, 'is-active': menuActive }" @click="menuActive = false">
        <li class="services">
          <NuxtLink to="#">
            Mein Angebot
          </NuxtLink>
          <ul class="dropdown">
            <li>
              <NuxtLink to="/agile-organisationsberatung">
                Agile Organisationsberatung
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/teamentwicklung">
                Agiles Arbeiten im Team
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/konfliktmanagement">
                Konfliktmanagement
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/wirksame-fuehrung">
                Wirksame Führung
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/inqa-coaching">
                INQA: Förderung für KMU
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink to="ueber-mich">
            Über mich
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/kontakt">
            Kontakt
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      menuActive: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive
    },
  },
}
</script>
<style scoped>
a {
  text-decoration: none;
}

li {
  list-style: none;
}

.navbar {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  padding: 20px 0;
  margin-bottom: 6rem;
  z-index: 250;
}

.navbar a:visited {
  color: var(--black);
}

.navbar .logo svg path {
  stroke: var(--red);
}

.logo-container {
  order: 1;
}

.logo {
  display: flex;
  font-size: var(--fs-biggest);
  font-weight: 700;
  order: 1;
}

.forename {
  padding-right: 0.125rem;
  padding-top: 0.25rem;
}

.surname-container {
  position: relative;
}

.surname {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
}

.surname span {
  display: inline-block;
  padding-left: 0.75rem;
  padding-top: 0.25rem;
}

.surname-container .svg-container {
  width: 254px;
}

ul.nav-links {
  padding-left: 0;
}

.menu {
  display: flex;
  /* gap: 1em; */
  font-size: var(--fs-basic);
}

.menu li {
  padding: 0 14px;
  border-color: var(--gray);
  border-style: solid;
  border-width: 0 0 2px 0;
}

.menu li:hover,
.language-switch a:hover {
  border-color: var(--blue);
  border-style: solid;
  transition: 0.3s ease;
}

.services,
.language-switch {
  position: relative;
}

.dropdown {
  background-color: var(--white);
  font-size: var(--fs-smaller);
  left: -14px;
  padding: 1.25em 1em;
  position: absolute;
  display: none;
}

.dropdown li+li {
  margin-top: 10px;
}

.language-switch {
  order: 3;
  margin: 1.25rem 0;
  text-transform: uppercase;
}

.dropdown li {
  padding: 0.125em 1em 0.125em 0.5em;
  border-color: var(--white);
  width: 16em;
  text-align: left;
  line-height: 1.2;
  list-style-type: disc;
  list-style-position: inside;
}

.services:hover .dropdown {
  display: block;
}

#menuToggle {
  margin: 0;
  order: 2;
}

#menuToggle .hamburger {
  font-size: var(--fs-basic);
  display: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
}

#menuToggle span {
  display: block;
  width: 32px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: var(--black);
  border-radius: 1px;
  z-index: 1;
  transform-origin: 63% 0;
  transition: transform 0.1s cubic-bezier(0.77, 0.2, 0.05, 1),
    opacity 0.15s ease;
}

#menuToggle span:first-child {
  transform-origin: 50% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 63% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle a.is-active span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
}

/*
 * But let's hide the middle one.
 */
#menuToggle a.is-active span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle a.is-active span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

@media (max-width: 1200px) {
  .surname-container .svg-container {
    width: 218px;
  }
}

@media (max-width: 1024px) {
  .surname-container .svg-container {
    width: 204px;
  }
  .navbar {
    margin-bottom: 5rem;
  }
}

@media (max-width: 960px) {
  .navbar {
    margin-bottom: 4rem;
  }

  .logo-container {
    order: 2;
  }

  #menuToggle {
    order: 3;
  }

  .menu li {
    border-width: 0 0 0 0;
  }

  .menu li:hover {
    border-width: 0 0 0 0;
  }

  .menu {
    display: none;
    font-size: calc(var(--fs-basic) * 1.25);
    position: absolute;
    background-color: var(--white);
    right: 0;
    left: 0;
    text-align: left;
    padding: 16px 0;
    margin-top: 16px;
  }

  .language-switch {
    order: 1;
    font-size: var(--fs-basic);
    font-weight: 700;
    padding-bottom: 0.125rem;
  }

  .menu li {
    border-color: var(--white);
  }

  .menu li+li {
    margin-top: 12px;
  }

  .menu.is-active {
    display: block;
    margin-left: -2rem;
    margin-right: -2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    border-bottom: solid 4px var(--blue);
  }

  #menuToggle .hamburger {
    display: block;
  }

  .dropdown {
    font-size: calc(var(--fs-basic) * 1.125);
    padding: 0.375em 0;
    position: relative;
    left: auto;
  }

  .dropdown li {
    text-align: left;
    padding: 0 1em;
    width: auto;
  }

  li.services .dropdown {
    display: block;
    margin-bottom: 0;
  }

  li.services:hover {
    border-color: var(--white);
  }
}

@media (max-width: 768px) {
  .navbar {
    margin-bottom: 2rem;
  }

  .surname-container .svg-container {
    width: 190px;
  }

  .menu li+li {
    margin-top: 5px;
  }
  .menu.is-active {
    margin-left: -1.25rem;
    margin-right: -1.25rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
}

@media (max-width: 480px) {
  .navbar {
    margin-bottom: 0.25rem;
  }

  .surname-container .svg-container {
    width: 155px;
  }

  #menuToggle .hamburger {
    width: 24px;
    height: 24px;
    padding-bottom: 5px;
  }

  #menuToggle span {
    width: 24px;
    height: 3px;
    margin-bottom: 4px;
  }
}
</style>
