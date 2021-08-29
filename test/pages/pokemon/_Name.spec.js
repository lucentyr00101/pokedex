import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Pokemon from '@/pages/pokemon/_name'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const routes = [
  { path: '/pokemon/:name', name: 'pokemon-name', component: Pokemon }
]
const router = new VueRouter({ routes })
router.push({ name: 'pokemon-name', params: { name: 'bulbasaur' } })

describe('_Name.vue', () => {
  let pokemonModule
  let store
  beforeEach(() => {
    pokemonModule = {
      namespaced: true,
      getters: {
        pokemon: () => ({ strsweaks: {} }),
        busy: () => false
      },
      actions: {
        fetchPokemon: jest.fn()
      }
    }
    store = new Vuex.Store({
      modules: {
        pokemon: pokemonModule
      }
    })
  })
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Pokemon, {
      store,
      localVue,
      router,
      stubs: ['b-col', 'b-row', 'b-container', 'b-overlay']
    })
    expect(wrapper).toBeTruthy()
  })
})
