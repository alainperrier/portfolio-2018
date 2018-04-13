import Vue from 'vue'

Vue.directive('expand', {
  inserted: function(el, binding) {
    if (binding.value !== null) {
      function calcHeight() {
        const currentState = el.getAttribute('aria-expanded')

        // let margins = 0
        // var nodes = el.childNodes
        // nodes.forEach(function(value, index) {
        //   margins += parseInt(window.getComputedStyle(value, null).getPropertyValue('margin-top'))
        // })
        // console.log(margins)

        el.classList.add('u-no-transition')
        el.removeAttribute('aria-expanded')
        el.style.height = null
        el.style.height = el.clientHeight + 1 + 'px' // + 1px fix for overflow hidden
        el.setAttribute('aria-expanded', currentState)

        setTimeout(function() {
          el.classList.remove('u-no-transition')
        })
      }

      el.classList.add('expand')
      el.setAttribute('aria-expanded', binding.value ? 'true' : 'false')
      calcHeight()
      window.addEventListener('resize', calcHeight)
    }
  },
  update: function(el, binding) {
    if (el.style.height && binding.value !== null) {
      el.setAttribute('aria-expanded', binding.value ? 'true' : 'false')
      el.classList.add('transition-in-progress')
      setTimeout(function() {
        el.classList.remove('transition-in-progress')
      }, 400)
    }
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', calcHeight)
  }
})

var app = new Vue({
  data: {
    isExpanded: false
  }
})
