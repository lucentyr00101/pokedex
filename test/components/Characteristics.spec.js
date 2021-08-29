import { shallowMount } from '@vue/test-utils'
import Characteristics from '@/components/characteristics'

describe('Evolution.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Characteristics, {
      stubs: ['b-card']
    })
    expect(wrapper).toBeTruthy()
  })
  test('contains Characteristics Header', () => {
    const wrapper = shallowMount(Characteristics, {
      stubs: ['b-card']
    })
    expect(wrapper.text()).toContain('Characteristics')
  })
})
