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
  }
}
