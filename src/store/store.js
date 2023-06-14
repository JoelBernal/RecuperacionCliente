import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    episodes: [],
    locations: [],
    idioma: 'es',
  },
  getters: {
    getCharacters(state) {
      return state.characters;
    },
    getCharacterById: (state) => (id) => {
      return state.characters.find((character) => character.id === id);
    },
    getEpisodes(state) {
      return state.episodes;
    },
    getEpisodeById: (state) => (id) => {
      return state.episodes.find((episode) => episode.id === id);
    },
    getLocations(state) {
      return state.locations;
    },
    getLocationById: (state) => (id) => {
      return state.locations.find((location) => location.id === id);
    },
  },
  actions: {
    //Fetch personajes
    fetchCharacters({ commit }) {
      return axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => {
          commit("SET_CHARACTERS", response.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    //Post personajes
    postCharacters({ commit }) {
      return axios
        .post("https://rickandmortyapi.com/api/character", {
          /* datos del cuerpo de la solicitud */
        })
        .then((response) => {
          commit("SET_CHARACTERS", response.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    //Fetch episodios
    fetchEpisodes({ commit }) {
      return axios
        .get("https://rickandmortyapi.com/api/episode")
        .then((response) => {
          commit("SET_EPISODES", response.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    //Post episodios
    postEpisodes({ commit }) {
      return axios
        .post("https://rickandmortyapi.com/api/episode", {
          // Datos adicionales a enviar en el cuerpo de la solicitud POST (opcional)
        })
        .then((response) => {
          // Manejo de la respuesta exitosa
          commit("SET_EPISODES", response.data.results);
        })
        .catch((error) => {
          // Manejo de errores
          console.error(error);
        });
    },

    //Fetch localicaciones
    fetchLocations({ commit }) {
      return axios
        .get("https://rickandmortyapi.com/api/location")
        .then((response) => {
          commit("SET_LOCATIONS", response.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    //Post localizaciones
    postLocations({ commit }) {
      return axios
        .post("https://rickandmortyapi.com/api/location", {
          // Datos adicionales a enviar en el cuerpo de la solicitud POST (opcional)
        })
        .then((response) => {
          // Manejo de la respuesta exitosa
          commit("SET_LOCATIONS", response.data.results);
        })
        .catch((error) => {
          // Manejo de errores
          console.error(error);
        });
    },

    filterPersonajes(store, name) {
      return this.state.characters.filter((l) =>
        l.name.toLowerCase().includes(name.toLowerCase())
      );
    },

    CambiarIdioma({ commit }, idioma) {
      commit("setIdioma", idioma);
    },

    // filterEpisodes(store, episode) {
    //   return libros.filter((l) => l.categoriaId == episode).length;
    // },
  },
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = characters;
    },
    SET_EPISODES(state, episodes) {
      state.episodes = episodes;
    },
    SET_LOCATIONS(state, locations) {
      state.locations = locations;
    },
    setIdioma(state, idioma) {
      state.idioma = idioma;
    },
  },
});
