<template>
  <section :id="id" class="clients-section">
    <div class="container">
      <div class="section-title text-center fade-in">
        <h2>Quem experimenta, recomenda</h2>
        <p>Empresas que confiaram em nossa expertise para transformar suas marcas</p>
      </div>

      <div class="carousel-container fade-in"
           ref="carouselRef"
           @mouseenter="isHovering = true"
           @mouseleave="isHovering = false">
        <div class="scroll-carousel">
          <div
            v-for="(client, index) in duplicatedClients"
            :key="index"
            class="client-logo">
            <div class="logo-container">
              <img :src="client.logo.render()" :alt="client.name" class="client-svg" />
            </div>
          </div>
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
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

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
    const duplicatedClients = computed(() => [...clients.value, ...clients.value]);

    const carouselRef = ref(null);
    const isHovering = ref(false);
    let animationId = null;

    const scroll = () => {
      const el = carouselRef.value;
      if (!el || isHovering.value) {
        animationId = requestAnimationFrame(scroll);
        return;
      }

      el.scrollLeft += 1;

      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(scroll);
    };

    onMounted(() => {
      animationId = requestAnimationFrame(scroll);
    });

    onBeforeUnmount(() => {
      cancelAnimationFrame(animationId);
    });

    return {
      duplicatedClients,
      carouselRef,
      isHovering
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

.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 50px;
  white-space: nowrap;
}

.scroll-carousel {
  display: flex;
  width: max-content;
}

.client-logo {
  flex: 0 0 auto;
  margin-right: 30px;
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
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.client-svg {
  max-height: 100px;
  max-width: 100%;
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
  .client-logo {
    margin-right: 20px;
  }

  blockquote {
    font-size: 1rem;
  }

  .diagonal-separator {
    height: 40px;
  }
}

@media (max-width: 576px) {
  .client-logo {
    margin-right: 15px;
  }
}
</style>
