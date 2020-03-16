import { reactive } from 'vue'

export const state = reactive({
  selectedVoiceId: null,
  favouriteVoices: []
})

export const mutations = {
  selectVoice(voiceId) {
    state.selectedVoiceId = voiceId
  },

  addFavouriteVoice(voiceId) {
    state.favouriteVoices.push(voiceId)
  },

  removeFavouriteVoice(voiceId) {
    const index = state.favouriteVoices.findIndex((id) => id === voiceId)

    if (index > -1) {
      state.favouriteVoices.splice(index, 1)
    }
  },

  toggleFavouriteVoice(voiceId) {
    if (state.favouriteVoices.includes(voiceId)) {
      this.removeFavouriteVoice(voiceId)
    } else {
      this.addFavouriteVoice(voiceId)
    }
  }
}
