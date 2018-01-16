var router = new VueRouter([
  routes: [
    {
      path: '/top',
      component: {
        template: '<div>top page</div>'
      }
    },
    {
      path: '/users',
      component: {
        tempolate: '<div>user page list</div>'
      }
    }
    {
      path: '/user/:userId',
      component: {
        template: '<div>{{ $route.params.userId }}</div>'
      }
    }
  ]
])

var app = new Vue([
  router: router
]).$mount('#app')

var router = new VueRouter({
  routers: [
    {
      path: '/user/:userId',
      name: 'user',
      component: [
        template: '<div>{{ $route.params.userId }}</div>'
      ]
    }
  ]
})

var User = {
  template:
  '<div class"user">' +
  '<h2>{{ $route.params.userId }}</h2>' +
  '<router-link :to="\'/user/\' + $route.params.userId + \'/profile\'">profile page</router-link>' +
  '<router-link :to="\'/user/'  + $route.params.userId + \'/post\'">post page</router-link>'       +
  '<router-view></router-view>' +
  '</div>'
}

var UserProfile = {
  template:
    '<div class="user-profile">' +
    '<h3>{{ $route.params.userId }}</h3>' +
    '</div>'
}

var router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User,
      children: [
        {
	  path: 'profile',
	  component: UserProfile
	},
	{
	  path: 'posts',
	  component: UserPosts
	}
      ]
    }
  ]
})

var router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' },
    { path: '/b', component : B },
    { path: '/notfound', component: NotFound },
    { path: '*', redirect: '/notfound' }
  ]
})

var router = new VueRouter({
  routes: [
    { path: '/a', component: A, alias: '/b' }
    { path: '/c', component: C, alias: ['/d', '/e']}
  ]
})

var router = new VueRouter({
  mode: 'history',
  routes: [...]
})

//api
var getUsers = function(callback){
  setTimeout(function(){
    callback(null, [
      {
        id: '001',
	name: 'taka'
      },
      {
        id: '002',
	name: 'takashi'
      }
    ])
  }, 1000)
}

var UserList = [
  template: '#user-list',
  data: function(){
    return {
      loading: false,
      users: function(){ return [] },
      error: null
    }
  },

  created: function(){
    this.fetchData()
  },

  watch: {
    '$route': 'fetchData'
  },

  methos: {
    fetchData: function(){
      this.loading = true
      getUsers((function(err, users){
        this.loading = false
	if(err){
	  this.error = err.toString()
	}else{
	  this.users = users
	}
      }).bind(this))
    }
  }
]

var router = new VueRouter({
  routes: [
    {
      path: '/top',
      component: [
        template: '<div>top page</div>'
      ]
    },
    {
      path: '/users',
      component: UserList
    }
  ]
})

var app = new Vue([
  router: router
]).$mount('#app')

//global
router.beforeEach((to, from, next) => {
  if(to.path === '/users'){
    next('/top')
  } else {
    next()
  }
})

var router = new VueRouter({
  routes: [
    {
      path: '/users',
      component: UserList, 
      beforeEnter: (to, from, next) => {
        if(to.query.redirect === 'true'){
	  next('/top')
	}else{
	  next()
	}
      }
    }
  ]
})

//component
var UserList = {
  template: '#user-list',

  data: function(){
    return[
      users: function(){ return[] },
      error: null
    ]
  },

beforeRouteEnter: function(to, from, next){
  getUsers((function(err, users){
    if(err){
      this.error = err.toString()
    }else{
      next(function(vm){
        vm.users = users
      })
    }
  }).bind(this))
}
}

//spa
var Ayth = {
  login: function(email, pass, cb){
    setTimeout(function(){
      if(email === 'vue@example.com' && pass === 'vue'){
        localStorage.token = Math.random().toStrong(36).substring(7)
	if(cb){ cb(true) }
      }else{
        if(cb){ cb(false) }
      }
    }, 0)
  },

  logout: function(){
    delete localStorage.token
  },

  loggedIn: function(){
    return !!localStorage.token
  }
}

var router = new VueRouter({
  routes: [
    {
      path: '/top',
      component: {
        template: '<div>top page</div>'
      }
    },
    {
      path: '/users',
      component: UserList
    },
    {
      path: '/users/:id',
      component: UserDetail,
      beforeEnter: function(to, form, next){
        if(!Auth.loggedIn()){
	  next({
	    path: '/login',
	    query: { redirect: to.gullPath }
	  })
	}else{
	  next()
	}
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: 'logout',
      beforeEnter: function(to, form, next){
        Auth.logout()
	next('/')
      }
    }
  ]
})





