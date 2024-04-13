<template>
  <main class="mx-3 mx-md-5">
    <section class="border border-white row rounded-2">
      <div v-for="id in 9" :key="id" class="col-md-4 p-3">
        <img
          src="../assets/perfil.webp"
          alt="Foto do Perfil"
          class="img-fluid"
        />
      </div>
    </section>
  </main>
</template>
