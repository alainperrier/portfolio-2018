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
              content: 'Alain Perrier'
            },
            {
              content: '25 ans'
            },
            {
              content: 'Grenoble'
            }
          ]
        },
        {
          name: 'experience',
          arrowPosition: null,
          totalSpace: null,
          title: 'Projets en cours',
          content: [
            {
              image: 'github.svg',
              content: 'Release an english version of my website'
            },
            {
              image: 'linkedin.svg',
              content:
                'Accompagner <a href="https://la-studio.fr" target="_blank">LA-Studio</a> dans le lancement de son activité'
            },
            {
              image: 'linkedin.svg',
              content: 'Rechercher un emploi de Product Owner sur Grenoble'
            }
          ]
        },
        {
          name: 'experience',
          arrowPosition: null,
          totalSpace: null,
          title: 'Notifications importantes',
          content: [
            {
              content: 'Ce site est en cours de construction... En attendant, retrouvez la roadmap sur Trello'
            }
          ]
        },
        {
          name: 'experience',
          arrowPosition: null,
          totalSpace: null,
          title: 'Expériences marquantes',
          content: [
            {
              image: 'github.svg',
              content: '3 ans en tant que chef de projet à la Banque Populaire'
            },
            {
              image: 'linkedin.svg',
              content: '2 ans en tant que chef de projet web chez LA-Studio'
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
