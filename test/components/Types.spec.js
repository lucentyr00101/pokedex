import { shallowMount } from '@vue/test-utils'
import Types from '@/components/types'

describe('Types.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Types, {
      stubs: ['b-card'],
      propsData: {
        types: {
          double_damage: ['fire', 'water']
        }
      }
    })
    expect(wrapper).toBeTruthy()
  })

  test('snake case to sentence case working properly', () => {
    const wrapper = shallowMount(Types, {
      stubs: ['b-card'],
      propsData: {
        types: {
          double_damage: ['fire', 'water']
        }
      }
    })
    expect(wrapper.vm.snakeToSentence('double_damage')).toContain('Double Damage')
  })
})
