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
          class="bg-grey-dark text-white heightfix-land">
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
                    alt="Logo Alain Perrier">
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
                          target="_blank"
                          rel="noopener noreferrer">
                          <btn
                            v-ripple
                            class="trans-all bg-red-light flex flex-no-shrink items-center justify-center h-30px truncate trans-all hover:bg-red-dark">
                            <img
                              slot="img"
                              src="~/assets/img/download.svg"
                              class="h-12px mr-3"
                              alt="Visuel téléchargement">
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
                            class="bg-blue-light flex flex-no-shrink items-center justify-center h-30px truncate trans-all hover:bg-blue-dark">
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
            class="flex flex-row items-end w-full h-12 pr-8 pl-8 pb-4
            justify-center smp:justify-center sml:justify-center md:justify-end lg:justify-end xl:justify-end xxl:justify-end">
            <div class="mr-6">
              <a
                class="social flex"
                href="https://twitter.com/perrieral"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="~/assets/img/twitter.svg"
                  class="w-30px h-30px trans-all-fast"
                  alt="Logo Twitter">
              </a>
            </div>
            <div>
              <a
                class="social flex"
                href="https://www.linkedin.com/in/alainperrier"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="~/assets/img/linkedin.svg"
                  class="w-30px h-30px trans-all-fast"
                  alt="Logo LinkedIn">
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
                class="h-12"
                alt="Visuel scroll">
            </span>
          </div>
        </sub-page>
      </div>
      <!-- 2nd part -->
      <div>
        <sub-page
          id="apropos"
          :current-margin-top="currentMarginTop"
          class="text-grey-darker bg-grey-lightest heightfix-graph">
          <div
            class="flex h-full overflow-hidden relative w-full flex-no-shrink
            flex-col smp:flex-col sml:flex-col md:flex-row lg:flex-row xl:flex-row xxl:flex-row">
            <div
              class="flex flex-no-shrink overflow-hidden relative bg-blue-dark text-white justify-center flex-col
              items-center smp:items-start sml:items-start md:items-start lg:items-start xl:items-start xxl:items-center
              h-auto smp:h-auto sml:h-auto md:h-full lg:h-full xl:h-full xxl:h-full
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
                flex-col smp:flex-row sml:flex-row md:flex-col lg:flex-col xl:flex-col xxl:flex-col
                w-full
                items-center smp:items-center sml:items-center md:items-start lg:items-start xl:items-start xxl:items-center
                pb-2 smp:pb-0 sml:pb-0 md:pb-0 lg:pb-0 xl:pb-0 xxl:pb-0
                mt-6 smp:mt-8 sml:mt-8 md:mt-12 lg:mt-12 xl:mt-12 xxl:mt-12
                text-sm smp:text-sm sml:text-sm md:text-md lg:text-lg xl:text-xl xxl:text-2xl
                ml-0 smp:ml-0 sml:ml-0 md:ml-8 lg:ml-10 xl:ml-12 xxl:ml-12">
                <!-- ADD RESPONSIVE MARGIN (UP)-->
                <li
                  class="flex items-center
                  mb-6 smp:mb-0 sml:mb-0 md:mb-11 lg:mb-11 xl:mb-11 xxl:mb-11
                  smp:mr-8 sml:mr-11">
                  <span class="mr-8 smp:mr-5">
                    <img
                      class="w-20px smp:w-20px sml:w-25px md:w-30px lg:w-35px xl:w-35px xxl:w-35px
                      h-20px smp:h-20px sml:h-25px md:h-30px lg:h-35px xl:h-35px xxl:h-35px"
                      src="~assets/img/flask.svg"
                      alt="Expérience">
                  </span>
                  <div class="max-w-100px smp:max-w-150px sml:max-w-100px md:max-w-none lg:max-w-none xl:max-w-none xxl:max-w-none">
                    <p><span class="font-semibold">Plus de 3 ans</span> d'expérience</p>
                  </div>
                </li>
                <li
                  class="flex items-center
                  mb-6 smp:mb-0 sml:mb-0 md:mb-11 lg:mb-11 xl:mb-11 xxl:mb-11
                  smp:mr-8 sml:mr-11 md:ml-4 lg:ml-4 xl:ml-4 xxl:ml-4">
                  <span class="mr-8 smp:mr-5">
                    <img
                      class="w-30px smp:w-30px sml:w-35px md:w-40px lg:w-45px xl:w-45px xxl:w-45px
                      h-30px smp:h-30px sml:h-35px md:h-40px lg:h-45px xl:h-45px xxl:h-45px"
                      src="~assets/img/cap.svg"
                      alt="Double casquette">
                  </span>
                  <div class="max-w-100px smp:max-w-220px sml:max-w-100px md:max-w-none lg:max-w-none xl:max-w-none xxl:max-w-none">
                    <p class="font-semibold">Double casquette</p>
                    <p>Business et technique</p>
                  </div>
                </li>
                <li class="flex items-center">
                  <span class="mr-8 sml:mr-5 smp:mr-5">
                    <img
                      class="w-25px smp:w-25px sml:w-30px md:w-35px lg:w-40px xl:w-40px xxl:w-40px
                      h-25px smp:h-25px sml:h-30px md:h-35px lg:h-40px xl:h-40px xxl:h-40px"
                      src="~assets/img/heart.svg"
                      alt="Passion">
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
                class="flex flex-col relative bg-grey-lightest items-center justify-center verysmallfix graph flex-no-shrink mauto-0
                h-auto smp:h-auto sml:h-auto md:h-auto lg:h-auto xl:h-auto xxl:h-auto
                w-full smp:w-full sml:w-full md:w-3/5 lg:w-3/5 xl:w-3/5 xxl:w-3/5
                p-6">
                <div
                  class="relative font-semibold text-grey-dark flex
                  text-sm smp:text-sm sml:text-sm md:text-sm lg:text-base xl:text-base xxl:text-base
                  m-10 smp:m-10 sml:m-10 md:m-13 lg:m-13 xl:m-13 xxl:m-13">
                  <svg
                    id="Calque_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 136.8 136.8"
                    class="w-150px smp:w-150px sml:w-250px md:w-200px lg:w-250px xl:w-350px xxl:w-400px
                    h-150px smp:h-150px sml:h-200px md:h-200px lg:h-250px xl:h-350px xxl:h-400px">
                    <style>
                      .st1 {
                      fill: #fff
                      }

                      .st4 {
                      fill: none;
                      stroke: #fff;
                      stroke-width: .25;
                      stroke-miterlimit: 10
                      }
                    </style>
                    <linearGradient
                      id="SVGID_1_"
                      gradientUnits="userSpaceOnUse"
                      x1="3.125"
                      y1="66.952"
                      x2="130.694"
                      y2="66.952">
                      <stop
                        offset="0"
                        stop-color="#00aad5" />
                      <stop
                        offset=".041"
                        stop-color="#00a5bf" />
                      <stop
                        offset=".099"
                        stop-color="#0ca0a5" />
                      <stop
                        offset=".159"
                        stop-color="#169c91" />
                      <stop
                        offset=".221"
                        stop-color="#1a9983" />
                      <stop
                        offset=".286"
                        stop-color="#1d977b" />
                      <stop
                        offset=".361"
                        stop-color="#1d9678" />
                      <stop
                        offset="1"
                        stop-color="#00aad5" />
                    </linearGradient>
                    <path
                      fill="url(#SVGID_1_)"
                      d="M40.5 130.7L3.2 93.4l-.1-52.8L40.5 3.2h52.8l37.4 37.3v52.8l-37.4 37.4z" />
                    <path
                      class="st1"
                      d="M93.3 3.3l37.3 37.3v52.7l-37.3 37.3H40.5L3.3 93.3V40.6L40.5 3.3h52.8m.1-.3h-53l-.1.1L3.1 40.4l-.1.1v52.9l.1.1 37.3 37.3.1.1h52.9l.1-.1 37.3-37.3.1-.1V40.5l-.1-.1L93.4 3z" />
                    <path
                      fill="#404951"
                      d="M10 89.6L6.7 41.9 43.5 9.2l43.9 8.3 20.9 32.9-.9 33.1-20 32.9-44.1 7z" />
                    <path
                      class="st1"
                      d="M43.6 9.3l43.7 8.3 20.8 32.8-.8 33.1-20 32.9-44 6.9-33.1-33.7-3.3-47.7L43.6 9.3m-.1-.3L6.6 41.8l3.3 47.8 33.3 33.8 44.2-6.9 20.1-33 .8-33.2-20.9-33L43.5 9z" />
                    <circle
                      :r="currentSize(0)"
                      class="st1 trans-all z-9999 cursor-pointer"
                      cx="43.7"
                      cy="9.1"
                      @mouseover="setSkill(0)"
                      @mouseleave="setSkill(null)"/>
                    <circle
                      :r="currentSize(1)"
                      class="st1 trans-all z-9999 cursor-pointer"
                      cx="6.9"
                      cy="41.6"
                      @mouseover="setSkill(1)"
                      @mouseleave="setSkill(null)"/>
                    <circle
                      :r="currentSize(2)"
                      class="st1 trans-all z-9999 cursor-pointer"
                      cx="9.9"
                      cy="89.6"
                      @mouseover="setSkill(2)"
                      @mouseleave="setSkill(null)"/>
                    <circle
                      :r="currentSize(3)"
                      class="st1 trans-all z-9999 cursor-pointer"
                      cx="43.4"
                      cy="123.4"
                      @mouseover="setSkill(3)"
                      @mouseleave="setSkill(null)"/>
                    <circle
                      :r="currentSize(4)"
                      class="st1 trans-all z-9999 cursor-pointer"
                      cx="87.5"
                      cy="116.3"
                      @mouseover="setSkill(4)"
                      @mouseleave="setSkill(null)"/>
                    <circle
                      :r="currentSize(5)"
                      class="st1 trans-all z-9999 cursor-pointer"
                      cx="107.5"
                      cy="83.5"
                      @mouseover="setSkill(5)"
                      @mouseleave="setSkill(null)"/>
                    <circle
                      :r="currentSize(6)"
                      class="st1 trans-all z-9999 cursor-pointer"
                      cx="108.3"
                      cy="49.5"
                      @mouseover="setSkill(6)"
                      @mouseleave="setSkill(null)"/>
                    <circle
                      :r="currentSize(7)"
                      class="st1 trans-all z-9999 cursor-pointer"
                      cx="87.5"
                      cy="17.1"
                      @mouseover="setSkill(7)"
                      @mouseleave="setSkill(null)"/>
                    <g opacity=".2">
                      <path
                        class="st4"
                        d="M87.5 17.3H46.4L17.3 46.4v41.1l29.1 29.1h41.1l29-29.1V46.4z" />
                      <path
                        class="st4"
                        d="M81.8 31.4H52.5L31.7 52.2v29.3l20.8 20.8h29.3l20.8-20.8V52.2z" />
                      <path
                        class="st4"
                        d="M76 45.6H58.3L45.9 58v17.7l12.4 12.4H76l12.4-12.4V58zM93.3 3.2L40.5 130.5m52.8 0L40.5 3.2m-37.3 90l127.5-52.7m-127.5 0l127.5 52.7" />
                      <circle
                        cx="66.9"
                        cy="66.7"
                        r="1.1"
                        fill="#f3f7f9" />
                      <path
                        class="st4"
                        d="M70.1 59.8h-5.9l-4.1 4.1v5.9l4.1 4.1h5.9l4.1-4.1v-5.9z" />
                    </g>
                  </svg>
                  <span
                    id="skill-0"
                    class="absolute label pin-management text-right
                    max-w-150px sml:max-w-150px smp:max-w-150px md:max-w-150px lg:max-w-150px xl:max-w-150px xxl:max-w-150px"
                    @mouseover="setSkill(0)"
                    @mouseleave="setSkill(null)">
                    Management
                  </span>
                  <span
                    id="skill-1"
                    class="absolute label pin-gestion text-right
                    min-w-0
                    max-w-60px sml:max-w-80px smp:max-w-80px md:max-w-80px lg:max-w-100px xl:max-w-100px xxl:max-w-100px"
                    @mouseover="setSkill(1)"
                    @mouseleave="setSkill(null)">
                    Gestion de projet
                  </span>
                  <span
                    id="skill-2"
                    class="absolute label pin-conduite text-right
                    max-w-60px sml:max-w-80px smp:max-w-80px md:max-w-80px lg:max-w-100px xl:max-w-100px xxl:max-w-100px"
                    @mouseover="setSkill(2)"
                    @mouseleave="setSkill(null)">
                    Conduite du changement
                  </span>
                  <span
                    id="skill-3"
                    class="absolute label pin-consulting text-right
                    max-w-150px sml:max-w-150px smp:max-w-150px md:max-w-150px lg:max-w-150px xl:max-w-150px xxl:max-w-150px"
                    @mouseover="setSkill(3)"
                    @mouseleave="setSkill(null)">
                    Consulting
                  </span>
                  <span
                    id="skill-4"
                    class="absolute label pin-strategie text-left
                    max-w-150px sml:max-w-150px smp:max-w-150px md:max-w-150px lg:max-w-150px xl:max-w-150px xxl:max-w-150px"
                    @mouseover="setSkill(4)"
                    @mouseleave="setSkill(null)">
                    Stratégie digitale
                  </span>
                  <span
                    id="skill-5"
                    class="absolute label pin-data text-left
                    max-w-60px sml:max-w-80px smp:max-w-80px md:max-w-80px lg:max-w-100px xl:max-w-100px xxl:max-w-100px"
                    @mouseover="setSkill(5)"
                    @mouseleave="setSkill(null)">
                    Data science
                  </span>
                  <span
                    id="skill-6"
                    class="absolute label pin-ux text-left
                    max-w-60px sml:max-w-80px smp:max-w-80px md:max-w-80px lg:max-w-100px xl:max-w-100px xxl:max-w-100px"
                    @mouseover="setSkill(6)"
                    @mouseleave="setSkill(null)">
                    UX Design
                  </span>
                  <span
                    id="skill-7"
                    class="absolute label pin-dev text-left
                    max-w-150px sml:max-w-150px smp:max-w-150px md:max-w-150px lg:max-w-150px xl:max-w-150px xxl:max-w-150px"
                    @mouseover="setSkill(7)"
                    @mouseleave="setSkill(null)">
                    Développement web
                  </span>
                </div>
                <div
                  class="w-full h-30px items-end justify-center flex text-center
                  mb-2 smp:mb-2 sml:mb-2 md:mb-0 lg:mb-0 xl:mb-0 xxl:mb-0
                  sml:mt-4">
                  <transition
                    name="hide"
                    mode="out-in">
                    <span
                      v-if="skillItem != null"
                      class="skill-details text-xs smp:text-xs sml:text-xs md:text-xs lg:text-sm xl:text-sm xxl:text-sm text-blue-dark">
                      {{ skillDetail[skillItem] }}
                    </span>
                  </transition>
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
      class="text-grey-dark bg-grey-white relative font-lato-light font-normal h-full trans-all-fast
      p-8 smp:p-8 sml:p-8 md:p-12 lg:p-14 xl:p-14 xxl:p-14">
      <div class="mb-11">
        <h3 class="text-base smp:text-base sml:text-base md:text-2xl lg:text-4xl xl:text-5xl xxl:text-5xl uppercase font-semibold">Mon parcours</h3>
        <h4 class="text-base smp:text-base sml:text-base md:text-lg lg:text-2xl xl:text-3xl xxl:text-3xl uppercase mt-2">Scolaire et professionnel</h4>
      </div>
      <ul class="timeline overflow-hidden">
        <li>
          <div
            id="lastudio"
            class="timeline-badge trans-all cursor-pointer"
            @click="setBadge('lastudio', 0)">
            <img
              class="w-20px h-20px"
              src="~assets/img/tie.svg"
              alt="Expérience professionnelle">
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <div class="flex text-sm mb-4">
                <p class="text-blue-dark">Nov. 2015 - Aujourd'hui</p>
                <p class="text-grey-middle ml-auto">Professionnel</p>
              </div>
              <h4 class="timeline-title text-mid font-semibold mb-3">Chef de projet web | Partenaire associé</h4>
              <a
                class="trans-all inline-flex text-grey-dark flex flex-row items-center"
                href="https://la-studio.fr"
                target="_blank"
                rel="noopener noreferrer">
                <div class="w-20px mr-3 flex-no-shrink">
                  <img
                    class="w-full"
                    srcset= "~assets/img/logo-LA-Studio.png 1x, ~assets/img/logo-LA-Studio-2x.png 2x"
                    src="~assets/img/logo-LA-Studio.png"
                    alt="Logo LA-Studio">
                </div>
                <p>
                  LA - Studio
                </p>
              </a>
            </div>
            <div
              v-expand="badgeClicked == 'lastudio'"
              class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
              <div class="mt-6">
                <p class="font-lato-medium text-sm mb-1">Contexte</p>
                <p>LA-Studio est une agence de stratégie digitale qui accompagne les entreprises de la région grenobloise. Je participe à son développement en tant que partenaire associé.</p>
              </div>
              <div class="mt-4"><p class="font-lato-medium text-sm">Missions</p></div>
              <ul class="mt-1">
                <li>Conception et développement d'une
                  <span>
                    application web pour la Banque Populaire Auvergne Rhône Alpes
                  </span>
                </li>
                <li class="mt-1">Co-conception, co-développement et maintenance du site web du
                  <a
                    class="text-grey-dark trans-all"
                    href="https://cabinet-schmidt.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Cabinet Schmidt
                  </a>
                </li>
                <li class="mt-1">Développement d'un outil de diagnostic RH pour P+RH</li>
                <li class="mt-1">Déploiement de sites web et assistance technique</li>
                <li class="mt-1">
                  <span>Entreprenariat : LA-Studio, </span>
                  <span class="line-through">Chez Robert</span>
                  <span> (projet d'une application de mise en relation agriculteurs / consommateurs)</span>
                </li>
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
              class="w-20px h-20px"
              src="~assets/img/tie.svg"
              alt="Expérience professionnelle">
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p class="flex text-sm mb-4">
                <span class="text-blue-dark">Mai 2015 - Déc. 2017</span>
                <span class="text-grey-middle ml-auto">Professionnel</span>
              </p>
              <h4 class="timeline-title text-mid font-semibold mb-3">Chef de projet digital</h4>
              <a
                class="inline-flex trans-all text-grey-dark flex flex-row items-center"
                href="https://www.bpaura.banquepopulaire.fr/portailinternet/Pages/default.aspx"
                target="_blank"
                rel="noopener noreferrer">
                <div class="flex-no-shrink w-25px mr-3">
                  <img
                    class="w-full"
                    srcset= "~assets/img/BP.png 1x, ~assets/img/BP-2x.png 2x"
                    src="~assets/img/BP.png"
                    alt="Logo Banque Populaire">
                </div>
                <p>
                  Banque Populaire Auvergne Rhône Alpes
                </p>
              </a>
            </div>
            <div
              v-expand="badgeClicked == 'bp'"
              class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
              <div class="mt-6">
                <p class="font-lato-medium text-sm mb-1">Contexte</p>
                <p>Au siège de la Banque Populaire des Alpes à Corenc, j'ai piloté plusieurs projets visant à accélérer la transformation digitale en lien avec le Groupe BPCE et la filiale informatique Banque Populaire. J'ai également contribué à la Fusion Informatique et Organisationnelle pour donner naissance à la Banque Populaire Auvergne Rhône Alpes.</p>
              </div>
              <p class="mt-4"><span class="font-lato-medium text-sm">Missions</span></p>
              <ul class="mt-1">
                <li>Déploiement et pilotage de projets digitaux à enjeux stratégiques (signature électronique, application commerciale sur tablette...)</li>
                <li class="mt-1">Responsable projet Auvergne Rhône Alpes et membre du COPIL Digital</li>
                <li class="mt-1">Coordination transversale des acteurs (Banque, Groupe BPCE et filiales)</li>
                <li class="mt-1">Conduite du changement, formation et animation d'une communauté de référents digitaux</li>
                <li class="mt-1">Contribution à la Fusion Informatique et Organisationnelle</li>
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
              class="w-20px h-20px"
              src="~assets/img/cap-black.svg"
              alt="Expérience scolaire">
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p class="flex text-sm mb-4">
                <span class="text-blue-dark">Sept. 2016 - Déc. 2017</span>
                <span class="text-grey-middle ml-auto">Scolaire</span>
              </p>
              <h4 class="timeline-title text-mid font-semibold mb-3">Advanced Master | Digital Business Strategy</h4>
              <a
                class="inline-flex trans-all text-grey-dark flex flex-row items-center"
                href="https://www.grenoble-em.com/mastere-specialise-strategie-digitale"
                target="_blank"
                rel="noopener noreferrer">
                <div class="w-20px mr-3 flex-no-shrink">
                  <img
                    class="w-full"
                    srcset= "~assets/img/gem-logo.png 1x, ~assets/img/gem-logo-2x.png 2x"
                    src="~assets/img/gem-logo.png"
                    alt="Logo Grenoble École de Management">
                </div>
                <p>
                  Grenoble École de Management
                </p>
              </a>
            </div>
            <div
              v-expand="badgeClicked == 'dbs'"
              class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
              <div class="mt-6">
                <p class="font-lato-medium text-sm mb-1">Contexte</p>
                <p>Le Mastère spécialisé Stratégie Digitale est dispensé en anglais sur le campus de GEM à Paris. Il forme les étudiants aux pratiques du marketing digital (e-commerce, social media, SEO/SEA...), de l'expérience utilisateur, de la transformation digitale et de la gestion de projet agile dans un contexte international.</p>
              </div>
              <p class="mt-4"><span class="font-lato-medium text-sm">Évènements marquants</span></p>
              <ul class="mt-1">
                <li>Thèse Professionnelle : How can we encourage employees to adopt digital technology? Case study of La Banque Populaire des Alpes</li>
                <li class="mt-1">Rédaction d'articles de blog pour
                  <a
                    href="http://digital-me-up.com/"
                    class="text-grey-dark trans-all"
                    target="_blank"
                    rel="noopener noreferrer">
                    Digital me UP
                  </a>
                </li>
                <li class="mt-1">
                  <span>Contributeur du livre du</span>
                  <span class="italic">
                    <a
                      href="https://www.amazon.fr/digital-expliqu%C3%A9-mon-boss-aimeraient/dp/2367781354/ref=sr_1_1?ie=UTF8&qid=1523534135&sr=8-1&keywords=le+digital+expliqu%C3%A9+%C3%A0+mon+boss&dpID=51jMwRy-X-L&preST=_SY291_BO1,204,203,200_QL40_&dpSrc=srch"
                      class="text-grey-dark trans-all"
                      target="_blank"
                      rel="noopener noreferrer">
                      Digital expliqué à mon boss
                    </a>
                  </span>
                </li>
                <li class="mt-1">Business Case
                  <a
                    href="http://www.altigliss.com/"
                    class="text-grey-dark trans-all"
                    target="_blank"
                    rel="noopener noreferrer">
                    Altigliss Challenge
                  </a>
                </li>
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
              class="w-20px h-20px"
              src="~assets/img/cap-black.svg"
              alt="Expérience scolaire">
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p class="flex text-sm mb-4">
                <span class="text-blue-dark">Sept. 2013 - Juin 2016</span>
                <span class="text-grey-middle ml-auto">Scolaire</span>
              </p>
              <h4 class="timeline-title text-mid font-semibold mb-3">Master en Management | Programme Grande École</h4>
              <a
                class="inline-flex trans-all text-grey-dark flex flex-row items-center"
                href="https://www.bsb-education.com/"
                target="_blank"
                rel="noopener noreferrer">
                <div class="w-35px mr-3 flex-no-shrink">
                  <img
                    class="w-full"
                    srcset= "~assets/img/bsb-logo.png 1x, ~assets/img/bsb-logo-2x.png 2x"
                    src="~assets/img/bsb-logo.png"
                    alt="Logo Burgundy School of Business">
                </div>
                <p>
                  Burgundy School of Business
                </p>
              </a>
            </div>
            <div
              v-expand="badgeClicked == 'bsb'"
              class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
              <div class="mt-6">
                <p class="font-lato-medium text-sm mb-1">Contexte</p>
                <p>Anciennement l'ESC Dijon, Burgundy School of Business forme les étudiants au monde de l'entreprise (stratégie, finance, économie, comptabilité, droit, marketing, communication, relations commerciales...).</p>
              </div>
              <p class="mt-4"><span class="font-lato-medium text-sm">Évènements marquants</span></p>
              <ul class="mt-1">
                <li>Semestre an Angleterre à l'université d'Hertfordshire</li>
                <li class="mt-1">Major de Promotion en première année</li>
                <li class="mt-1">Option Audit Expertise Comptabilité en première année</li>
                <li class="mt-1">Coach Photoshop d'un groupe de 20 étudiants</li>
                <li class="mt-1">Aide informatique aux personnes âgées dans l'association Médéric Malakoff</li>
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
              class="w-20px  h-20px"
              src="~assets/img/tie.svg"
              alt="Expérience professionnelle">
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p class="flex text-sm mb-4">
                <span class="text-blue-dark">Mai 2014 - Août 2014</span>
                <span class="text-grey-middle ml-auto">Professionnel</span>
              </p>
              <h4 class="timeline-title font-semibold text-mid mb-3">Assistant chef de projet</h4>
              <a
                class="inline-flex trans-all text-grey-dark flex flex-row items-center"
                href="https://leadformance.com"
                target="_blank"
                rel="noopener noreferrer">
                <div class="w-30px mr-3 flex-no-shrink">
                  <img
                    class="w-full"
                    srcset= "~assets/img/lf.png 1x, ~assets/img/lf-2x.png 2x"
                    src="~assets/img/lf.png"
                    alt="Logo Leadformance">
                </div>
                <p>
                  Leadformance
                </p>
              </a>
            </div>
            <div
              v-expand="badgeClicked == 'lf'"
              class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
              <div class="mt-6">
                <p class="font-lato-medium text-sm mb-1">Contexte</p>
                <p>Leadformance propose une solution web-to-store visant à améliorer la visibilité des points de vente sur le web. Leadformance est située au Bourget-du-Lac, appartient au Groupe Solocal et travaille avec des entreprises grands comptes comme SFR, Crédit Agricole, Darty...</p>
              </div>
              <p class="mt-4"><span class="font-lato-medium text-sm">Missions</span></p>
              <ul class="mt-1">
                <li>Gestion de projet dans un contexte agile (SCRUM) : daily meeting, sprint review, sprint goals, tests, documentation...</li>
                <li class="mt-1">Déploiement de projets BRIDGE (plateforme SAAS web-to-store)</li>
                <li class="mt-1">Relation clients (Numéricable...)</li>
                <li class="mt-1">Conception et développement d'outils internes</li>
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
              class="w-20px h-20px"
              src="~assets/img/tie.svg"
              alt="Expérience professionnelle">
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p class="flex text-sm mb-4">
                <span class="text-blue-dark">Avril 2013 - Juin 2013</span>
                <span class="text-grey-middle ml-auto">Professionnel</span>
              </p>
              <h4 class="timeline-title text-mid font-semibold mb-3">Chargé de communication interne</h4>
              <a
                class="inline-flex trans-all text-grey-dark flex flex-row items-center"
                href="https://creditmutuel.fr"
                target="_blank"
                rel="noopener noreferrer">
                <div class="w-20px h-16-66px mr-3 flex-no-shrink">
                  <img
                    src="~assets/img/CM.svg"
                    class="w-full"
                    alt="logo Crédit Mutuel">
                </div>
                <p>
                  Groupe Crédit Mutuel CM11
                </p>
              </a>
            </div>
            <div
              v-expand="badgeClicked == 'cm'"
              class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
              <div class="mt-6">
                <p class="font-lato-medium text-sm mb-1">Contexte</p>
                <p>Au siège du Crédit Mutuel à Strasbourg, j'intègre l'équipe de la communication interne du Groupe</p>
              </div>
              <div class="mt-4"><span class="font-lato-medium text-sm">Missions</span></div>
              <ul class="mt-1">
                <li>Création de supports de communication (newsletter, infographie, journal interne...)</li>
                <li class="mt-1">Administration du site intranet</li>
                <li class="mt-1">Co-organisation d'un concours photo</li>
                <li class="mt-1">Contribution à l'organisation de l’Assemblée Générale annuelle (6 000 participants)</li>
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
              class="w-20px h-20px"
              src="~assets/img/cap-black.svg"
              alt="Expérience scolaire">
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p class="flex text-sm mb-4">
                <span class="text-blue-dark">Sept. 2011 - Juin 2013</span>
                <span class="text-grey-middle ml-auto">Scolaire</span>
              </p>
              <h4 class="timeline-title font-semibold text-mid mb-3">DUT | Métiers du Multimédia et de l'Internet</h4>
              <a
                class="inline-flex trans-all text-grey-dark flex flex-row items-center"
                href="http://mmi.univ-smb.fr/site/"
                target="_blank"
                rel="noopener noreferrer">
                <div class="w-15px mr-3 flex-no-shrink">
                  <img
                    class="w-full"
                    srcset= "~assets/img/dut-logo.png 1x, ~assets/img/dut-logo-2x.png 2x"
                    src="~assets/img/dut-logo.png"
                    alt="Logo IUT de Chambéry">
                </div>
                <p>
                  IUT de Chambéry
                </p>
              </a>
            </div>
            <div
              v-expand="badgeClicked == 'dut'"
              class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
              <div class="mt-6">
                <p class="font-lato-medium text-sm mb-1">Contexte</p>
                <p>Le DUT Métiers du Multimédia et de l'Internet au Bourget-du-Lac forme les étudiants aux pratiques de la communication, du développement web, du montage vidéo, de la conception graphique et de la gestion de projet.</p>
              </div>
              <p class="mt-4"><span class="font-lato-medium text-sm">Évènements marquants</span></p>
              <ul class="mt-1">
                <li>Major de promotion</li>
                <li class="mt-1">Spécialisation Communication</li>
                <li class="mt-1">Chef de projet d'une équipe de 11 étudiants avec 6 projets concrets (Planning familial, Mountain Riders, ITAC, ADSEA26, CRETE, Journée Portes Ouvertes IUT)</li>
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
              class="w-20px h-20px"
              src="~assets/img/cap-black.svg"
              alt="Expérience scolaire">
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <p class="flex text-sm mb-4">
                <span class="text-blue-dark">Sept. 2008 - Juin 2011</span>
                <span class="text-grey-middle ml-auto">Scolaire</span>
              </p>
              <h4 class="timeline-title font-semibold text-mid mb-3">BAC | Sciences et Technologies du Management et de la Gestion</h4>
              <a
                class="inline-flex trans-all text-grey-dark flex flex-row items-center"
                href="http://marie-reynoard.elycee.rhonealpes.fr/"
                target="_blank"
                rel="noopener noreferrer">
                <p>
                  Lycée Marie Reynoard
                </p>
              </a>
            </div>
            <div
              v-expand="badgeClicked == 'bac'"
              class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
              <div class="mt-6">
                <p class="font-lato-medium text-sm mb-1">Contexte</p>
                <p>Le Lycée Marie Reynoard se situe à Villard-Bonnot</p>
              </div>
              <p class="mt-4"><span class="font-lato-medium text-sm">Évènements marquants</span></p>
              <ul class="mt-1">
                <li>Mention très bien au BAC</li>
                <li class="mt-1">Spécialisation Communication et Gestion des Ressources Humaines</li>
              </ul>
            </div>
            <div
              class="expandable flex justify-end">
              <div
                @click="setBadge('bac', 7)">
                <button
                  v-ripple
                  class="pt-1/2 pb-1/2 rounded-sm
                  trans-all w-50px bg-blue-light hover:bg-blue-dark flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                  p-2 text-xs"
                  type="button"
                  @mouseover="scaleBadge('bac')"
                  @mouseleave="reduceBadge('bac')">
                  <span>{{ labelDetail[7] }}</span>
                </button>
              </div>
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
      labelDetail: ['Plus', 'Plus', 'Plus', 'Plus', 'Plus', 'Plus', 'Plus', 'Plus'],
      skillItem: null,
      skillDetail: [
        'Coordination, Team Building, Performance, Engagement',
        'SCRUM, LEAN, KANBAN',
        'Formation, Accompagnement, Communication',
        'Veille, Audit, Etude, Recommandations',
        'SEO/SEA, Social Media, Blogging, Emailing',
        'Collecte, Traitement, Analyse',
        'Survey, A/B Testing, Personae, Wireframe, User Interface',
        'Workflow, Backend, Frontend, Deployment'
      ]
    }
  },
  head: function() {
    return {
      title: 'Alain Perrier | Chef de projet, Product Owner, Consultant',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Alain Perrier, chef de projet, Product Owner et consultant sur Grenoble (Isère). Fort de mes 3 ans d'expérience et de ma double casquette technique et business, je suis prêt à relever de nouveaux défis."
        },
        {
          hid: 'og:title',
          property: 'og:title',
          name: 'og:title',
          content: 'Alain Perrier | Chef de projet, Product Owner, Consultant'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          name: 'og:description',
          content:
            "Alain Perrier, chef de projet, Product Owner et consultant sur Grenoble (Isère). Fort de mes 3 ans d'expérience et de ma double casquette technique et business, je suis prêt à relever de nouveaux défis."
        },
        {
          hid: 'og:url',
          property: 'og:url',
          name: 'og:url',
          content: 'https://alainperrier.me'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          name: 'og:image',
          content: 'https://alainperrier.me/icon.png'
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: 'Alain Perrier | Chef de projet, Product Owner, Consultant'
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: 'Alain Perrier | Chef de projet, Product Owner, Consultant'
        }
      ]
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
    setSkill: function(index) {
      if (process.browser) {
        if (index != null) {
          let name = 'skill-' + index
          document.getElementById(name).classList.add('label-hover')
        }
        if (index == null) {
          let name = 'skill-' + this.skillItem
          document.getElementById(name).classList.remove('label-hover')
        }
        if (this.skillItem == index) {
          this.skillItem = null
          return
        }
        this.skillItem = index
      }
    },
    currentSize: function(index) {
      if (this.skillItem == index) {
        return 2.5
      }
      return 1.1
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
