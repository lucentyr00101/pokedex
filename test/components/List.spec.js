import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import List from '@/components/list'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('_Index.vue', () => {
  let pokemonModule
  let store
  beforeEach(() => {
    pokemonModule = {
      namespaced: true,
      getters: {
        list: () => [],
        busyList: () => false
      },
      actions: {
        fetchList: jest.fn()
      }
    }
    store = new Vuex.Store({
      modules: {
        pokemon: pokemonModule
      }
    })
  })
  test('is a Vue instance', () => {
    const wrapper = shallowMount(List, {
      store,
      localVue,
      stubs: ['b-card-group', 'b-form-group', 'b-container', 'b-col', 'b-row', 'b-button']
    })
    expect(wrapper).toBeTruthy()
  })
})
