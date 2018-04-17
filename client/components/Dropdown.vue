<template>
  <transition name="fade">
    <div
      class="dropdown fixed pin-t-59 pin-l-15 shadow-md 4 min-w-220px max-w-220px max-h-1/9 text-grey-darker z-9999 origin-top-center">
      <div
        :style="{ left: currentItemArrowPosition + 'px' }"
        class="arrow-up relative trans-left"/>
      <div class="bg-grey-darker pt-3 pb-3 pr-4 pl-4 text-white font-lato-medium text-md">
        {{ currentItemTitle }}
      </div>
      <div
        v-for="(item, index) in currentItemContent"
        :key="(item, index)"
        :class="{'bg-white': !(index % 2), 'bg-grey-lightest': index % 2 }"
        class="flex items-center pt-3 pb-3 pr-4 pl-4 font-lato-light text-xs leading-normal tracking-wide">
        <img
          v-if="item.image != null"
          :src="require('~/assets/img/' + item.image)"
          class="h-30px mr-4">
        <span v-html="item.content"/>
      </div>
    </div>
  </transition>
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
  data: function() {
    return {
      arrowBorderSize: 5
    }
  },
  computed: {
    currentItem: function() {
      return this.items[this.$store.state.contextNavEl]
    },
    currentItemArrowPosition: function() {
      return this.currentItem.arrowPosition
    },
    currentItemTitle: function() {
      return this.currentItem.title
    },
    currentItemContent: function() {
      return this.currentItem.content
    }
  },
  mounted: function() {
    this.$store.commit('setPrevContextNavEl', this.$store.state.contextNavEl)
    if (process.browser) {
      for (var i = 0; i < this.items.length; i++) {
        let width = parseFloat(window.getComputedStyle(document.getElementById(i)).width)
        let marginRight = parseFloat(window.getComputedStyle(document.getElementById(i)).marginRight)

        if (i == 0) {
          this.items[i].arrowPosition = width / 2 - this.arrowBorderSize
          this.items[i].totalSpace = width + marginRight
        } else {
          this.items[i].arrowPosition = width / 2 - this.arrowBorderSize + this.items[i - 1].totalSpace
          this.items[i].totalSpace = this.items[i - 1].totalSpace + width + marginRight
        }
      }
    }
  }
}
</script>
