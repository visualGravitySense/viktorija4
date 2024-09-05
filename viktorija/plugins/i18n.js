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
          courses: {
            title: 'Our Courses',
            A: {
              category: 'Category A',
              description: 'Training course for motorcycle drivers. Includes driving practice and theoretical training.',
            },
            A1: {
              category: 'Category A1',
              description: 'Course for light motorcycles (up to 125 cc). Ideal for beginners.',
            },
            B: {
              category: 'Category B',
              description: 'Full course for car drivers. Includes theory and practice with manual or automatic transmission.',
            }
          }
        },
        ru: {
          welcome: 'Добро пожаловать в автошколу Виктория',
          register: 'Записаться',
          contact: 'Связаться с нами',
          courses: {
            title: 'Наши курсы',
            A: {
              category: 'Категория A',
              description: 'Курс обучения для водителей мотоциклов. Включает практику вождения и теоретическую подготовку.',
            },
            A1: {
              category: 'Категория A1',
              description: 'Курс для управления легкими мотоциклами (до 125 куб. см). Идеально подходит для начинающих.',
            },
            B: {
              category: 'Категория B',
              description: 'Полный курс для водителей легковых автомобилей. Включает теорию и практику на автомобиле с механической или автоматической коробкой передач.',
            }
          }
        },
      },
    });
  
    nuxtApp.vueApp.use(i18n);
  });
  


// export default defineNuxtPlugin((nuxtApp) => {
//   const i18n = createI18n({
//     locale: 'en', 
//     fallbackLocale: 'en',
//     messages: {
//       en: {
//         welcome: 'Welcome to Victoria Driving School',
//         register: 'Register Now',
//         contact: 'Contact Us',
//       },
//       ru: {
//         welcome: 'Добро пожаловать в автошколу Виктория',
//         register: 'Записаться',
//         contact: 'Связаться с нами',
//       },
//     },
//   });

//   nuxtApp.vueApp.use(i18n);
// });


