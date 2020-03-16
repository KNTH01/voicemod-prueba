<template>
  <div id="app">
    <div class="container px-2 mx-auto">
      <h1 class="my-8 text-xl text-center">Voicemod</h1>
      <section class="my-8">
        <header class="flex items-center my-4">
          <h1 class="font-semibold tracking-tighter uppercase ">
            Favourite voices
          </h1>
          <div class="flex-grow h-0 ml-8 border-t-2 border-gray-800"></div>
        </header>
        <VoiceList :voices="favouriteVoices"></VoiceList>
      </section>

      <section class="my-8">
        <header class="flex items-center my-4">
          <h1 class="font-semibold tracking-tighter uppercase ">
            Pro voices
          </h1>
          <div class="flex-grow h-0 ml-8 border-t-2 border-gray-800"></div>
        </header>
        <VoiceList :voices="voices"></VoiceList>
      </section>
    </div>
  </div>
</template>

<script>
import VoiceList from '@/components/VoiceList.vue'
import voices from '@/assets/voices.json'
import { state } from '@/store'
import { computed } from 'vue'

export default {
  name: 'App',
  components: { VoiceList },

  setup() {
    const favouriteVoices = computed(() =>
      voices.filter((voice) => state.favouriteVoices.includes(voice.id))
    )

    return { voices, favouriteVoices }
  }
}
</script>

<style>
body {
  @apply bg-gray-900 text-gray-500;
}
</style>
