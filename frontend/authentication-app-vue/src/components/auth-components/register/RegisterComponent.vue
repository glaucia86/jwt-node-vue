<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top: 70px; height: auto; padding-top: 100px !important"
          v-on:submit.prevent="registerSubmitUserForm()"
        >
          <!--INÍCIO BLOCO: Nome-->
          <div class="form-group">
            <input
              type="text"
              id="name"
              name="name"
              class="form-control mb-5"
              placeholder="Inclua seu Nome"
              v-model="registerForm.name"
              :class="{
                'is-invalid': isSubmitted && $v.registerForm.name.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.registerForm.name.required"
              class="invalid-feedback"
            >
              O campo nome é obrigatório!
            </div>
          </div>
          <!--FIM BLOCO: Nome-->

          <!--INÍCIO BLOCO: E-mail-->
          <div class="form-group">
            <input
              type="email"
              id="email"
              name="email"
              class="form-control mb-5"
              placeholder="Inclua seu E-mail"
              v-model="registerForm.email"
              :class="{
                'is-invalid': isSubmitted && $v.registerForm.email.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.registerForm.email.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.registerForm.email.required"
                >O campo e-mail é obrigatório!</span
              >
              <span v-if="!$v.registerForm.email.email">E-mail inválido!</span>
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
              placeholder="Inclua a Senha"
              v-model="registerForm.password"
              :class="{
                'is-invalid': isSubmitted && $v.registerForm.password.$error,
              }"
            />
            <div
              v-if="isSubmitted && $v.registerForm.password.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.registerForm.password.required"
                >O campo senha é obrigatório!</span
              >
              <span v-if="!$v.registerForm.password.minLength"
                >A senha deve conter pelo menos 6 caracteres!</span
              >
            </div>
          </div>
          <!--FIM BLOCO: Password-->
          <p class="center">
            Já possui um login cadastrado?<router-link to="/">
              Faça o Login Aqui</router-link
            >
          </p>
          <!--INÍCIO BLOCO: Botão-->
          <center>
            <button
              @click="submitRegisterUser"
              class="btn btn-primary btn-block w-75 my-4"
            >
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
