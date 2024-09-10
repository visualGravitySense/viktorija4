<template>
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="text-2xl font-bold">
          <nuxt-link to="/">EdTech</nuxt-link>
        </div>
        <nav class="hidden md:flex space-x-6">
          <nuxt-link to="/" class="text-gray-700 hover:text-gray-900">Home</nuxt-link>
          <nuxt-link to="/courses" class="text-gray-700 hover:text-gray-900">Courses</nuxt-link>
          <nuxt-link to="/instructor/courses" class="text-gray-700 hover:text-gray-900">My Courses</nuxt-link>
          <nuxt-link to="/cart" class="text-gray-700 hover:text-gray-900">Cart</nuxt-link>
        </nav>
        <div class="flex items-center space-x-4">
          <nuxt-link to="/login" class="btn-secondary">Login</nuxt-link>
          <nuxt-link to="/register" class="btn-primary">Sign Up</nuxt-link>
        </div>
        <!-- Mobile Menu Button -->
        <button class="md:hidden flex items-center" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
      </div>
  
      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden bg-white shadow-md">
        <nav class="px-4 py-4 space-y-2">
          <nuxt-link to="/" class="block text-gray-700 hover:text-gray-900">Home</nuxt-link>
          <nuxt-link to="/courses" class="block text-gray-700 hover:text-gray-900">Courses</nuxt-link>
          <nuxt-link to="/instructor/courses" class="block text-gray-700 hover:text-gray-900">My Courses</nuxt-link>
          <nuxt-link to="/cart" class="block text-gray-700 hover:text-gray-900">Cart</nuxt-link>
          <nuxt-link to="/login" class="block text-gray-700 hover:text-gray-900">Login</nuxt-link>
          <nuxt-link to="/register" class="block text-gray-700 hover:text-gray-900">Sign Up</nuxt-link>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  </script>
  
  <style scoped>
  .btn-primary {
    @apply bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700;
  }
  
  .btn-secondary {
    @apply bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200;
  }
  </style>
  