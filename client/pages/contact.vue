<template>
  <page :current-margin-top="currentMarginTop">
    <sub-page
      :current-margin-top="currentMarginTop"
      class="bg-grey-lightest bg-contact
      min-h-500px smp:min-h-300px sml:min-h-300px md:min-h-0 lg:min-h-0 xl:min-h-0 xxl:min-h-0">
      <div
        class="flex flex-col items-center justify-center w-full h-100-3 relative
        p-4 smp:p-3 sml:p-3 md:p-8 lg:p-8 xl:p-8 xxl:p-8
        overflow-hidden smp:overflow-hidden sml:overflow-hidden md:overflow-hidden lg:overflow-hidden xl:overflow-hidden xxl:overflow-hidden">
        <div
          class="flex flex-col items-center
          w-full smp:w-9/10 sml:w-9/10 md:w-9/10 lg:w-2/3 xl:w-2/3 xxl:2/3
          overflow-y-scroll smp:overflow-hidden sml:overflow-hidden md:overflow-hidden lg:overflow-hidden xl:overflow-hidden xxl:overflow-hidden">
          <div
            class="w-full bg-blue-light text-white uppercase
            p-4 smp:p-3 sml:p-3 md:p-6 lg:p-6 xl:p-6 xxl:p-6
            text-xl smp:text-base sml:text-base md:text-4xl lg:text-5xl xl:text-5xl xxl:text-5xl">
            <h1 class="flex items-center justify-center text-center">Vous souhaitez me contacter ?</h1>
          </div>
          <div
            class="flex w-full bg-grey-dark-90 items-center justify-center flex-no-shrink border-blue-light border-solid
            border-b-2 smp:boder-b-2 sml:border-b-2 md:border-b-4 lg:border-b-4 xl:border-b-4 xxl:border-b-4">
            <contact-form/>
          </div>
          <div
            class="w-full bg-grey-dark-90 items-center justify-center flex-no-shrink
            flex smp:hidden sml:flex md:flex lg:flex xl:flex xxl:flex">
            <contact-detail/>
          </div>
        </div>
      </div>
      <social/>
    </sub-page>
  </page>
</template>

<script>
import Page from '~/components/Page.vue'
import SubPage from '~/components/SubPage.vue'
import ContactForm from '~/components/ContactForm.vue'
import ContactDetail from '~/components/ContactDetail.vue'
import Social from '~/components/Social.vue'

export default {
  layout: 'main',
  components: {
    Page,
    Social,
    SubPage,
    ContactForm,
    ContactDetail
  },
  data: function() {
    return {
      currentMarginTop: null
    }
  },
  head: function() {
    return {
      title: 'Alain Perrier | Me contacter',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Vous recherchez un chef de projet, Product Owner, ou consultant digital ? Contactez-moi sans plus attendre, je serais ravi d'échanger avec vous."
        },
        {
          hid: 'og:title',
          property: 'og:title',
          name: 'og:title',
          content: 'Alain Perrier | Me contacter'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          name: 'og:description',
          content:
            "Vous recherchez un chef de projet, Product Owner, ou consultant digital ? Contactez-moi sans plus attendre, je serais ravi d'échanger avec vous."
        },
        {
          hid: 'og:url',
          property: 'og:url',
          name: 'og:url',
          content: 'https://alainperrier.me/contact'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          name: 'og:image',
          content: 'https://alainperrier.me/ogimage.jpg'
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: 'Alain Perrier | Me contacter'
        }
      ]
    }
  },
  mounted: function() {
    this.setCurrentMarginTop(this.$root.$children[1].$refs.navbar.$refs.header.clientHeight)
  },
  methods: {
    setCurrentMarginTop: function(height) {
      this.currentMarginTop = height
    }
  }
}
</script>
