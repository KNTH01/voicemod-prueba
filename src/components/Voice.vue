<template>
  <div
    class="relative text-center cursor-pointer voice"
    @click="$emit('toggleSelection', id)"
  >
    <p
      @click="$emit('toggleFavourite', id)"
      class="absolute invisible w-6 h-6 bg-gray-100 rounded-full voice-favourite-container"
    >
      <img
        v-if="!isFavourite"
        class="voice-favourite"
        src="@/assets/voice-favourite-off.svg"
        alt="not favourite voice"
      />
      <img
        v-else
        class="voice-favourite"
        src="@/assets/voice-favourite.svg"
        alt="favourite voice"
      />
    </p>
    <img
      :class="{ 'bg-blue-500': isSelected }"
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
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    isSelected: {
      type: Boolean,
      default: false
    },
    isFavourite: {
      type: Boolean,
      default: false
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
