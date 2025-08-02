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
