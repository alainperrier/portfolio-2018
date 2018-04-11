<template>
  <page
    :current-margin-top="currentMarginTop">
    <div>
      <scrollactive
        :offset="300"
        :modify-url="false"
        :click-to-scroll="false"
        active-class="bg-blue-light"
        class="hidden smp:hidden sml:hidden md:block lg:block xl:block xxl:block
      fixed z-50 pin-center mr-8 text-xs text-white font-lato-light"
        @itemchanged="onItemChanged">
        <a
          v-scroll-to="{
            el: '#accueil',
            duration: 500,
            easing: 'ease-in-out',
            offset: - + currentMarginTop
          }"
          id="first-sidenav"
          href="#accueil"
          class="scrollactive-item tip cursor-pointer block rounded-full bg-grey w-7px h-7px mb-4"
          title="Accueil"
          @click.prevent/>
        <a
          v-scroll-to="{
            el: '#apropos',
            duration: 500,
            easing: 'ease-in-out',
            offset: - + currentMarginTop
          }"
          id="second-sidenav"
          href="#apropos"
          class="scrollactive-item tip cursor-pointer block rounded-full bg-grey w-7px h-7px mb-4"
          title="A propos"
          @click.prevent/>
        <a
          v-scroll-to="{
            el: '#parcours',
            duration: 500,
            easing: 'ease-in-out',
            offset: - + currentMarginTop
          }"
          id="third-sidenav"
          href="#parcours"
          class="scrollactive-item tip cursor-pointer block rounded-full bg-grey w-7px h-7px"
          title="Parcours"
          @click.prevent/>
      </scrollactive>
    </div>
    <!-- 1st part -->
    <div class="content-container">
      <div>
        <sub-page
          id="accueil"
          :current-margin-top="currentMarginTop"
          class="bg-grey-dark text-white">
          <div
            class="flex flex-col p-8 items-center justify-center w-full h-100-3 relative
            overflow-y-scroll smp:overflow-hidden sml:overflow-hidden md:overflow-hidden lg:overflow-hidden xl:overflow-hidden xxl:overflow-hidden">
            <div class="flex flex-col smp:flex-row sml:flex-row md:flex-row lg:flex-row xl:flex-row xxl:flex-row items-center w-full smp:w-4/5 sml:w-4/5 md:w-4/5 lg:w-4/5 xl:w-4/5 xxl:w-4/5">
              <div
                class="flex flex-row items-center justify-center flex-no-shrink logo
                w-full smp:w-50-15 sml:w-50-15 md:w-50-15 lg:w-50-15 xl:w-50-15 xxl:w-50-15
                pr-0 smp:pr-12 sml:pr-12 md:pr-12 lg:pr-14 xl:pr-16 xxl:pr-16
                mb-6 smp:mb-0 sml:mb-0 md:mb-0 lg:mb-0 xl:mb-0 xxl:mb-0">
                <div
                  class="flex flex-col items-center justify-center flex-no-shrink
                  m-0 smp:ml-auto sml:ml-auto md:ml-auto lg:ml-auto xl:ml-auto xxl:ml-auto">
                  <!-- TODO: Add max height to svg when responsive is done -->
                  <img
                    class="flex min-h-150px max-h-400px
                    h-150px smp:h-150px sml:h-170px md:h-250px lg:h-300px xl:h-350px xxl:h-400px"
                    src="~assets/img/logo.svg"
                    alt="Logo">
                  <h1
                    class="truncate
                    text-lg smp:text-base sml:text-base md:text-xl lg:text-2xl xl:text-2xl xxl:text-3xl">
                    Alain Perrier
                  </h1>
                </div>
              </div>
              <div
                class="flex flex-col border-white border-solid flex-no-shrink description
                w-auto smp:w-1/2 sml:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 xxl:w-1/2
                border-l-0 smp:border-l-3 sml:border-l-3 md:border-l-3 lg:border-l-3 xl:border-l-3 xxl:border-l-3
                border-t-2 smp:border-t-0 sml:border-t-0 md:border-t-0 lg:border-t-0 xl:border-t-0 xxl:border-t-0
                pl-0 smp:pl-8 sml:pl-10 md:pl-10 lg:pl-10 xl:pl-10 xxl:pl-10
                pt-2 smp:pt-0 sml:pt-0 md:pt-0 lg:pt-0 xl:pt-0 xxl:pt-0">
                <div
                  class="flex flex-col flex-no-shrink
                  text-center smp:text-left sml:text-left md:text-left lg:text-left xl:text-left xxl:text-left
                  items-center smp:items-start sml:items-start md:items-start lg:items-start xl:items-start xxl:items-start">
                  <ul
                    class="uppercase leading-loose mb-2 whitespace-no-wrap
                    text-lg smp:text-base sml:text-lg md:text-3xl lg:text-4xl xl:text-4xl xxl:text-5xl">
                    <li><h2>Chef de projet</h2></li>
                    <li><h2>Product Owner</h2></li>
                    <li><h2>Consultant digital</h2></li>
                  </ul>
                  <div class="flex flex-row items-center flex-no-shrink mt-2">
                    <div
                      class="flex flex-no-shrink
                      items-center smp:items-start sml:items-start md:items-start lg:items-start xl:items-start xxl:items-start
                      flex-col smp:flex-row sml:flex-row md:flex-row lg:flex-row xl:flex-row xxl:flex-row">
                      <div
                        class="mb-4 smp:mb-0 sml:mb-0 md:mb-0 lg:mb-0 xl:mb-0 xxl:mb-0
                        mr-0 smp:mr-4 sml:mr-6 md:mr-6 lg:mr-6 xl:mr-6 xxl:mr-6">
                        <a
                          href="/CV-Alain-Perrier.pdf"
                          class="text-white"
                          target="_blank">
                          <btn
                            v-ripple
                            class="trans-all bg-red-light flex flex-no-shrink items-center justify-center h-30px truncate">
                            <img
                              slot="img"
                              src="~/assets/img/download.svg"
                              class="h-12px mr-3">
                            <span slot="text">Mon CV</span>
                          </btn>
                        </a>
                      </div>
                      <div>
                        <nuxt-link
                          to="contact"
                          class="text-white">
                          <btn
                            v-ripple
                            class="bg-blue-light flex flex-no-shrink items-center justify-center h-30px truncate">
                            <span slot="text">Me contacter</span>
                          </btn>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-row items-end w-full h-12 pr-8 pl-8 pb-3
            justify-center smp:justify-center sml:justify-center md:justify-end lg:justify-end xl:justify-end xxl:justify-end">
            <div class="mr-6">
              <a
                class="flex"
                href="https://github.com/oXg3n"
                target="_blank">
                <img
                  src="~/assets/img/github.svg"
                  class="w-30px h-30px">
              </a>
            </div>
            <div class="mr-6">
              <a
                class="flex"
                href="https://twitter.com/perrieral"
                target="_blank">
                <img
                  src="~/assets/img/twitter.svg"
                  class="w-30px h-30px">
              </a>
            </div>
            <div>
              <a
                class="flex"
                href="https://www.linkedin.com/in/alainperrier"
                target="_blank">
                <img
                  src="~/assets/img/linkedin.svg"
                  class="w-30px h-30px">
              </a>
            </div>
          </div>
          <div
            class="absolute pin-b pin-r-calc mr-6
            hidden smp:hidden sml:hidden md:block lg:block xl:block xxl:block">
            <span
              v-scroll-to="{
                el: '#apropos',
                duration: 500,
                easing: 'ease-in-out',
                offset: - + currentMarginTop
              }"
              class="flex cursor-pointer">
              <img
                slot="img"
                src="~/assets/img/arrow-scroll.svg"
                class="h-12">
            </span>
          </div>
        </sub-page>
      </div>
      <!-- 2nd part -->
      <div>
        <sub-page
          id="apropos"
          :current-margin-top="currentMarginTop"
          class="text-grey-darker bg-grey-lightest">
          <div
            class="flex h-full overflow-hidden relative w-full
            flex-col smp:flex-col sml:flex-col md:flex-row lg:flex-row xl:flex-row xxl:flex-row">
            <div
              class="flex overflow-hidden relative bg-blue-dark text-white justify-center flex-col
              xxl:items-center
              h:2/5 smp:h-2/5 sml:h-1/3 md:h-full lg:h-full xl:h-full xxl:h-full
              w-full smp:w-full sml:w-full md:w-2/5 lg:w-2/5 xl:w-2/5 xxl:w-2/5
              p-6 smp:p-6 sml:p-6 md:p-8 lg:p-10 xl:p-12 xxl:p-12">
              <div>
                <!-- ADD RESPONSIVE PADDING (UP)-->
                <h3 class="text-base smp:text-base sml:text-base md:text-2xl lg:text-4xl xl:text-5xl xxl:text-5xl uppercase font-semibold">En quelques mots...</h3>
                <!-- ADD TEXT (UP)-->
                <h4 class="text-base smp:text-base sml:text-base md:text-lg lg:text-2xl xl:text-3xl xxl:text-3xl uppercase mt-2 text-left">A propos</h4>
                <!-- ADD TEXT (UP / DOWN)-->
              </div>
              <ul
                class="flex justify-around
                flex-row smp:flex-row sml:flex-row md:flex-col lg:flex-col xl:flex-col xxl:flex-col
                mt-6 smp:mt-8 sml:mt-8 md:mt-12 lg:mt-12 xl:mt-12 xxl:mt-12
                text-sm smp:text-sm sml:text-sm md:text-md lg:text-lg xl:text-xl xxl:text-2xl
                ml-0 smp:ml-0 sml:ml-0 md:ml-8 lg:ml-10 xl:ml-12 xxl:ml-12">
                <!-- ADD RESPONSIVE MARGIN (UP)-->
                <li
                  class="flex items-center
                  md:mb-11 lg:mb-11 xl:mb-11 xxl:mb-11
                  mr-8 smp:mr-8 sml:mr-11">
                  <span class="mr-8 smp:mr-5">
                    <img
                      class="w-20px smp:w-20px sml:w-25px md:w-30px lg:w-35px xl:w-35px xxl:w-35px"
                      src="~assets/img/flask.svg">
                  </span>
                  <div class="max-w-100px smp:max-w-150px sml:max-w-100px md:max-w-none lg:max-w-none xl:max-w-none xxl:max-w-none">
                    <p><span class="font-semibold">Plus de 3 ans</span> d'expérience</p>
                  </div>
                </li>
                <li
                  class="flex items-center
                  md:mb-11 lg:mb-11 xl:mb-11 xxl:mb-11
                  mr-8 smp:mr-8 sml:mr-11 md:ml-4 lg:ml-4 xl:ml-4 xxl:ml-4">
                  <span class="mr-8 smp:mr-5">
                    <img
                      class="w-30px smp:w-30px sml:w-35px md:w-40px lg:w-45px xl:w-45px xxl:w-45px"
                      src="~assets/img/cap.svg">
                  </span>
                  <div class="max-w-100px smp:max-w-220px sml:max-w-100px md:max-w-none lg:max-w-none xl:max-w-none xxl:max-w-none">
                    <p class="font-semibold">Double casquette</p>
                    <p>Business et technique</p>
                  </div>
                </li>
                <li class="flex items-center">
                  <span class="mr-8 sml:mr-5 smp:mr-5">
                    <img
                      class="w-25px smp:w-25px sml:w-30px md:w-35px lg:w-40px xl:w-40px xxl:w-40px"
                      src="~assets/img/heart.svg">
                  </span>
                  <div class="max-w-100px smp:max-w-100px sml:max-w-100px md:max-w-none lg:max-w-none xl:max-w-none xxl:max-w-none">
                    <p>Passionné par le <span class="font-semibold">#digital</span></p>
                  </div>
                </li>
              </ul>
            </div>
            <transition
              name="fade"
              appear>
              <div
                v-show="isCurrentItem == true"
                class="flex flex-col overflow-hidden relative bg-grey-lightest items-center justify-center
                h-full smp:h-3/5 sml:h-auto md:h-auto lg:h-auto xl:h-auto xxl:h-auto
                w-full smp:w-full sml:w-full md:w-3/5 lg:w-3/5 xl:w-3/5 xxl:w-3/5
                p-6 smp:p-6 sml:p-13 md:p-13 lg:p-13 xl:p-13 xxl:p-13">
                <div
                  class="relative font-semibold text-grey-dark
                  text-sm smp:text-sm sml:text-sm md:text-sm lg:text-base xl:text-base xxl:text-base">
                  <img
                    src="~assets/img/radar.svg"
                    alt="Mes domaines d'expertise en graphique"
                    class="w-150px smp:w-150px sml:w-200px md:w-200px lg:w-250px xl:w-350px xxl:w-400px">
                  <!-- ADD RESPONSIVE WIDTH (UP)-->
                  <!-- ADD RESPONSIVE MAXWIDTH (DOWN - ALL)-->
                  <span
                    class="absolute pin-management text-right
                    max-w-150px md:max-w-150px lg:max-w-150px xl:max-w-150px xxl:max-w-150px">
                    <div>Management</div>
                    <div>Management</div>
                  </span>
                  <span
                    class="absolute pin-gestion text-right
                    max-w-100px md:max-w-80px lg:max-w-100px xl:max-w-100px xxl:max-w-100px">
                    Gestion de projet
                  </span>
                  <span
                    class="absolute pin-conduite text-right
                    max-w-100px md:max-w-80px lg:max-w-100px xl:max-w-100px xxl:max-w-100px">
                    Conduite du changement
                  </span>
                  <span
                    class="absolute pin-consulting text-right
                    max-w-150px md:max-w-150px lg:max-w-150px xl:max-w-150px xxl:max-w-150px">
                    Consulting
                  </span>
                  <span
                    class="absolute pin-strategie text-left
                    max-w-150px md:max-w-150px lg:max-w-150px xl:max-w-150px xxl:max-w-150px">
                    Stratégie digitale
                  </span>
                  <span
                    class="absolute pin-data text-left
                    max-w-100px md:max-w-80px lg:max-w-100px xl:max-w-100px xxl:max-w-100px">
                    Data science
                  </span>
                  <span
                    class="absolute pin-ux text-left
                    max-w-100px md:max-w-80px lg:max-w-100px xl:max-w-100px xxl:max-w-100px">
                    UX Design
                  </span>
                  <span
                    class="absolute pin-dev text-left
                    max-w-150px md:max-w-150px lg:max-w-150px xl:max-w-150px xxl:max-w-150px">
                    Développement web
                  </span>
                </div>
              </div>
            </transition>
          </div>
        </sub-page>
      </div>
    </div>
    <!-- 3rd part -->
    <!--TEST TIMELINE -->

    <div
      id="parcours"
      class="p-14 bg-grey-white relative font-lato-light font-normal h-full trans-all-fast">
      <div class="mb-11">
        <h3 class="text-base smp:text-base sml:text-base md:text-2xl lg:text-4xl xl:text-5xl xxl:text-5xl uppercase font-semibold">Mon parcours</h3>
        <h4 class="text-base smp:text-base sml:text-base md:text-lg lg:text-2xl xl:text-3xl xxl:text-3xl uppercase mt-2">Scolaire et professionnel</h4>
      </div>
      <ul class="timeline">
        <li>
          <div
            id="lastudio"
            class="timeline-badge trans-all cursor-pointer"
            @click="setBadge('lastudio', 0)">
            <img
              class="w-20px"
              src="~assets/img/tie.svg">
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p class="flex text-xs mb-2">
                <span class="text-blue-dark">Nov. 2015 - Aujourd'hui</span>
                <span class="text-grey-middle ml-auto">Professionnel</span>
              </p>
              <h4 class="timeline-title font-semibold mb-2">Chef de projet web | Partenaire associé</h4>
              <a
                class="trans-all inline-flex text-grey-dark flex flex-row items-center"
                href="https://la-studio.fr"
                target="_blank">
                <div class="w-20px mr-3">
                  <img
                    src="~assets/img/logo-LA-Studio.png"
                    class="w-full">
                </div>
                <p>
                  LA - Studio
                </p>
              </a>
            </div>
            <div
              v-expand="badgeClicked == 'lastudio'"
              class="expand timeline-body text-xs bg-white origin-top-center">
              <p class="mt-4"><span class="font-semibold">Description : </span>LA studio est un agence de stratégie digitale</p>
              <p class="mt-2"><span class="font-semibold">Missions :</span></p>
              <ul class="mt-1">
                <li>- Acheter le café</li>
                <li>- Boire la tisanne</li>
              </ul>
            </div>
            <div
              class="expandable flex justify-end">
              <span
                class="inline-flex"
                @click="setBadge('lastudio', 0)">
                <button
                  v-ripple
                  class="pt-1/2 pb-1/2 rounded-sm
                  trans-all w-50px bg-blue-light flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                  p-2 text-xs"
                  type="button"
                  @mouseover="scaleBadge('lastudio')"
                  @mouseleave="reduceBadge('lastudio')">
                  <span>{{ labelDetail[0] }}</span>
                </button>
              </span>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div
            id="bp"
            class="timeline-badge trans-all cursor-pointer"
            @click="setBadge('bp', 1)">
            <img
              class="w-20px"
              src="~assets/img/tie.svg">
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p class="flex text-xs mb-2">
                <span class="text-blue-dark">Mai 2015 - Déc. 2017</span>
                <span class="text-grey-middle ml-auto">Professionnel</span>
              </p>
              <h4 class="timeline-title font-semibold mb-2">Chef de projet digital</h4>
              <a
                class="inline-flex trans-all text-grey-dark flex flex-row items-center"
                href="https://www.bpaura.banquepopulaire.fr/portailinternet/Pages/default.aspx"
                target="_blank">
                <div class="w-25px mr-3">
                  <img
                    src="~assets/img/BP.png"
                    class="w-full">
                </div>
                <p>
                  Banque Populaire Auvergne Rhône Alpes
                </p>
              </a>
            </div>
            <div
              v-expand="badgeClicked == 'bp'"
              class="expand timeline-body text-xs bg-white origin-top-center">
              <p class="mt-4"><span class="font-semibold">Description : </span>LA studio est un agence de stratégie digitale</p>
              <p class="mt-2"><span class="font-semibold">Missions :</span></p>
              <ul class="mt-1">
                <li>- Acheter le café</li>
                <li>- Boire la tisanne</li>
              </ul>
            </div>
            <div
              class="expandable flex justify-end">
              <span
                class="inline-flex"
                @click="setBadge('bp', 1)">
                <button
                  v-ripple
                  class="pt-1/2 pb-1/2 rounded-sm
                  trans-all w-50px bg-blue-light flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                  p-2 text-xs"
                  type="button"
                  @mouseover="scaleBadge('bp')"
                  @mouseleave="reduceBadge('bp')">
                  <span>{{ labelDetail[1] }}</span>
                </button>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div
            id="dbs"
            class="timeline-badge trans-all cursor-pointer"
            @click="setBadge('dbs', 2)">
            <img
              class="w-20px"
              src="~assets/img/cap-black.svg">
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p class="flex text-xs mb-2">
                <span class="text-blue-dark">Sept. 2016 - Déc. 2017</span>
                <span class="text-grey-middle ml-auto">Scolaire</span>
              </p>
              <h4 class="timeline-title font-semibold mb-2">Advanced Master | Digital Business Strategy</h4>
              <a
                class="inline-flex trans-all text-grey-dark flex flex-row items-center"
                href="https://www.grenoble-em.com/"
                target="_blank">
                <div class="w-20px mr-3">
                  <img
                    src="~assets/img/gem-logo.png"
                    class="w-full">
                </div>
                <p>
                  Grenoble Ecole de Management
                </p>
              </a>
            </div>
            <div
              v-expand="badgeClicked == 'dbs'"
              class="expand timeline-body text-xs bg-white origin-top-center">
              <p class="mt-4"><span class="font-semibold">Description : </span>LA studio est un agence de stratégie digitale</p>
              <p class="mt-2"><span class="font-semibold">Missions :</span></p>
              <ul class="mt-1">
                <li>- Acheter le café</li>
                <li>- Boire la tisanne</li>
              </ul>
            </div>
            <div
              class="expandable flex justify-end">
              <span
                class="inline-flex"
                @click="setBadge('dbs', 2)">
                <button
                  v-ripple
                  class="pt-1/2 pb-1/2 rounded-sm
                  trans-all w-50px bg-blue-light flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                  p-2 text-xs"
                  type="button"
                  @mouseover="scaleBadge('dbs')"
                  @mouseleave="reduceBadge('dbs')">
                  <span>{{ labelDetail[2] }}</span>
                </button>
              </span>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div
            id="bsb"
            class="timeline-badge trans-all cursor-pointer"
            @click="setBadge('bsb', 3)">
            <img
              class="w-20px"
              src="~assets/img/cap-black.svg">
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p class="flex text-xs mb-2">
                <span class="text-blue-dark">Sept. 2013 - Juin 2016</span>
                <span class="text-grey-middle ml-auto">Scolaire</span>
              </p>
              <h4 class="timeline-title font-semibold mb-2">Master en Management | Programme Grande Ecole</h4>
              <a
                class="inline-flex trans-all text-grey-dark flex flex-row items-center"
                href="https://www.bsb-education.com/"
                target="_blank">
                <div class="w-35px mr-3">
                  <img
                    src="~assets/img/bsb-logo.png"
                    class="w-full">
                </div>
                <p>
                  Burgundy School of Business
                </p>
              </a>
            </div>
            <div
              v-expand="badgeClicked == 'bsb'"
              class="expand timeline-body text-xs bg-white origin-top-center">
              <p class="mt-4"><span class="font-semibold">Description : </span>LA studio est un agence de stratégie digitale</p>
              <p class="mt-2"><span class="font-semibold">Missions :</span></p>
              <ul class="mt-1">
                <li>- Acheter le café</li>
                <li>- Boire la tisanne</li>
              </ul>
            </div>
            <div
              class="expandable flex justify-end">
              <span
                class="inline-flex"
                @click="setBadge('bsb', 3)">
                <button
                  v-ripple
                  class="pt-1/2 pb-1/2 rounded-sm
                  trans-all w-50px bg-blue-light flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                  p-2 text-xs"
                  type="button"
                  @mouseover="scaleBadge('bsb')"
                  @mouseleave="reduceBadge('bsb')">
                  <span>{{ labelDetail[3] }}</span>
                </button>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div
            id="lf"
            class="timeline-badge trans-all cursor-pointer"
            @click="setBadge('lf', 4)">
            <img
              class="w-20px"
              src="~assets/img/tie.svg">
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p class="flex text-xs mb-2">
                <span class="text-blue-dark">Mai 2014 - Août 2014</span>
                <span class="text-grey-middle ml-auto">Professionnel</span>
              </p>
              <h4 class="timeline-title font-semibold mb-2">Assistant chef de projet</h4>
              <a
                class="inline-flex trans-all text-grey-dark flex flex-row items-center"
                href="https://leadformance.com"
                target="_blank">
                <div class="w-30px mr-3">
                  <img
                    src="~assets/img/lf.png"
                    class="w-full">
                </div>
                <p>
                  Leadformance
                </p>
              </a>
            </div>
            <div
              v-expand="badgeClicked == 'lf'"
              class="expand timeline-body text-xs bg-white origin-top-center">
              <p class="mt-4"><span class="font-semibold">Description : </span>LA studio est un agence de stratégie digitale</p>
              <p class="mt-2"><span class="font-semibold">Missions :</span></p>
              <ul class="mt-1">
                <li>- Acheter le café</li>
                <li>- Boire la tisanne</li>
              </ul>
            </div>
            <div
              class="expandable flex justify-end">
              <span
                class="inline-flex"
                @click="setBadge('lf', 4)">
                <button
                  v-ripple
                  class="pt-1/2 pb-1/2 rounded-sm
                  trans-all w-50px bg-blue-light flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                  p-2 text-xs"
                  type="button"
                  @mouseover="scaleBadge('lf')"
                  @mouseleave="reduceBadge('lf')">
                  <span>{{ labelDetail[4] }}</span>
                </button>
              </span>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div
            id="cm"
            class="timeline-badge trans-all cursor-pointer"
            @click="setBadge('cm', 5)">
            <img
              class="w-20px"
              src="~assets/img/tie.svg">
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p class="flex text-xs mb-2">
                <span class="text-blue-dark">Avril 2013 - Juin 2013</span>
                <span class="text-grey-middle ml-auto">Professionnel</span>
              </p>
              <h4 class="timeline-title font-semibold mb-2">Chargé de communication interne</h4>
              <a
                class="inline-flex trans-all text-grey-dark flex flex-row items-center"
                href="https://creditmutuel.fr"
                target="_blank">
                <div class="w-20px mr-3">
                  <img
                    src="~assets/img/CM.svg"
                    class="w-full">
                </div>
                <p>
                  Crédit Mutuel Groupe CM-11
                </p>
              </a>
            </div>
            <div
              v-expand="badgeClicked == 'cm'"
              class="expand timeline-body text-xs bg-white origin-top-center">
              <p class="mt-4"><span class="font-semibold">Description : </span>LA studio est un agence de stratégie digitale</p>
              <p class="mt-2"><span class="font-semibold">Missions :</span></p>
              <ul class="mt-1">
                <li>- Acheter le café</li>
                <li>- Boire la tisanne</li>
              </ul>
            </div>
            <div
              class="expandable flex justify-end">
              <span
                class="inline-flex"
                @click="setBadge('cm', 5)">
                <button
                  v-ripple
                  class="pt-1/2 pb-1/2 rounded-sm
                  trans-all w-50px bg-blue-light flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                  p-2 text-xs"
                  type="button"
                  @mouseover="scaleBadge('cm')"
                  @mouseleave="reduceBadge('cm')">
                  <span>{{ labelDetail[5] }}</span>
                </button>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div
            id="dut"
            class="timeline-badge trans-all cursor-pointer"
            @click="setBadge('dut', 6)">
            <img
              class="w-20px"
              src="~assets/img/cap-black.svg">
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p class="flex text-xs mb-2">
                <span class="text-blue-dark">Sept. 2011 - Juin 2013</span>
                <span class="text-grey-middle ml-auto">Scolaire</span>
              </p>
              <h4 class="timeline-title font-semibold mb-2">DUT | Métiers du Multimédia et de l'Internet</h4>
              <a
                class="inline-flex trans-all text-grey-dark flex flex-row items-center"
                href="http://mmi.univ-smb.fr/site/"
                target="_blank">
                <div class="w-15px mr-3">
                  <img
                    src="~assets/img/dut-logo.png"
                    class="w-full">
                </div>
                <p>
                  IUT de Chambéry
                </p>
              </a>
            </div>
            <div
              v-expand="badgeClicked == 'dut'"
              class="expand timeline-body text-xs bg-white origin-top-center">
              <p class="mt-4"><span class="font-semibold">Description : </span>LA studio est un agence de stratégie digitale</p>
              <p class="mt-2"><span class="font-semibold">Missions :</span></p>
              <ul class="mt-1">
                <li>- Acheter le café</li>
                <li>- Boire la tisanne</li>
              </ul>
            </div>
            <div
              class="expandable flex justify-end">
              <span
                class="inline-flex"
                @click="setBadge('dut', 6)">
                <button
                  v-ripple
                  class="pt-1/2 pb-1/2 rounded-sm
                  trans-all w-50px bg-blue-light flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                  p-2 text-xs"
                  type="button"
                  @mouseover="scaleBadge('dut')"
                  @mouseleave="reduceBadge('dut')">
                  <span>{{ labelDetail[6] }}</span>
                </button>
              </span>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div
            id="bac"
            class="timeline-badge trans-all cursor-pointer"
            @click="setBadge('bac', 7)">
            <img
              class="w-20px"
              src="~assets/img/cap-black.svg">
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p class="flex text-xs mb-2">
                <span class="text-blue-dark">Sept. 2008 - Juin 2011</span>
                <span class="text-grey-middle ml-auto">Scolaire</span>
              </p>
              <h4 class="timeline-title font-semibold mb-2">BAC | Sciences et Technologies du Management et de la Gestion</h4>
              <a
                class="inline-flex trans-all text-grey-dark flex flex-row items-center"
                href="http://marie-reynoard.elycee.rhonealpes.fr/"
                target="_blank">
                <p>
                  Lycée Marie Reynoard
                </p>
              </a>
            </div>
            <div
              v-expand="badgeClicked == 'bac'"
              class="expand timeline-body text-xs bg-white origin-top-center">
              <p class="mt-4"><span class="font-semibold">Description : </span>LA studio est un agence de stratégie digitale</p>
              <p class="mt-2"><span class="font-semibold">Missions :</span></p>
              <ul class="mt-1">
                <li>- Acheter le café</li>
                <li>- Boire la tisanne</li>
              </ul>
            </div>
            <div
              class="expandable flex justify-end">
              <span
                class="inline-flex"
                @click="setBadge('bac', 7)">
                <button
                  v-ripple
                  class="pt-1/2 pb-1/2 rounded-sm
                  trans-all w-50px bg-blue-light flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                  p-2 text-xs"
                  type="button"
                  @mouseover="scaleBadge('bac')"
                  @mouseleave="reduceBadge('bac')">
                  <span>{{ labelDetail[7] }}</span>
                </button>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </page>
</template>

<script>
import Page from '~/components/Page.vue'
import SubPage from '~/components/SubPage.vue'
import Btn from '~/components/Btn.vue'
import ScrollActive from '~/components/ScrollActive.vue'

export default {
  layout: 'main',
  components: {
    Page,
    SubPage,
    Btn,
    scrollactive: ScrollActive
  },
  data: function() {
    return {
      currentMarginTop: null,
      animDone: false,
      badgeClicked: null,
      labelDetail: ['Plus', 'Plus', 'Plus', 'Plus', 'Plus', 'Plus', 'Plus', 'Plus']
    }
  },
  //WEIRD
  computed: {
    isCurrentItem: function() {
      if (this.$store.state.currentItem == 'apropos') {
        this.animationDone()
        return true
      }
      if (this.animDone == true) {
        return true
      }
      return false
    }
  },
  mounted: function() {
    this.setCurrentMarginTop(this.$root.$children[1].$refs.navbar.$refs.header.clientHeight)
  },
  methods: {
    //WEIRD
    animationDone: function() {
      this.animDone = true
    },
    scaleBadge: function(name) {
      if (process.browser) {
        var list = document.getElementsByClassName('timeline-badge')
        for (let item of list) {
          item.classList.remove('timeline-badge-hover')
        }
        document.getElementById(name).classList.add('timeline-badge-hover')
      }
    },
    reduceBadge: function(name) {
      if (process.browser && this.badgeClicked == null) {
        document.getElementById(name).classList.remove('timeline-badge-hover')
      }
    },
    setBadge: function(name, index) {
      if (process.browser) {
        if (this.badgeClicked == name) {
          this.badgeClicked = null
          this.labelDetail.forEach((value, index) => {
            this.labelDetail[index] = 'Plus'
          })
          this.labelDetail[index] = 'Plus'
          this.reduceBadge(name)
          return
        }
        this.badgeClicked = name
        this.labelDetail.forEach((value, index) => {
          this.labelDetail[index] = 'Plus'
        })
        this.labelDetail[index] = 'Moins'
        this.scaleBadge(name)
      }
    },
    onItemChanged: function(event, currentItem, lastActiveItem) {
      this.$store.commit('setCurrentItem', currentItem.hash.substr(1))
    },
    setCurrentMarginTop: function(height) {
      this.currentMarginTop = height
    }
  }
}
</script>
