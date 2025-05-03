<template>
  <section :id="id" class="clients-section">
    <div class="container">
      <div class="section-title text-center fade-in">
        <h2>Quem experimenta, recomenda</h2>
        <p>Empresas que confiaram em nossa expertise para transformar suas marcas</p>
      </div>
      
      <div class="clients-carousel-container fade-in">
        <div class="carousel-navigation">
          <button class="carousel-btn prev-btn" @click="scrollCarousel(-1)">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="carousel-btn next-btn" @click="scrollCarousel(1)">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div class="clients-carousel" ref="carousel">
          <div class="carousel-track" :style="{ transform: `translateX(${-currentPage * 100}%)` }">
            <div class="carousel-slide">
              <div class="clients-logos">
                <div v-for="(client, index) in clientsFirstPage" :key="`first-${index}`" class="client-logo">
                  <div class="logo-container">
                    <component :is="client.logo" class="client-svg" />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-slide">
              <div class="clients-logos">
                <div v-for="(client, index) in clientsSecondPage" :key="`second-${index}`" class="client-logo">
                  <div class="logo-container">
                    <component :is="client.logo" class="client-svg" />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-slide">
              <div class="clients-logos">
                <div v-for="(client, index) in clientsThirdPage" :key="`third-${index}`" class="client-logo">
                  <div class="logo-container">
                    <component :is="client.logo" class="client-svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="carousel-indicators">
          <button 
            v-for="(_, index) in 3" 
            :key="index" 
            :class="['indicator-dot', { active: currentPage === index }]"
            @click="goToPage(index)"
          ></button>
        </div>
      </div>
      
      <div class="testimonials-carousel fade-in">
        <div class="testimonial-track" :style="{ transform: `translateX(${-currentTestimonial * 100}%)` }">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="client-testimonial">
            <div class="quote-icon">
              <i class="fas fa-quote-left"></i>
            </div>
            <blockquote>
              {{ testimonial.quote }}
            </blockquote>
            <div class="testimonial-author">
              <span class="author-name">{{ testimonial.name }}</span>
              <span class="author-position">{{ testimonial.position }}</span>
            </div>
          </div>
        </div>
        
        <div class="testimonial-indicators">
          <button 
            v-for="(_, index) in testimonials.length" 
            :key="index" 
            :class="['indicator-dot', { active: currentTestimonial === index }]"
            @click="goToTestimonial(index)"
          ></button>
        </div>
      </div>
    </div>
    <div class="diagonal-separator"></div>
  </section>
</template>

<script>
import { clientLogos } from '../assets/client-logos.js';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'ClientsSection',
  props: {
    id: {
      type: String,
      default: 'clients'
    }
  },
  setup() {
    const carousel = ref(null);
    const currentPage = ref(0);
    const currentTestimonial = ref(0);
    let autoScrollInterval = null;
    let testimonialInterval = null;
    
    // Dados de depoimentos
    const testimonials = [
      {
        quote: "A OAS Comunicação Digital transformou completamente nossa presença online. A estratégia implementada aumentou nosso engajamento e, principalmente, nossas vendas.",
        name: "Ricardo Oliveira",
        position: "CEO, Empresa Inovadora"
      },
      {
        quote: "Desde que começamos a trabalhar com a OAS, nossa visibilidade no mercado aumentou exponencialmente. A equipe é extremamente profissional e os resultados ultrapassaram todas as nossas expectativas.",
        name: "Maria Santos",
        position: "Diretora de Marketing, Empresa Visionária"
      },
      {
        quote: "O que mais nos impressionou foi a capacidade da OAS em entender nosso público-alvo. As campanhas desenvolvidas geraram um retorno sobre investimento impressionante e abriram novas oportunidades para nosso negócio.",
        name: "Carlos Mendes",
        position: "Fundador, Startup em Crescimento"
      }
    ];
    
    // Lógica do carrossel de clientes
    const chunkedClients = computed(() => {
      const chunks = [];
      const clientsPerPage = 6;
      
      for (let i = 0; i < clientLogos.length; i += clientsPerPage) {
        chunks.push(clientLogos.slice(i, i + clientsPerPage));
      }
      
      return chunks;
    });
    
    const clientsFirstPage = computed(() => chunkedClients.value[0] || []);
    const clientsSecondPage = computed(() => chunkedClients.value[1] || []);
    const clientsThirdPage = computed(() => chunkedClients.value[2] || []);
    
    const totalPages = computed(() => chunkedClients.value.length);
    
    const scrollCarousel = (direction) => {
      currentPage.value = (currentPage.value + direction + totalPages.value) % totalPages.value;
      resetAutoScroll();
    };
    
    const goToPage = (pageIndex) => {
      currentPage.value = pageIndex;
      resetAutoScroll();
    };
    
    // Lógica do carrossel de depoimentos
    const goToTestimonial = (index) => {
      currentTestimonial.value = index;
      resetTestimonialScroll();
    };
    
    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        scrollCarousel(1);
      }, 5000);
    };
    
    const startTestimonialScroll = () => {
      testimonialInterval = setInterval(() => {
        currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length;
      }, 7000);
    };
    
    const resetAutoScroll = () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
      startAutoScroll();
    };
    
    const resetTestimonialScroll = () => {
      if (testimonialInterval) {
        clearInterval(testimonialInterval);
      }
      startTestimonialScroll();
    };
    
    onMounted(() => {
      startAutoScroll();
      startTestimonialScroll();
    });
    
    onBeforeUnmount(() => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
      if (testimonialInterval) {
        clearInterval(testimonialInterval);
      }
    });
    
    return {
      carousel,
      currentPage,
      currentTestimonial,
      testimonials,
      clientsFirstPage,
      clientsSecondPage,
      clientsThirdPage,
      scrollCarousel,
      goToPage,
      goToTestimonial
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

/* Carousel Styles */
.clients-carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0 30px;
  margin-bottom: 50px;
}

.carousel-navigation {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  z-index: 10;
  pointer-events: none;
}

.carousel-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--white);
  border: none;
  color: var(--black);
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  pointer-events: auto;
  opacity: 0.8;
}

.carousel-btn:hover {
  background-color: var(--red);
  color: var(--white);
  opacity: 1;
}

.clients-carousel {
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
}

.clients-logos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  padding: 20px 0;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
}

.indicator-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--light-gray);
  border: 2px solid var(--dark-gray);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator-dot.active {
  background-color: var(--red);
  border-color: var(--red);
  transform: scale(1.2);
}

/* Client Logo Styles */
.client-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 120px;
}

.client-logo:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.logo-container {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.client-svg {
  max-height: 70px;
  max-width: 100%;
  fill: var(--dark-gray);
  transition: fill 0.3s ease;
}

.client-logo:hover .client-svg {
  fill: var(--red);
}

/* Testimonial Carousel Styles */
.testimonials-carousel {
  position: relative;
  max-width: 800px;
  margin: 50px auto 0;
  overflow: hidden;
}

.testimonial-track {
  display: flex;
  transition: transform 0.6s ease-in-out;
}

.client-testimonial {
  flex: 0 0 100%;
  width: 100%;
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
  min-height: 80px;
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

.testimonial-indicators {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
}

.diagonal-separator {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(to bottom left, transparent 49%, var(--red) 50%);
}

@media (max-width: 992px) {
  .clients-logos {
    grid-template-columns: repeat(3, 1fr);
  }
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
  
  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}

@media (max-width: 576px) {
  .clients-logos {
    grid-template-columns: repeat(1, 1fr);
  }
  
  .client-logo {
    height: 100px;
  }
  
  .logo-container {
    height: 60px;
  }
}
</style>
