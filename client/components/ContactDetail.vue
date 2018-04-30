<template>
  <div
    class="flex w-full pt-3 pb-3 pl-11 pr-11 items-center text-white text-sm justify-center">
    <div
      v-if="isClosed"
      class="flex w-full items-center justify-center origin-top-center"
      @click="opened()">
      <span
        class="cursor-pointer hover:font-lato-medium">
        Voir mes coordonnées
      </span>
    </div>
    <transition name="fade">
      <div
        v-if="isOpened"
        class="flex w-full items-center justify-center origin-top-center
        flex-col smp:flex-row sml:flex-row md:flex-row lg:flex-row xl:flex-row xxl:flex-row">
        <span
          class="flex hover:font-lato-medium
          w-auto smp:w-2/5 sml:w-2/5 md:w-2/5 lg:w-2/5 xl:w-2/5 xxl:w-2/5
          mr-0 smp:mr-4 sml:mr-4 md:mr-4 lg:mr-4 xl:mr-4 xxl:mr-4
          mb-4 smp:mb-0 sml:mb-0 md:mb-0 lg:mb-0 xl:mb-0 xxl:mb-0">
          <a
            class="ml-auto"
            href="mailto:alain.perrier@outlook.fr"
            target="_blank"
            rel="noopener noreferrer">
            alain.perrier@outlook.fr
          </a>
        </span>
        <span class="hidden sml:inline md:inline lg:inline xl:inline xxl:inline"> | </span>
        <span
          class="flex hover:font-lato-medium
          ml-0 smp:ml-4 sml:ml-4 md:ml-4 lg:ml-4 xl:ml-4 xxl:ml-4
          w-auto smp:w-2/5 sml:w-2/5 md:w-2/5 lg:w-2/5 xl:w-2/5 xxl:w-2/5">
          <a
            href="tel:+330667825409">
            06 67 82 54 09
          </a>
        </span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    isOpened: function() {
      return this.$store.state.contact == true
    },
    isClosed: function() {
      return this.$store.state.contact == false
    }
  },
  methods: {
    opened: function() {
      this.$store.commit('contacted')
    }
  }
}
</script>
