<template>
  <header :class="{ 'scrolled': scrolled }">
    <div class="container">
      <div class="navbar">
        <div class="logo">
          <a href="#">
            <img src="@/assets/logo.svg" alt="OAS Comunicação Digital" />
          </a>
        </div>
        <nav :class="{ 'active': menuActive }">
          <ul>
            <li><a href="#about" @click="closeMenu">Quem Somos</a></li>
            <li><a href="#services" @click="closeMenu">O Que Fazemos</a></li>
            <li><a href="#clients" @click="closeMenu">Clientes</a></li>
            <li><a href="#contact" @click="closeMenu">Contato</a></li>
          </ul>
        </nav>
        <div class="mobile-menu-btn" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'NavBar',
  setup() {
    const scrolled = ref(false);
    const menuActive = ref(false);

    const handleScroll = () => {
      scrolled.value = window.scrollY > 50;
    };

    const toggleMenu = () => {
      menuActive.value = !menuActive.value;
      if (menuActive.value) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    const closeMenu = () => {
      menuActive.value = false;
      document.body.style.overflow = '';
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      scrolled,
      menuActive,
      toggleMenu,
      closeMenu
    };
  }
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: transparent;
}

header.scrolled {
  background-color: var(--black);
  padding: 10px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  z-index: 1001;
}

.logo img {
  height: 40px;
  transition: all 0.3s ease;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-left: 30px;
}

nav ul li a {
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 5px 0;
  transition: all 0.3s ease;
}

nav ul li a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background-color: var(--red);
  bottom: 0;
  left: 0;
  transition: width 0.3s ease;
}

nav ul li a:hover::after,
nav ul li a:focus::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 1001;
}

.mobile-menu-btn span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: var(--white);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }

  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background-color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease;
  }

  nav.active {
    right: 0;
  }

  nav ul {
    flex-direction: column;
    text-align: center;
  }

  nav ul li {
    margin: 20px 0;
  }

  nav ul li a {
    font-size: 1.5rem;
  }

  .mobile-menu-btn.active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }

  .mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu-btn.active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
}
</style>
