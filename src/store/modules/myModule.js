export default {
  namespaced: true,
  state () {
    return {
      data: [],
      currentEdit: {}
    }
  },
  mutations: {
    update (state, data) {
      state.data = data
    },
    edit (state, data) {
      state.currentEdit = data
    }
  },
  actions: {
    async update ({ commit, state }, api) {
      await api.get().then(async response => {
        console.log(await response)
        if (await response.data.data) {
          const data = await response.data.data
          commit('update', await data)
        }
        else if (await response.data) {
          const data = await response.data
          commit('update', await data)
        }
      })
    },
    async edit ({ commit }, data) {
      commit('edit', await data)
    }
  }
}
