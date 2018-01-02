new Vue ({
  el: '#board',
  data: {
    tasks: [
      { name: 'tsk1', status: 1, assignee: 'A', mandays: 3 }
      { name: 'tsk2', status: 1, assignee: 'B', mandays: 2 }
      { name: 'tsk3', status: 2, assignee: 'C', mandays: 1 }
      { name: 'tsk4', status: 3, assignee: 'D', mandays: 1 }
    ],
    newTskName: '',
    newTskAssignee: null,
    newTskMandays: 0
  },
  computed: {
    tsksOpen: function () {
      return filters.open(this.tsks)
    },
  tsksDoing: function () {
    return filters.doing(this.tsks)
  },
  tsksClosed: function () {
    return filters.closed(this.tsks)
  }
  },
  methods: {
    addTsk () {
      this.tsk.push({ name: this.newTskName, status: 1, assignee: this.newTskAssingnee, mandayas: this.newTskMandays })
    }
  }
})

var filters = {
  open: function (tsk) {
  return tsk.filter(function (tsk) {
    return tsk.status === 1
  })
  },
  doing: function (tsk) {
  return tsks.filter(function(tsk) {
    return tsk.status === 2
  })
  }
}

Vue,component('tsk-card', {
  props: ['tsk'],
  template: `<div class="card">
	  <div class="card-content">
	    {{ tsk.name }}
	  </div>
	  <footer class="card-footer">
	    <div class="card-footer-item">
	      {{ tsk.assignee }}
	    </div>
	    <div class="card-footer-item">
	      {{ tsk.mandays }}mandays
	    </div>
	  </footer>
	  <footer class="card-footer">
 	    <a class="card-footer-item" v-on:click="decrementStatus(tsk)">left</a>
	    <a class="card-footer-item" v-on:click="incrementStatus(tsk)">right</a>
  	  </footer>
	</div>`,
  methods: {
    incrementStatus: function (tsk){
      if(1 <= tsk.status && tsk.status <= 2) {
        tsk.status++
      }
    },
	  decrementStatus: function (tsk) {
	    if(2 <= tsk.status && tsk.status <= 3){
	      tsk.status--
	    }
	  }
  }
})

