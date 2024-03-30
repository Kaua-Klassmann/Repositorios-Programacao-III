<script setup>
import { ref } from 'vue'

const filmes = ref([
  {
    nome: 'Haikyuu',
    src: '../src/assets/haikyuu.webp'
  },
  {
    nome: 'Blue Lock',
    src: '../src/assets/bluelock.webp'
  },
  {
    nome: 'One Piece',
    src: '../src/assets/onepiece.webp'
  },
  {
    nome: 'Spy x Family',
    src: '../src/assets/spyxfamily.webp'
  },
  {
    nome: 'Class of the Elite',
    src: '../src/assets/classoftheelite.webp'
  }
])
</script>

<template>
  <ul class="row text-bg-dark pt-5">
    <li class="col-md-4 p-4 pb-5 pt-0 mt-md-0 mt-3" v-for="filme in filmes" :key="filme">
      <h5 class="text-center pb-4">{{ filme.nome }}</h5>
      <img :src="filme.src" :alt="`Imagem ${filme.nome}`" class="img-fluid" />
    </li>
  </ul>
</template>

<style scoped>
* {
  margin: 0;
}

ul {
  min-height: 94vh;
  list-style: none;
}
</style>
