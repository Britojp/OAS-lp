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
          description: 'Criamos e executamos estratégias integradas que aumentam engajamento, visibilidade e conversões. Nossa abordagem combina conteúdo autêntico e relevante com campanhas de anúncios altamente segmentadas, construindo uma presença digital que gera resultados mensuráveis para sua marca e estabelece relacionamentos duradouros com seu público.',
          image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&auto=format&fit=crop&q=80'
        },
        {
          title: 'Criação de Sites, Landing Pages & E-commerce',
          description: 'Desenvolvemos plataformas digitais que não apenas impressionam visualmente, mas também convertem visitantes em clientes. Combinamos design intuitivo, otimização técnica avançada para SEO e estratégias de UX/UI baseadas em comportamento do usuário para criar experiências digitais que potencializam sua marca e aceleram seu crescimento online.',
          image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80'
        },
        {
          title: 'Rebranding & Identidade Visual',
          description: 'Transformamos a essência do seu negócio em uma identidade visual memorável e estratégica. Nosso processo aprofundado revela os valores fundamentais da sua marca e os traduz em elementos visuais poderosos que comunicam sua proposta de valor, estabelecem uma conexão emocional com seu público-alvo e destacam sua marca em um mercado competitivo.',
          image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80'
        },
        {
          title: 'Planejamento & Estratégia Digital',
          description: 'Analisamos seu mercado, concorrência e oportunidades para construir um roteiro digital personalizado que impulsiona resultados reais. Nossa abordagem estratégica integra inteligência de dados com insights de consumidor para desenvolver ações direcionadas que fortalecem seu posicionamento, ampliam seu alcance e transformam sua presença digital em vantagem competitiva.',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80'
        },
        {
          title: 'Marketing de Conteúdo & Publicidade',
          description: 'Desenvolvemos narrativas poderosas que estabelecem sua autoridade no setor e campanhas publicitárias que atingem as pessoas certas no momento ideal. Combinamos storytelling estratégico com táticas avançadas de segmentação para criar conteúdos e anúncios que não apenas atraem, mas também envolvem e convertem seu público-alvo em todas as etapas da jornada de compra.',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80'
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
