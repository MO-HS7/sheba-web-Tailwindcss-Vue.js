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
