<template>
  <div>
    <header class="header">
      <h1>{{ $t('welcome') }}</h1>
      <nav>
        <nuxt-link :to="'/register'" class="button">{{ $t('register') }}</nuxt-link>
        <nuxt-link :to="'/contact'" class="button">{{ $t('contact') }}</nuxt-link>
      </nav>
    </header>
    <main>
      <section class="parallax">
        <div class="content">
          <h2>{{ $t('welcome') }}</h2>
        </div>
      </section>
      <CoursesSection/>

      <OfferSection/>

      <div class="combined-reviews">
        <Reviews />
        <ReviewList />
      </div>

    </main>
    <footer>
      <button @click="toggleDarkMode">
        {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
      </button>
      <select v-model="locale" @change="changeLocale">
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

import CoursesSection from '~/components/CoursesSection.vue';

const { locale } = useI18n();
const darkMode = ref(false);


// Функция для переключения темного режима
function toggleDarkMode() {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.documentElement.classList.add('dark'); // Добавляем класс dark
    localStorage.setItem('darkMode', 'true');
  } else {
    document.documentElement.classList.remove('dark'); // Убираем класс dark
    localStorage.setItem('darkMode', 'false');
  }
}

// При монтировании компонента проверяем, был ли активирован темный режим ранее
onMounted(() => {
  if (localStorage.getItem('darkMode') === 'true') {
    darkMode.value = true;
    document.documentElement.classList.add('dark');
  }
});

function changeLocale(event) {
  locale.value = event.target.value;
}

</script>

<style>

.combined-reviews {
  display: flex;
  flex-direction: row;
  gap: 20px; /* Расстояние между блоками */
}

/* Медиа-запрос для мобильных устройств */
@media (max-width: 600px) {
  .combined-reviews {
    display: flex;
    flex-direction: column;
    padding: 10px; /* Уменьшение отступов для маленьких экранов */
  }
}

/* Обычные стили для светлого режима */
.header {
  text-align: center;
  padding: 2rem;
  background-color: var(--color-primary);
}

.nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.parallax {
  background-image: url('/images/driving-school.jpg');
  height: 400px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.parallax .content {
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
}

footer {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
}

/* Стили темного режима */
/* Глобальные стили для всего приложения */
html.dark {
  background-color: #121212;
  color: white;
}

html.dark .header {
  background-color: #333;
}

html.dark .parallax {
  background-image: url('/images/dark-driving-school.jpg'); /* Темная версия изображения */
}

html.dark .button {
  background-color: #0056b3;
  color: white;
}

html.dark .button:hover {
  background-color: #003f8f;
}

/* Темный режим для блока CoursesSection */
html.dark .courses-section {
  background-color: #2c2c2c;
  color: white;
}

html.dark .course {
  background-color: #3a3a3a;
  color: white;
}
</style>


