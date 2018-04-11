<template>
  <ul class="flex w-auto select-none ml-auto">
    <li>
      <ul
        class="flex w-auto select-none relative font-lato-medium text-sm">
        <li
          v-for="(item, key) in orderedItems"
          ref="item"
          :key="(item, key)"
          :class="setOffsetClass(item)">
          <router-link
            :to="{ path: item.link }"
            :class="setActiveClass(item)"
            class="cursor-pointer text-grey-light">
            {{ item.name }}
          </router-link>
        </li>
        <li class="w-full absolute pin-b pin-r h-0">
          <div
            :style="{ width: currentWidth + 'px', height: defaultHeight + 'px', marginLeft: 'calc(' + currentMargin + 'px + ' + currentExtraMargin + 'rem)'}"
            class="mt-1 w-0 h-0 bg-blue-light border-none trans-all"/>
        </li>
      </ul>
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
  data: function() {
    return {
      currentWidth: null,
      currentMargin: null,
      currentExtraMargin: null,
      defaultMargin: 1.5, //rem value (define option)
      defaultHeight: 2, //px value (define option)
      currentRoute: null,
      isDrawn: false
    }
  },
  computed: {
    orderedItems: function() {
      const orderedItems = this.orderItems(this.items)
      return orderedItems
    }
  },
  mounted: function() {
    this.prepareCurrentItem(this.items)
    if (process.browser) {
      let t = setInterval(() => {
        if (document.readyState === 'complete') {
          this.prepareUnderlineTransition(this.items)
          clearInterval(t)
        }
      }, 300)
    }
  },
  beforeUpdate: function() {
    if (this.isCurrentRoute() == false) {
      this.prepareCurrentItem(this.items)
      this.prepareUnderlineTransition(this.items)
    }
  },
  methods: {
    prepareUnderlineTransition: function(items) {
      this.setTextWidth(items)
      this.setMargin(items)
      this.setCurrentWidthAndMargins(items)
    },
    prepareCurrentItem: function(items) {
      this.setCurrentRoute()
      this.setCurrentItem(items)
    },
    setCurrentItem: function(items) {
      for (var i = 0; i < this.$refs.item.length; i++) {
        if (items[i].link == this.$route.path) {
          items[i].isActive = true
        } else {
          items[i].isActive = false
        }
      }
    },
    setCurrentRoute: function() {
      this.currentRoute = this.$route.path
    },
    isCurrentRoute: function() {
      if (this.$route.path == this.currentRoute) {
        return true
      } else {
        return false
      }
    },
    isInitialRoute: function() {
      if (this.$route.path == this.initialRoute) {
        return true
      } else {
        return false
      }
    },
    setActiveClass: function(item) {
      return {
        'text-white': item.isActive,
        'text-grey-light': !item.isActive,
        'hover:text-white': !item.isActive
      }
    },
    setOffsetClass: function(item) {
      return {
        'mr-8': item.position < this.items.length
      }
    },
    orderItems: function(items) {
      return items.sort(function(a, b) {
        return a.position - b.position
      })
    },
    setTextWidth: function(items) {
      if (this.isDrawn == false) {
        for (var i = 0; i < this.$refs.item.length; i++) {
          items[i].widthText = this.$refs.item[i].offsetWidth
        }
      }
    },
    setMargin: function(items) {
      if (this.isDrawn == false) {
        for (var i = 0; i < this.$refs.item.length; i++) {
          if (items[i].position == 1) {
            items[i].margin = 0
            this.setExtraMargin(items[i], 0)
          } else {
            let itemIndex = parseInt(items[i].position - 1)
            let prevItemIndex = parseInt(itemIndex - 1)
            items[i].margin = items[prevItemIndex].widthText + items[prevItemIndex].margin
            this.setExtraMargin(items[i], this.defaultMargin * itemIndex)
          }
        }
      }
    },
    setCurrentWidthAndMargins: function(items) {
      for (var i = 0; i < this.$refs.item.length; i++) {
        if (items[i].isActive == true) {
          this.setCurrentWidth(items[i].widthText)
          this.setCurrentMargin(items[i].margin)
          this.setCurrentExtraMargin(items[i].extraMargin)
          this.setIsDrawn(true)
        }
      }
    },
    setExtraMargin: function(item, value) {
      item.extraMargin = value
    },
    setIsDrawn: function(boolean) {
      if (boolean != true) {
        boolean = false
      }
      this.isDrawn = boolean
    },
    setCurrentWidth: function(width) {
      this.currentWidth = width
    },
    setCurrentMargin: function(margin) {
      this.currentMargin = margin
    },
    setCurrentExtraMargin: function(margin) {
      this.currentExtraMargin = margin
    }
  }
}
</script>
