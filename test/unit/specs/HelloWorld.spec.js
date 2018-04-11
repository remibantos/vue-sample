import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import { shallow } from '@vue/test-utils'
import bButton from 'bootstrap-vue/es/components/button/button'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {

    const wrapper = shallow(HelloWorld, {stubs: [bButton]})
    console.log(wrapper.html())
    const vm = wrapper.vm
    expect(vm.$el.querySelector('.hello button').textContent)
      .toEqual('Hello Button')
  })
})
