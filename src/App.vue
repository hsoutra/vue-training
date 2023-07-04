<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue';

const counter = useCounterStore()
const color = ref('')
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
    <input type="text" v-model="color">   
    <br>
    <div class="text">
      hello world
    </div>
  </main>
</template>
<style scoped>
.text {
  color: v-bind('color');
}
</style>