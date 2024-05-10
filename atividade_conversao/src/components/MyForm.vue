<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useMoedas, usePesos } from "@/composables/Conversoes.js";

const route = useRoute();

const valor = ref(0);

async function conversoes() {
  if (route.name == "Pesos") {
    const { gramas, quilates, libras, miligramas } = usePesos(valor.value);

    alert(
      `Gramas: ${gramas}\nQuilates: ${quilates}\nLibras: ${libras}\nMiligramas: ${miligramas}`
    );
  } else {
    const { brlusd, usdbrl, brleur, eurbrl } = await useMoedas(valor.value);

    alert(
      `BRL-USD: ${brlusd}\nUSD-BRL: ${usdbrl}\nBRL-EUR: ${brleur}\nEUR-BRL: ${eurbrl}`
    );
  }
}
</script>

<template>
  <section>
    <form @submit.prevent="conversoes" class="d-flex flex-column h-100 gap-5">
      <div class="text-center">
        <label for="valor" class="me-4 form-label">Valor</label>
        <input
          type="number"
          id="valor"
          class="form-control w-auto d-inline"
          v-model="valor"
        />
      </div>
      <div class="text-center">
        <button class="btn btn-primary">Consultar</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
form {
  justify-content: center;
}
</style>
