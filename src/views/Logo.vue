<template>
  <router-link to="/" class="flex items-center space-x-2">
    <img
      src="/photos/sheba-logo.png"
      alt="Sheba Youth Foundation"
      v-bind="$attrs"
    />
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
  inheritAttrs: false
}
</script>
