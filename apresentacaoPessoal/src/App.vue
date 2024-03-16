<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <body class="text-bg-dark">
    <Header />
    <RouterView class="main" />
  </body>
</template>
