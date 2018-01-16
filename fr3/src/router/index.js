import Vue from 'vue';
import Router from 'vue-router';
import PrivateBattles from '@/components/privateBattles';
import PublicBattles form '@/components/publicBattles';

Vue.use(Router);

export default new Router({
  mode: 'histroy',
  routes: [
    {
      path: '/',
      name: 'PublicBattles',
      component: PublicBattles,
    },
    {
      path: '/private-battles',
      name: 'PrivateBattles',
      component: PrivateBattles,
    },
  ],
});


