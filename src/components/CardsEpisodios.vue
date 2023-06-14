<template>
  <div style="background-color: ">
    <div class="styleTitulos">
      <div style="width: 30%">
        <div class="search-container">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Buscar episodio"
            class="search-input"
          />
          <button class="search-button" @click="buscarEpisodios">
            <i class="bi bi-search remove-background"></i>
          </button>
        </div>
      </div>
      <h1 class="titulo">{{leng[idioma].lista_episodios }}</h1>
      <div style="width: 30%">
        <v-btn style="margin-left: 20px" @click="createEpisode">
          {{leng[idioma].añadir_episodios }}
        </v-btn>
      </div>
    </div>

    <v-row>
      <v-col v-for="episode in filteredEpisodes" :key="episode.id" cols="2">
        <v-card style="border: 1px solid black">
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
import { mapState, mapActions } from 'vuex';
import leng from '../idiomas/index.json';

export default {
  data() {
    return {
      searchQuery: "",
      leng,
    };
  },
  computed: {
    ...mapGetters(["getEpisodes", "getEpisodeById"]),
    ...mapState(['idioma']),

    filteredEpisodes() {
      if (this.searchQuery) {
        return this.getEpisodes.filter((episode) =>
          episode.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        return this.getEpisodes;
      }
    },
  },
  created() {
    this.$store.dispatch("fetchEpisodes");
  },
  methods: {
    ...mapActions([ 'CambiarIdioma']),
    goToHome() {
      this.$router.push("/");
    },
    buscarEpisodios() {
      // Realizar la búsqueda de episodios aquí
      console.log("Realizando búsqueda de episodios...");
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

.titulo {
  width: 30%;
  font-family: Comic Sans MS;
  font-weight:bold;
  font-size: 50px;
  color: #EBD758;
  text-shadow: -1px 0 #414D68, 0 1px #414D68, 1px 0 #414D68, 0 -1px #414D68, -2px 2px 0 #414D68, 2px 2px 0 #414D68, 1px 1px #414D68, 2px 2px #414D68, 3px 3px #414D68, 4px 4px #414D68, 5px 5px #414D68, 6px 6px #414D68, 7px 7px #414D68, 8px 8px #414D68, 9px 9px #414D68;
}
</style>
