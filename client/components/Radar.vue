<template>
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
</template>

<script>
export default {
  data: function() {
    return {
      animDone: false,
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
    }
  }
}
</script>
