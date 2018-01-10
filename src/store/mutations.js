import { types } from './mutations_types'

export const state = {
  navigation: [],
  slider: [],
  banner: [],
  member: [{
    name: 'test1',
    member_id: 123
  }],
  content: [],
  admission: []
}

export const mutations = {
  [types.UPDATE_NAVIGATION_DATA] (state, data) {
    state.navigation = data
  },
  [types.UPDATE_SLIDER_DATA] (state, data) {
    state.slider = data
  },
  [types.UPDATE_MEMBER_DATA] (state, data) {
    state.member = data
  },
  [types.UPDATE_BANNER_DATA] (state, data) {
    state.banner = data
  },
  [types.UPDATE_ADMISSION_DATA] (state, data) {
    state.admission = data
  },
  [types.UPDATE_CONTENT_DATA] (state, data) {
    state.content = data
  }
}
