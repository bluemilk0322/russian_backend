import axios from 'axios'

const root = 'http://192.168.88.204:3030/api/'

const link = {
  navigation: root + 'navigation'
}

export const api = {
  navigation: {
    get () {
      const method = {
        method: 'get',
        url: link.navigation
      }
      return axios(method).then(response => {
        return response.data
      })
    },
    create (data) {
      const method = {
        method: 'post',
        url: link.navigation,
        data: data
      }
      return axios(method).then(response => {
        return response
      })
    }
  }
}
