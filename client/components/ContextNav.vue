<template>
  <ul
    class="inline-flex w-auto items-center select-none context-nav text-xs text-white font-lato-light">
    <li
      v-ripple
      id="0"
      class="avatar flex mr-8 cursor-pointer items-center rounded-full"
      title="Profil"
      @click="open(0)">
      <picture class="flex rounded-full">
        <source
          srcset="~assets/img/photo-1x.webp 1x, ~assets/img/photo-2x.webp 2x"
          type="image/webp"
          class="rounded-full">
        <img
          class="rounded-full w-40px h-40px trans-all-fast"
          srcset= "~assets/img/photo-1x.jpg 1x, ~assets/img/photo-2x.jpg 2x"
          src="~assets/img/photo-1x.jpg"
          alt="Avatar Alain Perrier">
      </picture>
    </li>
    <li
      v-ripple="'rgba(64, 73, 81, 0.35)'"
      id="1"
      class="icons mr-4 cursor-pointer p-2 origin-center items-center
      hidden smp:flex sml:flex md:flex lg:flex xl:flex xxl:flex"
      title="Notifications"
      @click="open(1)">
      <img
        class="w-15px h-15px flex trans-all-fast"
        src="~assets/img/experience.svg"
        alt="Projets">
    </li>
    <li
      v-ripple="'rgba(64, 73, 81, 0.35)'"
      id="2"
      class="icons mr-4 cursor-pointer p-2 origin-center items-center
      hidden smp:flex sml:flex md:flex lg:flex xl:flex xxl:flex"
      title="Projets"
      @click="open(2)">
      <img
        class="w-15px h-15px flex trans-all-fast"
        src="~assets/img/experience.svg"
        alt="Projets">
    </li>
    <li
      v-ripple="'rgba(64, 73, 81, 0.35)'"
      id="3"
      class="icons mr-4 cursor-pointer p-2 origin-center items-center
      hidden smp:flex sml:flex md:flex lg:flex xl:flex xxl:flex"
      title="Autres"
      @click="open(3)">
      <img
        class="w-15px h-15px flex trans-all-fast"
        src="~assets/img/experience.svg"
        alt="Projets">
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  methods: {
    open: function(el) {
      if (this.$store.state.open == false) {
        this.$store.commit('opened')
        this.$store.commit('setContextNavEl', el)
      } else {
        if (this.$store.state.contextNavEl == el) {
          this.$store.commit('closed')
        } else {
          this.$store.commit('setContextNavEl', el)
        }
      }
    }
  }
}
</script>
