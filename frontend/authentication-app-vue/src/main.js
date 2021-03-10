import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.use(VueSweetalert2);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
