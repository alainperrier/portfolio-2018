<template>
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
                class="h-12px w-12px mr-3"
                alt="Visuel envoyer">
              <img
                v-if="form.busy"
                src="~/assets/img/oval.svg"
                class="h-12px w-12px mr-3"
                alt="Visuel chargement">
              <span>Envoyer</span>
            </button>
          </div>
        </div>
      </form>
    </transition>
  </div>
</template>

<script>
import Form from 'vform'

export default {
  data: function() {
    return {
      form: new Form({
        name: '',
        email: '',
        message: ''
      })
    }
  },
  computed: {
    formValid: function() {
      return Object.keys(this.fields).every(field => {
        return this.fields[field] && this.fields[field].valid
      })
    }
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
