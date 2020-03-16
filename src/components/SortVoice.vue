<template>
  <div class="flex">
    <img src="@/assets/order.svg" />
    <div class="relative inline-block w-64 ml-2">
      <select
        v-model="sort"
        @input="onSort($event)"
        class="block w-full px-4 py-2 pr-8 bg-black rounded shadow appearance-none select focus:outline-none"
      >
        <option>Default</option>
        <option>ASC</option>
        <option>DESC</option>
      </select>
      <div
        class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
      >
        <img src="@/assets/select-arrow.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue'

export default {
  setup(props, { emit }) {
    const sort = ref('Default')

    const onSort = async () => {
      await nextTick()
      emit('sort', sort.value)
    }

    return {
      sort,
      onSort
    }
  }
}
</script>

<style scoped>
select {
  -webkit-appearance: none;
}
</style>
