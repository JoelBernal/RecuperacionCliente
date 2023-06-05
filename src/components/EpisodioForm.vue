<template>
    <div class="form-container">
      <h2 class="form-title">Añadir nuevo Episodio</h2>
  
      <form @submit.prevent="createEpisode" class="form">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input v-model="form.name" type="text" id="name" required>
        </div>
  
        <div class="form-group">
          <label for="type">Tipo</label>
          <input v-model="form.type" type="text" id="type" required>
        </div>
  
        <div class="form-group">
          <label for="dimension">Dimensión</label>
          <input v-model="form.dimension" type="text" id="dimension" required>
        </div>
  
        <!-- Agrega más campos según tus necesidades -->
  
        <button type="submit" class="submit-button">Crear</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          type: '',
          dimension: ''
          // Agrega más campos según tus necesidades
        }
      };
    },
    methods: {
      createEpisode() {
        this.$store.dispatch('postEpisodes', this.form)
          .then(() => {
            // Resetear el formulario después de crear el episodio
            this.form = {
              name: '',
              type: '',
              dimension: ''
              // Agrega más campos según tus necesidades
            };
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
  }
  
  .form-title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="text"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .submit-button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  </style>
  