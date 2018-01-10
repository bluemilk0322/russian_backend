import { types } from './mutations_types'
import { api } from '../api'

export const actions = {
  apiTest ({ commit, state, dispatch }) {
    api.navigation.get().then(data => {
      commit(types.UPDATE_NAVIGATION_DATA, data)
    })
  }
}
