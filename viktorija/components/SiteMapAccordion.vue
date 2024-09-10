<template>
    <div class="accordion">
      <div
        class="accordion-item"
        v-for="(section, index) in sections"
        :key="index"
      >
        <div class="accordion-header" @click="toggleSection(index)">
          <h3>{{ section.title }}</h3>
          <i :class="isOpen(index) ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
        </div>
        <transition name="accordion">
          <div v-if="isOpen(index)" class="accordion-content">
            <ul>
              <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                <a :href="link.url">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Пример данных для карты сайта
  const sections = ref([
    {
      title: 'Категория A',
      links: [
        { label: 'Курс A1', url: '/course/a1' },
        { label: 'Курс A2', url: '/course/a2' },
      ],
    },
    {
      title: 'Категория B',
      links: [
        { label: 'Курс B1', url: '/course/b1' },
        { label: 'Курс B2', url: '/course/b2' },
      ],
    },
    {
      title: 'Категория A1',
      links: [
        { label: 'Курс A1.1', url: '/course/a1.1' },
        { label: 'Курс A1.2', url: '/course/a1.2' },
      ],
    },
  ])
  
  // Переменная для отслеживания открытых секций
  const openSections = ref([])
  
  // Функция для переключения состояния секции
  const toggleSection = (index) => {
    if (openSections.value.includes(index)) {
      openSections.value = openSections.value.filter((i) => i !== index)
    } else {
      openSections.value.push(index)
    }
  }
  
  // Функция проверки, открыта ли секция
  const isOpen = (index) => {
    return openSections.value.includes(index)
  }
  </script>
  
<style scoped>


.accordion {
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  
  border-radius: 20px; /* Мягкие округлые формы */
  padding: 1rem;
  box-shadow: 8px 8px 20px rgba(163, 177, 198, 0.6), 
              -8px -8px 20px rgba(255, 255, 255, 0.5); /* Эффект неоморфизма */
  transform: skew(-1deg); /* Лёгкое искажение для анти-дизайна */
}

.accordion-item {
  background: linear-gradient(135deg, #7db8ff2f, #81fafa0d); /* Неоновый градиент */

  border-bottom: 3px dashed #006eff; /* Яркие неоновые границы */
  /* background-color: #333; */
  /* padding: 0.5rem 0; */
  border-radius: 12px;
  margin-bottom: 1rem;
  padding: 1rem;
  position: relative;
  box-shadow: 4px 4px 10px rgba(163, 177, 198, 0.6),
              -4px -4px 10px rgba(255, 255, 255, 0.5); /* Мягкие внутренние тени */
  /* transition: all 0.3s ease; */
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  color: #000;
  text-transform: uppercase;
  font-family: 'Courier New', Courier, monospace; /* "Грубый" шрифт */
  letter-spacing: 0.1rem;
  font-size: 1.2rem;
  transition: background-color 0.2s ease, color 0.2s ease;
  border: none;
  user-select: none;
}

.accordion-header:hover {
  background-color: #88c1ff49;
  color: rgb(0, 115, 255); /* Переход на зеленый при наведении */
  border-radius: 15px;
}

.accordion-content {
  padding: 1.5rem;
  
  color: #00ffff;
  font-size: 1rem;
  line-height: 1.5;
  text-transform: none;
  position: relative;
  overflow: hidden;
}

.accordion-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.accordion-content li {
  margin: 0.75rem 0;
}

.accordion-content a {
  text-decoration: none;
  color: #040404; /* Акцентный цвет ссылок */
  font-weight: bold;
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;
}

.accordion-content a:hover {
  color: #00ff00; /* Эффект "глючности" при наведении */
  text-shadow: 0 0 8px #00ff00;
}

/* Иконки переключения с анимацией */
.accordion-header i {
  font-size: 1.5rem;
  color: #000;
  transition: transform 0.3s ease, color 0.3s ease;
}

.accordion-header:hover i {
  transform: rotate(180deg); /* Поворот стрелки при наведении */
  color: #ff00ff;
}

/* Анимации аккордеона */
.accordion-enter-active, .accordion-leave-active {
  transition: max-height 0.4s ease, opacity 0.4s ease, transform 0.4s ease;
}

.accordion-enter, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
  transform: scale(0.9) rotate(-2deg); /* Легкое уменьшение и искажение */
}

.accordion-enter-to, .accordion-leave {
  max-height: 1000px; /* Адаптивная максимальная высота */
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.accordion:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(255,0,255,0.2), rgba(0,0,0,0));
  z-index: 0;
  filter: blur(50px);
  animation: glitch-effect 5s infinite;
}

/* Эффект "глюка" */
@keyframes glitch-effect {
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5px, 5px);
  }
  20% {
    transform: translate(5px, -5px);
  }
  30%, 100% {
    transform: translate(0, 0);
  }
}


  </style>
  