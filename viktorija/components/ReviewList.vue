<template>
    <div class="review-list bg-white rounded-lg shadow-md p-6">
      <h3 class="text-xl font-semibold mb-4">Student Reviews</h3>
      
      <!-- Список отзывов -->
      <div v-if="reviews.length" class="reviews-container space-y-4">
        <div v-for="review in reviews" :key="review.id" class="review-item bg-gray-100 p-4 rounded-lg">
          <h4 class="text-lg font-semibold">{{ review.author }}</h4>
          <p class="text-sm text-gray-600">{{ review.date }}</p>
          <p class="mt-2">{{ review.content }}</p>
        </div>
      </div>
      <p v-else class="text-gray-500">No reviews yet. Be the first to review this course!</p>
  
      <!-- Форма для нового отзыва -->
      <div class="new-review mt-6">
        <h4 class="text-lg font-semibold mb-2">Leave a Review</h4>
        <textarea v-model="newReview" class="w-full p-2 border border-gray-300 rounded-lg mb-4" rows="4" placeholder="Write your review..."></textarea>
        <button @click="submitReview" class="btn-primary w-full">Submit Review</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    reviews: {
      type: Array,
      default: () => []
    }
  });
  
  const newReview = ref('');
  
  const emit = defineEmits(['submit-review']);
  
  const submitReview = () => {
    if (newReview.value.trim()) {
      emit('submit-review', {
        author: 'Anonymous', // можно заменить на реальное имя пользователя
        date: new Date().toLocaleDateString(),
        content: newReview.value.trim(),
      });
      newReview.value = '';
    } else {
      alert('Please write a review before submitting.');
    }
  };
  </script>
  
  <style scoped>
  .btn-primary {
    @apply bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700;
  }
  </style>
  