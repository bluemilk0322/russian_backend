import { types } from './mutations_types'

export const state = {
  lang: 'tw'
}

export const mutations = {
  [types.UPDATE_LOGIN_STATUS] (state, loginStatus) {
    state.login = loginStatus
  },
  ['switchLang'] (state, lang) {
    state.lang = lang
  }
}
