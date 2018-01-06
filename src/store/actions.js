import { types } from './mutations_types'
import { api } from '../api'

export const actions = {
  apiTest ({ commit, state, dispatch }) {
    fetch(api.getAllStaff()).then(response => {
      response.json().then(data => {
        commit(types.UPDATE_STAFF_DATA, data)
      })
    })
  }
}
