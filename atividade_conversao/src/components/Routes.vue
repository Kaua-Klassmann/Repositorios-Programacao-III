<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="d-flex flex-column gap-5">
    <RouterLink to="/moedas" class="nav-link">
      <p>MOEDAS</p>
    </RouterLink>
    <RouterLink to="/pesos" class="nav-link">
      <p>PESOS</p>
    </RouterLink>
  </nav>
</template>

<style scoped>
nav {
  justify-content: center;
  align-items: center;
  font-size: larger;
  text-decoration: underline;
}
</style>
