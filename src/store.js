import { reactive } from 'vue'

export const state = reactive({
  selectedVoiceId: null,
  favouriteVoiceIds: []
})

export const mutations = {
  selectVoice(voiceId) {
    state.selectedVoiceId = state.selectedVoiceId === voiceId ? null : voiceId
  },

  addFavouriteVoice(voiceId) {
    state.favouriteVoiceIds.push(voiceId)
  },

  removeFavouriteVoice(voiceId) {
    const index = state.favouriteVoiceIds.findIndex((id) => id === voiceId)

    if (index > -1) {
      state.favouriteVoiceIds.splice(index, 1)
    }
  },

  toggleFavouriteVoice(voiceId) {
    if (state.favouriteVoiceIds.includes(voiceId)) {
      this.removeFavouriteVoice(voiceId)
    } else {
      this.addFavouriteVoice(voiceId)
    }
  }
}
