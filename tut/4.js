Vue.componetnt('tag-list', {
  props: ['item'],
  template: '<li></li>'
})

var app = new Vue({
  el: '#app',
  data: {
    tagList: [
      { tag: '5kbae'},
      { tag: 'Based on Logistics'},
      { tag: 'Image management' }
    ]
  }
})

