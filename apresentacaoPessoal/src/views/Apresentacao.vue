<script setup>
import { ref } from 'vue'

const textos = ref([
  `Olá, me chamo Kauã Klassmann, tenho 17 anos e sou de Harmonia, RS.`,
  `Entrei no mundo da programação no meu 9°Ano, desenvolvendo versões pararelas do
WhatsApp com XML e uma outra linguagem no qual não lembro qual era. Logo depois tentei
entrar em algo mais sério, resolvi tentar aprender uma linguagem para realizar meus
desejos, então foi ai que com a cabeça de jovem tentei aprender C# para desenvolver na
Unity (o que não durou muito tempo KSKS), mas acabei fazendo uma calculadora que
funcionava de verdade 🤓.`,
  `Apartir da hora que entrei no IFRS, acabei me apaixonando ainda mais por programar,
quando comecei a codar em Python o meu mundo se expandiu, fiquei viciado em olhar uma tela
com letras estranhas KSKS, o Python foi a primeira linguagem no qual realmente aprendi de
verdade e ainda aprendo até hoje, é minha principal linguagem quando se fala em resolver
problemas e desafios no estilo OBI. O Pythonzinho sempre vai ta no meu coração como um dos
responsaveis por me viciar (e o sor Henrique) 🥰.`,
  `O meu 2°Ano no IFRS foi o mais "cansativo", sem dúvidas foi o ano em que mais
estudei, aprendi o famoso Java (que confesso que não gosto). Porém me interessei mais em
outra área que não estava no curriculo do ano, o sor Moser acabou me fazendo amar
programação Web num geral, durante o ano vindo nos contra-turnos eu vi HTML, CSS,
Javascript e Bootstrap. E me expandi também para backend, acabei vendo Postgresql e
nodeJS, juntamente com Express como framework no backend, e durante as férias um
VueJSzinho também para ter um SoftSkill completinho para Full-Stack.`,
  `Atualmente estou focando mais na parte do backend, no qual é a área que estou mais
fraco em comparação com o resto (mas não por muito tempo KSKS) 😁.`
])

const projetos = ref([
  {
    nome: 'EDAS',
    imagem: '../src/assets/edas.jpeg',
    texto:
      'Site para cadastro de provas para organização de alunos do IFRS, feito com VueJs, Bootstrap, NodeJs, Express e Postgresql.',
    site: 'https://edasapp.onrender.com',
    github: [
      {
        nome: 'Front-end',
        site: 'https://github.com/Kaua-Klassmann/edas-frontend'
      },
      {
        nome: 'Back-end',
        site: 'https://github.com/Kaua-Klassmann/edas-backend'
      }
    ]
  },
  {
    nome: 'Wordle',
    imagem: '../src/assets/wordle.jpeg',
    texto: 'Cópia do jogo Wordle, feito com VueJS e Bootstrap.',
    site: 'https://wordle-klassmann.netlify.app',
    github: [
      {
        nome: 'Wordle',
        site: 'https://github.com/Kaua-Klassmann/WordleGame'
      }
    ]
  }
])
</script>

<template>
  <body class="container text-bg-dark mt-4">
    <header class="d-flex flex-md-row flex-column pt-4">
      <div class="col-md-7 order-2 order-md-1 d-grid my-3 mt-md-0">
        <h1>Programador Full-Stack</h1>
      </div>
      <img
        class="col-md-5 order-1 order-md-2 rounded-circle p-4"
        src="../assets/myImg.png"
        alt=""
      />
    </header>
    <main class="py-4">
      <section class="alert alert-info border-3">
        <p v-for="texto in textos" :key="texto" class="text m-0">{{ texto }}</p>
      </section>
      <h2 class="text-center mt-5 mb-3">Principais projetos</h2>
      <div class="row">
        <div class="col-md-6 p-4" v-for="projeto in projetos" :key="projeto">
          <div class="card">
            <img class="card-img-top" :src="projeto.imagem" />
            <div class="card-body">
              <h5 class="card-title">{{ projeto.nome }}</h5>
              <p class="card-text d-flex align-items-center">{{ projeto.texto }}</p>
              <h6>Site para teste:</h6>
              <a :href="projeto.site" class="btn btn-dark mt-1 mb-3 w-100" target="_blank">Site</a>
              <h6>Github:</h6>
              <a
                :href="github.site"
                class="btn btn-dark mt-1 w-100 mb-2"
                target="_blank"
                v-for="github in projeto.github"
                :key="github"
                >{{ github.nome }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<style scoped>
div.d-grid {
  place-items: center;
}

.text::first-letter {
  margin-left: 0.675rem;
}

section > p {
  text-align: justify;
}

.card-text {
  text-align: justify;
  min-height: 5rem;
}
</style>
