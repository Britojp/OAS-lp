<template>
  <section class="detailed-services-section">
    <div class="container">
      <div class="section-title text-center fade-in">
        <h2>Nossos Serviços</h2>
        <p>Soluções completas para impulsionar sua presença digital</p>
      </div>
      
      <div class="services-wrapper">
        <div v-for="(service, index) in detailedServices" :key="index" class="detailed-service fade-in">
          <div class="service-image">
            <img :src="service.image" :alt="service.title">
            <div class="image-overlay"></div>
          </div>
          <div class="service-details">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DetailedServicesSection',
  data() {
    return {
      detailedServices: [
        {
          title: 'Gestão de Redes Sociais & Tráfego Pago',
          description: 'Estratégia, conteúdo e anúncios para engajamento e conversão. Aumentamos sua visibilidade e construímos conexões relevantes.',
          image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7'
        },
        {
          title: 'Criação de Sites, Landing Pages & E-commerce',
          description: 'Desenvolvimento de plataformas otimizadas para SEO que convertem visitantes em clientes e fortalecem sua presença online.',
          image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0'
        },
        {
          title: 'Rebranding & Identidade Visual',
          description: 'Transformamos sua marca para ser forte e inesquecível, com elementos visuais que comunicam sua essência e valores.',
          image: 'https://images.unsplash.com/photo-1575550596392-20d184e3d9fe'
        },
        {
          title: 'Planejamento & Estratégia Digital',
          description: 'Inteligência de mercado aplicada ao crescimento do seu negócio, com ações baseadas em dados para fortalecer sua presença digital.',
          image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0'
        },
        {
          title: 'Marketing de Conteúdo & Publicidade',
          description: 'Conteúdo estratégico e campanhas impactantes para atrair seu público-alvo e gerar conversões significativas.',
          image: 'https://images.unsplash.com/photo-1595450547833-95af46d7c43a'
        }
      ]
    };
  }
};
</script>

<style scoped>
.detailed-services-section {
  background-color: var(--white);
  padding: 100px 0;
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

.services-wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.detailed-service {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
  transition: transform 0.3s ease;
}

.detailed-service:nth-child(even) {
  direction: rtl;
}

.detailed-service:nth-child(even) .service-details {
  direction: ltr;
}

.service-image {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.service-image img {
  width: 100%;
  display: block;
  transition: transform 0.5s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(228, 31, 26, 0.3), rgba(0, 0, 0, 0.5));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.detailed-service:hover .image-overlay {
  opacity: 1;
}

.detailed-service:hover .service-image img {
  transform: scale(1.05);
}

.service-details h3 {
  color: var(--black);
  font-size: 1.8rem;
  margin-bottom: 15px;
  position: relative;
}

.service-details h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 50px;
  height: 3px;
  background-color: var(--red);
  transition: width 0.3s ease;
}

.detailed-service:hover .service-details h3::after {
  width: 70px;
}

.service-details p {
  color: var(--dark-gray);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .detailed-service,
  .detailed-service:nth-child(even) {
    grid-template-columns: 1fr;
    direction: ltr;
  }
  
  .detailed-service:nth-child(even) .service-details {
    direction: ltr;
  }
  
  .service-image {
    order: -1;
  }
}
</style>
