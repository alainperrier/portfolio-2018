<template>
  <div
    class="absolute pin-b pin-r-calc mr-6
    hidden smp:hidden sml:hidden md:block lg:block xl:block xxl:block">
    <span
      v-scroll-to="{
        el: '#apropos',
        duration: 500,
        easing: 'ease-in-out',
        offset: - + currentMarginTop
      }"
      class="flex cursor-pointer">
      <img
        slot="img"
        src="~/assets/img/arrow-scroll.svg"
        class="h-12"
        alt="Visuel scroll">
    </span>
  </div>
</template>

<script>
export default {
  props: {
    currentMarginTop: {
      type: Number,
      default: null
    }
  }
}
</script>
