import { types } from './mutations_types'

export const state = {
  staff: []
}

export const mutations = {
  [types.UPDATE_STAFF_DATA] (state, data) {
    state.staff = data
  }
}
