<template>
  <div>
    <div class="styleTitulos">
      <div style="width: 30%">
        <div class="search-container">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Buscar personaje"
            class="search-input"
          />
          <button class="search-button" @click="buscarPersonajes">
            <i class="bi bi-search remove-background"></i>
          </button>
        </div>
      </div>

      <h1 style="width: 30%">Lista de Personajes</h1>

      <div style="width: 30%">
        <v-btn style="margin-left: 20px" @click="addCharacter">
          Añadir Personaje
        </v-btn>
      </div>
    </div>

    <v-row>
      <v-col v-for="character in filteredCharacters" :key="character.id" cols="2">
        <v-card style="border: 1px solid black">
          <router-link class="noDecoration" :to="`/character/${character.id}`">
            <v-img :src="character.image" alt="Character Image"></v-img>
            <v-card-title>{{ character.name }}</v-card-title>
            <v-card-text> </v-card-text>
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
      searchQuery: '',
    };
  },

  computed: {
    ...mapGetters(["getCharacters", "getCharacterById"]),
    filteredCharacters() {
      if (this.searchQuery) {
        return this.getCharacters.filter(character =>
          character.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        return this.getCharacters;
      }
    },
  },

  methods: {
    goToHome() {
      this.$router.push("/");
    },
    buscarPersonajes() {
      // Realizar la búsqueda de personajes aquí
      console.log("Realizando búsqueda de personajes...");
    },
    addCharacter() {
      this.$router.push("/characterform");
    },
  },
};
</script>

<style scoped>
.noDecoration {
  text-decoration: none;
  color: black;
}

.styleTitulos {
  display: flex;
  padding: 40px;
  align-items: center;
  justify-content: space-between;
}

.search-container {
  display: flex;
  align-items: center;
}

.search-input {
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 14px;
}

.search-button {
  border: none;
  padding: 5px;
  margin-left: 5px;
  cursor: pointer;
  transform: scaleX(-1);
}

ul {
  list-style-type: none;
}

li {
  margin-bottom: 5px;
}
</style>
