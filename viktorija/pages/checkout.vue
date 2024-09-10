<template>
    <div>
      <Header />
      <section class="container mx-auto py-16">
        <h1 class="text-3xl font-bold mb-8">Checkout</h1>
        <form @submit.prevent="submitOrder" class="max-w-lg mx-auto bg-gray-100 p-8 rounded shadow-md">
          <div class="mb-6">
            <label for="name" class="block text-gray-700">Full Name</label>
            <input type="text" id="name" v-model="name" class="w-full mt-2 p-2 border rounded">
          </div>
          <div class="mb-6">
            <label for="email" class="block text-gray-700">Email</label>
            <input type="email" id="email" v-model="email" class="w-full mt-2 p-2 border rounded">
          </div>
          <div class="mb-6">
            <label for="card" class="block text-gray-700">Credit Card</label>
            <input type="text" id="card" v-model="card" class="w-full mt-2 p-2 border rounded">
          </div>
          <button type="submit" class="btn-primary w-full">Place Order</button>
        </form>
      </section>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  
  const name = ref('');
  const email = ref('');
  const card = ref('');
  
  const submitOrder = () => {
    // В реальном приложении, здесь будет логика отправки данных заказа на сервер
    alert('Order placed successfully!');
  };
  </script>
  