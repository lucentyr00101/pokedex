import { sentenceCase } from '@/utils/formatter'

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
    },
    clearPokemon (state) {
      state.pokemon = {}
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

        const species = await this.$axios.$get(details.species.url)
        const characteristics = species.flavor_text_entries.filter(item => item.language.name === 'en').map(characteristic => characteristic.flavor_text.replaceAll('\n', ' '))
        details.characteristics = [...new Set(characteristics)] // removes duplicates

        const { damage_relations: damage } = await this.$axios.$get(details.types[0].type.url)
        details.strsweaks = damage

        const { chain } = await this.$axios.$get(species.evolution_chain.url)
        const from = chain.species.name
        details.evolvesFrom = await this.$axios.$get(`/pokemon/${from}`)

        const evolutionNames = Object.keys(chain).reduce((arr, chainKey) => {
          if (chainKey === 'species') {
            const name = chain[chainKey].name
            arr.unshift(name)
          } else if (chainKey === 'evolves_to') {
            arr.push(chain.evolves_to[0].species.name)
            const names = chain.evolves_to[0].evolves_to.map(ev => ev.species.name)
            arr.push(...names)
          }
          return arr
        }, [])
        details.evolution = await Promise.all(evolutionNames.map(evoName => this.$axios.$get(`/pokemon/${evoName}`)))

        const abilities = await Promise.all(details.abilities.map((ability) => {
          return this.$axios.$get(ability.ability.url)
        }))
        details.abilities = abilities.map((ability) => {
          return ability.effect_entries.find(effect => effect.language.name === 'en').effect
        })

        const moves = await Promise.all(details.moves.map((move) => {
          return this.$axios.$get(move.move.url)
        }))
        details.moves = moves.map(({ effect_entries: effects, accuracy, pp, type, name, effect_chance: chance }) => {
          let effect = effects.find(effect => effect.language.name === 'en').effect
          if (chance) {
            effect = effect.replaceAll('$effect_chance', chance)
          }
          return {
            effect,
            accuracy: accuracy || 'N/A',
            pp,
            type: type.name,
            name: sentenceCase(name)
          }
        })

        details.stats = details.stats.map((stat) => {
          return {
            name: sentenceCase(stat.stat.name),
            value: stat.base_stat
          }
        })
        commit('setPokemon', details)
      } catch (e) {
        console.error('Something went wrong.')
      }
      commit('setBusy', false)
    }
  }
}
