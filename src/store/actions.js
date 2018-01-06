import { types } from './mutations_types'
import { api } from '../api'

export const actions = {
  actionFunc ({ commit, state, dispatch }, inputVar) {
    console.log(inputVar)
    commit(types.MUTATION_FUNC)
  },
  apiTest ({ commit, state, dispatch }) {
    fetch(api.getAllStaff()).then(response => {
      response.json().then(data => {
        return data
      })
    })
  }
}
