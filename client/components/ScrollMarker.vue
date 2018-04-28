<template>
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
</template>

<script>
import ScrollActive from '~/components/ScrollActive.vue'

export default {
  components: {
    scrollactive: ScrollActive
  },
  props: {
    currentMarginTop: {
      type: Number,
      default: null
    }
  },
  methods: {
    onItemChanged: function(event, currentItem, lastActiveItem) {
      this.$store.commit('setCurrentItem', currentItem.hash.substr(1))
    }
  }
}
</script>
