export default {
  state: () => ({
    list: {
      data: [],
      meta: {}
    },
    busyList: false
  }),
  getters: {
    list: state => state.list,
    busyList: state => state.busyList
  },
  mutations: {
    setList (state, { list, next }) {
      state.list.data = list
      state.list.meta = next
    },
    setBusyList (state, payload) {
      state.busyList = payload
    }
  },
  actions: {
    async fetchList ({ commit }, payload) {
      commit('setBusyList', true)
      try {
        const { results, next } = await this.$axios.$get('/pokemon')
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
    }
  }
}
