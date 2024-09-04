<template>
    <div>
      <Header />
      <section class="container mx-auto py-16">
        <h1 class="text-3xl font-bold mb-8">All Courses</h1>
        <CourseFilter />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
  import CourseFilter from '~/components/CourseFilter.vue';
  
  const courses = ref([
    { id: 1, title: 'Vue.js Essentials', description: 'Learn Vue.js from scratch', price: 49.99, image: 'link_to_image' },
    { id: 2, title: 'Mastering Nuxt 3', description: 'Build powerful applications with Nuxt 3', price: 69.99, image: 'link_to_image' },
    // Добавьте больше курсов
  ]);
  </script>
  