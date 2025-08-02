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
