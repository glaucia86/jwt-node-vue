<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top: 70px; height: auto; padding-top: 100px !important"
          v-on:submit.prevent="loginSubmitUserForm()"
        >
          <!--INÍCIO BLOCO: E-mail-->
          <div class="form-group">
            <input
              type="text"
              id="email"
              name="email"
              class="form-control mb-5"
              placeholder="Digite seu E-mail"
              v-model="loginForm.email"
              :class="{
                'is-invalid': isSubmitted && $v.loginForm.email.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.loginForm.email.required"
              class="invalid-feedback"
            >
              O campo e-mail é obrigatório!
            </div>
          </div>
          <!--FIM BLOCO: E-mail-->

          <!--INÍCIO BLOCO: Password-->
          <div class="form-group">
            <input
              type="password"
              id="password"
              name="password"
              class="form-control mb-5"
              placeholder="Digite sua Senha"
              v-model="loginForm.password"
              :class="{
                'is-invalid': isSubmitted && $v.loginForm.password.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.loginForm.password.required"
              class="invalid-feedback"
            >
              O campo password é obrigatório!
            </div>
          </div>
          <!--FIM BLOCO: Password-->
          <p class="center">
            Não tem uma conta cadastrada?<router-link to="/register">
              Cadastre Aqui</router-link
            >
          </p>
          <!--INÍCIO BLOCO: Botão-->
          <center>
            <button
              @click="submitLoginUser"
              class="btn btn-primary btn-block w-75 my-4"
            >
              Entrar
            </button>
          </center>
          <!--FIM BLOCO: Botão-->
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./Login.js"></script>

<style src="" scoped></style>
