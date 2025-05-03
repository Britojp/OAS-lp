<template>
  <section :id="id" class="clients-section">
    <div class="container">
      <div class="section-title text-center fade-in">
        <h2>Quem experimenta, recomenda</h2>
        <p>Empresas que confiaram em nossa expertise para transformar suas marcas</p>
      </div>
      
      <div class="carousel-container fade-in" 
           @mouseenter="pauseCarousel" 
           @mouseleave="resumeCarousel">
        <div class="carousel" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div v-for="(group, groupIndex) in clientGroups" :key="groupIndex" class="carousel-slide">
            <div class="clients-logos">
              <div v-for="(client, index) in group" :key="`${groupIndex}-${index}`" class="client-logo">
                <div class="logo-container">
                  <component :is="client.logo" class="client-svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="carousel-indicators">
          <button 
            v-for="(_, index) in clientGroups" 
            :key="index" 
            class="carousel-indicator" 
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)">
          </button>
        </div>
      </div>
      
      <div class="client-testimonial fade-in">
        <div class="quote-icon">
          <i class="fas fa-quote-left"></i>
        </div>
        <blockquote>
          "A OAS Comunicação Digital transformou completamente nossa presença online. A estratégia implementada aumentou nosso engajamento e, principalmente, nossas vendas."
        </blockquote>
        <div class="testimonial-author">
          <span class="author-name">Cliente Satisfeito</span>
          <span class="author-position">CEO, Empresa Parceira</span>
        </div>
      </div>
    </div>
    <div class="diagonal-separator"></div>
  </section>
</template>

<script>
import { clientLogos } from '../assets/client-logos.js';
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';

export default {
  name: 'ClientsSection',
  props: {
    id: {
      type: String,
      default: 'clients'
    }
  },
  setup() {
    const clients = ref(clientLogos);
    const currentSlide = ref(0);
    const carouselInterval = ref(null);
    const carouselIntervalTime = 5000; // 5 segundos por slide
    const itemsPerSlide = 3; // Número de logos por slide
    
    // Dividir os clientes em grupos para os slides
    const clientGroups = computed(() => {
      const groups = [];
      for (let i = 0; i < clients.value.length; i += itemsPerSlide) {
        groups.push(clients.value.slice(i, i + itemsPerSlide));
      }
      return groups;
    });
    
    // Iniciar o carousel
    const startCarousel = () => {
      carouselInterval.value = setInterval(() => {
        nextSlide();
      }, carouselIntervalTime);
    };
    
    // Pausar o carousel
    const pauseCarousel = () => {
      clearInterval(carouselInterval.value);
    };
    
    // Retomar o carousel
    const resumeCarousel = () => {
      startCarousel();
    };
    
    // Ir para o próximo slide
    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % clientGroups.value.length;
    };
    
    // Ir para um slide específico
    const goToSlide = (index) => {
      currentSlide.value = index;
      // Resetar o intervalo quando o usuário navega manualmente
      pauseCarousel();
      resumeCarousel();
    };
    
    onMounted(() => {
      startCarousel();
    });
    
    onBeforeUnmount(() => {
      pauseCarousel();
    });
    
    return {
      clients,
      currentSlide,
      clientGroups,
      pauseCarousel,
      resumeCarousel,
      goToSlide
    };
  }
};
</script>

<style scoped>
.clients-section {
  background-color: var(--light-gray);
  padding: 100px 0 150px;
  position: relative;
}

.section-title h2 {
  color: var(--black);
}

.section-title p {
  max-width: 700px;
  margin: 0 auto 50px;
  color: var(--dark-gray);
}

/* Novo estilo do Carousel */
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 50px;
}

.carousel {
  display: flex;
  transition: transform 1.2s ease-in-out;
  width: 100%;
}

.carousel-slide {
  min-width: 100%;
  flex-shrink: 0;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
}

.carousel-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--dark-gray);
  opacity: 0.3;
  cursor: pointer;
  border: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.carousel-indicator.active {
  opacity: 1;
  background-color: var(--red);
  transform: scale(1.2);
}

/* Layout dos logos dos clientes */
.clients-logos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  padding: 20px;
}

.client-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.client-logo:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.logo-container {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.client-svg {
  max-height: 60px;
  max-width: 100%;
  /* Aplicar filtro de cinza */
  filter: grayscale(100%) opacity(0.7);
  transition: filter 0.5s ease, transform 0.3s ease;
}

.carousel-container:hover .client-svg {
  filter: grayscale(0%) opacity(1);
}

.client-testimonial {
  max-width: 800px;
  margin: 50px auto 0;
  text-align: center;
  position: relative;
  padding: 30px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.quote-icon {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background-color: var(--red);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-size: 1.5rem;
}

blockquote {
  font-size: 1.2rem;
  color: var(--dark-gray);
  line-height: 1.7;
  margin-bottom: 20px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 600;
  color: var(--black);
}

.author-position {
  color: var(--red);
  font-size: 0.9rem;
}

.diagonal-separator {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(to bottom left, transparent 49%, var(--red) 50%);
}

@media (max-width: 768px) {
  .clients-logos {
    grid-template-columns: repeat(2, 1fr);
  }
  
  blockquote {
    font-size: 1rem;
  }
  
  .diagonal-separator {
    height: 40px;
  }
}

@media (max-width: 576px) {
  .clients-logos {
    grid-template-columns: 1fr;
  }
  
  .carousel-indicator {
    width: 10px;
    height: 10px;
  }
}
</style>
