import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Apresentação Pessoal',
      component: () => import('../views/Apresentacao.vue')
    },
    {
      path: '/livros',
      name: 'Livros Favoritos',
      component: () => import('../views/Livros.vue')
    },
    {
      path: '/Filmes',
      name: 'Filmes Favoritos',
      component: () => import('../views/Filmes.vue')
    },
    {
      path: '/musicas',
      name: 'Músicas Favoritas',
      component: () => import('../views/Musicas.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
})

export default router
