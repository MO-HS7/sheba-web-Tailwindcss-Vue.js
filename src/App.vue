<script>
import ThemeToggle from './views/HeaderComponents/ThemeToggle.vue';
import Home from './views/Home.vue';
import HeroSection from './views/HeroSection.vue';
import AboutSection from './views/AboutSection.vue';
import ProjectsSection from './views/ProjectsComponents/ProjectsSection.vue';
import PublicationsSection from './views/PublicationsComponents/PublicationsSection.vue';
import ContactSection from './views/ContactComponents/ContactSection.vue';
import Toast from './views/Toast.vue';
export default {
  components: {
    ThemeToggle,
    Home,
    HeroSection,
    AboutSection,
    ProjectsSection,
    PublicationsSection,
    ContactSection,
    Toast,
  },
};

</script>

<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent />
  <Toast ref="toast" />
</template>