<template>
  <div>
    <div class="flex flex-wrap">
      <Voice
        class="mx-8 my-4"
        v-for="voice in voices"
        :key="voice.id"
        :id="voice.id"
        :name="voice.name"
        :icon="voice.icon"
        :isFavourite="isFavourite(voice.id)"
        @toggleFavourite="toggleFavourite"
      ></Voice>
    </div>
  </div>
</template>

<script>
import Voice from './Voice.vue'
import { state, mutations } from '@/store'

export default {
  components: {
    Voice
  },

  props: {
    voices: {
      type: Array,
      required: true
    }
  },

  setup() {
    const isFavourite = (voiceId) => {
      return state.favouriteVoiceIds.includes(voiceId)
    }

    const toggleFavourite = (voiceId) => {
      mutations.toggleFavouriteVoice(voiceId)
    }

    return {
      isFavourite,
      toggleFavourite
    }
  }
}
</script>

<style lang="scss" scoped></style>
