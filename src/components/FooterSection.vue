<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="@/assets/logo.svg" alt="OAS Comunicação Digital">
        </div>
        
        <div class="footer-text">
          <p>OAS Comunicação Digital &copy; {{ currentYear }}. Todos os direitos reservados.</p>
        </div>
        
        <div class="social-links">
          <a href="https://www.instagram.com/oascomunicacao" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/5562982301662" target="_blank" aria-label="WhatsApp">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div class="back-to-top" @click="scrollToTop">
      <i class="fas fa-chevron-up"></i>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
.footer {
  background-color: var(--black);
  color: var(--white);
  padding: 40px 0;
  position: relative;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-logo img {
  height: 40px;
}

.footer-text p {
  margin: 0;
  color: var(--light-gray);
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: var(--dark-gray);
  color: var(--white);
  border-radius: 50%;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: var(--red);
  transform: translateY(-5px);
}

.back-to-top {
  position: absolute;
  top: -25px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: var(--red);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.back-to-top:hover {
  background-color: var(--white);
  color: var(--red);
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
  
  .back-to-top {
    right: 50%;
    transform: translateX(50%);
  }
  
  .back-to-top:hover {
    transform: translateX(50%) translateY(-5px);
  }
}
</style>
