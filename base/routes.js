var router = new VueRouter({
  routes: [
    {
      path: '/top',
      component: {
        template: '<div>toppage</div>'
      }
    },
    {
      path: '/users',
	    component: {
	      template: '<div>usr lists</div>'
	    }
      path: '/user/:userId',
      component: {
        template: '<div>your_user_id: {{ $route.params.userId }}</div>'
      }
    }
  ]
})

var app = new Vue({
  router: router
}).$mount('#app')

