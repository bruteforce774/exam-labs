<script setup lang="ts">
import { useCounterStore } from './stores/counterStore'
import CounterView from './components/CounterView.vue'
const counterStore = useCounterStore()
</script>

<template>
  <div>
    <CounterView
      :count="counterStore.count"
      :doubleCount="counterStore.doubleCount"
      @increment="counterStore.increment()"
      @decrement="counterStore.decrement()"
    />
  </div>
</template>

<style>
</style>
