<template>
  <div class="relative inline-block w-64">
    <select
      v-model="selectInput"
      @input="onSelectInput($event)"
      class="block w-full px-4 py-2 pr-8 bg-black rounded shadow appearance-none select focus:outline-none"
    >
      <option>All</option>
      <option :key="option" v-for="option in options">{{ option }}</option>
    </select>
    <div
      class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
    >
      <img src="@/assets/select-arrow.svg" />
    </div>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue'
import voices from '@/assets/voices.json'

export default {
  setup(props, { emit }) {
    const selectInput = ref('All')
    const options = []

    voices.map((voice) => {
      options.push(...voice.tags)
    })

    const onSelectInput = async () => {
      await nextTick()
      emit('selectInput', selectInput.value)
    }

    return {
      selectInput,
      options: [...new Set(options)],
      onSelectInput
    }
  }
}
</script>

<style scoped></style>
