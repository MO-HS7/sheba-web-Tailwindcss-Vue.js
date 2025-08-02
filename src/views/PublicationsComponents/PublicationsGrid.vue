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
    img: '/public/photos/MissingTrack.jpg',  
    link: '#',
  },
  {
    title: 'Policy Brief',
    description: 'The Roles of Youth and Women-led Civil Society in the Three Peace Tracks',
    type: 'Policy Brief',
    year: '2023',
    img: '/public/photos/TheRole.jpg',
    link: '#',
  },
  {
    title: 'Peace Journalism Manual',
    description: 'A comprehensive guide to peace journalism practices and methodologies',
    type: 'Manual',
    year: '2022',
    img: '/public/photos/Manual.jpg',
    link: '#',
  },
]
</script>