<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-items>
      <v-btn text to="/personajes">Personajes</v-btn>
      <v-btn text to="/episodios">Episodios</v-btn>
      <v-btn text to="/localizaciones">Localizaciones</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
</style>
