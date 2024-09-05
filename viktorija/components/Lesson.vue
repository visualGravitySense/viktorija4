<template>
  <div class="lesson bg-white rounded-lg shadow-md p-6 mb-6">
    <!-- Заголовок урока -->
    <h2 class="text-2xl font-semibold mb-4">{{ lesson.title }}</h2>

    <!-- Видео урока -->
    <div v-if="lesson.videoUrl" class="video-container mb-6">
      <video controls class="w-full h-auto">
        <source :src="lesson.videoUrl" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <!-- Дополнительные материалы -->
    <div v-if="lesson.additionalMaterial" class="additional-material mb-6">
      <h3 class="text-xl font-semibold mb-2">Additional Materials</h3>
      <ul>
        <li v-for="(material, index) in lesson.additionalMaterial" :key="index">
          <a :href="material.url" class="text-blue-600 hover:underline" target="_blank">{{ material.title }}</a>
        </li>
      </ul>
    </div>

    <!-- Текстовое содержание урока -->
    <div v-if="lesson.content" class="content text-gray-700 mb-6">
      <p v-html="lesson.content"></p>
    </div>

    <!-- Кнопки навигации -->
    <div class="navigation-buttons flex justify-between">
      <button @click="prevLesson" class="btn-primary" :disabled="!hasPrevLesson">Previous Lesson</button>
      <button @click="nextLesson" class="btn-primary" :disabled="!hasNextLesson">Next Lesson</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  lesson: {
    type: Object,
    required: true,
  },
  hasPrevLesson: {
    type: Boolean,
    default: false,
  },
  hasNextLesson: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['prev', 'next']);

const prevLesson = () => {
  emit('prev');
};

const nextLesson = () => {
  emit('next');
};
</script>

<style scoped>
.btn-primary {
  @apply bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700;
}
</style>
