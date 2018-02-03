import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations } from './mutations'
import { getters } from './getters'
import { actions } from './actions'
import MyModule from './modules/myModule'
import Login from './modules/Login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    admission: MyModule,
    album: MyModule,
    banner: MyModule,
    content: MyModule,
    eventHighlight: MyModule,
    member: MyModule,
    navigation: MyModule,
    news: MyModule,
    user: MyModule,
    video: MyModule,
    login: Login
  },
  state,
  mutations,
  getters,
  actions,
  strict: true
})
