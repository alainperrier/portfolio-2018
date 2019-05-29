<template>
  <div>
    <dropdown
      v-click-outside="exceptParent"
      v-if="opened()"
      :items="items"/>
    <div
      :style="{ marginTop: currentMarginTop == null ? 0 : currentMarginTop + 'px'}"
      class="mt-59px">
      <slot/>
    </div>
  </div>
</template>

<script>
import Dropdown from '~/components/Dropdown.vue'

export default {
  components: {
    Dropdown
  },
  props: {
    currentMarginTop: {
      type: Number,
      default: null
    }
  },
  data: function() {
    return {
      items: [
        {
          name: 'avatar',
          arrowPosition: null,
          totalSpace: null,
          title: 'Profil',
          content: [
            {
              image: 'user.svg',
              content: 'Alain Perrier'
            },
            {
              image: 'date.svg',
              content: '26 ans'
            },
            {
              image: 'position.svg',
              content: 'Grenoble'
            },
            {
              image: 'hashtag.svg',
              content: '#Polyvalent #Autodidacte #Passionné #Digital'
            }
          ]
        },
        {
          name: 'notifications',
          arrowPosition: null,
          totalSpace: null,
          title: 'Notifications',
          content: [
            {
              image: 'construction.svg',
              content:
                'Ce site est en construction... Vous pouvez suivre le projet sur <a href="https://github.com/alainperrier/portfolio-2018" target="_blank" rel="noopener noreferrer" class="trans-all-fast">GitHub</a> et <a href="https://trello.com/b/zRKp0mXI/alain-perrier-portfolio" target="_blank" rel="noopener noreferrer" class="trans-all-fast">Trello</a>'
            }
          ]
        },
        {
          name: 'projects',
          arrowPosition: null,
          totalSpace: null,
          title: 'Projets en cours',
          content: [
            {
              image: 'postit-pink.svg',
              content: 'Release an english version of my website and LinkedIn profile'
            },
            {
              image: 'postit-orange.svg',
              content: "Continuer d'apprendre dans le développement web en améliorant ce site"
            },
            {
              image: 'postit-green.svg',
              content: 'Poursuivre ma carrière de Chef de projet, Scrum Master et Product Owner'
            }
          ]
        },
        {
          name: 'technos',
          arrowPosition: null,
          totalSpace: null,
          title: 'Technologies utilisées',
          content: [
            {
              image: 'vue.svg',
              content:
                '<a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" class="technos trans-all-fast">Vue</a> | Framework JavaScript'
            },
            {
              image: 'nuxt.svg',
              content:
                '<a href="https://fr.nuxtjs.org/" target="_blank" rel="noopener noreferrer" class="technos trans-all-fast">Nuxt</a> | Framework pour créer des applications Vue rendues côté serveur'
            },
            {
              image: 'laravel.svg',
              content:
                '<a href="https://laravel.com/" target="_blank" rel="noopener noreferrer" class="technos trans-all-fast">Laravel</a> | Framework PHP'
            }
          ]
        }
      ]
    }
  },
  methods: {
    exceptParent: function(event) {
      if (!this.isParent(event)) {
        this.close()
      }
    },
    isParent: function(event) {
      return (
        event.target.classList.contains('avatar') ||
        event.target.parentElement.classList.contains('avatar') ||
        event.target.parentElement.parentElement.classList.contains('avatar') ||
        event.target.parentElement.parentElement.parentElement.classList.contains('avatar') ||
        event.target.classList.contains('icons') ||
        event.target.parentElement.classList.contains('icons') ||
        event.target.parentElement.parentElement.classList.contains('icons') ||
        event.target.classList.contains('context-nav')
      )
    },
    close: function() {
      this.$store.commit('closed')
    },
    opened: function() {
      return this.$store.state.open == true
    }
  }
}
</script>
