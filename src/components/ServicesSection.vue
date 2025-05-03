<template>
  <section :id="id" class="services-section">
    <div class="container">
      <div class="section-title text-center fade-in">
        <h2>O Que Fazemos</h2>
        <p>Elevamos sua marca com soluções digitais integradas e estratégicas</p>
      </div>
      
      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card fade-in">
          <div class="service-icon-container">
            <div class="service-icon-bg" :style="{ backgroundImage: `url(${service.bgImage})` }"></div>
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
          </div>
          <div class="service-content">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <div class="service-link">
              <a href="#detailed-services" class="btn-text">Saiba mais <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
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
          bgImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23E41F1A;stop-opacity:0.2' /%3E%3Cstop offset='100%25' style='stop-color:%23151515;stop-opacity:0' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)' /%3E%3Cpath d='M20,50 L40,30 L60,40 L80,20' stroke='%23E41F1A' stroke-width='1' fill='none' stroke-opacity='0.3' /%3E%3Ccircle cx='20' cy='50' r='3' fill='%23E41F1A' fill-opacity='0.3' /%3E%3Ccircle cx='40' cy='30' r='3' fill='%23E41F1A' fill-opacity='0.3' /%3E%3Ccircle cx='60' cy='40' r='3' fill='%23E41F1A' fill-opacity='0.3' /%3E%3Ccircle cx='80' cy='20' r='3' fill='%23E41F1A' fill-opacity='0.3' /%3E%3C/svg%3E",
          description: 'Conhecer, mensurar e repensar. Acompanhamos tendências, analisamos dados e ajustamos estratégias para que sua marca esteja sempre à frente.'
        },
        {
          title: 'Planejamento',
          icon: 'fas fa-lightbulb',
          bgImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23E41F1A;stop-opacity:0.2' /%3E%3Cstop offset='100%25' style='stop-color:%23151515;stop-opacity:0' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)' /%3E%3Cpath d='M30,20 L30,80 M20,30 L80,30 M20,50 L80,50 M20,70 L80,70' stroke='%23E41F1A' stroke-width='1' fill='none' stroke-opacity='0.3' /%3E%3Ccircle cx='30' cy='30' r='5' fill='%23E41F1A' fill-opacity='0.3' /%3E%3Ccircle cx='50' cy='50' r='5' fill='%23E41F1A' fill-opacity='0.3' /%3E%3Ccircle cx='70' cy='70' r='5' fill='%23E41F1A' fill-opacity='0.3' /%3E%3C/svg%3E",
          description: 'Traçar, organizar e executar. Criamos estratégias personalizadas para fortalecer sua marca e potencializar seus resultados.'
        },
        {
          title: 'Criação',
          icon: 'fas fa-paint-brush',
          bgImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23E41F1A;stop-opacity:0.2' /%3E%3Cstop offset='100%25' style='stop-color:%23151515;stop-opacity:0' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)' /%3E%3Cpath d='M30,30 Q50,10 70,30 Q90,50 70,70 Q50,90 30,70 Q10,50 30,30 Z' stroke='%23E41F1A' stroke-width='1' fill='none' stroke-opacity='0.3' /%3E%3Ccircle cx='50' cy='50' r='20' stroke='%23E41F1A' stroke-width='1' fill='none' stroke-opacity='0.2' /%3E%3Ccircle cx='50' cy='50' r='10' stroke='%23E41F1A' stroke-width='1' fill='none' stroke-opacity='0.3' /%3E%3C/svg%3E",
          description: 'Inovar, criar e surpreender. Do design à comunicação, desenvolvemos conteúdos impactantes que conectam sua marca ao público-alvo.'
        },
        {
          title: 'Performance',
          icon: 'fas fa-rocket',
          bgImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23E41F1A;stop-opacity:0.2' /%3E%3Cstop offset='100%25' style='stop-color:%23151515;stop-opacity:0' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)' /%3E%3Cpath d='M20,80 L50,20 L80,80' stroke='%23E41F1A' stroke-width='1' fill='none' stroke-opacity='0.3' /%3E%3Cpath d='M35,60 L50,40 L65,60' stroke='%23E41F1A' stroke-width='1' fill='none' stroke-opacity='0.3' /%3E%3Cpath d='M42,50 L50,30 L58,50' stroke='%23E41F1A' stroke-width='1' fill='none' stroke-opacity='0.3' /%3E%3Ccircle cx='50' cy='20' r='5' fill='%23E41F1A' fill-opacity='0.4' /%3E%3C/svg%3E",
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.service-card {
  background: linear-gradient(145deg, #1e1e1e, #272727);
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  z-index: 2;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.service-card:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.service-icon-container {
  position: relative;
  padding-top: 60%;
  overflow: hidden;
}

.service-icon-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.service-card:hover .service-icon-bg {
  transform: scale(1.1);
}

.service-icon {
  position: absolute;
  bottom: -25px;
  left: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--black);
  border: 3px solid var(--red);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  color: var(--red);
  z-index: 3;
  transition: transform 0.3s ease;
}

.service-card:hover .service-icon {
  transform: rotate(360deg);
}

.service-content {
  padding: 40px 30px 30px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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
  margin-bottom: 20px;
  flex-grow: 1;
}

.service-link {
  margin-top: auto;
}

.btn-text {
  color: var(--red);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s;
}

.btn-text i {
  margin-left: 8px;
  transition: transform 0.3s;
}

.btn-text:hover {
  color: var(--white);
}

.btn-text:hover i {
  transform: translateX(5px);
}

@media (max-width: 992px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .service-card {
    max-width: 450px;
    margin: 0 auto;
  }
}
</style>
