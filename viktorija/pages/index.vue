<template>
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
    // Добавьте больше курсов
  ]);
  </script>
  
  <style scoped>
  .hero {
    background-image: url('path_to_your_hero_image');
    background-size: cover;
    background-position: center;
  }
  </style>
  