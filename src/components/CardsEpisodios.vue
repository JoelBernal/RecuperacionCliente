<template>
  <div>
    <v-btn class="home-button" icon color="black" fab large @click="goToHome">
      <i class="bi bi-list" style="font-size: 40px"></i>
    </v-btn>

    <div>
      <v-btn class="create-button" small color="primary" @click="createCharacter"
        >Añadir personaje</v-btn
      >
    </div>

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
    createEpisode() {
      this.$router.push("/episodeForm");
      this.$store.dispatch("createCharacter", {
        /* datos del nuevo episodio */
      });
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

.create-button {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}
</style>
