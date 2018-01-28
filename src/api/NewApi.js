import { api } from '.'

const ApiPlugin = {
  install (Vue, options) {
    Vue.api = api
  }
}

export default ApiPlugin
