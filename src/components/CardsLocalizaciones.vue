<template>
  <div>
    <div class="styleTitulos">
      <div style="width: 30%">
        <div class="search-container">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Buscar localización"
            class="search-input"
          />
          <button class="search-button" @click="buscarLocalizaciones">
            <i class="bi bi-search remove-background"></i>
          </button>
        </div>
      </div>
      <h1 class="titulo">{{leng[idioma].lista_localizaciones }}</h1>
      <div style="width: 30%">
        <v-btn style="margin-left: 20px" @click="createLocation">
          {{leng[idioma].añadir_localizaciones }}
        </v-btn>
      </div>
    </div>

    <v-row>
      <v-col v-for="location in filteredLocations" :key="location.id" cols="2">
        <v-card style="border: 1px solid black">
          <v-img :src="location.image" alt="Location Image"></v-img>
          <v-card-title>{{ location.name }}</v-card-title>
          <v-card-text>
            <div>Type: {{ location.type }}</div>
            <div>Dimension: {{ location.dimension }}</div>
            <!-- Agrega más atributos de la localización según tus necesidades -->
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
      leng
    };
  },
  computed: {
    ...mapGetters(["getLocations", "getLocationById"]),
    ...mapState(['idioma']),
    
    filteredLocations() {
      if (this.searchQuery) {
        return this.getLocations.filter((location) =>
          location.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        return this.getLocations;
      }
    },
  },
  created() {
    this.$store.dispatch("fetchLocations");
  },
  methods: {
    ...mapActions([ 'CambiarIdioma']),

    goToHome() {
      this.$router.push("/");
    },
    buscarLocalizaciones() {
      // Realizar la búsqueda de localizaciones aquí
      console.log("Realizando búsqueda de localizaciones...");
    },
    createLocation() {
      this.$router.push("/locationForm");
      this.$store.dispatch("createLocation", {
        /* datos de la nueva localización */
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
