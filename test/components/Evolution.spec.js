import { shallowMount } from '@vue/test-utils'
import Evolution from '@/components/evolution'

describe('Evolution.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Evolution, {
      stubs: ['b-row']
    })
    expect(wrapper).toBeTruthy()
  })

  test('contains Evolution Chain header', () => {
    const wrapper = shallowMount(Evolution, {
      stubs: ['b-row']
    })
    expect(wrapper.text()).toContain('Evolution Chain')
  })
})
