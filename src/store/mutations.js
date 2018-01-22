import { types } from './mutations_types'

export const state = {
  login: {
    session: '',
    user: ''
  },
  navigation: [],
  slider: [],
  news: [],
  banner: [],
  member: [],
  content: [],
  admission: [],
  video: [],
  album: []
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
  },
  [types.UPDATE_LOGIN_STATUS] (state, loginStatus) {
    state.login = loginStatus
  },
  [types.UPDATE_NEWS_DATA] (state, data) {
    state.news = data
  },
  [types.UPDATE_VIDEO_DATA] (state, data) {
    state.video = data
  },
  [types.UPDATE_ALBUM_DATA] (state, data) {
    state.album = data
  }
}
