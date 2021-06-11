/**
 * file: src/components/auth-components/login/Login.js
 * data: 11/03/2021
 * description: arquivo responsável pela lógica do componente 'Login.vue'
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import swal from 'sweetalert';
import { required } from 'vuelidate/lib/validators';
import LoginService from '@/services/LoginService';

export default {
  name: 'LoginComponent',
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
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
    loginSubmitUserForm() {},

    async submitLoginUser() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa incluir todos os campos obrigatórios!',
            icon: 'error',
          });
          return;
        }

        await LoginService.loginUser(this.loginForm);
        this.$router.push('/home');
      } catch (error) {
        swal({
          title: 'Senha Incorreta!',
          text: 'Digite a senha cadastrada!',
          icon: 'error',
        });
      }
    },
  },
};
