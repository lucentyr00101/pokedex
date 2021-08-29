import { shallowMount } from '@vue/test-utils'
import Stats from '@/components/stats'

describe('Stats.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Stats, {
      stubs: ['b-card']
    })
    expect(wrapper).toBeTruthy()
  })

  test('contains Stats header', () => {
    const wrapper = shallowMount(Stats, {
      stubs: ['b-card-text', 'b-card', 'b-card-title', 'b-collapse', 'b-card-body']
    })
    expect(wrapper.text()).toContain('Stats')
  })
})
