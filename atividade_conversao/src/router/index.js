import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/moedas",
    },
    {
      path: "/moedas",
      name: "Moedas",
    },
    {
      path: "/pesos",
      name: "Pesos",
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.name.toUpperCase();

  next();
});

export default router;
