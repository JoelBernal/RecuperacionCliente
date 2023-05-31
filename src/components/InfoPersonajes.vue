<template>
  <div>
    <v-card class="medium-card">
      <v-img :src="character.image" alt="Character Image"></v-img>
      <v-card-title class="medium-card-title">{{ character.name }}</v-card-title>
      <v-card-text class="medium-card-text">
        <div>id: {{ character.id }}</div>
        <div>Status: {{ character.status }}</div>
        <div>gender: {{ character.gender }}</div>
        <!-- <div>origin: {{ character.origin }}</div>
        <div>location: {{ character.location }}</div>
        <div>episode: {{ character.episode }}</div>
        <div>created: {{ character.created }}</div> -->
        <!-- Agrega más atributos del personaje según tus necesidades -->
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      character: {},
    };
  },
  mounted() {
    this.findCharacter();
  },
  computed: {
    ...mapState(["characters"]),
  },
  methods: {
    findCharacter() {
      // Obtén el ID del personaje de la ruta
      const characterId = this.$route.params.id;
      // Llama a una acción en el store para obtener los detalles del personaje por su ID
      this.character = this.characters.find(
        (character) => character.id == characterId
      );
    },
  },
  watch: {
    characters() {
      this.findCharacter();
    },
  },
};
</script>

<style scoped>
.medium-card {
  max-width: 400px;
  margin: auto;
}

.medium-card-title {
  font-size: 20px;
  line-height: 1.2;
}

.medium-card-text {
  font-size: 14px;
  line-height: 1.2;
}
</style>
