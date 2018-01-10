import { types } from './mutations_types'

export const state = {
  navigation: []
}

export const mutations = {
  [types.UPDATE_NAVIGATION_DATA] (state, data) {
    state.navigation = data
  }
}
