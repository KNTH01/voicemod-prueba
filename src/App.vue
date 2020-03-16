<template>
  <div id="app">
    <div class="container px-2 mx-auto">
      <h1 class="my-8 text-xl text-center">Voicemod</h1>
      <section>
        <VoiceList></VoiceList>
      </section>
    </div>
  </div>
</template>

<script>
import VoiceList from '@/components/VoiceList.vue'

export default {
  name: 'App',
  components: { VoiceList }
}
</script>

<style>
body {
  @apply bg-gray-900 text-gray-100;
}
</style>
