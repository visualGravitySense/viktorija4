<template>
  <div>
    <header class="header">
      <h1>{{ $t('courses.title') }}</h1>
      <nav>
        <nuxt-link :to="'/register'" class="button">{{ $t('register') }}</nuxt-link>
        <nuxt-link :to="'/contact'" class="button">{{ $t('contact') }}</nuxt-link>
      </nav>
    </header>

    <main>
      <!-- Секция курсов -->
      <section class="courses-section">
        <div class="course" v-for="course in courses" :key="course.id">
          <h2>{{ $t(`courses.${course.id}.category`) }}</h2>
          <p>{{ $t(`courses.${course.id}.description`) }}</p>

          <!-- Календарь занятий -->
          <!-- <div class="course-schedule">
            <h3>{{ $t('courses.scheduleTitle') }}</h3>
            <input type="date" v-model="course.schedule" class="calendar" />
          </div> -->

          <!-- Календарь занятий с выбором нескольких доступных дат -->
          <div class="course-schedule">
            <h3>{{ $t('courses.scheduleTitle') }}</h3>
            <div class="available-dates">
              <button
                v-for="(date, index) in course.availableDates"
                :key="index"
                :class="['date-button', { selected: course.schedule === date }]"
                @click="course.schedule = date"
              >
                {{ formatDate(date) }}
              </button>
            </div>
            <p v-if="course.schedule">{{ $t('courses.selectedDate') }}: {{ formatDate(course.schedule) }}</p>
          </div>

          <!-- Учебные материалы -->
          <div class="course-materials">
            <h3>{{ $t('courses.materialsTitle') }}</h3>
            <a :href="course.materials" target="_blank" class="button">{{ $t('courses.downloadMaterials') }}</a>
          </div>

          <!-- Информация о преподавателях -->
          <div class="course-teachers">
            <h3>{{ $t('courses.teachersTitle') }}</h3>
            <ul>
              <li v-for="teacher in course.teachers" :key="teacher.name">{{ teacher.name }} - {{ teacher.experience }} {{ $t('yearsExperience') }}</li>
            </ul>
          </div>
        </div>
      </section>

      <InstructorsSection />
    </main>

    <footer>
      <button @click="toggleDarkMode">
        {{ darkMode ? $t('lightMode') : $t('darkMode') }}
      </button>
      <select v-model="locale" @change="changeLocale">
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';

import { format } from 'date-fns'; // Библиотека для форматирования дат

// Локализация и темный режим
const { locale } = useI18n();
const darkMode = ref(false);

// Данные курсов
const courses = [
  {
    id: 'A',
    schedule: null,
    availableDates: ['2024-09-10', '2024-09-17', '2024-09-24'], // Пример доступных дат

    materials: '/files/courseA.pdf',
    teachers: [
      { name: 'Ivan Petrov', experience: 10 },
      { name: 'Anna Sidorova', experience: 8 },
    ],
  },
  {
    id: 'A1',
    schedule: null,
    availableDates: ['2024-09-12', '2024-09-19', '2024-09-26'], // Пример доступных дат

    materials: '/files/courseA1.pdf',
    teachers: [
      { name: 'Dmitry Ivanov', experience: 5 },
      { name: 'Olga Petrova', experience: 7 },
    ],
  },
  {
    id: 'B',
    schedule: null,
    availableDates: ['2024-09-15', '2024-09-22', '2024-09-29'], // Пример доступных дат

    materials: '/files/courseB.pdf',
    teachers: [
      { name: 'Sergey Sokolov', experience: 12 },
      { name: 'Elena Volkova', experience: 9 },
    ],
  },
];

// Форматирование даты для отображения
function formatDate(date) {
  return format(new Date(date), 'MMMM dd, yyyy');
}

// Переключение темного режима
function toggleDarkMode() {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
  }
}

// Восстановление состояния темного режима
onMounted(() => {
  if (localStorage.getItem('darkMode') === 'true') {
    darkMode.value = true;
    document.documentElement.classList.add('dark');
  }
});

// Изменение языка
function changeLocale(event) {
  locale.value = event.target.value;
}
</script>

<style scoped>
.header {
  text-align: center;
  padding: 2rem;
  background-color: var(--color-primary);
}

.courses-section {
  padding: 4rem 2rem;
  text-align: center;
}

.course {
  margin-bottom: 2rem;
}

.course-schedule, .course-materials, .course-teachers {
  margin-top: 1rem;
}

.calendar {
  padding: 0.5rem;
  font-size: 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 0.5rem;
}

.button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
}

.button:hover {
  background-color: #0056b3;
}

html.dark .courses-section {
  background-color: #2c2c2c;
  color: white;
}

html.dark .course {
  background-color: #3a3a3a;
  color: white;
}

html.dark .button {
  background-color: #0056b3;
  color: white;
}

/* Стили кнопок дат */
.available-dates {
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.date-button {
  padding: 0.5rem 1rem;
  border: 1px solid #007bff;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
}

.date-button:hover {
  background-color: #f0f0f0;
}

.date-button.selected {
  background-color: #007bff;
  color: white;
}

</style>
