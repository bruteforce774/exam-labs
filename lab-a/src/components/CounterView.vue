<script setup lang="ts">
    const props = defineProps<{
        count: number,
        doubleCount: number
    }>()

    const emits = defineEmits<{
        increment: [],
        decrement: []
    }>()
</script>

<template>
  <div>
    count: {{ count }}, doubleCount: {{ doubleCount }}<br />
    <button @click="emits('increment')">Increment</button>
    <button @click="emits('decrement')">Decrement</button>
  </div>
</template>

<style>
</style>