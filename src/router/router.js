import Vue from "vue";
import VueRouter from 'vue-router';
import Personajes from '../views/Personajes';
import InfoPersonaje from '../views/InfoPersonaje';
import Episodios from '../views/Episodios';
import Localizaciones from '../views/Localizaciones';
import Home from '../views/Home';
import LocationForm from '../views/LocationForm'
import EpisodeForm from '../views/EpisodeForm'
import CharacterForm from '../views/CharacterForm'



Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/personajes",
    name: "personajes",
    component: Personajes,
  },
  {
    path: '/character/:id',
    name: 'infoPersonaje',
    component: InfoPersonaje,
  },
  {
    path: "/episodios",
    name: "episodios",
    component: Episodios,
  },
  {
    path: "/localizaciones",
    name: "localizaciones",
    component: Localizaciones,
  },
  {
    path: "/locationform",
    name: "locationform",
    component: LocationForm,
  },
  {
    path: "/episodeform",
    name: "episodeform",
    component: EpisodeForm,
  },
  {
    path: "/characterform",
    name: "characterform",
    component: CharacterForm,
  },

];

const router = new VueRouter({
  routes
});

export default router;