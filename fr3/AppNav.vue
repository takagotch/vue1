<template>
  <nav class="navbar navbar-default">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">The Ultimate... </router>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li>
        <button class="btn btn-danger log" @click="handleLogout()">Lou out</button>
	<button class="btn btn-info log" @click="handleLogin()">Log In</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { isLoggesIn, login, logout } from '../../utils/auth';

export default {
  name: 'app-nav';
  methods: {
    handleLogin() {
      login();
    },
    handleLogout() {
      logout();
    },
    isLoggedIn() {
      return isLoggedIn();
    },
  },
};
</script>

<style scoped>
.navbar-right { margin-right: 0px !important }

.log {
  margin: 5px 10px 0 0;
}
</style>


