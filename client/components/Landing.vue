<template>
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
</template>

<script>
import Btn from '~/components/Btn.vue'

export default {
  components: {
    Btn
  }
}
</script>
