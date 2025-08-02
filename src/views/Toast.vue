<template>
  <transition name="fade">
    <div v-if="visible" class="toast">
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      visible: false,
      timeoutId: null,
    };
  },
  methods: {
    showToast(msg) {
      this.message = msg;
      this.visible = true;
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.visible = false;
      }, 3000);
    },
    welcomeUser() {
      const userName = localStorage.getItem('userName');
      if (userName) {
        this.showToast(`Welcome back, ${userName}!`);
      }
    }
  },
  mounted() {
    this.welcomeUser();
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  z-index: 1000;
  opacity: 1;
  transition: opacity 0.5s ease;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>