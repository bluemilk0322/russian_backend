export default {
  namespaced: true,
  state: {
    session: null,
    user: null,
    loginStatus: false
  },
  mutations: {
    updateSession (state, { session }) {
      state.session = session
    },
    updateUser (state, { user }) {
      state.user = user
    },
    updateLoginStatus (state, { loginStatus }) {
      state.loginStatus = loginStatus
    }
  },
  actions: {
    async loginAction ({ commit, dispatch }, { email, accessToken }) {
      const loginStatus = true
      const session = accessToken
      const user = email
      commit('updateSession', { session })
      commit('updateUser', { user })
      commit('updateLoginStatus', { loginStatus })
      dispatch('saveStatus')
    },
    async logoutAction ({ commit }) {
      const loginStatus = false
      localStorage.removeItem('session')
      localStorage.removeItem('user')
      commit('updateLoginStatus', { loginStatus })
    },
    async saveStatus ({ state }) {
      const session = state.session
      const user = state.user
      localStorage.setItem('session', session)
      localStorage.setItem('user', user)
    },
    async getStatus ({ commit }) {
      const session = localStorage.getItem('session')
      const user = localStorage.getItem('user')
      const loginStatus = true
      if (session && user) {
        commit('updateSession', { session })
        commit('updateUser', { user })
        commit('updateLoginStatus', { loginStatus })
        return true
      }
      return false
    }
  }
}
