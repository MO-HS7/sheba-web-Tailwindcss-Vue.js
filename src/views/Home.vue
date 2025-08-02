<template>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <PublicationsSection />
    <ContactSection />
</template>

<script>
import HeroSection from './HeroSection.vue';
import AboutSection from './AboutSection.vue';
import ProjectsSection from './ProjectsComponents/ProjectsSection.vue';
import PublicationsSection from './PublicationsComponents/PublicationsSection.vue';
import ContactSection from './ContactComponents/ContactSection.vue'
export default {
  name: 'Home',
  components: {
    HeroSection,
    AboutSection,
    ProjectsSection,
    PublicationsSection,
    ContactSection,
  },
};
</script>

