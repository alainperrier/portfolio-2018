<template>
  <header
    ref="header"
    class="w-full bg-grey-dark overflow-hidden fixed pin-t z-9999">
    <nav class="ml-8 mr-8 mt-3 mb-3 flex flex-row items-center flex-no-wrap">
      <context-nav/>
      <main-nav :items="items"/>
    </nav>
  </header>
</template>

<script>
import MainNav from '~/components/MainNav.vue'
import ContextNav from '~/components/ContextNav.vue'

export default {
  components: {
    MainNav,
    ContextNav
  },
  data: function() {
    return {
      items: [
        {
          name: 'Accueil',
          link: '/',
          widthText: null,
          margin: null,
          extraMargin: null,
          isActive: false,
          position: 1
        },
        {
          name: 'Contact',
          link: '/contact',
          widthText: null,
          margin: null,
          extraMargin: null,
          isActive: false,
          position: 2
        }
      ]
    }
  }
}
</script>
