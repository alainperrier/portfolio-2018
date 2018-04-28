<template>
  <page
    :current-margin-top="currentMarginTop">
    <scroll-marker :current-margin-top="currentMarginTop"/>
    <!-- 1st part -->
    <div class="content-container">
      <div>
        <sub-page
          id="accueil"
          :current-margin-top="currentMarginTop"
          class="bg-grey-dark text-white heightfix-land">
          <landing/>
          <social/>
          <scroll-to :current-margin-top="currentMarginTop"/>
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
            <about/>
            <radar/>
          </div>
        </sub-page>
      </div>
    </div>
    <!-- 3rd part -->
    <timeline/>
  </page>
</template>

<script>
import Page from '~/components/Page.vue'
import SubPage from '~/components/SubPage.vue'
import Landing from '~/components/Landing.vue'
import Social from '~/components/Social.vue'
import ScrollTo from '~/components/ScrollTo.vue'
import ScrollMarker from '~/components/ScrollMarker.vue'
import About from '~/components/About.vue'
import Radar from '~/components/Radar.vue'
import Timeline from '~/components/Timeline.vue'

export default {
  layout: 'main',
  components: {
    Page,
    SubPage,
    Landing,
    Social,
    ScrollTo,
    ScrollMarker,
    About,
    Radar,
    Timeline
  },
  data: function() {
    return {
      currentMarginTop: null
    }
  },
  head: function() {
    return {
      title: 'Alain Perrier | Chef de projet, Product Owner, Consultant digital',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Alain Perrier, chef de projet, Product Owner et consultant digital sur Grenoble (Isère). Fort de mes 3 ans d'expérience et de ma double casquette technique et business, je suis prêt à relever de nouveaux défis."
        },
        {
          hid: 'og:title',
          property: 'og:title',
          name: 'og:title',
          content: 'Alain Perrier | Chef de projet, Product Owner, Consultant digital'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          name: 'og:description',
          content:
            "Alain Perrier, chef de projet, Product Owner et consultant digital sur Grenoble (Isère). Fort de mes 3 ans d'expérience et de ma double casquette technique et business, je suis prêt à relever de nouveaux défis."
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
          content: 'Alain Perrier | Chef de projet, Product Owner, Consultant digital'
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: 'Alain Perrier | Chef de projet, Product Owner, Consultant digital'
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
