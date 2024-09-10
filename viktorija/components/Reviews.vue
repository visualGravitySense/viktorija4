<template>
  <section id="reviews" class="reviews-section">
    <h2>{{ $t('reviews.title') }}</h2>
    <p>{{ $t('reviews.intro') }}</p>
    
    <div v-for="(review, index) in reviews" :key="index" class="review">
      <p><strong>{{ review.name }}</strong></p>
      <blockquote>
        <p>“{{ review.text }}”</p>
      </blockquote>
    </div>
    
    <p>{{ $t('reviews.thanks') }}</p>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'Reviews',
  setup() {
    const { t } = useI18n();
    
    // Массив с отзывами загружается через t(), каждый объект создается с полными ключами
    const reviews = [
      { name: t('reviews.reviewsList[0].name'), text: t('reviews.reviewsList[0].text') },
      { name: t('reviews.reviewsList[1].name'), text: t('reviews.reviewsList[1].text') },
      { name: t('reviews.reviewsList[2].name'), text: t('reviews.reviewsList[2].text') },
      { name: t('reviews.reviewsList[3].name'), text: t('reviews.reviewsList[3].text') },
    ];

    return {
      reviews,
    };
  },
};
</script>

<style scoped>
.reviews-section {
  padding: 20px;
  border-radius: 8px;
}

.review {
  margin-bottom: 20px;
}

.review blockquote {
  border-left: 2px solid #ccc;
  padding-left: 10px;
  margin-left: 0;
}

.review p {
  margin: 0;
}
</style>
