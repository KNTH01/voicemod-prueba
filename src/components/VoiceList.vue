<template>
  <div>
    <div class="flex flex-wrap" v-if="voices.length > 0">
      <Voice
        class="mx-8 my-4"
        v-for="voice in voices"
        :key="voice.id"
        :id="voice.id"
        :name="voice.name"
        :icon="voice.icon"
        :isSelected="isSelected(voice.id)"
        :isFavourite="isFavourite(voice.id)"
        @toggleFavourite="toggleFavourite"
        @toggleSelection="toggleSelection"
      ></Voice>
    </div>
    <p v-else>
      No voices...
    </p>
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
    const isSelected = (voiceId) => {
      return state.selectedVoiceId === voiceId
    }

    const isFavourite = (voiceId) => {
      return state.favouriteVoiceIds.includes(voiceId)
    }

    const toggleFavourite = (voiceId) => {
      mutations.toggleFavouriteVoice(voiceId)
    }

    const toggleSelection = (voiceId) => {
      mutations.selectVoice(voiceId)
    }

    return {
      isSelected,
      isFavourite,
      toggleFavourite,
      toggleSelection
    }
  }
}
</script>

<style lang="scss" scoped></style>
