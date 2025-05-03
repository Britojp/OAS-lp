<template>
  <section :id="id" class="contact-section">
    <div class="container">
      <div class="contact-wrapper">
        <div class="contact-info fade-in">
          <h2>Entre em Contato</h2>
          <p>Pronto para transformar sua marca? Converse conosco e descubra como podemos ajudar a impulsionar seu negócio no ambiente digital.</p>
          
          <div class="contact-methods">
            <div class="contact-method">
              <div class="icon">
                <i class="fab fa-instagram"></i>
              </div>
              <div class="details">
                <h3>Instagram</h3>
                <a href="https://www.instagram.com/oascomunicacao" target="_blank">@oascomunicacao</a>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div class="details">
                <h3>Telefone</h3>
                <a href="tel:+5562982301662">(62) 98230-1662</a>
              </div>
            </div>
          </div>
          
          <a href="https://wa.me/5562982301662" target="_blank" class="btn contact-btn">
            <i class="fab fa-whatsapp"></i> Fale Conosco
          </a>
        </div>
        
        <div class="contact-image fade-in">
          <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1" alt="OAS Comunicação Digital Contact">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    id: {
      type: String,
      default: 'contact'
    }
  }
};
</script>

<style scoped>
.contact-section {
  background-color: var(--red);
  color: var(--white);
  padding: 100px 0;
  position: relative;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.contact-info h2 {
  color: var(--white);
  position: relative;
  margin-bottom: 30px;
}

.contact-info h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background-color: var(--white);
}

.contact-info p {
  margin-bottom: 30px;
  line-height: 1.7;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 15px;
  transition: transform 0.3s ease;
}

.contact-method:hover {
  transform: translateX(10px);
}

.icon {
  width: 50px;
  height: 50px;
  background-color: var(--white);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--red);
  font-size: 1.5rem;
}

.details h3 {
  color: var(--white);
  margin-bottom: 5px;
  font-size: 1.2rem;
}

.details a {
  color: var(--light-gray);
  text-decoration: none;
  transition: color 0.3s ease;
}

.details a:hover {
  color: var(--white);
  text-decoration: underline;
}

.contact-btn {
  background-color: var(--white);
  color: var(--red);
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.contact-btn:hover {
  background-color: var(--black);
  color: var(--white);
}

.contact-image {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  height: 100%;
}

.contact-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.contact-image:hover img {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }
  
  .contact-image {
    order: -1;
    height: 300px;
  }
}
</style>
