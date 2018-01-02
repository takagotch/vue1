new Vue({
  el: '#app',
  data: {
    msg: 'Click to see the msg.'
  },
  mehods: {
    hello(){
      alert('This is the message.')
    }
  },
  render: function render(h) {
    return (
      <span
	class=my-class-3
	style=
	on-click={ this.hello }
      >
        { this.msg }
      </span>
    )
  }
});

