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