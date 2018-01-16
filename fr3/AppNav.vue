<template>
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


