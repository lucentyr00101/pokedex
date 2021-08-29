import { shallowMount } from '@vue/test-utils'
import Index from '@/pages/index'

describe('Index.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Index)
    expect(wrapper).toBeTruthy()
  })
})
