<template>
  <section :id="id" class="services-section">
    <div class="container">
      <div class="section-title text-center fade-in">
        <h2>O Que Fazemos</h2>
        <p>Elevamos sua marca com soluções digitais integradas e estratégicas</p>
      </div>
      
      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card fade-in">
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  props: {
    id: {
      type: String,
      default: 'services'
    }
  },
  data() {
    return {
      services: [
        {
          title: 'Monitoramento',
          icon: 'fas fa-chart-line',
          description: 'Conhecer, mensurar e repensar. Acompanhamos tendências, analisamos dados e ajustamos estratégias para que sua marca esteja sempre à frente.'
        },
        {
          title: 'Planejamento',
          icon: 'fas fa-lightbulb',
          description: 'Traçar, organizar e executar. Criamos estratégias personalizadas para fortalecer sua marca e potencializar seus resultados.'
        },
        {
          title: 'Criação',
          icon: 'fas fa-paint-brush',
          description: 'Inovar, criar e surpreender. Do design à comunicação, desenvolvemos conteúdos impactantes que conectam sua marca ao público-alvo.'
        },
        {
          title: 'Performance',
          icon: 'fas fa-rocket',
          description: 'Otimizar, converter e crescer. Aprimoramos campanhas e estratégias para garantir alto desempenho e retorno sobre o investimento.'
        }
      ]
    };
  }
};
</script>

<style scoped>
.services-section {
  background-color: var(--black);
  color: var(--white);
  padding: 100px 0;
}

.section-title h2 {
  color: var(--white);
}

.section-title h2:after {
  background-color: var(--red);
  left: 50%;
  transform: translateX(-50%);
}

.section-title p {
  max-width: 700px;
  margin: 0 auto 50px;
  color: var(--light-gray);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.service-card {
  background: linear-gradient(145deg, #1e1e1e, #272727);
  padding: 30px;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.service-card::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--red);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
  z-index: -1;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.service-card:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--red);
}

.service-card h3 {
  margin-bottom: 15px;
  color: var(--white);
  position: relative;
  display: inline-block;
}

.service-card p {
  color: var(--light-gray);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
