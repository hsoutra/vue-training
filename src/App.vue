<script setup>
import { ref } from "vue";

 const showModal = ref(false)
</script>

<template>
  <header>
    <h1>
      Notes
    </h1>
    <button @click="showModal = true">+</button>
  </header>
  <main>
    {{ showModal ? "show modal" : "hide Modal jhhy" }}
  </main>
</template>
