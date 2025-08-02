import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutSection from '../views/AboutSection.vue'
import ProjectsSection from '../views/ProjectsComponents/ProjectsSection.vue'
import PublicationsSection from '../views/PublicationsComponents/PublicationsSection.vue'
import ContactSection from '../views/ContactComponents/ContactSection.vue';
const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'AboutSection',
      component: AboutSection,
    },
    {
      path: '/projects',
      name: 'ProjectsSection',
      component: ProjectsSection,
    },
    {
      path: '/publications',
      name: 'PublicationsSection',
      component: PublicationsSection,
    },
    {
      path: '/contact',
      name: 'ContactSection',
      component: ContactSection,
    },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router

