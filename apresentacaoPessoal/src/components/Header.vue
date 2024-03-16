<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="navbar navbar-expand">
    <RouterLink to="/" class="nav-link p-3">Quem sou eu?</RouterLink>
    <RouterLink to="livros" class="nav-link p-3">Livros</RouterLink>
    <RouterLink to="filmes" class="nav-link p-3">Filmes</RouterLink>
    <RouterLink to="musicas" class="nav-link p-3">Músicas</RouterLink>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap');

header {
  height: 6vh;
  font-family: 'Madimi one';
}
</style>
