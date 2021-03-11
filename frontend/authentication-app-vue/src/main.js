import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
