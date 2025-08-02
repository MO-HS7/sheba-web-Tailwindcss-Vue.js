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