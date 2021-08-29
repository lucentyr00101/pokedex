import { shallowMount } from '@vue/test-utils'
import Moves from '@/components/moves'

describe('Moves.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Moves, {
      stubs: ['b-card-text', 'b-card', 'b-card-title', 'b-collapse', 'b-card-body']
    })
    expect(wrapper).toBeTruthy()
  })

  test('contains Moves header', () => {
    const wrapper = shallowMount(Moves, {
      stubs: ['b-card-text', 'b-card', 'b-card-title', 'b-collapse', 'b-card-body']
    })
    expect(wrapper.text()).toContain('Moves')
  })
})
