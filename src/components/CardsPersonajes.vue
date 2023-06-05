<template>
  <div>
    <v-btn class="home-button" icon color="black" fab large @click="goToHome">
      <i class="bi bi-list" style="font-size: 40px"></i>
    </v-btn>

    <v-btn class="create-button" small color="primary" @click="addCharacter"
      >Añadir personaje</v-btn
    >

    <v-text-field
      v-model="searchQuery"
      label="Buscar Personajes"
      filled
      solo
      dense
      append-icon="mdi-magnify"
      class="search-bar"
      @keyup.enter="buscarPersonajes"
    ></v-text-field>

    <v-row>
      <v-col v-for="character in getCharacters" :key="character.id" cols="2">
        <v-card>
          <router-link class="noDecoration" :to="`/character/${character.id}`">
            <v-img :src="character.image" alt="Character Image"></v-img>
            <v-card-title>{{ character.name }}</v-card-title>
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
  data() {
    return {
      personajesCards: [],
    };
  },

  computed: {
    ...mapGetters(["getCharacters"]),
  },

  methods: {
    goToHome() {
      this.$router.push("/");
    },
    async buscarPersonajes() {
      this.personajesCards = await this.filterPersonajes(this.searchQuery);
      console.log(this.personajesCards);
    },
    addCharacter() {
      this.$router.push("/characterform");
    },
  },

  mounted() {
    this.buscarPersonajes();
  },
  watch: {
    personaje() {
      this.buscarPersonajes();
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

.create-button {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}
</style>
