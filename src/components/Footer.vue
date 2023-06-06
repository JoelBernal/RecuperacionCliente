<template>
  <footer class="footer">
    <div class="container">
      <p>
        Datos proporcionados por la API de Rick and Morty
        <br />
        <a :href="apiLink" target="_blank">https://rickandmortyapi.com/</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    apiLink() {
      return 'https://rickandmortyapi.com/';
    },
  },
}
</script>

<style scoped>
.footer {
  background-color: #f2f2f2;
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  color: #555;
  background-color: #47bafd;
  margin-top: 40px;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  
}

a {
  color: #555;
}
</style>

