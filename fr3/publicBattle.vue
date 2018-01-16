<template>

</template>

<script>
  import AppNav from './AppNav';
  import { isLoggedIn } from '../../utils/auth';
  import { getPublicStartupBattles } from '../../utils/battles-api';

  export default {
    name: 'publicBattle',
    components: {
      AppNav,
    },
    data() {
      return {
        publicBattles: '',
    };
  },
  maehods: {
    isLoggedIn() {
      return isLoggedIn();
    },
    getPublicStartupBattles(){
      getPublicStartupBattles().then((battles) => {
        this.publicBattles = battles;
      });
    },
  },
  mounted() {
    this.getPublicStartupBattles();
  },
};
</script>

<style scioed>
</style>

