import NewApi from './NewApi'

const ApiPlugin = {
  install (Vue, options) {
    Vue.prototype.$api = new NewApi()
  }
}

export default ApiPlugin
