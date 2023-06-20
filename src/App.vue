<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

function logJSONData() {
  console.time('timer')
  fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
    console.timeEnd('timer')
    counter.load(res);
    console.timeEnd('timer')
  })
  
}
</script>

<template>
  <main>
    hello world
    <br>
    <button @click="logJSONData">fetch data</button>
    <br>
    <div>
      {{ counter.data }}
    </div>
  </main>
</template>
