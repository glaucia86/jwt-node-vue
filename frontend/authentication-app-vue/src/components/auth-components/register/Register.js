/**
 * file: src/components/auth-components/register/Register.js
 * data: 11/03/2021
 * description: arquivo responsável pela lógica do componente
 *  'Register.vue'
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import { required } from 'vuelidate/lib/validators';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      registerForm: {
        name: '',
        email: '',
        password: '',
      },
      isSubmitted: false,
    };
  },
  validations: {
    registerForm: {
      name: { required },
      email: { required },
      password: { required },
    },
  },
  methods: {
    registerSubmitUserForm() {
      this.isSubmitted = true;

      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      alert('SUCCESS!' + JSON.stringify(this.registerForm));
    },

    async submitRegisterUser() {
    },
  },
};
