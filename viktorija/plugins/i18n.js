// plugins/i18n.js

import { createI18n } from 'vue-i18n';

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    locale: 'en', // Язык по умолчанию
    fallbackLocale: 'en',
    messages: {
      en: {
        welcome: 'Welcome to Victoria Driving School',
        register: 'Register Now',
        contact: 'Contact Us',
      },
      ru: {
        welcome: 'Добро пожаловать в автошколу Виктория',
        register: 'Записаться',
        contact: 'Связаться с нами',
      },
    },
  });

  nuxtApp.vueApp.use(i18n);
});
