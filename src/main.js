import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router/router';

new Vue({
  router,
  store, // Asegúrate de agregar el store en la instancia de Vue
  render: h => h(App)
}).$mount('#app');
