<template>
  <form @submit.prevent="handleSubmit" id="contact-form" class="space-y-6">
    <input v-model="name" type="text" placeholder="Name" required id="name" 
      class="w-full bg-white/20 dark:bg-gray-700 border-2 border-transparent focus:border-cyan-400 text-white placeholder-gray-400 p-3 rounded-lg outline-none transition" />
    <input v-model="email" type="email" placeholder="Email" required id="email"
      class="w-full bg-white/20 dark:bg-gray-700 border-2 border-transparent focus:border-cyan-400 text-white placeholder-gray-400 p-3 rounded-lg outline-none transition" />
    <input v-model="subject" type="text" placeholder="Subject" required id="subject"
      class="w-full bg-white/20 dark:bg-gray-700 border-2 border-transparent focus:border-cyan-400 text-white placeholder-gray-400 p-3 rounded-lg outline-none transition" />
    <textarea v-model="message" placeholder="Message" rows="5" required
      class="w-full bg-white/20 dark:bg-gray-700 border-2 border-transparent focus:border-cyan-400 text-white placeholder-gray-400 p-3 rounded-lg outline-none transition"></textarea>
    <button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
      Send Message
    </button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },
  methods: {
    validateForm() {
      let isValid = true;
      const fields = ['name', 'email', 'subject', 'message'];

      fields.forEach(field => {
        if (!this[field].trim()) {
          isValid = false;
        }
      });
      return isValid;
    },
    handleSubmit() {
      if (!this.validateForm()) {
        this.$emit('toast', 'Please fill in all required fields.');
        return;
      }

      localStorage.setItem('userName', this.name);
      this.$emit('toast', 'Thank you! Your message has been sent.');
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    }
  }
};
</script>