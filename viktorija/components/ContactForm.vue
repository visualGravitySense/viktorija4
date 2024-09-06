<template>
    <section class="contact-form">
      <h2>{{ $t('contactFormTitle') }}</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">{{ $t('yourName') }}</label>
          <input type="text" id="name" v-model="form.name" class="input-field" required />
        </div>
  
        <div class="form-group">
          <label for="email">{{ $t('yourEmail') }}</label>
          <input type="email" id="email" v-model="form.email" class="input-field" required />
        </div>
  
        <div class="form-group">
          <label for="message">{{ $t('yourMessage') }}</label>
          <textarea id="message" v-model="form.message" class="input-field" rows="4" required></textarea>
        </div>
   
        <button type="submit" class="submit-button">{{ $t('submit') }}</button>
      </form>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const form = ref({
    name: '',
    email: '',
    message: '',
  })
  
  const submitForm = () => {
    // Обработка формы
    alert('Форма отправлена!')
  }
  </script>
  
  <style scoped>
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f5f5f5; /* Мягкий фон */
    border-radius: 20px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1),
                -8px -8px 16px rgba(255, 255, 255, 0.7); /* Неоморфные тени */
  }
  
  h2 {
    text-align: center;
    color: #333;
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  
  /* Стили для полей ввода */
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .label {
    font-weight: 500;
    margin-bottom: 0.5rem;
    display: block;
    color: #555;
  }
  
  .input-field {
    width: 100%;
    padding: 1rem;
    border-radius: 15px;
    border: none;
    background-color: #e0e0e0;
    box-shadow: inset 6px 6px 12px rgba(0, 0, 0, 0.1),
                inset -6px -6px 12px rgba(255, 255, 255, 0.5); /* Эффект неоморфизма */
    transition: box-shadow 0.3s ease;
    font-size: 1rem;
    color: #333;
    outline: none;
  }
  
  .input-field:focus {
    box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.2),
                inset -4px -4px 8px rgba(255, 255, 255, 0.6); /* Более глубокие тени при фокусе */
  }
  
  /* Стили для кнопки */
  .submit-button {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 15px;
    background-color: #007bff;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1),
                -6px -6px 12px rgba(255, 255, 255, 0.5); /* Неоморфный стиль */
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  .submit-button:active {
    box-shadow: inset 6px 6px 12px rgba(0, 0, 0, 0.15),
                inset -6px -6px 12px rgba(255, 255, 255, 0.7); /* Впечатление нажатия */
  }
  </style>
  