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
        <v-icon color="white">mdi-arrow-left</v-icon>
      </v-btn>
  
      <v-row>
        <v-col
          v-for="location in getLocations"
          :key="location.id"
          cols="2"
        >
          <v-card>
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
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['getLocations'])
    },
    created() {
      this.$store.dispatch('fetchLocations');
    },
    methods: {
    goToHome() {
      this.$router.push("/");
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
  </style>
  