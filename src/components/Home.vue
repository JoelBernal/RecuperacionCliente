<template>
    <div class="home-view">
      <h1 class="title">RICK AND MORTY</h1>
      <div class="button-container">
        <v-btn large color="primary" dark @click="goToCharacters">Personajes</v-btn>
        <v-btn large color="secondary" dark @click="goToEpisodes">Episodios</v-btn>
        <v-btn large color="accent" dark @click="goToLocations">Localizaciones</v-btn>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToCharacters() {
        this.$router.push('/personajes');
      },
      goToEpisodes() {
        this.$router.push('/episodios');
      },
      goToLocations() {
        this.$router.push('/localizaciones');
      },
    },
  };
  </script>
  
  <style scoped>
  .home-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #6ea6eb;
  }
  
  .title {
    font-size: 36px;
    margin-bottom: 30px;
  }
  
  .button-container {
    margin-top: 20px;
  }
  
  .v-btn {
    margin: 10px;
    font-size: 18px;
    padding: 15px 30px;
  }
  </style>
  