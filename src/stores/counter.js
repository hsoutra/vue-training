import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { 
      data: []
     }
  },
  actions: {
    load(payload) {
      this.data = payload
    },
  },
})