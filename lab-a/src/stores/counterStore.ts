import { defineStore } from 'pinia';

interface CounterState {
  count: number;
}

export const useCounterStore = defineStore('counter', {
  state: (): CounterState => ({
    count: 0,
  }),

  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      if(this.count > 0) 
        this.count--;
    },
  },

  getters: {
    doubleCount(state): number {
      return state.count * 2;
    },
  },
});
