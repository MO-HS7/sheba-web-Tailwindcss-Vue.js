<template>
  <section id="contact" class="py-20 bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-100">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm @toast="showToast" />
      </div>
    </div>
  </section>
</template>

<script>
import ContactInfo from './ContactInfo.vue';
import ContactForm from './ContactForm.vue';

export default {
  name: 'ContactSection',
  components: { ContactInfo, ContactForm },
  methods: {
    showToast(message) {

      const toast = document.createElement('div');
      toast.textContent = message;
      toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.7);
        color: white;
        padding: 10px 20px;
        border-radius: 25px;
        font-size: 0.9rem;
        z-index: 1000;
        opacity: 1;
        transition: opacity 0.5s ease;
      `;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
      }, 3000);
    }
  }
};
</script>