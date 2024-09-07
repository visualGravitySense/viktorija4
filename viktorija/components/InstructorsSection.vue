<template>
    <section class="instructors-section">
      <h2>{{ $t('instructorInfoTitle') }}</h2>
      <div class="instructors-grid">
        <div class="instructor-card" v-for="instructor in instructors" :key="instructor.id">
          <img :src="instructor.photo" :alt="instructor.name" class="instructor-photo"/>
          <h3>{{ instructor.name }}</h3>
          <p>{{ instructor.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n();
  
  const instructors = [
    {
      id: 1,
      name: t('instructors.0.name'),
      description: t('instructors.0.description'),
      photo: '/images/instructor1.jpg'
    },
    {
      id: 2,
      name: t('instructors.1.name'),
      description: t('instructors.1.description'),
      photo: '/images/instructor2.jpg'
    },
    {
      id: 3,
      name: t('instructors.2.name'),
      description: t('instructors.2.description'),
      photo: '/images/instructor3.jpg'
    },
    {
      id: 4,
      name: t('instructors.3.name'),
      description: t('instructors.3.description'),
      photo: '/images/instructor4.jpg'
    },
    {
      id: 5,
      name: t('instructors.4.name'),
      description: t('instructors.4.description'),
      photo: '/images/instructor5.jpg'
    },
    {
      id: 6,
      name: t('instructors.5.name'),
      description: t('instructors.5.description'),
      photo: '/images/instructor6.jpg'
    }
  ];
  </script>
  
  <style scoped>
  .instructors-section {
    padding: 2rem;
    background-color: var(--color-background);
    text-align: center;
  }
  
  .instructors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding-top: 2rem;
  }
  
  .instructor-card {
    background-color: var(--color-card-background);
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
  }
  
  .instructor-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    color: var(--color-text);
  }
  </style>
  