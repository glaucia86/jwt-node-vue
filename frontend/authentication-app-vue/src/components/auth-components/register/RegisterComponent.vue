<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          v-on:submit.prevent="registerSubmitUserForm()"
        >
        <!--INÍCIO BLOCO: Nome-->
        <input
          type="text"
          id="name"
          name="name"
          class="form-control mb-5"
          placeholder="Inclua seu Nome"
          v-model="registerForm.name"
        />
        <!--FIM BLOCO: Nome-->

        <!--INÍCIO BLOCO: E-mail-->
        <input
          type="text"
          id="email"
          name="email"
          class="form-control mb-5"
          placeholder="Inclua seu E-mail"
          v-model="registerForm.email"
        />
        <!--FIM BLOCO: E-mail-->

        <!--INÍCIO BLOCO: Password-->
        <input
          type="text"
          id="password"
          name="password"
          class="form-control mb-5"
          placeholder="Inclua a Senha"
          v-model="registerForm.password"
        />
        <!--FIM BLOCO: Password-->
        <p class="center">
          Já possui um login cadastrado?<router-link to="/"> Faça o Login Aqui</router-link>
        </p>
        <!--INÍCIO BLOCO: Botão-->
        <center>
          <button @click="submitRegisterUser" class="btn btn-primary btn-block w-75 my-4">
            Cadastrar
          </button>
        </center>
        <!--FIM BLOCO: Botão-->
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./Register.js"></script>

<style src="" scoped></style>
