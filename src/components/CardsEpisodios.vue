<template>
  <div>
    <v-btn class="home-button" icon color="black" fab large @click="goToHome">
      <i class="bi bi-list" style="font-size: 40px"></i>
    </v-btn>

    <v-row>
      <v-col v-for="episode in getEpisodes" :key="episode.id" cols="2">
        <v-card>
          <v-card-title>{{ episode.name }}</v-card-title>
          <v-card-text>
            <div>Episode: {{ episode.episode }}</div>
            <div>Air Date: {{ episode.air_date }}</div>
            <!-- Agrega más atributos del episodio según tus necesidades -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getEpisodes"]),
  },
  created() {
    this.$store.dispatch("fetchEpisodes");
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.home-button {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 9999;
}

.v-btn.home-button .v-btn__content {
  background-color: black;
}

.v-btn.home-button .v-icon {
  color: white;
}
</style>
