<template>
  <div class="text-center cursor-pointer voice">
    <img
      class="inline bg-gray-500 rounded-full"
      :src="require(`@/assets/${icon}`)"
      :alt="name"
    />
    <p class="mt-2 text-sm font-semibold text-gray-500">
      {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.voice:hover img {
  @apply bg-gray-100;
}

.voice:hover p {
  @apply text-gray-100;
}
</style>
