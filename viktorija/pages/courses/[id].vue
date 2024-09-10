<template>
    <div>
      <Header />
      <section class="container mx-auto py-16">
        <h1 class="text-4xl font-bold">{{ course.title }}</h1>
        <img :src="course.image" alt="course image" class="my-8 w-full h-64 object-cover">
        <p class="text-lg">{{ course.description }}</p>
  
        <section class="lessons mt-12">
          <h2 class="text-3xl font-bold mb-6">Lessons</h2>
          <Lesson v-for="lesson in course.lessons" :key="lesson.id" :lesson="lesson" />
        </section>
  
        <section class="reviews mt-12">
          <h2 class="text-3xl font-bold mb-6">Student Reviews</h2>
          <ReviewList :reviews="course.reviews" />
        </section>
      </section>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  import Lesson from '~/components/Lesson.vue';
  import ReviewList from '~/components/ReviewList.vue';
  
  const course = ref(null);
  
  onMounted(() => {
    // В реальном приложении вы бы сделали запрос к API, чтобы получить данные курса
    course.value = {
      id: 1,
      title: 'Vue.js Essentials',
      description: 'Learn Vue.js from scratch with detailed lessons',
      image: 'link_to_image',
      lessons: [
        { id: 1, title: 'Introduction to Vue.js', video_url: 'link_to_video' },
        // Добавьте больше уроков
      ],
      reviews: [
        { id: 1, author: 'John Doe', content: 'Great course!' },
        // Добавьте больше отзывов
      ]
    };
  });
  </script>
  