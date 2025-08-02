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