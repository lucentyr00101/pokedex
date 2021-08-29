import { shallowMount } from '@vue/test-utils'
import Item from '@/components/item'

describe('Item.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Item, {
      stubs: ['b-card-text', 'b-card', 'b-card-title'],
      propsData: {
        details: {
          id: 1
        }
      }
    })
    expect(wrapper).toBeTruthy()
  })

  test('contains ID #:', () => {
    const wrapper = shallowMount(Item, {
      stubs: ['b-card-text', 'b-card', 'b-card-title'],
      propsData: {
        details: {
          id: 1
        }
      }
    })
    expect(wrapper.text()).toContain('ID #: 1')
  })

  test('pokemonImage computed property returns a link of an image', () => {
    const wrapper = shallowMount(Item, {
      stubs: ['b-card-text', 'b-card', 'b-card-title'],
      propsData: {
        details: {
          id: 1
        }
      }
    })
    expect(wrapper.vm.pokemonImage).toContain('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')
  })
})
