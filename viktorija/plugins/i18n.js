import { createI18n } from 'vue-i18n';

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    locale: 'en', // Язык по умолчанию
    fallbackLocale: 'en',
    messages: {
      en: {
        contactUs: 'Contact Us',
        contactFormTitle: 'Feedback Form',
        yourName: 'Your Name',
        yourEmail: 'Your Email',
        yourMessage: 'Your Message',
        submit: 'Submit',
        formSubmitted: 'Form Submitted',
        contactInfoTitle: 'Contact Information',
        location: 'Location',
        workingHours: 'Working Hours',
        weekdays: 'Weekdays',
        phone: 'Phone Number',
        coursesTitle: 'Courses',
        darkMode: 'Dark Mode',
        lightMode: 'Light Mode',

        welcome: 'Welcome to Victoria Driving School',
        register: 'Register Now',
        contact: 'Contact Us',
        courses: {
            title: 'Our Courses',
            scheduleTitle: 'Class Schedule',
            selectedDate: 'Selected Date',
            materialsTitle: 'Course Materials',
            downloadMaterials: 'Download PDF',
            teachersTitle: 'Course Teachers',
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
            },
          },
          yearsExperience: 'years of experience',
          register: 'Register Now',
          contact: 'Contact Us',
          darkMode: 'Dark Mode',
          lightMode: 'Light Mode',

        offers: {
          title: 'Special Offers and Discounts',
          register: 'Register for a Course',
          offersList: {
            1: {
              title: '10% Discount on Category B Course',
              description: 'Register for Category B course by the end of the month and get a 10% discount.',
            },
            2: {
              title: 'Special Offer for Students',
              description: 'Students receive a 15% discount on any driving course. Show your student ID at registration.',
            },
            3: {
              title: '20% Family Discount',
              description: 'Enroll in driving courses with a family member and receive a 20% discount on the total cost of training.',
            },
          },
        },
        reviews: {
          title: 'Reviews',
          noReviews: 'No reviews yet. Be the first to review this course!',
          leaveReview: 'Leave a Review',
          submit: 'Submit Review',
          reviewsList: [
            { name: 'Irina D.', text: 'I completed the web development course, and it changed my career. I now work at my dream company and apply all the skills I learned. Thank you so much for your professionalism and support!' },
            { name: 'Alexey X.', text: 'The course was very informative and useful. The instructors explain the material excellently and are always ready to help. I recommend it to everyone who wants to grow in this field!' },
            { name: 'Marina S.', text: 'I was pleasantly surprised by the quality of the education and the attention given to each student. The knowledge I gained helped me start my own project, and now I feel confident.' },
            { name: 'Dmitry V.', text: 'Great courses and great instructors. The lessons were interesting, and the support was top-notch. Now I have all the necessary skills to achieve my goals.' },
          ],
        },
      },
      ru: {
        contactUs: 'Связаться с нами',
        contactFormTitle: 'Форма обратной связи',
        yourName: 'Ваше имя',
        yourEmail: 'Ваш Email',
        yourMessage: 'Ваше сообщение',
        submit: 'Отправить',
        formSubmitted: 'Форма отправлена',
        contactInfoTitle: 'Контактная информация',
        location: 'Местоположение',
        workingHours: 'Часы работы',
        weekdays: 'Будние дни',
        phone: 'Номер телефона',
        coursesTitle: 'Курсы',
        darkMode: 'Темный режим',
        lightMode: 'Светлый режим',
        welcome: 'Добро пожаловать в автошколу Виктория',
        register: 'Записаться',
        contact: 'Связаться с нами',
        courses: {
            title: 'Наши Курсы',
            scheduleTitle: 'Расписание занятий',
            selectedDate: 'Выбранная дата',
            materialsTitle: 'Учебные материалы',
            downloadMaterials: 'Скачать PDF',
            teachersTitle: 'Преподаватели курса',
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
            },
          },
          yearsExperience: 'лет опыта',
          register: 'Записаться',
          contact: 'Связаться с нами',
          darkMode: 'Темный режим',
          lightMode: 'Светлый режим',

        offers: {
          title: 'Акции и скидки',
          register: 'Записаться на курс',
          offersList: {
            1: {
              title: 'Скидка 10% на курс категории B',
              description: 'Запишитесь на курс категории B до конца месяца и получите скидку 10% на обучение.',
            },
            2: {
              title: 'Специальное предложение для студентов',
              description: 'Для студентов предоставляется скидка 15% на любой курс вождения. Покажите студенческий билет при регистрации.',
            },
            3: {
              title: 'Семейная скидка 20%',
              description: 'Запишитесь на курсы вождения с членом семьи и получите скидку 20% на общую стоимость обучения.',
            },
          },
        },
        reviews: {
          title: 'Отзывы',
          noReviews: 'Отзывов пока нет. Будьте первым, кто оставит отзыв!',
          leaveReview: 'Оставить отзыв',
          submit: 'Отправить отзыв',
          reviewsList: [
            { name: 'Ирина П.', text: 'Прошла курс по веб-разработке, и это изменило мою карьеру. Теперь я работаю в компании своей мечты и применяю все навыки, которые получила. Большое спасибо за профессионализм и поддержку!' },
            { name: 'Алексей М.', text: 'Курс был очень информативным и полезным. Преподаватели отлично объясняют материал, и всегда готовы помочь. Рекомендую всем, кто хочет развиваться в этой области!' },
            { name: 'Марина С.', text: 'Я была приятно удивлена качеством обучения и вниманием к каждому ученику. Полученные знания помогли мне начать свой собственный проект, и теперь я чувствую себя уверенно.' },
            { name: 'Дмитрий В.', text: 'Отличные курсы и отличные преподаватели. Уроки были интересными, а поддержка была на высшем уровне. Теперь у меня есть все необходимые навыки для достижения моих целей.' },
          ],
        },
      },
    },
  });

  nuxtApp.vueApp.use(i18n);
});
