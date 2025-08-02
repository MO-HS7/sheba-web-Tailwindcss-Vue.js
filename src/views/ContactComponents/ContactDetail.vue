<template>
  <div class="flex items-start space-x-4 mb-6">
    <font-awesome-icon :icon="icon" class="text-2xl text-cyan-400 mt-1" />
    <div>
      <h4 class="font-semibold">{{ title }}</h4>
      <p class="text-gray-400 dark:text-gray-500" v-html="text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactDetail',
  props: {
    icon: {
      type: Array, 
      required: true,
    },
    title: { type: String, required: true },
    text: { type: String, required: true },
  },
};
</script>