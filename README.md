The following is a digest of the repository "sheba-web-Tailwindcss-Vue.js".
This digest is designed to be easily parsed by Large Language Models.

--- SUMMARY ---
Repository: sheba-web-Tailwindcss-Vue.js
Files Analyzed: 34
Total Text Size: 30.76 KB
Estimated Tokens (text only): ~9,044

--- DIRECTORY STRUCTURE ---
sheba-web-Tailwindcss-Vue.js/
├── src/
│   ├── assets/
│   │   └── main.css
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── ContactComponents/
│   │   │   ├── ContactDetail.vue
│   │   │   ├── ContactForm.vue
│   │   │   ├── ContactInfo.vue
│   │   │   ├── ContactSection.vue
│   │   │   └── SocialLinks.vue
│   │   ├── FooterComponents/
│   │   │   ├── FooterBottom.vue
│   │   │   ├── FooterComponent.vue
│   │   │   ├── FooterLinks.vue
│   │   │   ├── FooterPrograms.vue
│   │   │   └── FooterResources.vue
│   │   ├── HeaderComponents/
│   │   │   ├── HeaderComponent.vue
│   │   │   ├── MobileMenu.vue
│   │   │   ├── NavigationLinks.vue
│   │   │   └── ThemeToggle.vue
│   │   ├── ProjectsComponents/
│   │   │   ├── ProjectsFooter.vue
│   │   │   ├── ProjectsGrid.vue
│   │   │   ├── ProjectsHeader.vue
│   │   │   └── ProjectsSection.vue
│   │   ├── PublicationsComponents/
│   │   │   ├── PublicationsGrid.vue
│   │   │   ├── PublicationsHeader.vue
│   │   │   └── PublicationsSection.vue
│   │   ├── AboutSection.vue
│   │   ├── HeroSection.vue
│   │   ├── Home.vue
│   │   ├── Logo.vue
│   │   └── Toast.vue
│   ├── App.vue
│   └── main.js
├── jsconfig.json
├── package.json
├── README.md
└── vite.config.js


--- FILE CONTENTS ---
============================================================
FILE: src/assets/main.css
============================================================
@import "tailwindcss";

body {
  padding-top: 2rem; 
}


.nav-link.active {
  background-color: #06b6d4; /* cyan-500 */
  color: white;
}

============================================================
FILE: src/router/index.js
============================================================
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



============================================================
FILE: src/views/ContactComponents/ContactDetail.vue
============================================================
<template>
  <div class="flex items-start space-x-4 mb-6">
    <font-awesome-icon :icon="icon" class="text-2xl text-cyan-400 mt-1" />
    <div>
      <h4 class="font-semibold">{{ title }}</h4>
      <p class="text-gray-400 dark:text-gray-500" v-html="text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactDetail',
  props: {
    icon: {
      type: Array, 
      required: true,
    },
    title: { type: String, required: true },
    text: { type: String, required: true },
  },
};
</script>

============================================================
FILE: src/views/ContactComponents/ContactForm.vue
============================================================
<template>
  <form @submit.prevent="handleSubmit" id="contact-form" class="space-y-6">
    <input v-model="name" type="text" placeholder="Name" required id="name" 
      class="w-full bg-white/20 dark:bg-gray-700 border-2 border-transparent focus:border-cyan-400 text-white placeholder-gray-400 p-3 rounded-lg outline-none transition" />
    <input v-model="email" type="email" placeholder="Email" required id="email"
      class="w-full bg-white/20 dark:bg-gray-700 border-2 border-transparent focus:border-cyan-400 text-white placeholder-gray-400 p-3 rounded-lg outline-none transition" />
    <input v-model="subject" type="text" placeholder="Subject" required id="subject"
      class="w-full bg-white/20 dark:bg-gray-700 border-2 border-transparent focus:border-cyan-400 text-white placeholder-gray-400 p-3 rounded-lg outline-none transition" />
    <textarea v-model="message" placeholder="Message" rows="5" required
      class="w-full bg-white/20 dark:bg-gray-700 border-2 border-transparent focus:border-cyan-400 text-white placeholder-gray-400 p-3 rounded-lg outline-none transition"></textarea>
    <button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
      Send Message
    </button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },
  methods: {
    validateForm() {
      let isValid = true;
      const fields = ['name', 'email', 'subject', 'message'];

      fields.forEach(field => {
        if (!this[field].trim()) {
          isValid = false;
        }
      });
      return isValid;
    },
    handleSubmit() {
      if (!this.validateForm()) {
        this.$emit('toast', 'Please fill in all required fields.');
        return;
      }

      localStorage.setItem('userName', this.name);
      this.$emit('toast', 'Thank you! Your message has been sent.');
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    }
  }
};
</script>

============================================================
FILE: src/views/ContactComponents/ContactInfo.vue
============================================================
<template>
  <div>
    <ContactDetail :icon="['fas', 'map-marker-alt']" title="Office Location" text="Taiz Office – Jamal Street, Al-Ekhwah Round" />
    <ContactDetail :icon="['fas', 'phone']" title="Phone Numbers" text="+967 04 252733<br>+967 770450222" />
    <ContactDetail :icon="['fas', 'envelope']" title="Email Address" text="info@shebayouth.org" />
    <SocialLinks />
  </div>
</template>

<script>
import ContactDetail from './ContactDetail.vue'
import SocialLinks from './SocialLinks.vue'

export default {
  name: 'ContactInfo',
  components: { ContactDetail, SocialLinks },
};
</script>


============================================================
FILE: src/views/ContactComponents/ContactSection.vue
============================================================
<template>
  <section id="contact" class="py-20 bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-100">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm @toast="showToast" />
      </div>
    </div>
  </section>
</template>

<script>
import ContactInfo from './ContactInfo.vue';
import ContactForm from './ContactForm.vue';

export default {
  name: 'ContactSection',
  components: { ContactInfo, ContactForm },
  methods: {
    showToast(message) {

      const toast = document.createElement('div');
      toast.textContent = message;
      toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.7);
        color: white;
        padding: 10px 20px;
        border-radius: 25px;
        font-size: 0.9rem;
        z-index: 1000;
        opacity: 1;
        transition: opacity 0.5s ease;
      `;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
      }, 3000);
    }
  }
};
</script>

============================================================
FILE: src/views/ContactComponents/SocialLinks.vue
============================================================
<template>
  <div class="mt-8 flex flex-wrap gap-4">
    <a
      v-for="link in links"
      :key="link.name"
      :href="link.url"
      target="_blank"
      rel="noopener"
      class="flex items-center space-x-2 bg-white/10 hover:bg-cyan-500 px-4 py-2 rounded-full transition text-white"
    >
      <font-awesome-icon :icon="link.icon" class="text-xl" />
      <span>{{ link.name }}</span>
    </a>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'SocialLinks',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      links: [
        { name: "Facebook", url: "https://www.facebook.com/Shebayouthf", icon: faFacebookF },
        { name: "Twitter", url: "https://twitter.com/Shebayouthf", icon: faTwitter },
        { name: "YouTube", url: "https://www.youtube.com/channel/UCJ7c-ELM4jnFmeIrR_f8-6A", icon: faYoutube },
        { name: "LinkedIn", url: "https://www.linkedin.com/company/shebayouthf/", icon: faLinkedinIn },
        { name: "Instagram", url: "https://www.instagram.com/shebayouthf/", icon: faInstagram },
      ],
    };
  },
};
</script>


============================================================
FILE: src/views/FooterComponents/FooterBottom.vue
============================================================
<template>
  <div
    class="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500"
  >
    <p>&copy; 2025 Sheba Youth Foundation. All rights reserved.</p>
    <div class="flex space-x-4 mt-4 md:mt-0">
      <a href="#" class="hover:text-cyan-400">Privacy Policy</a>
      <a href="#" class="hover:text-cyan-400">Terms of Service</a>
    </div>
  </div>
</template>


============================================================
FILE: src/views/FooterComponents/FooterComponent.vue
============================================================
<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid lg:grid-cols-3 gap-8">
        <div class="lg:col-span-1 flex flex-col items-start">
        <Logo class=" h-64 w-auto" />
          <p class="text-gray-400">
            Empowering youth for a better tomorrow through education, training, and community engagement.
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-2">
          <FooterLinks />
          <FooterPrograms />
          <FooterResources />
        </div>
      </div>
      <FooterBottom />
    </div>
  </footer>
</template>

<script>
import Logo from '../Logo.vue'
import FooterLinks from './FooterLinks.vue'
import FooterPrograms from './FooterPrograms.vue'
import FooterResources from './FooterResources.vue'
import FooterBottom from './FooterBottom.vue'

export default {
  components: {
    Logo,
    FooterLinks,
    FooterPrograms,
    FooterResources,
    FooterBottom,
  },
};
</script>


============================================================
FILE: src/views/FooterComponents/FooterLinks.vue
============================================================
<template>
  <div>
    <h4 class="font-semibold text-cyan-400 mb-4">Quick Links</h4>
    <ul class="space-y-2 text-gray-400">
      <li><router-link to="/projects" class="hover:text-cyan-400">Our Projects</router-link></li>
      <li><router-link to="/publications" class="hover:text-cyan-400">Publications</router-link></li>
      <li><router-link to="/contact" class="hover:text-cyan-400">Contact Us</router-link></li>
    </ul>
  </div>
</template>


============================================================
FILE: src/views/FooterComponents/FooterPrograms.vue
============================================================
<template>
  <div>
    <h4 class="font-semibold text-cyan-400 mb-4">Programs</h4>
    <ul class="space-y-2 text-gray-400">
      <li><a href="#" class="hover:text-cyan-400">Youth Empowerment</a></li>
      <li><a href="#" class="hover:text-cyan-400">Community Development</a></li>
      <li><a href="#" class="hover:text-cyan-400">Peace Building</a></li>
      <li><a href="#" class="hover:text-cyan-400">Digital Advocacy</a></li>
    </ul>
  </div>
</template>


============================================================
FILE: src/views/FooterComponents/FooterResources.vue
============================================================
<template>
  <div>
    <h4 class="font-semibold text-cyan-400 mb-4">Resources</h4>
    <ul class="space-y-2 text-gray-400">
      <li><a href="#" class="hover:text-cyan-400">Success Stories</a></li>
      <li><a href="#" class="hover:text-cyan-400">News & Updates</a></li>
      <li><a href="#" class="hover:text-cyan-400">Research Papers</a></li>
      <li><a href="#" class="hover:text-cyan-400">Annual Reports</a></li>
    </ul>
  </div>
</template>


============================================================
FILE: src/views/HeaderComponents/HeaderComponent.vue
============================================================
<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-800/95 backdrop-blur border-b border-gray-200 dark:border-gray-700">
    <nav class="container mx-auto px-4 flex items-center justify-between h-20">
      <Logo class=" h-14 w-auto" />

      <div class="hidden md:flex">
        <NavigationLinks />
      </div>
      <div class="flex items-center space-x-3">
        <ThemeToggle />
        <MobileMenu />
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import Logo from '../Logo.vue'
import NavigationLinks from './NavigationLinks.vue'
import ThemeToggle from './ThemeToggle.vue'
import MobileMenu from './MobileMenu.vue'

const mobileMenu = ref(false)
</script>

============================================================
FILE: src/views/HeaderComponents/MobileMenu.vue
============================================================
<template>
  <button
    @click="toggleMenu"
    :class="{ 'active': isOpen }"
    class="hamburger p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-cyan-500 hover:text-white md:hidden"
    aria-label="Toggle menu"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" >
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>

  <div
    v-if="isOpen"
    class="nav-menu md:hidden mt-2 px-4 py-2 flex flex-col space-y-2 bg-white dark:bg-gray-800 rounded-md shadow-lg
           absolute top-full left-0 w-full z-50"
  >
<router-link
  v-for="item in links"
  :key="item.path"
  :to="item.path"
  class="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-cyan-500 hover:text-white transition"
  active-class="active"
  @click="closeMenu"
>
  {{ item.name }}
</router-link>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Publications', path: '/publications' },
  { name: 'Contact Us', path: '/contact' }
]
</script>


============================================================
FILE: src/views/HeaderComponents/NavigationLinks.vue
============================================================
<template>
  <div class="flex space-x-4">
    <router-link
      v-for="link in links"
      :key="link.path"
      :to="link.path"
      class="nav-link relative text-gray-600 dark:text-gray-300 hover:text-cyan-500 px-3 py-2 text-sm font-medium"
      :class="{ 'text-cyan-500': route.path === link.path }"
      active-class="active"
    >
      {{ link.name }}
    </router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Publications', path: '/publications' },
  { name: 'Contact Us', path: '/contact' }
]
</script>

============================================================
FILE: src/views/HeaderComponents/ThemeToggle.vue
============================================================
<template>
  <button @click="toggleTheme" class="theme-toggle text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition">
    <font-awesome-icon :icon="themeIcon" class="text-lg" />
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const theme = ref('light')

const themeIcon = ref(['fas', 'moon'])

const updateThemeIcon = (mode) => {
  themeIcon.value = mode === 'dark' ? ['fas', 'sun'] : ['fas', 'moon']
}

const toggleTheme = () => {
  const newTheme = theme.value === 'light' ? 'dark' : 'light'
  theme.value = newTheme
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
  updateThemeIcon(newTheme)
}

onMounted(() => {
  const stored = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  theme.value = stored || (prefersDark ? 'dark' : 'light')
  document.documentElement.setAttribute('data-theme', theme.value)
  updateThemeIcon(theme.value)
})
</script>

<script>
export default {
  components: {
    FontAwesomeIcon,
  }
}
</script>

============================================================
FILE: src/views/ProjectsComponents/ProjectsFooter.vue
============================================================
<template>
  <div class="text-center mt-12">
    <a href="#" class="text-blue-600 font-semibold hover:underline">View All Projects →</a>
  </div>
</template>


============================================================
FILE: src/views/ProjectsComponents/ProjectsGrid.vue
============================================================
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 md:col-span-2 lg:col-span-1">
      <img src="/public/photos/SANAD.jpg" alt="SANAD 4 Project" class="w-full h-64 object-cover" />
      <div class="p-6">
        <h3 class="text-2xl font-bold mb-2 text-gray-800 dark:text-white">SANAD 4 Project</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Enhancing community stability through the formation of community councils that support local authorities in resolving conflict issues.
        </p>
        <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4 mb-4">
          <span class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Taiz Governorate</span>
          <span class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">100+ Beneficiaries</span>
        </div>
        <a href="#" class="text-orange-500 font-semibold hover:underline">Learn More &rarr;</a>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                    <img src="/public/photos/Youth.jpg" alt="Youth Empowerment Program" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Youth Empowerment Program</h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">Empowering and Building the Capacities of Youth Components: "Youth Platform for Peace and Youth Support Group</p>
                        <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4 mb-4">
                            <span class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">9 Governorates</span>
                            <span class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">300+ Participants</span>
                        </div>
                        <a href="#" class="text-orange-500 font-semibold hover:underline">Learn More &rarr;</a>
                    </div>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                    <img src="/public/photos/Waad.png" alt="Political Participation & Digital Advocacy" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Waad Network Capacity Building Project</h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">About Waad Network Waad Network was established as one of the initiatives under the umbrella of Sheba Youth Foundation, aiming to create a supportive environment</p>
                        <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4 mb-4">
                            <span class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Taiz</span>
                            <span class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">200+ Youth</span>
                        </div>
                        <a href="#" class="text-orange-500 font-semibold hover:underline">Learn More &rarr;</a>
                    </div>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 md:col-span-2 lg:col-span-1">
                    <img src="/public/photos/Oxfam.jpg" alt="Women-Led Mediation Campaign" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Oxfam Grant: For enhancing the Media Capabilities of Sheba Youth Foundation</h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">The Oxfam grant project, aimed at enhancing the media capabilities of Sheba Youth Foundation, represents a strategic transformation and a significant shift in the foundation's</p>
                        <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4 mb-4">
                            <span class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Taiz</span>
                            <span class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Community Impact</span>
                        </div>
                        <a href="#" class="text-orange-500 font-semibold hover:underline">Learn More &rarr;</a>
                    </div>
                </div>
  </div>
</template>


============================================================
FILE: src/views/ProjectsComponents/ProjectsHeader.vue
============================================================
<template>
  <div class="text-center mb-12">
    <span class="inline-block bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
      Our Projects
    </span>
    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
      Transforming Communities
    </h2>
    <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
      We're incredibly proud of the diverse range of programs and initiatives that create real impact across Yemen.
    </p>
  </div>
</template>


============================================================
FILE: src/views/ProjectsComponents/ProjectsSection.vue
============================================================
<!-- src/components/Projects/ProjectsSection.vue -->
<template>
  <section id="projects" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <ProjectsHeader />
      <ProjectsGrid />
      <ProjectsFooter />
    </div>
  </section>
</template>

<script setup>
import ProjectsHeader from './ProjectsHeader.vue'
import ProjectsGrid from './ProjectsGrid.vue'
import ProjectsFooter from './ProjectsFooter.vue'
</script>


============================================================
FILE: src/views/PublicationsComponents/PublicationsGrid.vue
============================================================
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div v-for="pub in publications" :key="pub.title" class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
      <img :src="pub.img" :alt="pub.title" class="w-full h-48 object-contain mb-6 rounded-lg" />
      <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">{{ pub.title }}</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">{{ pub.description }}</p>
      <div class="flex justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <span class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">{{ pub.type }}</span>
        <span class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">{{ pub.year }}</span>
      </div>
      <a :href="pub.link" class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300" target="_blank" rel="noopener">
        Download PDF
      </a>
    </div>
  </div>
</template>

<script setup>
const publications = [
  {
    title: 'The Missing Track',
    description: 'Yemeni Youth Engagement in the First Track of Peacebuilding Process',
    type: 'Policy Brief',
    year: '2023',
    img: '/photos/TheMissingTrack.jpg',  
    link: '#',
  },
  {
    title: 'Policy Brief',
    description: 'The Roles of Youth and Women-led Civil Society in the Three Peace Tracks',
    type: 'Policy Brief',
    year: '2023',
    img: '/photos/TheRole.jpg',
    link: '#',
  },
  {
    title: 'Peace Journalism Manual',
    description: 'A comprehensive guide to peace journalism practices and methodologies',
    type: 'Manual',
    year: '2022',
    img: '/photos/Manual.jpg',
    link: '#',
  },
]
</script>

============================================================
FILE: src/views/PublicationsComponents/PublicationsHeader.vue
============================================================
<template>
  <div class="text-center mb-12">
    <span class="inline-block bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
      Our Publications
    </span>
    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
      Research & Insights
    </h2>
    <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
      Contributing to sustainable development through research, studies, and policy recommendations.
    </p>
  </div>
</template>


============================================================
FILE: src/views/PublicationsComponents/PublicationsSection.vue
============================================================
<!-- src/components/Publications/PublicationsSection.vue -->
<template>
  <section id="publications" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <PublicationsHeader />
      <PublicationsGrid />
    </div>
  </section>
</template>

<script setup>
import PublicationsHeader from './PublicationsHeader.vue'
import PublicationsGrid from './PublicationsGrid.vue'
</script>


============================================================
FILE: src/views/AboutSection.vue
============================================================
<template>
  <section id="about" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <span class="inline-block bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">About Us</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Sheba Youth Foundation for Development</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
          Sheba Youth Foundation for Development is a civil society organization led by youth and women who work in a team spirit to empower youth and women to actively participate in development and peace building in Yemen with a real vision of a stable society in which youth and women enjoy peace, development and sustainable coexistence.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Vision Box -->
        <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h3 class="text-2xl font-bold mb-4 flex items-center text-gray-800 dark:text-white">
            <font-awesome-icon icon="eye" class="text-cyan-500 mr-3" />
            Vision
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            A stable Society in which Youth and Women, enjoy development, peace and coexistence
          </p>
        </div>

        <!-- Mission Box -->
        <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h3 class="text-2xl font-bold mb-4 flex items-center text-gray-800 dark:text-white">
            <font-awesome-icon icon="bullseye" class="text-orange-500 mr-3" />
            Mission
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Working in a team spirit to empower youth and women to participate actively in development and peace building in Yemen.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

============================================================
FILE: src/views/HeroSection.vue
============================================================
<template>
    <section id="home" class="relative h-screen flex items-center justify-center text-white text-center">
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-orange-500 opacity-90"></div>
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <div class="relative z-10 p-4">
            <h1 class="text-4xl md:text-6xl font-extrabold mb-4">Redesigning a Real Non-Profit Organization's Landing Page</h1>
            <p class="text-lg md:text-xl mb-8 max-w-3xl mx-auto">A simplified and modern approach to enhance user experience and visual appeal.</p>
            <a href="#projects" class="bg-orange-500 hover:bg-transparent border-2 border-orange-500 text-white hover:text-orange-500 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1">Discover Our Projects</a>
        </div>
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div class="w-6 h-6 border-b-2 border-r-2 border-white transform rotate-45 animate-bounce"></div>
        </div>
    </section>
</template>



============================================================
FILE: src/views/Home.vue
============================================================
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



============================================================
FILE: src/views/Logo.vue
============================================================
<template>
  <router-link to="/" class="flex items-center space-x-2">
    <img
      src="/photos/sheba-logo.png"
      alt="Sheba Youth Foundation"
      v-bind="$attrs"
    />
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
  inheritAttrs: false
}
</script>


============================================================
FILE: src/views/Toast.vue
============================================================
<template>
  <transition name="fade">
    <div v-if="visible" class="toast">
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      visible: false,
      timeoutId: null,
    };
  },
  methods: {
    showToast(msg) {
      this.message = msg;
      this.visible = true;
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.visible = false;
      }, 3000);
    },
    welcomeUser() {
      const userName = localStorage.getItem('userName');
      if (userName) {
        this.showToast(`Welcome back, ${userName}!`);
      }
    }
  },
  mounted() {
    this.welcomeUser();
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  z-index: 1000;
  opacity: 1;
  transition: opacity 0.5s ease;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

============================================================
FILE: src/App.vue
============================================================
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

============================================================
FILE: src/main.js
============================================================
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import HeaderComponent from './views/HeaderComponents/HeaderComponent.vue'
import FooterComponent from './views/FooterComponents/FooterComponent.vue'
import ThemeToggle from './views/HeaderComponents/ThemeToggle.vue'
import router from './router/index.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons' 

library.add(fas)  

const app = createApp(App)

app.component('HeaderComponent', HeaderComponent)
app.component('FooterComponent', FooterComponent)
app.component('ThemeToggle', ThemeToggle)


app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router).mount('#app')


============================================================
FILE: jsconfig.json
============================================================
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}



============================================================
FILE: package.json
============================================================
{
  "name": "vue-project",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "engines": {
    "node": "^20.19.0 || >=22.12.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^7.0.0",
    "@fortawesome/free-brands-svg-icons": "^7.0.0",
    "@fortawesome/free-solid-svg-icons": "^7.0.0",
    "@fortawesome/vue-fontawesome": "^3.1.1",
    "@tailwindcss/vite": "^4.1.11",
    "vue": "^3.5.18",
    "vue-router": "^4.5.1"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^6.0.1",
    "vite": "^7.0.6",
    "vite-plugin-vue-devtools": "^8.0.0"
  }
}


============================================================
FILE: README.md
============================================================
# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


============================================================
FILE: vite.config.js
============================================================
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})