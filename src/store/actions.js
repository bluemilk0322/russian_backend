import { types } from './mutations_types'
import { api } from '../api'

export const actions = {
  initData ({ commit, state, dispatch }) {
    api.navigation.get().then(data => {
      commit(types.UPDATE_NAVIGATION_DATA, data)
    })

    api.slider.get().then(data => {
      commit(types.UPDATE_SLIDER_DATA, data)
    })

    api.banner.get().then(data => {
      commit(types.UPDATE_BANNER_DATA, data)
    })

    api.member.get().then(data => {
      commit(types.UPDATE_MEMBER_DATA, data)
    })

    api.content.get().then(data => {
      commit(types.UPDATE_CONTENT_DATA, data)
    })

    api.admission.get().then(data => {
      commit(types.UPDATE_ADMISSION_DATA, data)
    })
  },
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
