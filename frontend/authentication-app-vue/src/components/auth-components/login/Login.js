/**
 * file: src/components/auth-components/login/Login.js
 * data: 11/03/2021
 * description: arquivo responsável pela lógica do componente 'Login.vue'
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import { required } from 'vuelidate/lib/validators';

export default {
  name: 'LoginComponent',
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
      isSubmitted: false,
    };
  },
  validations: {
    loginForm: {
      email: { required },
      password: { required },
    },
  },
  methods: {
    loginSubmitUserForm() {
      this.isSubmitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      alert('SUCCESS!' + JSON.stringify(this.loginForm));
    },

    async submitLoginUser() {
    },
  },
};
