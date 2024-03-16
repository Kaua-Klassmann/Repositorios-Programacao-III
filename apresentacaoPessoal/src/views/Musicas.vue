<script setup>
import { ref } from 'vue'

const videos = ref([
  {
    nome: 'Kawe - Querido Diário',
    src: 'https://www.youtube.com/embed/PG5iZs6BHg4?si=wh5Ny_p0-L0zQwSl'
  },
  {
    nome: 'Meckys - Minha Missão',
    src: 'https://www.youtube.com/embed/uYsGUQaplB0?si=TE5NFBsSL0EwbiMd'
  },
  {
    nome: 'Nikki - Autoestima',
    src: 'https://www.youtube.com/embed/vbP5n0jjBxs?si=33G23XSVzBk3-urV'
  },
  {
    nome: 'Markin - Quinta Marcha',
    src: 'https://www.youtube.com/embed/5NLDYn1aAhY?si=jppy0qJ_SclU8HFX'
  },
  {
    nome: 'Nikki - Dependência Emocional',
    src: 'https://www.youtube.com/embed/kvsqA-yyD6E?si=n2khq-Oo1GLfDTaJ'
  }
])
</script>

<template>
  <body class="row text-bg-dark pt-5">
    <main class="col-md-4 p-4 pb-5 pt-0 mt-md-0 mt-3" v-for="video in videos" :key="video">
      <h5 class="text-center pb-4">{{ video.nome }}</h5>
      <iframe
        class="w-100"
        :src="video.src"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
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

iframe {
  height: 85%;
}

@media (min-width: 769px) {
  iframe {
    height: 60%;
  }
}
</style>
