<template>
  <div :class="darkMode ? 'dark' : ''">
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

const { locale } = useI18n();
const darkMode = ref(false);

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
}

function changeLocale(event) {
  locale.value = event.target.value;
}
</script>

<style scoped>
body.dark {
  background-color: #121212;
  color: white;
}

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
  background-color: var(--color-secondary);
}
</style>



<!-- <template>
    <div>
      <Header />
      <section class="hero bg-gray-200 py-20 text-center">
        <h1 class="text-4xl font-bold">Learn Anytime, Anywhere</h1>
        <p class="mt-4 text-lg">Choose from over 1000 courses and enhance your skills</p>
        <nuxt-link to="/courses" class="mt-6 btn-primary">Browse Courses</nuxt-link>
      </section>
  
      <section class="courses py-16">
        <h2 class="text-3xl font-bold text-center mb-8">Popular Courses</h2>
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <CourseCard v-for="course in courses" :key="course.id" :course="course" />
        </div>
      </section>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  import CourseCard from '~/components/CourseCard.vue';
  
  const courses = ref([
    { id: 1, title: 'Vue.js Essentials', description: 'Learn Vue.js from scratch', price: 49.99, image: 'link_to_image' },
    { id: 2, title: 'Mastering Nuxt 3', description: 'Build powerful applications with Nuxt 3', price: 69.99, image: 'link_to_image' },
    
  ]);
  </script>
  
  <style scoped>
  .hero {
    background-image: url('path_to_your_hero_image');
    background-size: cover;
    background-position: center;
  }
  </style>
   -->