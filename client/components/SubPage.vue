<template>
  <div
    class="subpage font-lato-light relative
    overflow-y-scroll smp:overflow-hidden sml:overflow-hidden md:overflow-hidden lg:overflow-hidden xl:overflow-hidden xxl:overflow-hidden">
    <slot>Button</slot>
  </div>
</template>

<script>
export default {
  props: {
    currentMarginTop: {
      type: Number,
      default: null
    },
    visible: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>
