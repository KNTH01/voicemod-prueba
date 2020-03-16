<template>
  <div id="app">
    <div class="container px-2 mx-auto">
      <h1 class="my-8 text-xl text-center">Voicemod</h1>
      <section class="flex">
        <FilterInputVoice
          @inputChange="filterInput = $event"
        ></FilterInputVoice>
        <div class="flex">
          <FilterSelectVoice @selectInput="filterSelectInput = $event">
          </FilterSelectVoice>
          <SortVoice class="ml-4" @sort="sort = $event"></SortVoice>
          <button
            @click="selectRandomVoice"
            class="ml-4 opacity-75 hover:opacity-100 focus:outline-none"
          >
            <img src="@/assets/button-random.svg" alt="Random" />
          </button>
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
import SortVoice from '@/components/SortVoice.vue'
import VoiceList from '@/components/VoiceList.vue'
import voices from '@/assets/voices.json'
import { state, mutations } from '@/store'
import Fuse from 'fuse.js'

export default {
  name: 'App',
  components: {
    FilterInputVoice,
    FilterSelectVoice,
    SortVoice,
    VoiceList
  },

  setup() {
    const filterInput = ref('')
    const filterSelectInput = ref('All')
    const sort = ref('Default')
    const favouriteVoices = computed(() =>
      voices.filter((voice) => state.favouriteVoiceIds.includes(voice.id))
    )

    const filteredVoices = computed(() => {
      let result =
        filterSelectInput.value === 'All'
          ? voices
          : voices.filter((voice) =>
              voice.tags.includes(filterSelectInput.value)
            )

      if (sort.value !== 'Default') {
        if (sort.value === 'ASC') {
          result = [...result.sort((a, b) => (a.name > b.name ? 1 : -1))]
        } else {
          result = [...result.sort((a, b) => (a.name > b.name ? -1 : 1))]
        }
      }

      if (filterInput.value.trim()) {
        const fuse = new Fuse(result, {
          keys: ['name']
        })

        return fuse.search(filterInput.value).map((elem) => elem.item)
      }

      return result
    })

    const selectRandomVoice = () => {
      const voices = filteredVoices.value
      mutations.selectVoice(
        voices[Math.floor(Math.random() * voices.length)].id
      )
    }

    return {
      filterInput,
      filterSelectInput,
      sort,
      selectRandomVoice,
      favouriteVoices,
      filteredVoices
    }
  }
}
</script>

<style>
body {
  @apply bg-gray-900 text-gray-500;
}
</style>
