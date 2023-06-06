<template>
  <nav>
    <ul class="navbar-links">
      <v-btn class="home-button" icon color="black" fab large @click="goToHome">
        <i class="bi bi-list" style="font-size: 40px"></i>
      </v-btn>
      <li>
        <router-link to="/personajes" class="nav-link">Personajes</router-link>
      </li>
      <li>
        <router-link to="/episodios" class="nav-link">Episodios</router-link>
      </li>
      <li>
        <router-link to="/localizaciones" class="nav-link"
          >Localizaciones</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
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
};
</script>

<style scoped>
/* Estilos CSS para la navbar con botones */
nav {
  background-color: #47bafd;
}

.navbar-links {
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  margin: 0;
}

.navbar-links li {
  margin-right: 10px;
  font-size: 30px;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 30px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #555;
}


/* .nav-link.router-link-exact-active {
  background-color: #555;
} */
</style>
