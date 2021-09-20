/**
 * file: src/components/auth-components/home/Home.js
 * data: 19/06/2021
 * description: arquivo responsável pela lógica do componente
 *  'Home.vue'
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'HomeComponent',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUser() {
      const token = localStorage.getItem('jwt');
      const tokenDecoded = VueJwtDecode.decode(token);
      this.user = tokenDecoded;
    },
    logOutUser() {
      localStorage.removeItem('jwt');
      this.$router.push('/');
    },
  },
  created() {
    this.getUser();
  },
};
