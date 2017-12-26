import { types } from './mutations_types'

export const actions = {
  actionFunc ({ commit, state, dispatch }, inputVar) {
    console.log(inputVar)
    commit(types.MUTATION_FUNC)
  }
}
