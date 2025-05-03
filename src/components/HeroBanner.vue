<template>
  <section class="hero-banner">
    <div class="overlay"></div>
    <div class="animated-shapes">
      <div v-for="i in 5" :key="i" class="shape" :class="`shape-${i}`"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <h1>
          <span class="red-text">Transformando</span> marcas através da estratégia digital
        </h1>
        <p>Combinamos inteligência de mercado, criatividade e um olhar analítico para criar conexões autênticas entre empresas e seu público.</p>
        <div class="hero-buttons">
          <a href="#services" class="btn">Nossos Serviços</a>
          <a href="#contact" class="btn btn-outline">Entre em Contato</a>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <a href="#about">
        <i class="fas fa-chevron-down"></i>
      </a>
    </div>
  </section>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';

export default {
  name: 'HeroBanner',
  setup() {
    let animationFrame = null;
    
    const animateShapes = () => {
      const shapes = document.querySelectorAll('.shape');
      shapes.forEach((shape, index) => {
        const speed = 0.2 + (index * 0.05);
        const yPos = window.scrollY * speed;
        shape.style.transform = `translateY(${yPos}px)`;
      });
      
      animationFrame = requestAnimationFrame(animateShapes);
    };
    
    onMounted(() => {
      animationFrame = requestAnimationFrame(animateShapes);
    });
    
    onUnmounted(() => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    });
  }
};
</script>

<style scoped>
.hero-banner {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-image: url('https://images.unsplash.com/photo-1519389950473-47ba0277781c');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: var(--white);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  animation: fadeInUp 1s ease-out;
}

.red-text {
  color: var(--red);
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease-out 0.2s both;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  animation: fadeInUp 1s ease-out 0.4s both;
}

.animated-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(228, 31, 26, 0.2);
  z-index: 1;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 150px;
  height: 150px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 100px;
  height: 100px;
  top: 40%;
  right: 10%;
  animation-delay: 1s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  bottom: 20%;
  left: 20%;
  animation-delay: 2s;
}

.shape-4 {
  width: 120px;
  height: 120px;
  top: 20%;
  right: 30%;
  animation-delay: 3s;
}

.shape-5 {
  width: 70px;
  height: 70px;
  bottom: 30%;
  right: 15%;
  animation-delay: 4s;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: bounce 2s infinite;
}

.scroll-indicator a {
  color: var(--white);
  font-size: 24px;
  transition: color 0.3s;
}

.scroll-indicator a:hover {
  color: var(--red);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-20px) translateX(-50%);
  }
  60% {
    transform: translateY(-10px) translateX(-50%);
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .shape {
    display: none;
  }
}

@media (max-width: 576px) {
  .hero-content h1 {
    font-size: 2rem;
  }
}
</style>
