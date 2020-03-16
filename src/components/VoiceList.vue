<template>
  <div>
    <div class="flex flex-wrap">
      <Voice
        class="mx-8 my-4"
        v-for="voice in voices"
        :key="voice.id"
        :name="voice.name"
        :icon="voice.icon"
      ></Voice>
    </div>
  </div>
</template>

<script>
import Voice from './Voice.vue'
import voices from '@/assets/voices.json'

export default {
  components: {
    Voice
  },

  setup() {
    return {
      voices
    }
  }
}
</script>

<style lang="scss" scoped></style>
