import { types } from './mutations_types'
import { api } from '../api'
import NewApi from '../api/NewApi'

const newApi = new NewApi()

export const actions = {
  async initData ({ commit, state, dispatch }) {

    // api.banner.get().then(data => {
    //   commit(types.UPDATE_BANNER_DATA, data)
    // })

    // api.member.get().then(data => {
    //   commit(types.UPDATE_MEMBER_DATA, data)
    // })

    // api.content.get().then(data => {
    //   commit(types.UPDATE_CONTENT_DATA, data)
    // })

    // api.admission.get().then(data => {
    //   commit(types.UPDATE_ADMISSION_DATA, data)
    // })

    // api.video.get().then(data => {
    //   commit(types.UPDATE_VIDEO_DATA, data)
    // })

    // api.album.get().then(data => {
    //   commit(types.UPDATE_ALBUM_DATA, data)
    // })
  },
  saveStatus ({ commit, state, dispatch }) {
    localStorage.setItem('login_status', JSON.stringify(state.login))
  },
  loadStatus ({ commit, state, dispatch }) {
    const status = JSON.parse(localStorage.getItem('login_status'))
    commit(types.UPDATE_LOGIN_STATUS, status)
  },
  loginAction ({ commit, state, dispatch }, { account, password }) {
    const accountMatched = account === 'admin'
    const passwordMatched = password === 'admin1234'
    if (accountMatched && passwordMatched) {
      const status = {
        session: 'logined',
        user: 'admin'
      }
      commit(types.UPDATE_LOGIN_STATUS, status)
      dispatch('saveStatus')
    }
  },
  logoutAction ({ commit, state, dispatch }) {
    const status = {
      session: 'failed',
      user: ''
    }
    commit(types.UPDATE_LOGIN_STATUS, status)
    dispatch('saveStatus')
  },
  async updateChildData ({ commit, state, dispatch }, { currentRoute, data }) {
    const childAction = await currentRoute + '/update'
    dispatch(childAction, await data)
  },
  async testFunc ({ commit, state, dispatch }) {
    console.log('shit')
  }
}
