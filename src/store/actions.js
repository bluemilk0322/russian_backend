import { types } from './mutations_types'

export const actions = {
  saveStatus ({ commit, state, dispatch }) {
    localStorage.setItem('login_status', JSON.stringify(state.login))
  },
  loadStatus ({ commit, state, dispatch }) {
    const status = JSON.parse(localStorage.getItem('login_status'))
    commit(types.UPDATE_LOGIN_STATUS, status)
  },
  loginAction ({ commit, state, dispatch }, { account, password }) {
    const accountMatched = account === 'admin'
    const passwordMatched = password === 'admin1234'
    if (accountMatched && passwordMatched) {
      const status = {
        session: 'logined',
        user: 'admin'
      }
      commit(types.UPDATE_LOGIN_STATUS, status)
      dispatch('saveStatus')
    }
  },
  logoutAction ({ commit, state, dispatch }) {
    const status = {
      session: 'failed',
      user: ''
    }
    commit(types.UPDATE_LOGIN_STATUS, status)
    dispatch('saveStatus')
  }
}
