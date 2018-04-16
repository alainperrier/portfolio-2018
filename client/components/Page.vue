<template>
  <div>
    <dropdown
      v-click-outside="exceptParent"
      v-if="opened()"
      :items="items"/>
    <div
      :style="{ marginTop: currentMarginTop + 'px'}"
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
              content: '25 ans'
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
                'Ce site est en cours de construction... Suivez l\'avancement sur <a href="https://trello.com/b/WX9UYn9x/portfolio-nuxt" target="_blank" class="trans-all-fast">Trello</a>'
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
              content: "Améliorer ce site pour continuer d'apprendre dans le développement web"
            },
            {
              image: 'postit-green.svg',
              content: 'Rechercher un emploi de Product Owner sur Grenoble'
            }
          ]
        },
        {
          name: 'technos',
          arrowPosition: null,
          totalSpace: null,
          title: 'Technos utilisées ici',
          content: [
            {
              image: 'vue.svg',
              content:
                '<a href="https://vuejs.org/" target="_blank" class="technos trans-all-fast">VueJS</a> | Framework JavaScript'
            },
            {
              image: 'nuxt.svg',
              content:
                '<a href="https://fr.nuxtjs.org/" target="_blank" class="technos trans-all-fast">NuxtJs</a> | Framework Node.js pour le rendu côté serveur'
            },
            {
              image: 'laravel.svg',
              content:
                '<a href="https://laravel.com/" target="_blank" class="technos trans-all-fast">Laravel</a> | Framework PHP'
            }
          ]
        }
      ]
    }
  },
  methods: {
    exceptParent: function(event) {
      if (!this.isParent()) {
        this.close()
      }
    },
    isParent: function() {
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
