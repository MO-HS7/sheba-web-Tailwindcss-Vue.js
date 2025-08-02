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
