<template>
  <div>
    <Navbar></Navbar>
    <h1 style="padding-bottom: 50px">Lista de Localizaciones</h1>
    <CardsLocalizaciones />
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import CardsLocalizaciones from "../components/CardsLocalizaciones.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    CardsLocalizaciones,
    Footer,
  },
};
</script>

<style scoped></style>
