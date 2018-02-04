export default {
  namespaced: true,
  state () {
    return {
      data: {},
      currentEdit: {
        teaching_excellence_id: null,
        title: null,
        year: null,
        content: null
      }
    }
  },
  mutations: {
    update (state, data) {
      state.data = data
    },
    edit (state, { teaching_excellence_id, title, year, content }) {
      state.currentEdit = { teaching_excellence_id, title, year, content }
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
    async edit ({ commit, state }, { teaching_excellence_id, title, year, content }) {
      commit('edit', await { teaching_excellence_id, title, year, content })
    }
  }
}
