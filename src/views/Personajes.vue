<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div>
      <h1 style="padding-bottom: 50px">Lista de Personajes</h1>
      <CardsPersonajes />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import CardsPersonajes from "../components/CardsPersonajes.vue";

export default {
  components: {
    Navbar,
    CardsPersonajes,
  },
};
</script>

<style scoped></style>
