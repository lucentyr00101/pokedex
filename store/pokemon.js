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
    }
  }
}
