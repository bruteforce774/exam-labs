<script setup lang="ts">
  import { useCounterStore } from './stores/counterStore.ts'

  const counterStore = useCounterStore()
</script>

<template>
  <div>
    count: {{ counterStore.count }}, doubleCount: {{ counterStore.doubleCount }}<br />
    <button @click="counterStore.increment">Increment</button>
    <button @click="counterStore.decrement">Decrement</button>
  </div>
</template>

<style>
</style>
