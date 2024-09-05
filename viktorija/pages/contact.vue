<template>
    <div>
      <header class="header">
        <h1>{{ $t('contactUs') }}</h1>
        <nav>
          <nuxt-link :to="'/courses'" class="button">{{ $t('coursesTitle') }}</nuxt-link>
          <nuxt-link :to="'/register'" class="button">{{ $t('register') }}</nuxt-link>
        </nav>
      </header>
  
      <main>
        <!-- Форма обратной связи -->
        <section class="contact-form">
          <h2>{{ $t('contactFormTitle') }}</h2>
          <form @submit.prevent="submitForm">
            <div>
              <label for="name">{{ $t('yourName') }}</label>
              <input type="text" id="name" v-model="form.name" required />
            </div>
  
            <div>
              <label for="email">{{ $t('yourEmail') }}</label>
              <input type="email" id="email" v-model="form.email" required />
            </div>
  
            <div>
              <label for="message">{{ $t('yourMessage') }}</label>
              <textarea id="message" v-model="form.message" rows="4" required></textarea>
            </div>
  
            <button type="submit" class="button">{{ $t('submit') }}</button>
          </form>
        </section>
  
        <!-- Контактная информация и карта -->
        <section class="contact-info">
          <h2>{{ $t('contactInfoTitle') }}</h2>
          <p>{{ $t('location') }}: 123 Main Street, City, Country</p>
          <p>{{ $t('workingHours') }}: 9:00 - 18:00, {{ $t('weekdays') }}</p>
          <p>{{ $t('phone') }}: +1 234 567 890</p>
  
          <!-- Интерактивная карта (можно использовать любую карту, например Google Maps) -->
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093734!2d144.95565181531655!3d-37.81720997975192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f089ef%3A0x2b0b1e44b2c1f0b0!2s123%20Main%20St%2C%20City%2C%20Country!5e0!3m2!1sen!2s!4v1615337441945!5m2!1sen!2s"
              width="600" height="450" allowfullscreen="" loading="lazy"
            ></iframe>
          </div>
        </section>
      </main>
  
      <footer>
        <button @click="toggleDarkMode">
          {{ darkMode ? $t('lightMode') : $t('darkMode') }}
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
  
  const { locale } = useI18n();
  const darkMode = ref(false);
  
  // Модель для формы обратной связи
  const form = ref({
    name: '',
    email: '',
    message: ''
  });
  
  // Функция для отправки формы
  function submitForm() {
    alert(`${$t('formSubmitted')}: ${form.value.name}, ${form.value.email}, ${form.value.message}`);
    form.value.name = '';
    form.value.email = '';
    form.value.message = '';
  }
  
  // Функция для переключения темного режима
  function toggleDarkMode() {
    darkMode.value = !darkMode.value;
    if (darkMode.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }
  
  // Изменение языка
  function changeLocale(event) {
    locale.value = event.target.value;
  }
  </script>
  
  <style scoped>
  .header {
    text-align: center;
    padding: 2rem;
    background-color: var(--color-primary);
  }
  
  .contact-form, .contact-info {
    margin: 2rem 0;
  }
  
  .contact-form form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .contact-form input, .contact-form textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .map {
    margin-top: 1rem;
  }
  
  html.dark {
    background-color: #121212;
    color: white;
  }
  
  html.dark .header {
    background-color: #333;
  }
  
  html.dark .button {
    background-color: #0056b3;
  }
  
  html.dark .button:hover {
    background-color: #003f8f;
  }
  </style>
  