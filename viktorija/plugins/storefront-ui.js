// plugins/storefront-ui.js
import { defineNuxtPlugin } from '#app'
import { SfButton, SfInput } from '@storefront-ui/vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('SfButton', SfButton)
  nuxtApp.vueApp.component('SfInput', SfInput)
  // Импортируйте дополнительные компоненты по мере необходимости
})
