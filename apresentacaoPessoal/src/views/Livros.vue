<script setup>
import { ref } from 'vue'

const livros = ref([
  {
    nome: 'Diário de um Banana 1',
    src: '../src/assets/banana1.webp'
  },
  {
    nome: 'Diário de um Banana 2',
    src: '../src/assets/banana2.webp'
  },
  {
    nome: 'Diário de um Banana 3',
    src: '../src/assets/banana3.webp'
  },
  {
    nome: 'Diário de um Banana 4',
    src: '../src/assets/banana4.webp'
  },
  {
    nome: 'Diário de um Banana 5',
    src: '../src/assets/banana5.webp'
  }
])
</script>

<template>
  <ul class="row text-bg-dark pt-5">
    <li class="col-md-4 px-4 pt-0 mt-md-0 mt-3 d-grid" v-for="livro in livros" :key="livro">
      <h5 class="text-center mb-4">{{ livro.nome }}</h5>
      <img :src="livro.src" :alt="`Imagem ${livro.nome}`" class="img-fluid h-75 mx-3" />
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

li {
  justify-content: center;
}
</style>
