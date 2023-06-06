<template>
  <div class="app">
    <main class="content">
      <div>
        <Navbar />
      </div>
      <div>
        <CardsEpisodios />
      </div>
    </main>
    <Footer class="footer"/>
  </div>
</template>

<script>
import CardsEpisodios from "../components/CardsEpisodios.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    CardsEpisodios,
    Navbar,
  },
};
</script>

<style scoped>
  .app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

.footer {
  flex-shrink: 0;
}
</style>
