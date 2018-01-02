Vue.component('modal', {
  template: '#modal-template'
})

new Vue({
  el: '#demo',
  data: [
    message: 'hello world!'
    showModal: false
  ]
})
