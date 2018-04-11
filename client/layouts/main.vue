<template>
  <div class="h-full">
    <navbar ref="navbar"/>
    <nuxt/>
  </div>
</template>

<style src="~/assets/sass/app.scss" lang="scss">
</style>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  layout: 'main',
  components: {
    Navbar
  }
}
</script>
