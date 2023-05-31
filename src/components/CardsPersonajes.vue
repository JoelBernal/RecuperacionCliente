<template>
  <div>
    <v-btn class="home-button" icon color="black" fab large @click="goToHome">
      <i class="bi bi-list" style="font-size: 40px"></i>
    </v-btn>

    <v-row>
      <v-col v-for="character in getCharacters" :key="character.id" cols="2">
        <v-card>
          <router-link class="noDecoration" :to="`/character/${character.id}`">
            <v-img :src="character.image" alt="Character Image"></v-img>
            <v-card-title>{{
              character.name
            }}</v-card-title>
            <v-card-text>
              <!-- <div>Species: {{ character.species }}</div>
              <div>Status: {{ character.status }}</div> -->
              <!-- Agrega más atributos del personaje según tus necesidades -->
            </v-card-text>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCharacters"]),
  },

  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.noDecoration {
  text-decoration: none;
  color: black;
}

.home-button {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 9999;
}
</style>
