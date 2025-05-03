<template>
  <div class="app">
    <NavBar />
    <HeroBanner />
    <AboutSection id="about" />
    <ServicesSection id="services" />
    <DetailedServicesSection />
    <ClientsSection id="clients" />
    <ContactSection id="contact" />
    <FooterSection />
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
import NavBar from './components/NavBar.vue';
import HeroBanner from './components/HeroBanner.vue';
import AboutSection from './components/AboutSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import DetailedServicesSection from './components/DetailedServicesSection.vue';
import ClientsSection from './components/ClientsSection.vue';
import ContactSection from './components/ContactSection.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HeroBanner,
    AboutSection,
    ServicesSection,
    DetailedServicesSection,
    ClientsSection,
    ContactSection,
    FooterSection
  },
  setup() {
    const checkFadeElements = () => {
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    onMounted(() => {
      window.addEventListener('scroll', checkFadeElements);
      // Check elements on initial load
      checkFadeElements();
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', checkFadeElements);
    });
  }
};
</script>

<style>
/* This style is imported from main.css */
</style>
