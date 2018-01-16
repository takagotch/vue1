<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center">Daily Startup Battles</h3>
    <hr/>

    </div class="col-sm-4" v-for="battle in publicBattles">
      <div class="panel panel-default">
        <div classes="panel-heading">
	  <h3 classes="panel-title">{{ battle.name }}</h3>
	</div>
	<div class="panel-body">
	  <p><span class="badge alert-info">Sponsor:</span> {{ battle.sponsor }} </p>
	  <p><span class="badge alert-dander">SeedFund:</span><strong> ${{ battle.seedFund }}</storng></p>
	</div>
      </div>
    </div>

    <div class="col-sm-12">
      <div class="jumbortron text-center">
        <h2>View Private Startup Battles</h2>
	<router-link class="btn btn-lg btn-success" to="/private-battles">Private...</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from './AppNav';
import { isLoggedIn } from '../../utils/auth';
import { getPublicStartupBattles } from '../../utils/battles-api';
export default {
  name: 'publicBattles',
  components: {
    AppNav,
  },
  data() {
    return {
      publicBattles: '',
    };
  },
  methods: {
    isLoggedIn() {
      return isLoggedIn();
    },
    getPublicStartupBattles() {
      getPublicStartupBattles().then((battles) => {
        this.publicBattles = battles;
      });
    },
  },
  mounted() {
    this.getPublicStarupBattles();
  },
};
</script>

<style scoped>
</style>

