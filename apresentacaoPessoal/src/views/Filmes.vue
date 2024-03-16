<script setup>
import { ref } from 'vue'

const filmes = ref([
  {
    nome: 'Haikyuu',
    src: '../src/assets/haikyuu.jpg'
  },
  {
    nome: 'Blue Lock',
    src: '../src/assets/bluelock.jpg'
  },
  {
    nome: 'One Piece',
    src: '../src/assets/onepiece.jpg'
  },
  {
    nome: 'Spy x Family',
    src: '../src/assets/spyxfamily.jpg'
  },
  {
    nome: 'Class of the Elite',
    src: '../src/assets/classoftheelite.jpg'
  }
])
</script>

<template>
  <body class="row text-bg-dark pt-5">
    <main class="col-md-4 p-4 pt-0 mt-md-0 mt-3" v-for="filme in filmes" :key="filme">
      <h5 class="text-center py-4">{{ filme.nome }}</h5>
      <img :src="filme.src" :alt="`Imagem ${filme.nome}`" class="img-fluid" />
    </main>
  </body>
</template>

<style scoped>
* {
  margin: 0;
}

body {
  min-height: 94vh;
}
</style>
