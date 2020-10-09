import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('add function changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('subtract function changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('multiply function changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('divide function changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('clear function zeroes running total without affecting the calcuation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 10
    wrapper.vm.runningTotal = 5
    wrapper.vm.clearClick();
    expect(wrapper.vm.previousTotal).to.equal(10)
    expect(wrapper.vm.runningTotal).to.equal(0)
  })

  it('concatenates multiple number button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(5)
    wrapper.vm.numberClick(4)
    wrapper.vm.numberClick(3)
    wrapper.vm.numberClick(2)
    wrapper.vm.numberClick(1)
    expect(wrapper.vm.runningTotal).to.equal(54321)
  })



})
