<template>
  <section class="reviews-section">
    <h2>{{ $t('reviews.title') }}</h2>
    <!-- Список отзывов -->
    <div v-if="reviews.length" class="reviews-container space-y-4">
      <div v-for="review in reviews" :key="review.name" class="review-item bg-gray-100 p-4 rounded-lg">
        <h4 class="text-lg font-semibold">{{ review.name }}</h4>
        <p class="mt-2">{{ review.text }}</p>
      </div>
    </div>
    <p v-else class="text-gray-500">{{ $t('reviews.noReviews') }}</p>

    <!-- Форма для нового отзыва -->
    <div class="new-review mt-6">
      <h4 class="text-lg font-semibold mb-2">{{ $t('reviews.leaveReview') }}</h4>
      <textarea v-model="newReview" class="w-full p-2 border border-gray-300 rounded-lg mb-4" rows="4" placeholder="Write your review..."></textarea>
      <button @click="submitReview" class="btn-primary w-full">{{ $t('reviews.submit') }}</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

// Получаем переводы через i18n
const { t } = useI18n();

// Текущие отзывы из i18n
const reviews = ref(t('reviews.reviewsList'));

// Поле для нового отзыва
const newReview = ref('');

// Функция для отправки нового отзыва
function submitReview() {
  if (newReview.value) {
    reviews.value.push({ name: 'Anonymous', text: newReview.value });
    newReview.value = ''; // Очищаем поле
  }
}
</script>

<style scoped>
.reviews-section {
  padding: 2rem;
  border-radius: 8px;
}

.new-review textarea {
  resize: none;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 0.5rem;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
