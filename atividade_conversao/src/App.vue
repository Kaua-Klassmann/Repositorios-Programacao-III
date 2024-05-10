<script setup>
import Title from "@/components/Title.vue";
import Routes from "@/components/Routes.vue";
import MyForm from "@/components/MyForm.vue";
import MyFooter from "@/components/MyFooter.vue";
</script>

<template>
  <body class="container-fluid text-bg-dark">
    <header>
      <Title />
    </header>
    <main class="row">
      <Routes class="routes col-md-4" />
      <MyForm class="form col-md-8" />
    </main>
    <footer>
      <MyFooter />
    </footer>
  </body>
</template>

<style scoped>
body {
  height: 100vh;
}

header {
  height: 20vh;
}

main {
  height: 65vh;
}

.routes {
  height: 20vh;
}

.form {
  height: 45vh;
}

footer {
  height: 15vh;
}

@media (min-width: 769px) {
  .routes {
    height: 65vh;
  }

  .form {
    height: 65vh;
  }
}
</style>
