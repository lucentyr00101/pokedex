export default {
  state: () => ({
    list: {
      data: [],
      meta: {}
    },
    pokemon: {},
    busyList: false,
    busy: false
  }),
  getters: {
    list: state => state.list,
    busyList: state => state.busyList,
    pokemon: state => state.pokemon,
    busy: state => state.busy
  },
  mutations: {
    setPokemon (state, payload) {
      state.pokemon = payload
    },
    setBusy (state, payload) {
      state.busy = payload
    },
    setList (state, { list, next }) {
      state.list.data = [
        ...state.list.data,
        ...list
      ]
      state.list.meta.next = next
    },
    setBusyList (state, payload) {
      state.busyList = payload
    },
    clearList (state) {
      state.list.data = []
      state.list.meta = {}
    }
  },
  actions: {
    async fetchList ({ commit, state }, payload) {
      const url = state.list.meta.next || '/pokemon'
      commit('setBusyList', true)
      try {
        const { results, next } = await this.$axios.$get(url)
        const details = await Promise.all(results.map(({ url }) => {
          return this.$axios.$get(url)
        }))
        const list = results.map((result) => {
          result.details = details.find(detail => detail.name === result.name)
          return result
        })
        commit('setList', { list, next })
      } catch (e) {
        console.error('Something went wrong', e)
      }
      commit('setBusyList', false)
    },
    async fetchPokemon ({ commit }, name) {
      commit('setBusy', true)
      try {
        const details = await this.$axios.$get(`/pokemon/${name}`)

        const characteristics = await this.$axios.$get(`/characteristic/${details.id}`)
        details.descriptions = characteristics.descriptions.find(description => description.language.name === 'en').description

        const abilities = await Promise.all(details.abilities.map((ability) => {
          return this.$axios.$get(ability.ability.url)
        }))
        details.abilities = abilities.map((ability) => {
          return ability.effect_entries.find(effect => effect.language.name === 'en').effect
        })

        const moves = await Promise.all(details.moves.map((move) => {
          return this.$axios.$get(move.move.url)
        }))
        details.moves = moves.map(({ effect_entries: effects, accuracy, pp, type }) => {
          const effect = effects.find(effect => effect.language.name === 'en').effect
          return {
            effect,
            accuracy,
            pp,
            type: type.name
          }
        })
        console.log(details)
      } catch (e) {
        console.error('Something went wrong.')
      }
      commit('setBusy', false)
    }
  }
}
