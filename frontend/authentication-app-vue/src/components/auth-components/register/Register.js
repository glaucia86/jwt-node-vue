/**
 * file: src/components/auth-components/register/Register.js
 * data: 11/03/2021
 * description: arquivo responsável pela lógica do componente
 *  'Register.vue'
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import swal from 'sweetalert';
import { minLength, required } from 'vuelidate/lib/validators';
import RegisterService from '@/services/RegisterService';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      registerForm: {
        name: null,
        email: null,
        password: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    registerForm: {
      name: { required },
      email: { required },
      password: { required, minLength: minLength(6) },
    },
  },
  methods: {
    registerSubmitUserForm() {},

    async submitRegisterUser() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa incluir todos os campos obrigatórios',
            icon: 'error',
          });
          return;
        }

        await RegisterService.registerNewUser(this.registerForm);
        this.$router.push('/');
      } catch (error) {
        swal({
          title: 'Oops!',
          text: 'Alguma coisa deu errado aqui!',
          icon: 'error',
        });
      }
    },
  },
};
