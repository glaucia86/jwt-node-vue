import Vue from 'vue';
import Vuelidate from 'vuelidate';

import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
