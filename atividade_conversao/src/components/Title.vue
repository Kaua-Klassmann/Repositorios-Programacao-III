<script setup>
import { useRoute } from "vue-router";
</script>

<template>
  <header class="d-grid">{{ useRoute().name }}</header>
</template>

<style scoped>
header {
  place-items: center;
  font-size: 50px;
}
</style>
