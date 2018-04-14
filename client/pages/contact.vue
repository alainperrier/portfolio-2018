<template>
  <page :current-margin-top="currentMarginTop">
    <sub-page
      :current-margin-top="currentMarginTop"
      class="bg-grey-lightest bg-contact
      min-h-500px smp:min-h-300px sml:min-h-300px md:min-h-0 lg:min-h-0 xl:min-h-0 xxl:min-h-0">
      <div
        class="flex flex-col items-center justify-center w-full h-100-3 relative
        p-4 smp:p-3 sml:p-3 md:p-8 lg:p-8 xl:p-8 xxl:p-8
        overflow-hidden smp:overflow-hidden sml:overflow-hidden md:overflow-hidden lg:overflow-hidden xl:overflow-hidden xxl:overflow-hidden">
        <div
          class="flex flex-col items-center
          w-full smp:w-9/10 sml:w-9/10 md:w-9/10 lg:w-2/3 xl:w-2/3 xxl:2/3
          overflow-y-scroll smp:overflow-hidden sml:overflow-hidden md:overflow-hidden lg:overflow-hidden xl:overflow-hidden xxl:overflow-hidden">
          <div
            class="w-full bg-blue-light text-white uppercase
            p-4 smp:p-3 sml:p-3 md:p-6 lg:p-6 xl:p-6 xxl:p-6
            text-xl smp:text-base sml:text-base md:text-4xl lg:text-5xl xl:text-5xl xxl:text-5xl">
            <h1 class="flex items-center justify-center text-center">Vous souhaitez me contacter ?</h1>
          </div>
          <div
            class="flex w-full bg-grey-dark-90 items-center justify-center flex-no-shrink border-blue-light border-solid
            border-b-2 smp:boder-b-2 sml:border-b-2 md:border-b-4 lg:border-b-4 xl:border-b-4 xxl:border-b-4">
            <div
              class="flex flex-col w-full font-lato-medium
              pt-4 smp:pt-3 sml:pt-3 md:pt-9 lg:pt-9 xl:pt-9 xxl:pt-9
              pb-4 smp:pb-3 sml:pb-3 md:pb-9 lg:pb-9 xl:pb-9 xxl:pb-9
              pl-6 smp:pl-6 sml:pl-6 md:pl-11 lg:pl-11 xl:pl-11 xxl:pl-11
              pr-6 smp:pr-6 sml:pr-6 md:pr-11 lg:pr-11 xl:pr-11 xxl:pr-11">
              <transition
                name="fade"
                mode="out-in"
                appear>
                <div
                  v-if="$store.state.send == true"
                  key="sent"
                  class="flex flex-col items-center">
                  <div
                    :class="{ 'load-complete': $store.state.finish }"
                    class="circle-loader">
                    <div
                      :class="{ 'block': $store.state.finish, 'hidden': !$store.state.finish }"
                      class="checkmark draw"/>
                  </div>
                  <span class="text-white text-md mt-6">Votre message a bien été envoyé</span>
                </div>
                <form
                  v-else
                  key="notSent"
                  class="w-full text-white
                  text-md smp:text-xs sml:text-xs md:text-md lg:text-md xl:text-md xxl:text-md"
                  @submit.prevent="send"
                  @keydown="form.onKeydown($event)">
                  <div class="flex flex-col items-center">
                    <div
                      v-if="form.errors.has('name') || form.errors.has('email')"
                      class="flex flex-row w-full mb-2 text-xs">
                      <div
                        class="flex w-1/3 mr-6 first-capitalize">
                        {{ form.errors.get('name') }}
                      </div>
                      <div class="flex w-2/3 ml-auto first-capitalize">
                        {{ form.errors.get('email') }}
                      </div>
                    </div>
                    <div
                      class="flex w-full
                      flex-col smp:flex-row sml:flex-row md:flex-row lg:flex-row xl:flex-row xxl:flex-row
                      mb-4 smp:mb-3 sml:mb-3 md:mb-6 lg:mb-6 xl:mb-6 xxl:mb-6">
                      <div
                        class="flex
                        w-full smp:w-1/3 sml:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 xxl:w-1/3
                        mr-0 smp:mr-3 sml:mr-3 md:mr-6 lg:mr-6 xl:mr-6 xxl:mr-6
                        mb-4 smp:mb-0 sml:mb-0 md:mb-0 lg:mb-0 xl:mb-0 xxl:mb-0">
                        <label
                          class="invisible w-0 h-0"
                          for="name">
                          Nom complet
                        </label>
                        <input
                          v-validate="'required|max:255'"
                          id="name"
                          v-model="form.name"
                          :class="{ 'invalid': form.errors.has('name') || (errors.has('name')), 'valid': fields.name && fields.name.valid && fields.name.validated }"
                          name="name"
                          autocomplete="name"
                          class="appearance-none rounded-sm w-full p-3 bg-white-10 border-solid border-white border trans-all"
                          type="text"
                          placeholder="Nom complet">
                      </div>
                      <div
                        class="flex
                        w-full smp:w-2/3 sml:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 xxl:w-2/3">
                        <label
                          class="invisible w-0 h-0"
                          for="email">
                          Adresse e-mail
                        </label>
                        <input
                          v-validate="'required|email'"
                          id="email"
                          v-model="form.email"
                          :class="{ 'invalid': form.errors.has('email') || (errors.has('email')), 'valid': fields.email && fields.email.valid && fields.email.validated }"
                          name="email"
                          autocomplete="email"
                          class="appearance-none rounded-sm w-full p-3 bg-white-10 border-solid border-white border trans-all"
                          type="text"
                          placeholder="Adresse e-mail">
                      </div>
                    </div>
                    <div
                      v-if="form.errors.has('message')"
                      class="flex w-full mb-2 text-xs first-capitalize">
                      {{ form.errors.get('message') }}
                    </div>
                    <div class="flex w-full">
                      <label
                        class="invisible w-0 h-0"
                        for="message">
                        Message
                      </label>
                      <textarea
                        v-validate="'required'"
                        id="message"
                        v-model="form.message"
                        :class="{ 'invalid': form.errors.has('message') || (errors.has('message')), 'valid': fields.message && fields.message.valid && fields.message.validated }"
                        name="message"
                        class="appearance-none rounded-sm w-full bg-white-10 border-solid border-white border trans-all p-3
                        min-h-100px smp:min-h-50px sml:min-h-100px md:min-h-150px lg:min-h-150px xl:min-h-150px xxl:min-h-200px
                        max-h-200px"
                        placeholder="Message"/>
                    </div>
                    <div
                      class="flex items-center justify-center ml-auto
                      mt-4 smp:mt-3 sml:mt-3 md:mt-6 lg:mt-6 xl:mt-6 xxl:mt-6">
                      <button
                        v-ripple
                        :disabled="sendable()"
                        class="pt-1/2 pb-1/2 bg-blue-light rounded-sm font-lato-medium text-white flex flex-no-shrink items-center justify-center truncate trans-all pt-1/2 pb-1/2 h-30px
                        pr-5 smp:pr-3 sml:pr-3 md:pr-5 lg:pr-5 xl:pr-5 xxl:pr-5
                        pl-5 smp:pl-3 sml:pl-3 md:pl-5 lg:pl-5 xl:pl-5 xxl:pl-5
                        text-md smp:text-xs sml:text-xs md:text-md lg:text-md xl:text-md xxl:text-md"
                        type="submit">
                        <img
                          v-if="!form.busy"
                          src="~/assets/img/send-button.svg"
                          class="h-12px w-12px mr-3">
                        <img
                          v-if="form.busy"
                          src="~/assets/img/oval.svg"
                          class="h-12px w-12px mr-3">
                        <span>Envoyer</span>
                      </button>
                    </div>
                  </div>
                </form>
              </transition>
            </div>
          </div>
          <div
            class="w-full bg-grey-dark-90 items-center justify-center flex-no-shrink
            flex smp:hidden sml:flex md:flex lg:flex xl:flex xxl:flex">
            <div
              class="flex w-full pt-3 pb-3 pl-11 pr-11 items-center text-white text-sm justify-center">
              <div
                v-if="isClosed"
                class="flex w-full items-center justify-center origin-top-center"
                @click="opened()">
                <span
                  class="cursor-pointer hover:font-semibold">
                  Voir mes coordonnées
                </span>
              </div>
              <transition name="fade">
                <div
                  v-if="isOpened"
                  class="flex w-full items-center justify-center origin-top-center
                  flex-col smp:flex-row sml:flex-row md:flex-row lg:flex-row xl:flex-row xxl:flex-row">
                  <span
                    class="flex hover:font-semibold
                    w-auto smp:w-2/5 sml:w-2/5 md:w-2/5 lg:w-2/5 xl:w-2/5 xxl:w-2/5
                    mr-0 smp:mr-4 sml:mr-4 md:mr-4 lg:mr-4 xl:mr-4 xxl:mr-4
                    mb-4 smp:mb-0 sml:mb-0 md:mb-0 lg:mb-0 xl:mb-0 xxl:mb-0">
                    <a
                      class="ml-auto"
                      href="mailto:alain.perrier@outlook.fr"
                      target="_blank">
                      alain.perrier@outlook.fr
                    </a>
                  </span>
                  <span class="hidden sml:inline md:inline lg:inline xl:inline xxl:inline"> | </span>
                  <span
                    class="flex hover:font-semibold
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
          </div>
        </div>
      </div>
      <div
        class="flex flex-row items-end w-full h-12 pr-8 pl-8 pb-4
        justify-center smp:justify-center sml:justify-center md:justify-end lg:justify-end xl:justify-end xxl:justify-end">
        <div class="mr-6">
          <a
            class="flex"
            href="https://twitter.com/perrieral"
            target="_blank">
            <img
              src="~/assets/img/twitter.svg"
              class="w-30px h-30px">
          </a>
        </div>
        <div>
          <a
            class="flex"
            href="https://www.linkedin.com/in/alainperrier"
            target="_blank">
            <img
              src="~/assets/img/linkedin.svg"
              class="w-30px h-30px">
          </a>
        </div>
      </div>
    </sub-page>
  </page>
</template>

<script>
import Page from '~/components/Page.vue'
import SubPage from '~/components/SubPage.vue'
import Form from 'vform'

export default {
  layout: 'main',
  components: {
    Page,
    SubPage
  },
  data: function() {
    return {
      currentMarginTop: null,
      form: new Form({
        name: '',
        email: '',
        message: ''
      })
    }
  },
  computed: {
    isOpened: function() {
      return this.$store.state.contact == true
    },
    isClosed: function() {
      return this.$store.state.contact == false
    },
    formValid: function() {
      return Object.keys(this.fields).every(field => {
        return this.fields[field] && this.fields[field].valid
      })
    }
  },
  mounted: function() {
    this.setCurrentMarginTop(this.$root.$children[1].$refs.navbar.$refs.header.clientHeight)
  },
  beforeUpdate: function() {
    if (this.$store.state.send == true) {
      if (process.browser) {
        setTimeout(() => {
          this.$store.commit('finished')
        }, 500)
        setTimeout(() => {
          this.$store.commit('notFinished')
          this.$store.commit('notSent')
        }, 3000)
      }
    }
  },
  methods: {
    setCurrentMarginTop: function(height) {
      this.currentMarginTop = height
    },
    opened: function() {
      this.$store.commit('contacted')
    },
    sendable: function() {
      if (this.form.busy || !this.formValid) {
        return true
      } else {
        return false
      }
    },
    resetForm: function() {
      this.form.clear()
      this.form.reset()
      this.$validator.errors.clear()
      this.$validator.reset()
    },
    send: function() {
      try {
        const { data } = this.form.post('/api/contact').then(() => {
          this.$validator.pause()
          this.$store.commit('sent')
          this.$nextTick(() => {
            this.resetForm()
            this.$validator.resume()
          })
        })
      } catch (e) {
        this.$store.commit('notSent')
        this.$validator.validateAll()
      }
    }
  }
}
</script>
