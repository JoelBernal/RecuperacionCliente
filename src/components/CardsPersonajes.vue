<template>
  <div>
    <v-btn
      class="home-button"
      icon
      color="black"
      fab
      large
      @click="goToHome"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <v-row>
      <v-col v-for="character in getCharacters" :key="character.id" cols="2">
        <v-card>
          <router-link :to="`/character/${character.id}`">
            <v-img :src="character.image" alt="Character Image"></v-img>
            <v-card-title class="noDecoration">{{
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
}

.home-button {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 9999;
}
</style>














<!-- <template>
  <div>
    <v-btn
      class="home-button"
      icon
      color="black"
      fab
      large
      @click="goToHome"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="searchQuery"
          label="Buscar personaje"
          outlined
          dense
          clearable
          @input="searchCharacters"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="character in filteredCharacters" :key="character.id" cols="2">
        <v-card>
          <router-link :to="`/character/${character.id}`">
            <v-img :src="character.image" alt="Character Image"></v-img>
            <v-card-title class="noDecoration">{{
              character.name
            }}</v-card-title>
            <v-card-text>
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
    filteredCharacters() {
      if (!this.searchQuery) {
        return this.getCharacters;
      }
      const query = this.searchQuery.toLowerCase();
      return this.getCharacters.filter((character) =>
        character.name.toLowerCase().includes(query)
      );
    },
  },

  data() {
    return {
      searchQuery: "",
    };
  },

  methods: {
    goToHome() {
      this.$router.push("/");
    },

    searchCharacters() {
      // No se requiere ninguna acción específica al buscar,
      // ya que la lista de personajes se filtra automáticamente
      // en la propiedad computada "filteredCharacters"
    },
  },
};
</script>

<style scoped>
.noDecoration {
  text-decoration: none;
}

.home-button {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 9999;
}
</style> -->
