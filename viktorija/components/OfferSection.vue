<template>
    <section class="offers-section">
      <h2>{{ $t('offers.title') }}</h2> <!-- Заголовок переводится через i18n -->
      <div class="offers-grid">
        <div class="offer" v-for="offer in offers" :key="offer.id">
          <h3>{{ $t(`offers.offersList.${offer.id}.title`) }}</h3> <!-- Заголовок акции -->
          <p>{{ $t(`offers.offersList.${offer.id}.description`) }}</p> <!-- Описание акции -->
          <nuxt-link :to="'/register'" class="button">{{ $t('offers.register') }}</nuxt-link>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const offers = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];
  </script>
  
  <style scoped>
  .offers-section {
    padding: 4rem 2rem;
    text-align: center;
    background-color: var(--color-background);
  }
  
  .offers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .offer {
    
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .offer h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .offer p {
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
  