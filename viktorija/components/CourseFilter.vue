<template>
    <div class="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 class="text-xl font-semibold mb-4">Filter Courses</h3>
      
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
        <select v-model="selectedCategory" class="w-full p-2 border border-gray-300 rounded">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>
  
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">Price</label>
        <select v-model="selectedPrice" class="w-full p-2 border border-gray-300 rounded">
          <option value="">All Prices</option>
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>
      </div>
  
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">Rating</label>
        <select v-model="selectedRating" class="w-full p-2 border border-gray-300 rounded">
          <option value="">All Ratings</option>
          <option v-for="rating in ratings" :key="rating" :value="rating">{{ rating }} stars & up</option>
        </select>
      </div>
  
      <button @click="applyFilters" class="btn-primary w-full">Apply Filters</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const categories = ref(['Development', 'Design', 'Business', 'Marketing', 'IT & Software']);
  const ratings = ref([5, 4, 3, 2, 1]);
  
  const selectedCategory = ref('');
  const selectedPrice = ref('');
  const selectedRating = ref('');
  
  const emit = defineEmits(['filter']);
  
  const applyFilters = () => {
    emit('filter', {
      category: selectedCategory.value,
      price: selectedPrice.value,
      rating: selectedRating.value,
    });
  };
  </script>
  
  <style scoped>
  .btn-primary {
    @apply bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700;
  }
  </style>
  