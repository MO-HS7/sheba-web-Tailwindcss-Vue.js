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
