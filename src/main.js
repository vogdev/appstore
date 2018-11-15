import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './../node_modules/bulma/css/bulma.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/js/jquery.min.js';
import './assets/js/owl.carousel.min.js';
import './assets/css/styles.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
