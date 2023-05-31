<template>
  <div>
    <Navbar></Navbar>
    <h1 style="padding-bottom: 50px">Lista de Localizaciones</h1>
    <CardsLocalizaciones />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import CardsLocalizaciones from "../components/CardsLocalizaciones.vue";

export default {
  components: {
    Navbar,
    CardsLocalizaciones,
  },
};
</script>

<style scoped></style>
