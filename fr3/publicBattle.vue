<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center">Daily...</h3>
    <hr/>

    <div class="col-sm-4" v-for="battle in publicBattles">
      <div class="panel panel-default">
        <div class="panel-heading">
	  <h3 class="panel-title">{{ battle.name }}</h3>
	</div>
	<div class="panel-body">
	  <p><span class="badge alert-info">Sponsor: </span> {{ battle.sponsor }}</p>
	  <p><span class="badge alert-danger'>SeedFund: </span><strong>${{ battle.seedFind }}</strong></p>
	</div>
      </div>
    </div>

    <div class="col-sm-12">
      <div class="jumbotron text-center">
        <h2>View ...</h2>
	<router-link class="btn btn-lg btn-success" to="/private-battles">Private...</routes-link>
      </div>
    </div>
  </div>
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

