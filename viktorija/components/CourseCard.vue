<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <!-- Изображение курса -->
      <nuxt-link :to="`/courses/${course.id}`">
        <img :src="course.image" :alt="course.title" class="w-full h-48 object-cover" />
      </nuxt-link>
  
      <!-- Содержимое карточки -->
      <div class="p-4">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">
          <nuxt-link :to="`/courses/${course.id}`">{{ course.title }}</nuxt-link>
        </h3>
        <p class="text-gray-600 text-sm mb-4">{{ course.description }}</p>
        
        <!-- Цена и кнопка добавления в корзину -->
        <div class="flex justify-between items-center">
          <span class="text-lg font-bold text-blue-600">{{ formatPrice(course.price) }}</span>
          <button @click="addToCart(course)" class="btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    course: {
      type: Object,
      required: true,
    }
  });
  
  const addToCart = (course) => {
    // Логика добавления курса в корзину
    alert(`Course "${course.title}" added to cart!`);
  };
  
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };
  </script>
  
  <style scoped>
  .btn-primary {
    @apply bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700;
  }
  </style>
  