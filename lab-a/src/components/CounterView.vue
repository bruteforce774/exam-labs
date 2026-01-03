<script lang="ts">
    const props = defineProps<{
        count: number
    }>()

    const emits = defineEmits<{
        increment: [],
        decrement: []
    }>()
</script>

<template>
  <div>
    count: {{ count }}<br />
    <button @click="emits('increment')">Increment</button>
    <button @click="emits('decrement')">Decrement</button>
  </div>
</template>

<style>
</style>