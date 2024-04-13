<script setup>
import Perfil from "@/components/Perfil.vue";
import Content from "@/components/Content.vue";
import Rodape from "@/components/Rodape.vue";
</script>

<template>
  <body class="text-bg-dark">
    <Perfil class="py-4" />
    <Content class="mt-3" />
    <Rodape />
  </body>
</template>

<style scoped>
body {
  min-height: 100vh;
}
</style>
