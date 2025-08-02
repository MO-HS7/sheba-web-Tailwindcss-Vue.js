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
