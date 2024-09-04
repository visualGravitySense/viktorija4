<template>
    <div>
      <Header />
      <section class="container mx-auto py-16">
        <h1 class="text-3xl font-bold mb-8">Your Cart</h1>
        <div v-if="cart.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="item in cart" :key="item.id" class="flex items-center">
            <img :src="item.image" alt="course image" class="w-24 h-24 object-cover mr-4">
            <div>
              <h2 class="text-lg font-bold">{{ item.title }}</h2>
              <p class="text-gray-700">{{ item.price | currency }}</p>
            </div>
            <button @click="removeFromCart(item.id)" class="ml-auto btn-secondary">Remove</button>
          </div>
        </div>
        <div v-else>
          <p class="text-lg">Your cart is empty</p>
        </div>
        <nuxt-link v-if="cart.length > 0" to="/checkout" class="btn-primary mt-8">Proceed to Checkout</nuxt-link>
      </section>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  
  const cart = ref([
    { id: 1, title: 'Vue.js Essentials', price: 49.99, image: 'link_to_image' },
    // Добавьте больше элементов корзины
  ]);
  
  const removeFromCart = (id) => {
    cart.value = cart.value.filter(item => item.id !== id);
  };
  </script>
  