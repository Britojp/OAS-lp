<template>
  <section :id="id" class="about-section">
    <div class="container">
      <div class="about-wrapper">
        <div class="about-content fade-in">
          <h2>Quem Somos</h2>
          <p>A OAS Comunicação Digital nasceu para transformar marcas através da estratégia. Combinamos inteligência de mercado, criatividade e um olhar analítico para criar conexões autênticas entre empresas e seu público.</p>
          <p>Desde nossa fundação como WIII COMUNICAÇÃO, evoluímos, crescemos e nos tornamos a OAS: uma agência que entende que comunicação não é apenas sobre falar, mas sobre ser ouvido.</p>
          <p>Com expertise em social media, branding e planejamento estratégico, ajudamos marcas a se posicionarem de forma impactante e relevante no cenário digital.</p>
        </div>
        <div class="about-image fade-in">
          <div class="image-container">
            <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" alt="OAS Comunicação Digital Team" />
          </div>
        </div>
      </div>
    </div>
    <div class="diagonal-separator"></div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    id: {
      type: String,
      default: 'about'
    }
  }
};
</script>

<style scoped>
.about-section {
  background-color: var(--white);
  position: relative;
  padding-bottom: 120px;
}

.about-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.about-content h2 {
  color: var(--black);
  position: relative;
  margin-bottom: 30px;
}

.about-content h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background-color: var(--red);
}

.about-content p {
  margin-bottom: 20px;
  color: var(--dark-gray);
  line-height: 1.7;
}

.about-image {
  position: relative;
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transform: translateY(-20px);
}

.image-container::before {
  content: '';
  position: absolute;
  top: -20px;
  right: -20px;
  width: 100%;
  height: 100%;
  background-color: var(--red);
  z-index: -1;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.image-container:hover::before {
  top: -10px;
  right: -10px;
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.image-container:hover img {
  transform: scale(1.05);
}

.diagonal-separator {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to bottom right, transparent 49%, var(--black) 50%);
}

@media (max-width: 768px) {
  .about-wrapper {
    grid-template-columns: 1fr;
  }
  
  .about-image {
    order: -1;
  }
  
  .diagonal-separator {
    height: 50px;
  }
}
</style>
