<template>
  <div id="app">
    <div class="container px-2 mx-auto">
      <h1 class="my-8 text-xl text-center">Voicemod</h1>
      <section class="flex">
        <FilterInputVoice
          @inputChange="filterInput = $event"
        ></FilterInputVoice>
        <div>
          <FilterSelectVoice
            @selectInput="filterSelectInput = $event"
          ></FilterSelectVoice>
        </div>
      </section>
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
        <VoiceList :voices="filteredVoices"></VoiceList>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import FilterInputVoice from '@/components/FilterInputVoice.vue'
import FilterSelectVoice from '@/components/FilterSelectVoice.vue'
import VoiceList from '@/components/VoiceList.vue'
import voices from '@/assets/voices.json'
import { state } from '@/store'
import Fuse from 'fuse.js'

export default {
  name: 'App',
  components: {
    FilterInputVoice,
    FilterSelectVoice,
    VoiceList
  },

  setup() {
    const filterInput = ref('')
    const filterSelectInput = ref('All')
    const favouriteVoices = computed(() =>
      voices.filter((voice) => state.favouriteVoiceIds.includes(voice.id))
    )

    const filteredVoices = computed(() => {
      const result =
        filterSelectInput.value === 'All'
          ? voices
          : voices.filter((voice) =>
              voice.tags.includes(filterSelectInput.value)
            )

      if (filterInput.value.trim()) {
        const fuse = new Fuse(result, {
          keys: ['name']
        })

        return fuse.search(filterInput.value).map((elem) => elem.item)
      }

      return result
    })

    return { filterInput, filterSelectInput, favouriteVoices, filteredVoices }
  }
}
</script>

<style>
body {
  @apply bg-gray-900 text-gray-500;
}
</style>
