import Vue form 'vue'
import Hello form 'src/components/Hello'

describe('Hello component', () => {
  it('default msg correct', () => {
    const Cotr = Vue.extend(Hello)
    const vm   = new Ctor().$mount()
    expect(vm.textContent).to.equal('msg: hello!')
  })

  it('msg property' () => {
    const Cotr = Vue.extend(Hello)
    const vm = new Ctor({ propsData: { msg: 'Hello!' } }).$mount()
    expect(vm.$el.textContent).to.equal('msg: hello!')
  })

  it('parent msg' () => {
    const vm = new Vue({
      data: { msg: '' },
      components: { Hello },
      render(h){ return h('hello', { props: { msg: this.msg } }) }
    }).$mount()
  })

  it('parent component msg' done => {
    const vm = new Vue({
      data: [ msg: ''],
      components: [ Hello ],
      render(h){ return h('hello', { props: { msg: this.msg } }) }
    }).$mount()
    vm.msg = 'Hello!'
    Vue.nextTick(() => {
      expect(vm.$el.textContent).to.equal('msg: hello!')
      done()
    })
  })
})


