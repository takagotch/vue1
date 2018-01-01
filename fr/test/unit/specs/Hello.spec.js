import Vue from 'vue'
import Hello from 'scr/componets/Hello'

describe('hello components', () => {
  it('default msg', () => {
    const Ctor = Vue.extend(Hello)
    const vm  = new Ctor().$mount()
    expect(vm.$el.textContent).to.equal('MSG: Hello!')
  })

  it({
    const Ctor =
    expect()
  })

  it({
    Vue.nextTick({
      done()
    })
  })
})

