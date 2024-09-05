<template>
    <footer class="bg-gray-800 text-gray-300 py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Логотип и информация -->
          <div class="text-center md:text-left mb-4 md:mb-0">
            <h2 class="text-2xl font-bold text-white">EdTech</h2>
            <p class="text-sm">Your go-to platform for online education.</p>
          </div>
          <!-- Ссылки -->
          <div class="flex space-x-6">
            <nuxt-link to="/about" class="hover:text-white">About Us</nuxt-link>
            <nuxt-link to="/contact" class="hover:text-white">Contact</nuxt-link>
            <nuxt-link to="/privacy" class="hover:text-white">Privacy Policy</nuxt-link>
            <nuxt-link to="/terms" class="hover:text-white">Terms of Service</nuxt-link>
          </div>
        </div>
        <!-- Социальные иконки -->
        <div class="flex justify-center space-x-6 mt-6">
          <a href="#" class="hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82V14.706h-3.36v-3.6h3.36V8.343c0-3.352 2.05-5.174 5.041-5.174 1.432 0 2.662.106 3.018.154v3.498h-2.07c-1.628 0-1.943.774-1.943 1.91v2.502h3.88l-.506 3.6h-3.374V24h6.612c.732 0 1.326-.594 1.326-1.326V1.326C24 .593 23.407 0 22.675 0z"/></svg>
          </a>
          <a href="#" class="hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.918 9.918 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.952.564-2.005.977-3.127 1.2a4.924 4.924 0 00-8.384 4.482A13.978 13.978 0 011.671 3.15a4.924 4.924 0 001.524 6.573 4.905 4.905 0 01-2.23-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.931 4.931 0 01-2.224.085c.624 1.947 2.444 3.367 4.597 3.406a9.896 9.896 0 01-6.13 2.11c-.398 0-.79-.023-1.175-.069a13.978 13.978 0 007.557 2.213c9.054 0 14.001-7.503 14.001-14.002 0-.213-.004-.425-.014-.637A10.025 10.025 0 0024 4.557z"/></svg>
          </a>
          <a href="#" class="hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.204.085 1.837 1.236 1.837 1.236 1.07 1.834 2.806 1.304 3.49.997.108-.774.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.931 0-1.31.468-2.383 1.235-3.225-.124-.304-.536-1.527.116-3.182 0 0 1.008-.322 3.3 1.23.96-.267 1.987-.4 3.01-.405 1.022.005 2.05.138 3.01.405 2.29-1.552 3.297-1.23 3.297-1.23.654 1.655.242 2.878.118 3.182.77.842 1.235 1.915 1.235 3.225 0 4.61-2.807 5.623-5.48 5.92.43.372.814 1.102.814 2.222 0 1.605-.015 2.898-.015 3.293 0 .319.217.694.825.577C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
        <!-- Copyright -->
        <div class="text-center text-sm mt-6">
          <p>&copy; 2024 EdTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>
  