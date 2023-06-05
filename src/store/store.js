import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    episodes: [],
    locations: []
  },
  getters: {
    getCharacters(state) {
      return state.characters;
    },
    getCharacterById: (state) => (id) => {
      return state.characters.find(character => character.id === id);
    },
    getEpisodes(state) {
      return state.episodes;
    },
    getEpisodeById: (state) => (id) => {
      return state.episodes.find(episode => episode.id === id);
    },
    getLocations(state) {
      return state.locations;
    },
    getLocationById: (state) => (id) => {
      return state.locations.find(location => location.id === id);
    }
  },
  actions: {

    //Fetch personajes
    fetchCharacters({ commit }) {
      return axios
        .get('https://rickandmortyapi.com/api/character')
        .then(response => {
          commit('SET_CHARACTERS', response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    },

    //Fetch episodios
    fetchEpisodes({ commit }) {
      return axios
        .get('https://rickandmortyapi.com/api/episode')
        .then(response => {
          commit('SET_EPISODES', response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    },

    //Fetch localicaciones
    fetchLocations({ commit }) {
      return axios
        .get('https://rickandmortyapi.com/api/location')
        .then(response => {
          commit('SET_LOCATIONS', response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    },

    filterPersonajes(store, name) {
      return this.state.characters.filter(l => l.name.toLowerCase().includes(name.toLowerCase()));
    },
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
    }
  }
});
