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
    async loginAction ({ commit, dispatch, state }, { account, password }) {
      const testAccount = await account === 'admin'
      const testPassword = await password === 'admin1234'
      const loginStatus = await true
      console.log(testAccount && testPassword, account, password)
      if (testAccount && testPassword) {
        const session = await 'session'
        const user = await account
        commit('updateSession', await { session })
        commit('updateUser', await { user })
        commit('updateLoginStatus', await { loginStatus })
        dispatch('saveStatus')

        setTimeout(async () => {
          // commit('updateLoginStatus', await { loginStatus })
          return await true
        }, 1000)

      }
      return await false
    },
    async logoutAction ({ commit, dispatch, state }) {
      const loginStatus = await false
      localStorage.removeItem('session')
      localStorage.removeItem('user')
      commit('updateLoginStatus', await { loginStatus })
    },
    async saveStatus ({ commit, dispatch, state }) {
      const session = await state.session
      const user = await state.user
      localStorage.setItem('session', await session)
      localStorage.setItem('user', await user)
    },
    async getStatus ({ commit, dispatch, state }) {
      const session = await localStorage.getItem('session')
      const user = await localStorage.getItem('user')
      const loginStatus = await true
      console.log('getStatus', session, user, session && user)
      if (session && user) {
        commit('updateSession', await { session })
        commit('updateUser', await { user })
        commit('updateLoginStatus', await { loginStatus })
        return await true
      }
      return await false
    }
  }
}
