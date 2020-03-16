<template>
  <div class="relative text-center cursor-pointer voice">
    <p
      class="absolute invisible w-6 h-6 bg-gray-100 rounded-full voice-favourite-container"
    >
      <img
        class="voice-favourite"
        src="@/assets/voice-favourite-off.svg"
        alt="favourite voice"
      />
    </p>
    <img
      class="inline bg-gray-500 rounded-full voiceImg"
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
.voice:hover img.voiceImg {
  @apply bg-gray-100;
}

.voice:hover p {
  @apply text-gray-100;
}

.voice:hover .voice-favourite-container {
  @apply visible;
}

.voice-favourite-container {
  right: 0.25rem;
}

.voice-favourite {
  padding-left: 5px;
  padding-top: 6px;
}
</style>
