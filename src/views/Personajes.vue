<template>
  <div>
    <div>
      <Navbar/>
    </div>
    <div>
      <CardsPersonajes/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import CardsPersonajes from "../components/CardsPersonajes.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    CardsPersonajes,
    Footer,
  },
};
</script>

<style scoped>

</style>
