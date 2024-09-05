<template>
    <section class="courses-section">
      <h2>{{ $t('courses.title') }}</h2>
      <div class="courses-grid">
        <div class="course" v-for="course in courses" :key="course.id">
          <h3>{{ $t(`courses.${course.id}.category`) }}</h3>
          <p>{{ $t(`courses.${course.id}.description`) }}</p>
          <nuxt-link :to="'/courses/' + course.id" class="button">{{ $t('register') }}</nuxt-link>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const courses = [
    { id: 'A' },
    { id: 'A1' },
    { id: 'B' },
  ];
  </script>
  
  <style scoped>
  .courses-section {
    padding: 4rem 2rem;
    text-align: center;
    background-color: var(--color-background);
  }
  
  .courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .course {
    background-color: #f9f9f9;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .course h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .course p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .button {
    background-color: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
  }
  
  .button:hover {
    background-color: #0056b3;
  }
  </style>
  