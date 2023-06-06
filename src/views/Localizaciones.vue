<template>
  <div>
    <div>
      <Navbar/>
    </div>
    <div>
      <CardsLocalizaciones/>
    </div>
    <Footer/>
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
