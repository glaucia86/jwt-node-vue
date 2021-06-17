<template>
  <div id="app">
    <!-- INÍCIO NAVBAR -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a class="navbar-brand order-md-last">JWT + Node + Mongo + Vue</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
      </ul>
    </nav>
    <!-- FIM NAVBAR -->

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
