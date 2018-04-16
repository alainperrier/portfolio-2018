<template>
  <transition
    name="page"
    mode="out-in">
    <div class="w-full h-screen bg-grey-dark flex items-center justify-center font-lato-light">
      <div class="container text-white text-center">
        <h1 class="text-5xl">Désolé, cette page n'existe pas</h1>
        <p class="mt-6">Retourner sur la
          <nuxt-link
            to="/"
            class="text-blue-light no-underline">
            <span class="trans-all hover:text-blue-dark">page d'accueil</span>
          </nuxt-link>
        </p>
      </div>
    </div>
  </transition>
</template>

<style src="~/assets/sass/error.scss" lang="scss">
</style>

<script>
export default {
  layout: 'error',
  head: function() {
    return {
      title: 'Page introuvable',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Cette page n'existe pas."
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Page introuvable'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: "Cette page n'existe pas."
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: 'Page introuvable'
        }
      ]
    }
  }
}
</script>
