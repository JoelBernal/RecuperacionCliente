<template>
  <div id="app">
    <router-view>
      <v-content></v-content>
    </router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  created() {
    this.$store.dispatch('fetchCharacters');
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}
</style>
